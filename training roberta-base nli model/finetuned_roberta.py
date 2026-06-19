import os
import pandas as pd
import numpy as np
import torch

from datasets import Dataset

from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification,
    TrainingArguments,
    Trainer,
    DataCollatorWithPadding
)

from sklearn.model_selection import train_test_split
from sklearn.metrics import (
    accuracy_score,
    f1_score,
    classification_report
)
from sklearn.utils.class_weight import compute_class_weight
from torch.nn import CrossEntropyLoss

# =====================================================
# GPU CHECK
# =====================================================

print("Torch:", torch.__version__)
print("CUDA available:", torch.cuda.is_available())

if torch.cuda.is_available():
    print("GPU:", torch.cuda.get_device_name(0))
    device = torch.device("cuda")
else:
    device = torch.device("cpu")

# =====================================================
# LOAD DATA
# =====================================================

df = pd.read_csv(
    "training gpt2 model/SD_0_All Utterances1.csv"
)

# Keep student utterances only
df = df[df["Turn"] == "[S]"]

# Remove empty rows
df["Utterances (W/o comments)"] = (
    df["Utterances (W/o comments)"]
    .fillna("")
    .astype(str)
)

df = df[
    df["Utterances (W/o comments)"]
    .str.strip() != ""
]

# =====================================================
# SPEAKER LEVEL DOCUMENTS
# =====================================================

speaker_docs = (
    df.groupby("Speaker Code")
      .agg({
          "Utterances (W/o comments)": lambda x: " ".join(x),
          "Region": "first"
      })
      .reset_index()
)

# Keep only specified regions/countries
allowed_regions = ["CHN", "JPN", "KOR", "PHL", "PAK", "THA", "IDN"]
speaker_docs = speaker_docs[speaker_docs["Region"].isin(allowed_regions)].reset_index(drop=True)


print("\nSpeakers:", len(speaker_docs))

print("\nRegion Distribution:")
print(speaker_docs["Region"].value_counts())

# =====================================================
# LABELS
# =====================================================

labels = sorted(
    speaker_docs["Region"].unique()
)

label2id = {
    label: i
    for i, label in enumerate(labels)
}

id2label = {
    i: label
    for label, i in label2id.items()
}

speaker_docs["label"] = (
    speaker_docs["Region"]
    .map(label2id)
)

# =====================================================
# TRAIN TEST SPLIT
# =====================================================

train_df, test_df = train_test_split(
    speaker_docs,
    test_size=0.20,
    random_state=42,
    stratify=speaker_docs["label"]
)

# =====================================================
# CLASS WEIGHTS
# =====================================================

class_weights = compute_class_weight(
    class_weight="balanced",
    classes=np.unique(train_df["label"]),
    y=train_df["label"]
)

class_weights = torch.tensor(
    class_weights,
    dtype=torch.float
)

print("\nClass Weights:")
print(class_weights)

# =====================================================
# HF DATASETS
# =====================================================

train_ds = Dataset.from_pandas(train_df)
test_ds = Dataset.from_pandas(test_df)

# =====================================================
# TOKENIZER
# =====================================================

MODEL_NAME = "roberta-base"

tokenizer = AutoTokenizer.from_pretrained(
    MODEL_NAME
)

MAX_LENGTH = 512

def tokenize(batch):
    return tokenizer(
        batch["Utterances (W/o comments)"],
        truncation=True,
        max_length=MAX_LENGTH
    )

train_ds = train_ds.map(
    tokenize,
    batched=True
)

test_ds = test_ds.map(
    tokenize,
    batched=True
)

# =====================================================
# REMOVE UNUSED COLUMNS
# =====================================================

keep_cols = [
    "input_ids",
    "attention_mask",
    "label"
]

train_ds = train_ds.remove_columns(
    [c for c in train_ds.column_names if c not in keep_cols]
)

test_ds = test_ds.remove_columns(
    [c for c in test_ds.column_names if c not in keep_cols]
)

# =====================================================
# DATA COLLATOR
# =====================================================

data_collator = DataCollatorWithPadding(
    tokenizer=tokenizer
)

# =====================================================
# MODEL
# =====================================================

model = AutoModelForSequenceClassification.from_pretrained(
    MODEL_NAME,
    num_labels=len(labels),
    id2label=id2label,
    label2id=label2id
)

model.to(device)

print("\nModel device:")
print(next(model.parameters()).device)

# =====================================================
# METRICS
# =====================================================

def compute_metrics(eval_pred):

    logits, labels_true = eval_pred

    preds = np.argmax(
        logits,
        axis=1
    )

    return {
        "accuracy": accuracy_score(
            labels_true,
            preds
        ),
        "weighted_f1": f1_score(
            labels_true,
            preds,
            average="weighted"
        )
    }

# =====================================================
# WEIGHTED TRAINER
# =====================================================

class WeightedTrainer(Trainer):

    def compute_loss(
        self,
        model,
        inputs,
        return_outputs=False,
        **kwargs
    ):

        labels = inputs.pop("labels")

        outputs = model(**inputs)

        logits = outputs.logits

        loss_fct = CrossEntropyLoss(
            weight=class_weights.to(
                logits.device
            )
        )

        loss = loss_fct(
            logits.view(
                -1,
                model.config.num_labels
            ),
            labels.view(-1)
        )

        return (
            (loss, outputs)
            if return_outputs
            else loss
        )

# =====================================================
# TRAINING ARGS
# =====================================================

training_args = TrainingArguments(
    output_dir="./nli_model",

    eval_strategy="epoch",

    # IMPORTANT
    save_strategy="no",

    learning_rate=1e-5,

    per_device_train_batch_size=4,
    per_device_eval_batch_size=4,

    num_train_epochs=10,

    weight_decay=0.01,

    logging_steps=5,

    fp16=torch.cuda.is_available(),

    report_to=[]
)

# =====================================================
# TRAINER
# =====================================================

trainer = WeightedTrainer(
    model=model,
    args=training_args,
    train_dataset=train_ds,
    eval_dataset=test_ds,
    data_collator=data_collator,
    compute_metrics=compute_metrics
)

# =====================================================
# TRAIN
# =====================================================

print("\nStarting training...\n")

trainer.train()

# =====================================================
# EVALUATE
# =====================================================

results = trainer.evaluate()

print("\nFinal Results")
print(results)

# =====================================================
# CLASSIFICATION REPORT
# =====================================================

preds = trainer.predict(test_ds)

y_pred = np.argmax(
    preds.predictions,
    axis=1
)

print("\nClassification Report:\n")

print(
    classification_report(
        preds.label_ids,
        y_pred,
        target_names=labels
    )
)

# =====================================================
# SAVE MODEL
# =====================================================
                          
SAVE_DIR = "roberta_region_classifier"

os.makedirs(SAVE_DIR, exist_ok=True)

model.save_pretrained(
    SAVE_DIR,
    safe_serialization=False
)

tokenizer.save_pretrained(SAVE_DIR)

print("Saved to:")
print(os.path.abspath(SAVE_DIR))
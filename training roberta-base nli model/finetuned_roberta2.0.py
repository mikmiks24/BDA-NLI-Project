"""
Native Language Identification (NLI)
Fine-tuning RoBERTa-base on spoken dialogue utterances
Regions: PHL, THA, CHN, JPN, KOR, PAK, IDN
"""

import re
import numpy as np
import pandas as pd
from collections import Counter
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix

import torch
from torch.nn import CrossEntropyLoss
from torch.utils.data import Dataset
from transformers import (
    RobertaTokenizer,
    RobertaForSequenceClassification,
    Trainer,
    TrainingArguments,
    EarlyStoppingCallback,
)
import evaluate

# ─────────────────────────────────────────────
# CONFIG
# ─────────────────────────────────────────────

CSV_PATH        = "student_turns_selected_regions.csv"
TEXT_COL        = "Utterances (W/o comments)"
LABEL_COL       = "Region"
MODEL_NAME      = "roberta-base"
OUTPUT_DIR      = "./roberta_nli_output"
MAX_LENGTH      = 128
BATCH_SIZE      = 16
EPOCHS          = 5
LEARNING_RATE   = 2e-5
SEED            = 42

LABEL_MAP = {
    "PHL": 0,
    "THA": 1,
    "CHN": 2,
    "JPN": 3,
    "KOR": 4,
    "PAK": 5,
    "IDN": 6,
}
ID2LABEL = {v: k for k, v in LABEL_MAP.items()}


# ─────────────────────────────────────────────
# 1. PREPROCESSING
# ─────────────────────────────────────────────

def clean_utterance(text: str) -> str:
    """
    Clean spoken dialogue transcription artifacts.
    - Removes inline markers: [laugh], (unclear), <breath>
    - Strips leading/trailing whitespace
    - Normalizes internal whitespace
    """
    if not isinstance(text, str):
        return ""
    text = re.sub(r'\[.*?\]', '', text)     # [laugh], [pause], [noise]
    text = re.sub(r'\(.*?\)', '', text)     # (inaudible), (unclear)
    text = re.sub(r'<.*?>', '', text)       # <breath>, <cough>
    text = re.sub(r'\s+', ' ', text)       # normalize whitespace
    return text.strip()


def preprocess(df: pd.DataFrame) -> pd.DataFrame:
    print("── Preprocessing ──────────────────────────")

    # Strip whitespace from Turn column to fix inconsistent spacing e.g. "[S] "
    df["Turn"] = df["Turn"].str.strip()

    # Keep only speaker turns
    df = df[df["Turn"] == "[S]"]

    # Strip and uppercase Region to fix inconsistent formatting
    df[LABEL_COL] = df[LABEL_COL].str.strip().str.upper()

    # Keep only target regions
    df = df[df[LABEL_COL].isin(LABEL_MAP.keys())]

    # Clean utterance text
    df[TEXT_COL] = df[TEXT_COL].apply(clean_utterance)

    # Drop rows with empty text after cleaning
    before = len(df)
    df = df[df[TEXT_COL].str.strip().astype(bool)]
    print(f"  Removed {before - len(df)} empty rows after cleaning")

    # Drop utterances shorter than 5 words (insufficient L1 signal)
    before = len(df)
    df = df[df[TEXT_COL].str.split().str.len() >= 5]
    print(f"  Removed {before - len(df)} rows with fewer than 5 words")

    # Remove exact duplicates
    before = len(df)
    df = df.drop_duplicates(subset=[TEXT_COL])
    print(f"  Removed {before - len(df)} duplicate utterances")

    # Encode labels
    df["label"] = df[LABEL_COL].map(LABEL_MAP)
    df = df.dropna(subset=["label"])
    df["label"] = df["label"].astype(int)

    print(f"\n  Dataset size before balancing: {len(df)} rows")
    print("\n  Label distribution (before balancing):")
    print(df[LABEL_COL].value_counts().to_string())

    return df


# ─────────────────────────────────────────────
# 2. BALANCING — Oversample minority classes
# ─────────────────────────────────────────────

def balance_dataset(df: pd.DataFrame) -> pd.DataFrame:
    print("\n── Balancing Dataset ──────────────────────")

    max_count = df[LABEL_COL].value_counts().max()

    # Oversample each region individually to avoid pandas groupby index issues
    frames = []
    for region in LABEL_MAP.keys():
        region_df = df[df[LABEL_COL] == region]
        if len(region_df) == 0:
            print(f"  WARNING: No samples found for {region}, skipping.")
            continue
        sampled = region_df.sample(max_count, replace=True, random_state=SEED)
        frames.append(sampled)

    balanced_df = pd.concat(frames, ignore_index=True)

    # Shuffle
    balanced_df = balanced_df.sample(
        frac=1, random_state=SEED
    ).reset_index(drop=True)

    print(f"  Oversampled all regions to: {max_count} samples each")
    print(f"  Total dataset size after balancing: {len(balanced_df)} rows")
    print("\n  Label distribution (after balancing):")
    print(balanced_df[LABEL_COL].value_counts().to_string())
    print("───────────────────────────────────────────\n")

    return balanced_df


# ─────────────────────────────────────────────
# 3. DATASET CLASS
# ─────────────────────────────────────────────

class NLIDataset(Dataset):
    def __init__(self, texts, labels, tokenizer, max_length):
        self.encodings = tokenizer(
            texts,
            padding="max_length",
            truncation=True,
            max_length=max_length,
            return_tensors="pt",
        )
        self.labels = torch.tensor(labels, dtype=torch.long)

    def __len__(self):
        return len(self.labels)

    def __getitem__(self, idx):
        return {
            "input_ids":      self.encodings["input_ids"][idx],
            "attention_mask": self.encodings["attention_mask"][idx],
            "labels":         self.labels[idx],
        }


# ─────────────────────────────────────────────
# 4. WEIGHTED TRAINER
# ─────────────────────────────────────────────

def build_class_weights(train_labels: list, device) -> torch.Tensor:
    """
    Compute inverse-frequency class weights as a safety net
    alongside oversampling. Ensures any residual imbalance
    in the training split is further corrected.
    """
    label_counts = Counter(train_labels)
    total = sum(label_counts.values())
    weights = torch.tensor([
        total / (len(LABEL_MAP) * label_counts[i])
        for i in range(len(LABEL_MAP))
    ], dtype=torch.float).to(device)

    print("── Class Weights ───────────────────────────")
    for region, idx in LABEL_MAP.items():
        print(f"  {region}: {weights[idx]:.4f}")
    print("───────────────────────────────────────────\n")

    return weights


class WeightedTrainer(Trainer):
    def __init__(self, class_weights, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.class_weights = class_weights

    def compute_loss(self, model, inputs, return_outputs=False, **kwargs):
        labels = inputs.pop("labels")
        outputs = model(**inputs)
        logits = outputs.logits
        loss_fn = CrossEntropyLoss(
            weight=self.class_weights.to(logits.device)
        )
        loss = loss_fn(logits, labels)
        return (loss, outputs) if return_outputs else loss


# ─────────────────────────────────────────────
# 5. METRICS
# ─────────────────────────────────────────────

accuracy_metric = evaluate.load("accuracy")

def compute_metrics(eval_pred):
    logits, labels = eval_pred
    predictions = np.argmax(logits, axis=-1)
    return accuracy_metric.compute(
        predictions=predictions,
        references=labels,
    )


# ─────────────────────────────────────────────
# 6. MAIN TRAINING PIPELINE
# ─────────────────────────────────────────────

def main():
    torch.manual_seed(SEED)

    # ── Load & Preprocess ─────────────────────
    print("Loading dataset...")
    df = pd.read_csv(CSV_PATH)
    df = preprocess(df)

    # ── Split (on balanced data) ──────────────
    # Note: test set is taken from ORIGINAL unbalanced data
    # to reflect real-world distribution
    train_val_df, test_df = train_test_split(
        df,                         # original distribution for test
        test_size=0.1,
        stratify=df["label"],
        random_state=SEED,
    )

    # Balance only the train+val portion
    balanced_train_val = balance_dataset(train_val_df)

    train_df, val_df = train_test_split(
        balanced_train_val,
        test_size=0.1,
        stratify=balanced_train_val["label"],
        random_state=SEED,
    )

    print(f"Split → Train: {len(train_df)} | Val: {len(val_df)} | Test: {len(test_df)}")
    print(f"  (Test set uses original distribution for realistic evaluation)\n")

    # ── Tokenizer ─────────────────────────────
    print("Loading tokenizer...")
    tokenizer = RobertaTokenizer.from_pretrained(MODEL_NAME)

    train_dataset = NLIDataset(
        train_df[TEXT_COL].tolist(),
        train_df["label"].tolist(),
        tokenizer, MAX_LENGTH,
    )
    val_dataset = NLIDataset(
        val_df[TEXT_COL].tolist(),
        val_df["label"].tolist(),
        tokenizer, MAX_LENGTH,
    )
    test_dataset = NLIDataset(
        test_df[TEXT_COL].tolist(),
        test_df["label"].tolist(),
        tokenizer, MAX_LENGTH,
    )

    # ── Model ─────────────────────────────────
    print("Loading RoBERTa-base model...")
    model = RobertaForSequenceClassification.from_pretrained(
        MODEL_NAME,
        num_labels=len(LABEL_MAP),
        id2label=ID2LABEL,
        label2id=LABEL_MAP,
    )

    # ── Class Weights ─────────────────────────
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    class_weights = build_class_weights(train_df["label"].tolist(), device)

    # ── Training Arguments ────────────────────
    training_args = TrainingArguments(
        output_dir=OUTPUT_DIR,
        num_train_epochs=EPOCHS,
        per_device_train_batch_size=BATCH_SIZE,
        per_device_eval_batch_size=BATCH_SIZE,
        learning_rate=LEARNING_RATE,
        warmup_ratio=0.1,
        weight_decay=0.01,
        eval_strategy="epoch",
        save_strategy="epoch",
        load_best_model_at_end=True,
        metric_for_best_model="accuracy",
        greater_is_better=True,
        logging_dir=f"{OUTPUT_DIR}/logs",
        logging_steps=50,
        seed=SEED,
        report_to="none",
    )

    # ── Trainer ───────────────────────────────
    trainer = WeightedTrainer(
        class_weights=class_weights,
        model=model,
        args=training_args,
        train_dataset=train_dataset,
        eval_dataset=val_dataset,
        processing_class=tokenizer,
        compute_metrics=compute_metrics,
        callbacks=[EarlyStoppingCallback(early_stopping_patience=2)],
    )

    # ── Train ─────────────────────────────────
    print("Starting fine-tuning...\n")
    trainer.train()

    # ── Evaluate on Test Set ──────────────────
    print("\n── Test Set Evaluation ─────────────────────")
    predictions = trainer.predict(test_dataset)
    preds = np.argmax(predictions.predictions, axis=-1)
    true_labels = test_df["label"].tolist()

    print(classification_report(
        true_labels,
        preds,
        target_names=list(LABEL_MAP.keys()),
    ))

    print("Confusion Matrix:")
    print(confusion_matrix(true_labels, preds))

    # ── Save ──────────────────────────────────
    print(f"\nSaving model to {OUTPUT_DIR}/final_model")
    trainer.save_model(f"{OUTPUT_DIR}/final_model")
    tokenizer.save_pretrained(f"{OUTPUT_DIR}/final_model")
    print("Done.")


if __name__ == "__main__":
    main()
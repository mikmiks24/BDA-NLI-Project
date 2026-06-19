import os
import io
import sys
import logging
import tempfile
import subprocess

# ─────────────────────────────────────────────
# DEEPGRAM CONFIGURATION
# ─────────────────────────────────────────────
DEEPGRAM_API_KEY = "4ed7bab387e9412961240534bb18374e5dc08eb4"


# Suppress HuggingFace telemetry and hub up
os.environ["TRANSFORMERS_VERBOSITY"] = "error"
os.environ["HF_HUB_DISABLE_TELEMETRY"] = "1"
os.environ["HF_HUB_OFFLINE"] = "1"
os.environ["TOKENIZERS_PARALLELISM"] = "false"

# Add ffmpeg to PATH (same path used in kiosk_microphone.py)
FFMPEG_PATH = r"C:\Users\asus\Downloads\ffmpeg-8.1.1-essentials_build\ffmpeg-8.1.1-essentials_build\bin"
if os.path.exists(FFMPEG_PATH):
    os.environ["PATH"] = FFMPEG_PATH + os.pathsep + os.environ.get("PATH", "")

# Limit BLAS/OpenMP thread usage to reduce memory pressure on startup
os.environ["OMP_NUM_THREADS"] = "1"
os.environ["OPENBLAS_NUM_THREADS"] = "1"
os.environ["MKL_NUM_THREADS"] = "1"
os.environ["VECLIB_MAXIMUM_THREADS"] = "1"
os.environ["NUMEXPR_NUM_THREADS"] = "1"

#bading si Mika since Birth 
import numpy as np
import joblib
import torch
import librosa

from fastapi import FastAPI, HTTPException, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import HubertModel, Wav2Vec2FeatureExtractor, AutoTokenizer, AutoModelForSequenceClassification
from deepgram import DeepgramClient

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI(title="NLI Kiosk - HuBERT MLP Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─────────────────────────────────────────────
# LABEL MAPS (matches training labels)
# ─────────────────────────────────────────────
INT_TO_LABEL = {
    0: "CHN",
    1: "JPN",
    2: "KOR",
    3: "IDN",
    4: "THA",
    5: "PAK",
    6: "PHL"
}

LANG_META = {
    "PHL": {
        "name": "Tagalog / Filipino",
        "nativeName": "Tagalog",
        "flag": "🇵🇭",
        "code": "tl",
        "greeting": "Kumusta! Paano kita matutulungan ngayon?",
        "choices": [
            {"code": "tl",    "name": "Tagalog",           "nativeName": "Tagalog (Filipino)",    "flag": "🇵🇭", "desc": "Pambansang wika ng Pilipinas"},
            {"code": "en-PH", "name": "Philippine English", "nativeName": "English (Philippines)", "flag": "🇵🇭", "desc": "Filipino local English standard"},
            {"code": "ceb",   "name": "Cebuano",           "nativeName": "Cebuano (Bisaya)",      "flag": "🇵🇭", "desc": "Katutubong wika sa Kabisayaan"}
        ]
    },
    "CHN": {
        "name": "Chinese",
        "nativeName": "中文",
        "flag": "🇨🇳",
        "code": "zh",
        "greeting": "您好！今天有什么可以帮您的？",
        "choices": [
            {"code": "zh",    "name": "Simplified Chinese",         "nativeName": "简体中文",       "flag": "🇨🇳", "desc": "中国大陆标准普通话"},
            {"code": "zh-HK", "name": "Traditional Chinese (HK)",   "nativeName": "繁體中文 (香港)", "flag": "🇭🇰", "desc": "香港繁體粵語/國語"},
            {"code": "zh-TW", "name": "Traditional Chinese (Taiwan)","nativeName": "繁體中文 (台灣)", "flag": "🇹🇼", "desc": "台灣標準國語"}
        ]
    },
    "JPN": {
        "name": "Japanese",
        "nativeName": "日本語",
        "flag": "🇯🇵",
        "code": "ja",
        "greeting": "こんにちは！何かお手伝いできますか？",
        "choices": [
            {"code": "ja",         "name": "Japanese",         "nativeName": "日本語 (標準語)", "flag": "🇯🇵", "desc": "日本語標準語"},
            {"code": "ja-Kansai",  "name": "Japanese (Kansai)","nativeName": "日本語 (関西弁)", "flag": "🇯🇵", "desc": "関西地方の表現"}
        ]
    },
    "KOR": {
        "name": "Korean",
        "nativeName": "한국어",
        "flag": "🇰🇷",
        "code": "ko",
        "greeting": "안녕하세요! 어떻게 도와드릴까요?",
        "choices": [
            {"code": "ko",    "name": "Korean (Standard)", "nativeName": "한국어 표준어",   "flag": "🇰🇷", "desc": "대한민국 표준 한국어"},
            {"code": "ko-KR", "name": "Korean (Casual)",   "nativeName": "한국어 (구어체)", "flag": "🇰🇷", "desc": "한국어 대화체 서비스"}
        ]
    },
    "IDN": {
        "name": "Indonesian",
        "nativeName": "Bahasa Indonesia",
        "flag": "🇮🇩",
        "code": "id",
        "greeting": "Halo! Ada yang bisa saya bantu hari ini?",
        "choices": [
            {"code": "id", "name": "Indonesian", "nativeName": "Bahasa Indonesia", "flag": "🇮🇩", "desc": "Bahasa persatuan Indonesia"},
            {"code": "ms", "name": "Malay",      "nativeName": "Bahasa Melayu",   "flag": "🇲🇾", "desc": "Bahasa Melayu Malaysia/Singapura"}
        ]
    },
    "THA": {
        "name": "Thai",
        "nativeName": "ไทย",
        "flag": "🇹🇭",
        "code": "th",
        "greeting": "สวัสดีค่ะ! มีอะไรให้ฉันช่วยเหลือไหมคะ?",
        "choices": [
            {"code": "th",      "name": "Thai",        "nativeName": "ไทย (กลาง)", "flag": "🇹🇭", "desc": "ภาษาราชการของประเทศไทย"},
            {"code": "th-Isan", "name": "Thai (Isan)", "nativeName": "ไทย (อีสาน)","flag": "🇹🇭", "desc": "ภาษาถิ่นภาคตะวันออกเฉียงเหนือ"}
        ]
    },
    "PAK": {
        "name": "Urdu",
        "nativeName": "اردو",
        "flag": "🇵🇰",
        "code": "ur",
        "greeting": "ہیلو! میں آپ کی کیا مدد کر سکتا ہوں؟",
        "choices": [
            {"code": "ur",    "name": "Urdu",          "nativeName": "اردو (پاکستان)", "flag": "🇵🇰", "desc": "پاکستان کی قومی زبان"},
            {"code": "ur-IN", "name": "Urdu (India)",  "nativeName": "اردو (بھارت)",   "flag": "🇮🇳", "desc": "ہندوستان میں بولی جانے والی اردو"},
            {"code": "pa",    "name": "Punjabi",        "nativeName": "پنجابی",         "flag": "🇵🇰", "desc": "پنجابی علاقائی زبان"}
        ]
    }
}

SAMPLE_RATE = 16000
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# ─────────────────────────────────────────────
# LOAD HuBERT + MLP + SCALER
# ─────────────────────────────────────────────
logger.info(f"Loading models on device: {DEVICE}")

logger.info("Step 1/4: Loading feature extractor...")
feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(
    "facebook/hubert-base-ls960",
    local_files_only=False
)
logger.info("Step 2/4: Loading HuBERT model...")
hubert = HubertModel.from_pretrained(
    "facebook/hubert-base-ls960",
    local_files_only=False,
    low_cpu_mem_usage=True
).to(DEVICE)
hubert.eval()
logger.info("Step 3/4: Loading MLP classifier...")
clf    = joblib.load(os.path.join(BASE_DIR, "l1_hubert_svm.pkl"))
logger.info("Step 4/4: Loading scaler...")
scaler = joblib.load(os.path.join(BASE_DIR, "scaler.pkl"))

logger.info("Step 5/5: Loading RoBERTa model and tokenizer...")
roberta_model_dir = os.path.join(BASE_DIR, "nli_roberta_model_weighted")
roberta_tokenizer = AutoTokenizer.from_pretrained(roberta_model_dir)
roberta_model = AutoModelForSequenceClassification.from_pretrained(
    roberta_model_dir,
    low_cpu_mem_usage=True
).to(DEVICE)
roberta_model.eval()

logger.info("✅ All models loaded. Starting server...")

# ─────────────────────────────────────────────
# FEATURE EXTRACTION
# ─────────────────────────────────────────────
def convert_to_wav(audio_bytes: bytes) -> bytes:
    """
    Convert any browser audio format (webm, ogg, mp4) → 16kHz mono WAV
    using ffmpeg subprocess. Returns WAV bytes.
    """
    with tempfile.NamedTemporaryFile(suffix='.webm', delete=False) as tmp_in:
        tmp_in.write(audio_bytes)
        tmp_in_path = tmp_in.name

    tmp_out_path = tmp_in_path.replace('.webm', '.wav')

    try:
        result = subprocess.run(
            [
                'ffmpeg', '-y',
                '-i', tmp_in_path,
                '-ar', str(SAMPLE_RATE),  # 16000 Hz
                '-ac', '1',               # mono
                '-f', 'wav',
                tmp_out_path
            ],
            capture_output=True,
            timeout=30
        )
        if result.returncode != 0:
            err = result.stderr.decode('utf-8', errors='ignore')
            raise RuntimeError(f"ffmpeg failed: {err[-300:]}")

        with open(tmp_out_path, 'rb') as f:
            wav_bytes = f.read()
        return wav_bytes

    finally:
        # Cleanup temp files
        for path in [tmp_in_path, tmp_out_path]:
            try:
                if os.path.exists(path):
                    os.remove(path)
            except Exception:
                pass


def extract_embedding(audio_bytes: bytes) -> np.ndarray:
    """
    Convert browser audio (WebM/OGG/etc.) → WAV → HuBERT 768-dim embedding.
    """
    # Convert webm → wav using ffmpeg
    wav_bytes = convert_to_wav(audio_bytes)

    # Load WAV from bytes with librosa
    audio, sr = librosa.load(io.BytesIO(wav_bytes), sr=SAMPLE_RATE, mono=True)

    if len(audio) < SAMPLE_RATE:  # Less than 1 second
        raise ValueError("Recording too short. Please speak for at least 2 seconds.")

    inputs = feature_extractor(
        audio,
        sampling_rate=SAMPLE_RATE,
        return_tensors="pt"
    )

    with torch.no_grad():
        outputs = hubert(inputs.input_values.to(DEVICE))

    # Mean-pool over time dimension → (1, 768)
    embedding = outputs.last_hidden_state.mean(dim=1).cpu().numpy()
    return embedding  # shape: (1, 768)

# ─────────────────────────────────────────────
# API ENDPOINTS
# ─────────────────────────────────────────────

@app.get("/")
async def root():
    return {
        "message": "NLI Kiosk backend is running.",
        "health": "/api/health",
        "docs": "/docs",
        "analyze_audio": "/api/analyze-audio"
    }


@app.get("/api/health")
async def health():
    return {"status": "ok", "device": DEVICE, "model": "l1_hubert_mlp"}


@app.post("/api/analyze-audio")
async def analyze_audio(audio: UploadFile = File(...)):
    """
    Accepts a WAV audio file from the browser.
    Returns L1 language prediction with probabilities.
    """
    try:
        audio_bytes = await audio.read()

        if len(audio_bytes) < 1000:
            raise HTTPException(status_code=400, detail="Audio too short. Please speak for at least 2 seconds.")

        # Extract HuBERT embedding
        emb = extract_embedding(audio_bytes)

        # Scale using the trained scaler
        emb_scaled = scaler.transform(emb)

        # Predict
        pred_idx  = clf.predict(emb_scaled)[0]
        proba     = clf.predict_proba(emb_scaled)[0]

        label = INT_TO_LABEL[pred_idx]
        meta  = LANG_META.get(label, {"name": label, "flag": "🌐", "code": "en", "greeting": "Hello!", "choices": []})

        # Build probability list sorted by confidence
        prob_list = [
            {
                "label": INT_TO_LABEL[i],
                "name":  LANG_META.get(INT_TO_LABEL[i], {}).get("name", INT_TO_LABEL[i]),
                "flag":  LANG_META.get(INT_TO_LABEL[i], {}).get("flag", "🌐"),
                "code":  LANG_META.get(INT_TO_LABEL[i], {}).get("code", "en"),
                "confidence": round(float(proba[i]) * 100, 1)
            }
            for i in range(len(proba))
        ]
        prob_list.sort(key=lambda x: x["confidence"], reverse=True)

        return {
            "detected":    label,
            "name":        meta["name"],
            "nativeName":  meta.get("nativeName", meta["name"]),
            "flag":        meta["flag"],
            "code":        meta["code"],
            "confidence":  round(float(proba[pred_idx]) * 100, 1),
            "greeting":    meta.get("greeting", "Hello!"),
            "choices":     meta.get("choices", []),
            "probabilities": prob_list
        }

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Audio analysis error: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")


class TextRequest(BaseModel):
    text: str


@app.post("/api/analyze-text")
async def analyze_text(request: TextRequest):
    """
    Accepts text input.
    Returns L1 language prediction with probabilities using the RoBERTa model.
    """
    try:
        text = request.text.strip()
        if not text:
            raise HTTPException(status_code=400, detail="Text cannot be empty.")
        
        # Tokenize and predict
        inputs = roberta_tokenizer(
            text,
            truncation=True,
            max_length=512,
            return_tensors="pt"
        ).to(DEVICE)
        
        with torch.no_grad():
            outputs = roberta_model(**inputs)
        
        # Softmax to get probabilities
        probs = torch.softmax(outputs.logits, dim=-1).squeeze().cpu().numpy()
        pred_idx = int(probs.argmax())
        
        # RoBERTa's id2label mapping
        roberta_id_to_label = roberta_model.config.id2label
        
        # Resolve the predicted label
        label = roberta_id_to_label[pred_idx]
        meta = LANG_META.get(label, {"name": label, "flag": "🌐", "code": "en", "greeting": "Hello!", "choices": []})
        
        # Build probability list sorted by confidence
        prob_list = []
        for i, prob in enumerate(probs):
            lbl = roberta_id_to_label[i]
            prob_list.append({
                "label": lbl,
                "name": LANG_META.get(lbl, {}).get("name", lbl),
                "flag": LANG_META.get(lbl, {}).get("flag", "🌐"),
                "code": LANG_META.get(lbl, {}).get("code", "en"),
                "confidence": round(float(prob) * 100, 1)
            })
        prob_list.sort(key=lambda x: x["confidence"], reverse=True)
        
        return {
            "detected": label,
            "name": meta["name"],
            "nativeName": meta.get("nativeName", meta["name"]),
            "flag": meta["flag"],
            "code": meta["code"],
            "confidence": round(float(probs[pred_idx]) * 100, 1),
            "greeting": meta.get("greeting", "Hello!"),
            "choices": meta.get("choices", []),
            "probabilities": prob_list
        }
    except Exception as e:
        logger.error(f"Text analysis error: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Text analysis failed: {str(e)}")


# ─────────────────────────────────────────────
# DEEPGRAM TRANSCRIPTION ENDPOINT
# ─────────────────────────────────────────────

# Language code → BCP-47 locale map for Deepgram
DEEPGRAM_LANG_MAP = {
    "en":    "en-US",
    "en-PH": "en-US",
    "tl":    "tl",
    "ceb":   "tl",  # Deepgram uses tl as closest proxy for Cebuano
    "zh":    "zh-CN",
    "zh-HK": "zh-TW",
    "zh-TW": "zh-TW",
    "ko":    "ko",
    "ko-KR": "ko",
    "ja":    "ja",
    "id":    "id",
    "ms":    "ms",
    "ur":    "ur",
    "th":    "th",
}

@app.post("/api/transcribe")
async def transcribe_audio(audio: UploadFile = File(...), lang: str = Form(default="en")):
    """
    Transcribes browser audio (WebM) using Deepgram Nova-2.
    Accepts 'audio' (audio file) and 'lang' (language code, e.g. 'tl', 'zh', 'en').
    Returns { transcript: str }.
    """
    try:
        audio_bytes = await audio.read()

        if len(audio_bytes) < 500:
            raise HTTPException(status_code=400, detail="Audio too short.")

        # Convert WebM → WAV for best compatibility
        wav_bytes = convert_to_wav(audio_bytes)

        # Resolve Deepgram language code
        dg_lang = DEEPGRAM_LANG_MAP.get(lang, "en-US")

        # Build Deepgram client and call REST transcribe API
        dg_client = DeepgramClient(api_key=DEEPGRAM_API_KEY)

        response = dg_client.listen.v1.media.transcribe_file(
            request=wav_bytes,
            model="nova-2",
            language=dg_lang,
            smart_format=True,
            punctuate=True,
        )

        # Extract transcript from response
        transcript = (
            response.results.channels[0].alternatives[0].transcript
            if response.results and response.results.channels
            else ""
        )

        logger.info(f"Deepgram transcript [{dg_lang}]: {transcript!r}")
        return {"transcript": transcript}

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Deepgram transcription error: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Transcription failed: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost",
                 port=8000)

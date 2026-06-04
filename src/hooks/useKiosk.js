'use client';
// src/hooks/useKiosk.js
// Uses the real HuBERT MLP model via Python FastAPI backend (http://localhost:8000)
// Flow: WELCOME → REQUEST (record audio / type text) → CHAT (translated chatbox)

import { useState, useRef, useCallback, useEffect } from 'react';
import { CHATBOT_DATABASE, getChatbotDbKey } from '../data/chatbotData';

const API_BASE = 'http://localhost:8000';

// Label → nliRules language code map (for chatbot compatibility)
const LABEL_TO_LANG = {
  CHN: 'zh', JPN: 'ja', KOR: 'ko', IDN: 'id', THA: 'th', PAK: 'ur', PHL: 'tl'
};

export default function useKiosk() {
  // --- Screens: 'WELCOME' | 'REQUEST' | 'CHAT' ---
  const [currentScreen, setCurrentScreen] = useState('WELCOME');

  // --- Language ---
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  // --- Status ---
  const [kioskStatus, setKioskStatus] = useState('ready');

  // --- Text input (shown below mic) ---
  const [inputText, setInputText] = useState('');

  // --- Voice recording state ---
  const [isListening, setIsListening] = useState(false);

  // --- Analysis results from the HuBERT API ---
  const [analysisResult, setAnalysisResult] = useState(null);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // --- Language Suggestion overlay ---
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestionData, setSuggestionData] = useState(null);

  // --- Chat ---
  const [chatMessages, setChatMessages] = useState([]);

  // --- Toast ---
  const [toast, setToast] = useState(null);

  // --- Refs ---
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const streamRef = useRef(null);

  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 6000);
  }, []);

  // ─────────────────────────────────────────────────────────────────
  // AUDIO RECORDING (MediaRecorder → sends WAV blob to API)
  // ─────────────────────────────────────────────────────────────────
  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      audioChunksRef.current = [];

      const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        // Stop all mic tracks
        stream.getTracks().forEach(t => t.stop());
        setIsListening(false);
        setKioskStatus('thinking');

        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await sendAudioToAPI(blob);
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setIsListening(true);
      setKioskStatus('listening');
      setAnalysisResult(null);
      setAnalysisComplete(false);

    } catch (err) {
      console.error('Mic error:', err);
      if (err.name === 'NotAllowedError') {
        showToast('Microphone blocked! Allow mic permissions in your browser.', 'error');
      } else {
        showToast('Could not access microphone. Try typing instead.', 'error');
      }
      setIsListening(false);
      setKioskStatus('ready');
    }
  }, []);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
  }, []);

  const toggleListening = useCallback(() => {
    if (isListening) {
      stopRecording();
    } else {
      startRecording();
    }
  }, [isListening, startRecording, stopRecording]);

  // ─────────────────────────────────────────────────────────────────
  // SEND AUDIO → HuBERT API → Get NLI prediction
  // ─────────────────────────────────────────────────────────────────
  const sendAudioToAPI = useCallback(async (blob) => {
    setKioskStatus('thinking');
    setAnalysisComplete(false);

    try {
      const formData = new FormData();
      formData.append('audio', blob, 'recording.webm');

      const response = await fetch(`${API_BASE}/api/analyze-audio`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || 'API error');
      }

      const data = await response.json();
      processAPIResult(data);

    } catch (err) {
      console.error('API call failed:', err);
      setKioskStatus('ready');
      setAnalysisComplete(false);

      if (err.message.includes('fetch') || err.message.includes('Failed')) {
        showToast('⚠️ Backend server is not running. Start main.py first!', 'error');
      } else {
        showToast(`Analysis error: ${err.message}`, 'error');
      }
    }
  }, []);

  // ─────────────────────────────────────────────────────────────────
  // PROCESS RESULT from API
  // ─────────────────────────────────────────────────────────────────
  const processAPIResult = useCallback((data) => {
    // Transform API response into the shape the UI expects
    const probabilities = (data.probabilities || []).map(p => ({
      code:       LABEL_TO_LANG[p.label] || 'en',
      label:      p.label,
      name:       p.name,
      nativeName: p.name,
      flag:       p.flag,
      confidence: p.confidence,
    }));

    const detected = data.confidence > 10 ? {
      label:      data.detected,
      code:       LABEL_TO_LANG[data.detected] || data.code || 'en',
      name:       data.name,
      nativeName: data.nativeName || data.name,
      flag:       data.flag,
      confidence: data.confidence,
      choices:    data.choices || [],
    } : null;

    const result = {
      probabilities,
      detected,
      highlightedHtml: '', // Audio model — no text highlight
      rawMatches: [],
    };

    setAnalysisResult(result);
    setAnalysisComplete(true);
    setKioskStatus('ready');

    if (detected) {
      setTimeout(() => {
        setSuggestionData({ detected, probabilities });
        setShowSuggestion(true);
        setKioskStatus('prompt');
      }, 1500);
    } else {
      // No L1 detected — go straight to English chat
      setTimeout(() => proceedToChat('en'), 1800);
    }
  }, []);

  // ─────────────────────────────────────────────────────────────────
  // TEXT SUBMIT — Still uses rule-based engine as fallback for typing
  // (since HuBERT needs audio, not text)
  // ─────────────────────────────────────────────────────────────────
  const submitRequest = useCallback(async (text) => {
    if (!text || !text.trim()) return;
    setKioskStatus('thinking');
    setAnalysisResult(null);
    setAnalysisComplete(false);

    try {
      // Try backend text analysis first (if available)
      // If no text endpoint exists, fall back to rule-based
      const { analyzeEnglishText } = await import('../data/nliRules');
      const result = analyzeEnglishText(text);

      setTimeout(() => {
        setAnalysisResult(result);
        setAnalysisComplete(true);
        setKioskStatus('ready');

        if (result.detected) {
          setTimeout(() => {
            setSuggestionData({ detected: result.detected, probabilities: result.probabilities });
            setShowSuggestion(true);
            setKioskStatus('prompt');
          }, 1500);
        } else {
          setTimeout(() => proceedToChat('en'), 1800);
        }
      }, 600);

    } catch (err) {
      setKioskStatus('ready');
      showToast('Analysis failed. Please try speaking instead.', 'error');
    }
  }, []);

  // ─────────────────────────────────────────────────────────────────
  // PROCEED TO CHAT
  // ─────────────────────────────────────────────────────────────────
  const proceedToChat = useCallback((langCode) => {
    setSelectedLanguage(langCode);
    setShowSuggestion(false);
    setKioskStatus('ready');

    // Init chatbot with welcome message in the chosen language
    const dbKey = getChatbotDbKey(langCode);
    const db = CHATBOT_DATABASE[dbKey] || CHATBOT_DATABASE.en;
    setChatMessages([{ sender: 'bot', text: db.welcome }]);

    setCurrentScreen('CHAT');
  }, []);

  const sendChatMessage = useCallback((query) => {
    if (!query.trim()) return;
    setChatMessages(prev => [...prev, { sender: 'user', text: query }]);

    setTimeout(async () => {
      const { getChatbotDbKey: getKey } = await import('../data/chatbotData');
      const { CHATBOT_DATABASE: DB } = await import('../data/chatbotData');
      const dbKey = getKey(selectedLanguage);
      const db = DB[dbKey] || DB.en;
      const lowerQ = query.toLowerCase();
      let found = null;
      for (const item of db.answers) {
        if (item.keys.some(k => lowerQ.includes(k))) { found = item.ans; break; }
      }
      setChatMessages(prev => [...prev, { sender: 'bot', text: found || db.fallback }]);
    }, 700);
  }, [selectedLanguage]);

  const resetSession = useCallback(() => {
    setCurrentScreen('WELCOME');
    setSelectedLanguage('en');
    setInputText('');
    setAnalysisResult(null);
    setAnalysisComplete(false);
    setShowSuggestion(false);
    setSuggestionData(null);
    setChatMessages([]);
    setKioskStatus('ready');
    if (isListening) stopRecording();
  }, [isListening, stopRecording]);

  const goToRequest = useCallback(() => {
    setCurrentScreen('REQUEST');
    setInputText('');
    setAnalysisResult(null);
    setAnalysisComplete(false);
  }, []);

  // Check backend health on mount
  useEffect(() => {
    fetch(`${API_BASE}/api/health`)
      .then(r => r.json())
      .then(d => console.log('✅ Backend connected:', d))
      .catch(() => console.warn('⚠️ Backend (main.py) not running on port 8000'));
  }, []);

  return {
    currentScreen, selectedLanguage, kioskStatus,
    inputText, setInputText, isListening,
    analysisResult, analysisComplete,
    showSuggestion, setSuggestion: setShowSuggestion,
    suggestionData,
    chatMessages,
    toast,
    // Actions
    goToRequest, toggleListening, submitRequest,
    proceedToChat, sendChatMessage, resetSession, showToast,
  };
}

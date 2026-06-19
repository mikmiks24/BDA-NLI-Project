'use client';
// src/hooks/useKiosk.js
// Uses the real HuBERT MLP model via Python FastAPI backend (http://localhost:8000)
// Flow: WELCOME → REQUEST (record audio / type text) → CHAT (translated chatbox)

import { useState, useRef, useCallback, useEffect } from 'react';
import { CHATBOT_DATABASE, getChatbotDbKey } from '../data/chatbotData';
import { analyzeEnglishText, NLI_LANGUAGES } from '../data/nliRules';

const API_BASE = 'http://localhost:8000';

// ── Text-to-Speech helper ──────────────────────────────────────────
// langCode → BCP-47 locale for SpeechSynthesis
const LANG_TO_LOCALE = {
  en: 'en-US', 'en-PH': 'en-PH', tl: 'fil-PH', ceb: 'fil-PH',
  zh: 'zh-CN', 'zh-HK': 'zh-HK', 'zh-TW': 'zh-TW',
  ko: 'ko-KR', ja: 'ja-JP', id: 'id-ID', ms: 'ms-MY',
  ur: 'ur-PK', th: 'th-TH',
};

function speakText(text, langCode = 'en') {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  // Cancel any current speech before speaking
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = LANG_TO_LOCALE[langCode] || 'en-US';
  utter.rate = 1.0;
  utter.pitch = 1.0;
  utter.volume = 1.0;
  // Try to pick a matching voice for the language
  const voices = window.speechSynthesis.getVoices();
  const match = voices.find(v => v.lang.startsWith(utter.lang.slice(0, 2)));
  if (match) utter.voice = match;
  window.speechSynthesis.speak(utter);
}

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

  // --- TTS Speak Function ---
  const speak = useCallback((text, langCode = 'en') => {
    speakText(text, langCode);
  }, []);

  // --- Analysis results from the HuBERT API ---
  const [analysisResult, setAnalysisResult] = useState(null);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // --- Language Suggestion overlay ---
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestionData, setSuggestionData] = useState(null);

  // --- Chat ---
  const [chatMessages, setChatMessages] = useState([]);
  const [userRequest, setUserRequest] = useState('');
  // Ref mirrors userRequest so proceedToChat always reads the latest value
  // (state updates are async; ref is synchronous)
  const userRequestRef = useRef('');

  // --- Toast ---
  const [toast, setToast] = useState(null);

  // --- Real-time interim transcript flag ---
  const [isInterimTranscript, setIsInterimTranscript] = useState(false);

  // --- Refs ---
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const streamRef = useRef(null);
  const suggestionTimerRef = useRef(null);
  const speechRecognitionRef = useRef(null);

  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 6000);
  }, []);

  const cancelSuggestionTimer = useCallback(() => {
    if (suggestionTimerRef.current) {
      clearTimeout(suggestionTimerRef.current);
      suggestionTimerRef.current = null;
    }
  }, []);

  const hideSuggestion = useCallback(() => {
    cancelSuggestionTimer();
    setShowSuggestion(false);
    setSuggestionData(null);
  }, [cancelSuggestionTimer]);

  const scheduleSuggestion = useCallback((result) => {
    cancelSuggestionTimer();
    suggestionTimerRef.current = setTimeout(() => {
      suggestionTimerRef.current = null;
      // Only show overlay if a language was actually detected
      if (result?.detected) {
        setSuggestionData(result);
        setShowSuggestion(true);
      } else {
        // No language traced — go straight to chat in English
        setCurrentScreen('CHAT');
      }
    }, 3000);
  }, [cancelSuggestionTimer]);

  // ─────────────────────────────────────────────────────────────────
  // AUDIO RECORDING (MediaRecorder → sends WAV blob to API)
  // ─────────────────────────────────────────────────────────────────
  const startRecording = useCallback(async () => {
    // Stop any ongoing speech output immediately when the user starts speaking
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      audioChunksRef.current = [];

      // ── Real-time interim transcription via Web Speech API ──
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
          let interim = '';
          let final = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              final += transcript;
            } else {
              interim += transcript;
            }
          }
          // Show live interim text (marked as interim so UI can style it)
          const liveText = final || interim;
          if (liveText) {
            setInputText(liveText);
            setIsInterimTranscript(true);
          }
        };

        recognition.onerror = (e) => {
          // Non-critical — Deepgram will still provide final transcript
          console.warn('SpeechRecognition interim error:', e.error);
        };

        recognition.start();
        speechRecognitionRef.current = recognition;
      }

      const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        // Stop real-time recognition
        if (speechRecognitionRef.current) {
          try { speechRecognitionRef.current.stop(); } catch (_) {}
          speechRecognitionRef.current = null;
        }

        // Stop all mic tracks
        stream.getTracks().forEach(t => t.stop());
        setIsListening(false);
        setKioskStatus('thinking');

        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });

        // ── Run HuBERT NLI analysis AND Deepgram transcription concurrently ──
        await Promise.allSettled([
          sendAudioToAPI(blob),
          // Deepgram: final accurate transcript replaces the interim one
          (async () => {
            try {
              const fd = new FormData();
              fd.append('audio', blob, 'speech.webm');
              fd.append('lang', 'en');
              const res = await fetch(`${API_BASE}/api/transcribe`, {
                method: 'POST',
                body: fd,
              });
              if (res.ok) {
                const data = await res.json();
                if (data.transcript) {
                  setInputText(data.transcript);
                  userRequestRef.current = data.transcript;
                  setUserRequest(data.transcript);
                }
              }
            } catch (e) {
              console.warn('Deepgram transcription skipped:', e.message);
            } finally {
              setIsInterimTranscript(false);
            }
          })(),
        ]);
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setIsListening(true);
      setKioskStatus('listening');
      setInputText('');
      setIsInterimTranscript(false);
      setAnalysisResult(null);
      setAnalysisComplete(false);
      hideSuggestion();

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

    const detected = data.confidence > 35 ? {
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
    scheduleSuggestion(result);
  }, [scheduleSuggestion]);

  // TEXT SUBMIT — Still uses rule-based engine as fallback for typing
  // (since HuBERT needs audio, not text)
  // ─────────────────────────────────────────────────────────────────
  const submitRequest = useCallback(async (text) => {
    if (!text || !text.trim()) return;
    setKioskStatus('thinking');
    setAnalysisResult(null);
    setAnalysisComplete(false);
    hideSuggestion();

    try {
      // Fetch text analysis from the backend using the fine-tuned RoBERTa model
      const response = await fetch(`${API_BASE}/api/analyze-text`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Backend text analysis failed');
      }

      const data = await response.json();
      
      const probabilities = (data.probabilities || []).map(p => ({
        code:       LABEL_TO_LANG[p.label] || 'en',
        label:      p.label,
        name:       p.name,
        nativeName: p.name,
        flag:       p.flag,
        confidence: p.confidence,
      }));

      // Let's run local rule-based analysis to get the text highlights and rules matches
      const { analyzeEnglishText } = await import('../data/nliRules');
      const rulesResult = analyzeEnglishText(text);

      const detected = data.confidence > 25 ? {
        label:      data.detected,
        code:       LABEL_TO_LANG[data.detected] || data.code || 'en',
        name:       data.name,
        nativeName: data.nativeName || data.name,
        flag:       data.flag,
        confidence: data.confidence,
        choices:    data.choices || [],
      } : null;

      // Blend probabilities and detected to favor high-precision rule matches over statistical model predictions
      let blendedProbabilities = [];
      let finalDetected = null;

      if (rulesResult.rawMatches && rulesResult.rawMatches.length > 0) {
        blendedProbabilities = NLI_LANGUAGES.map(lang => {
          const modelP = probabilities.find(p => p.code === lang.code) || { confidence: 0 };
          const ruleP = rulesResult.probabilities.find(p => p.code === lang.code) || { confidence: 0 };
          const blendedConf = Math.round((modelP.confidence * 0.3) + (ruleP.confidence * 0.7));
          return {
            code: lang.code,
            label: modelP.label || lang.code.toUpperCase(),
            name: lang.name,
            nativeName: lang.nativeName || lang.name,
            flag: lang.flag,
            confidence: blendedConf
          };
        });
        blendedProbabilities.sort((a, b) => b.confidence - a.confidence);

        const topProb = blendedProbabilities[0];
        if (topProb && topProb.confidence >= 25) {
          finalDetected = {
            label: topProb.label,
            code: topProb.code,
            name: topProb.name,
            nativeName: topProb.nativeName,
            flag: topProb.flag,
            confidence: topProb.confidence,
            choices: NLI_LANGUAGES.find(l => l.code === topProb.code)?.choices || []
          };
        }
      } else {
        blendedProbabilities = probabilities;
        finalDetected = detected;
      }

      const result = {
        probabilities: blendedProbabilities,
        detected: finalDetected,
        highlightedHtml: rulesResult.highlightedHtml || '',
        rawMatches: rulesResult.rawMatches || [],
      };

      setAnalysisResult(result);
      setAnalysisComplete(true);
      setKioskStatus('ready');
      scheduleSuggestion(result);

    } catch (err) {
      console.warn('Backend text analysis failed, falling back to local rule-based engine:', err);
      // Fallback to rule-based engine
      try {
        const { analyzeEnglishText } = await import('../data/nliRules');
        const result = analyzeEnglishText(text);

        setAnalysisResult(result);
        setAnalysisComplete(true);
        setKioskStatus('ready');
        scheduleSuggestion(result);
      } catch (fallbackErr) {
        console.error('Text analysis fallback failed:', fallbackErr);
        setKioskStatus('ready');
        showToast('Text analysis failed.', 'error');
      }
    }
  }, []);

  // ─────────────────────────────────────────────────────────────────
  // PROCEED TO CHAT
  // ─────────────────────────────────────────────────────────────────
  const proceedToChat = useCallback((langCode) => {
    setSelectedLanguage(langCode);
      hideSuggestion();

    const dbKey = getChatbotDbKey(langCode);
    const db = CHATBOT_DATABASE[dbKey] || CHATBOT_DATABASE.en;

    // Use ref — always has the latest value regardless of closure staleness
    const initialRequest = userRequestRef.current.trim();

    if (initialRequest) {
      // Start the chat with the actual user concern, then respond to it.
      const lowerQ = initialRequest.toLowerCase();
      let found = null;
      for (const item of db.answers) {
        if (item.keys.some(k => lowerQ.includes(k))) {
          found = item.ans;
          break;
        }
      }
      setChatMessages([
        { sender: 'user', text: initialRequest },
        { sender: 'bot',  text: found || db.fallback },
      ]);
      setCurrentScreen('CHAT');
      return;
    }

    const greeting = db.welcome;
    setChatMessages([{ sender: 'bot', text: greeting }]);
    setCurrentScreen('CHAT');
    speak(greeting, langCode);
  }, [speak]);

  const sendChatMessage = useCallback((query) => {
    if (!query.trim()) return;
    
    // Save the request if it's the first message (user's initial question)
    if (chatMessages.length <= 1 && !userRequest) {
      setUserRequest(query);
    }
    
    setChatMessages(prev => [...prev, { sender: 'user', text: query }]);
    setKioskStatus('thinking');

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
      setKioskStatus('ready');
    }, 700);
  }, [selectedLanguage, chatMessages, userRequest]);

  const changeLanguage = useCallback((langCode) => {
    setSelectedLanguage(langCode);
    const names = {
      en: 'English', tl: 'Filipino', zh: 'Chinese', ko: 'Korean',
      ja: 'Japanese', id: 'Indonesian', ur: 'Urdu', th: 'Thai'
    };
    const langName = names[langCode] || langCode;
    showToast(`Kiosk translated to ${langName}`, 'info');
  }, [showToast]);

  // Background NLI analysis of the ongoing conversation (constantly running on every response)
  useEffect(() => {
    if (currentScreen !== 'CHAT') return;
    if (selectedLanguage !== 'en') return;

    const userMsgs = chatMessages
      .filter(m => m.sender === 'user')
      .map(m => m.text);

    if (userMsgs.length === 0) return;

    const combinedText = userMsgs.join('\n');

    // Query backend model to dynamically trace L1 on user chat replies
    fetch(`${API_BASE}/api/analyze-text`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: combinedText }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('API text analysis failed');
        return res.json();
      })
      .then(async (data) => {
        const probabilities = (data.probabilities || []).map(p => ({
          code:       LABEL_TO_LANG[p.label] || 'en',
          label:      p.label,
          name:       p.name,
          nativeName: p.name,
          flag:       p.flag,
          confidence: p.confidence,
        }));

        // Get local rule-based highlights and details
        const { analyzeEnglishText } = await import('../data/nliRules');
        const rulesResult = analyzeEnglishText(combinedText);

        const detected = data.confidence > 25 ? {
          label:      data.detected,
          code:       LABEL_TO_LANG[data.detected] || data.code || 'en',
          name:       data.name,
          nativeName: data.nativeName || data.name,
          flag:       data.flag,
          confidence: data.confidence,
          choices:    data.choices || [],
        } : null;

        // Blend probabilities and detected to favor high-precision rule matches over statistical model predictions
        let blendedProbabilities = [];
        let finalDetected = null;

        if (rulesResult.rawMatches && rulesResult.rawMatches.length > 0) {
          blendedProbabilities = NLI_LANGUAGES.map(lang => {
            const modelP = probabilities.find(p => p.code === lang.code) || { confidence: 0 };
            const ruleP = rulesResult.probabilities.find(p => p.code === lang.code) || { confidence: 0 };
            const blendedConf = Math.round((modelP.confidence * 0.3) + (ruleP.confidence * 0.7));
            return {
              code: lang.code,
              label: modelP.label || lang.code.toUpperCase(),
              name: lang.name,
              nativeName: lang.nativeName || lang.name,
              flag: lang.flag,
              confidence: blendedConf
            };
          });
          blendedProbabilities.sort((a, b) => b.confidence - a.confidence);

          const topProb = blendedProbabilities[0];
          if (topProb && topProb.confidence >= 25) {
            finalDetected = {
              label: topProb.label,
              code: topProb.code,
              name: topProb.name,
              nativeName: topProb.nativeName,
              flag: topProb.flag,
              confidence: topProb.confidence,
              choices: NLI_LANGUAGES.find(l => l.code === topProb.code)?.choices || []
            };
          }
        } else {
          blendedProbabilities = probabilities;
          finalDetected = detected;
        }

        setAnalysisResult({
          probabilities: blendedProbabilities,
          detected: finalDetected,
          highlightedHtml: rulesResult.highlightedHtml || '',
          rawMatches: rulesResult.rawMatches || [],
        });
      })
      .catch(async (err) => {
        console.warn('Real-time model tracing failed, using fallback engine:', err);
        const { analyzeEnglishText } = await import('../data/nliRules');
        const result = analyzeEnglishText(combinedText);
        setAnalysisResult(result);
      });
  }, [chatMessages, currentScreen, selectedLanguage]);

  const resetSession = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setCurrentScreen('WELCOME');
    setSelectedLanguage('en');
    setInputText('');
    setUserRequest('');
    userRequestRef.current = '';
    setAnalysisResult(null);
    setAnalysisComplete(false);
    hideSuggestion();
    setChatMessages([]);
    setKioskStatus('ready');
    if (isListening) stopRecording();
  }, [hideSuggestion, isListening, stopRecording]);

  const goToRequest = useCallback(() => {
    setCurrentScreen('REQUEST');
    setInputText('');
    setUserRequest('');
    userRequestRef.current = '';
    setAnalysisResult(null);
    setAnalysisComplete(false);
    hideSuggestion();
    speak('We are here to assist you. Please tap the mic button to speak your request, or type in below. Our system will analyze and adapt to your language.', 'en');
  }, [hideSuggestion, speak]);

  // Wrapped setter — keeps ref in sync so proceedToChat always reads the latest
  const setUserRequestAndRef = useCallback((text) => {
    userRequestRef.current = text;
    setUserRequest(text);
  }, []);

  // Check backend health on mount
  useEffect(() => {
    fetch(`${API_BASE}/api/health`)
      .then(r => r.json())
      .then(d => console.log('✅ Backend connected:', d))
      .catch(() => console.warn('⚠️ Backend (main.py) not running on port 8000'));

    return () => cancelSuggestionTimer();
  }, [cancelSuggestionTimer]);

  // Speak welcome greeting when kiosk first loads
  useEffect(() => {
    const timer = setTimeout(() => {
      speak('Welcome! Please tap the screen to proceed.', 'en');
    }, 1200);
    return () => clearTimeout(timer);
  }, [speak]);

  return {
    currentScreen, selectedLanguage, kioskStatus,
    inputText, setInputText, isListening, userRequest,
    isInterimTranscript,
    setUserRequest: setUserRequestAndRef,
    analysisResult, analysisComplete,
    showSuggestion, setSuggestion: setShowSuggestion,
    suggestionData,
    chatMessages,
    toast,
    speak,
    // Actions
    goToRequest, toggleListening, submitRequest,
    proceedToChat, sendChatMessage, resetSession, showToast, changeLanguage,
  };
}

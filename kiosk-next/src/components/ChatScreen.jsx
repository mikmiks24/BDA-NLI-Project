'use client';
// src/components/ChatScreen.jsx
// Screen 3: Full-screen translated chatbox — the main service interaction

import React, { useState, useRef, useEffect } from 'react';
import { NLI_LANGUAGES, getBaseLangCode } from '../data/nliRules';
import { WeatherModal, MapModal, TranslateModal } from './ServiceModals';
import { getAssetPath } from '../utils/paths';

// Determine display info for the active language
function getLangDisplay(langCode) {
  if (!langCode || langCode === 'en') return { flag: '🇬🇧', name: 'English', placeholder: 'Ask e.g., "What\'s the weather?" or "Where can I find help?"' };
  if (langCode === 'en-PH') return { flag: '🇵🇭', name: 'English (PH)', placeholder: 'Ask about directions, weather, services, or help...' };
  if (langCode === 'ceb') return { flag: '🇵🇭', name: 'Cebuano', placeholder: 'Pangutana bahin sa direksyon, panahon, o serbisyo...' };
  if (langCode === 'ms') return { flag: '🇲🇾', name: 'Bahasa Melayu', placeholder: 'Tanya tentang arah, cuaca, atau perkhidmatan...' };

  const base = getBaseLangCode(langCode);
  const lang = NLI_LANGUAGES.find(l => l.code === base);
  if (!lang) return { flag: '🌐', name: langCode, placeholder: 'Type your question...' };

  const placeholders = {
    tl: 'Magtanong tungkol sa direksyon, panahon, o serbisyo...',
    zh: '请输入您的问题，如方向、天气、服务...',
    ko: '방향, 날씨, 서비스에 대해 질문하세요...',
    ja: '方向、天気、サービスについてご質問ください...',
    id: 'Tanya tentang arah, cuaca, atau layanan Anda...',
    ur: 'سمت، موسم، یا خدمات کے بارے میں پوچھیں...',
    th: 'ถามเกี่ยวกับทิศทาง สภาพอากาศ หรือบริการ...',
  };

  return { flag: lang.flag, name: lang.nativeName, placeholder: placeholders[base] || 'Type your question...' };
}

function getCountryCode(langCode) {
  const map = {
    en: 'GB',
    'en-PH': 'PH',
    ceb: 'PH',
    tl: 'PH',
    zh: 'CN',
    ko: 'KR',
    ja: 'JP',
    id: 'ID',
    ur: 'PK',
    th: 'TH',
    ms: 'MY'
  };
  const base = getBaseLangCode(langCode);
  return map[base] || map[langCode] || langCode.slice(0, 2).toUpperCase();
}

function getServiceDescription(langCode, modal) {
  const base = getBaseLangCode(langCode);
  const descriptions = {
    en: {
      weather: 'Check current weather and forecast',
      map: 'Find locations and get directions',
      translate: 'Translate words or phrases',
      support: 'Get help and information support'
    },
    tl: {
      weather: 'Suriin ang kasalukuyang panahon at ulat',
      map: 'Maghanap ng mga lokasyon at kumuha ng direksyon',
      translate: 'Isalin ang mga salita o parirala',
      support: 'Kumuha ng tulong at suporta sa impormasyon'
    },
    zh: {
      weather: '查看当前天气和天气预报',
      map: '查找地点并获取路线',
      translate: '翻译单词或短语',
      support: '获取帮助和信息支持'
    },
    ko: {
      weather: '현재 날씨 및 예보 확인',
      map: '위치 확인 및 길 찾기',
      translate: '단어 또는 구문 번역',
      support: '도움 및 정보 지원 받기'
    },
    ja: {
      weather: '現在の天気と予報を確認',
      map: '場所を検索して道順を取得',
      translate: '単語やフレーズを翻訳',
      support: 'ヘルプと情報サポートの取得'
    },
    id: {
      weather: 'Periksa cuaca saat ini dan prakiraan',
      map: 'Temukan lokasi dan dapatkan arah',
      translate: 'Terjemahkan kata atau frasa',
      support: 'Dapatkan bantuan dan dukungan informasi'
    },
    ur: {
      weather: 'موسم کی موجودہ صورتحال اور پیشگوئی دیکھیں',
      map: 'مقامات تلاش کریں اور سمتیں حاصل کریں',
      translate: 'الفاظ یا جملوں کا ترجمہ کریں',
      support: 'مدد اور معلومات کی سپورٹ حاصل کریں'
    },
    th: {
      weather: 'ตรวจสอบสภาพอากาศปัจจุบันและพยากรณ์อากาศ',
      map: 'ค้นหาสถานที่และขอเส้นทาง',
      translate: 'แปลคำศัพท์หรือวลี',
      support: 'รับความช่วยเหลือและข้อมูลสนับสนุน'
    }
  };
  const descSet = descriptions[base] || descriptions.en;
  return descSet[modal || 'support'] || descSet.support;
}

// Service cards data based on language
function getServices(langCode) {
  const base = getBaseLangCode(langCode);
  const en = [
    { icon: '🌤️', title: 'Weather', modal: 'weather' },
    { icon: '🗺️', title: 'Directions', modal: 'map' },
    { icon: '🌐', title: 'Translate', modal: 'translate' },
    { icon: '💬', title: 'Support', query: 'I need help' },
  ];
  const services = {
    tl: [
      { icon: '🌤️', title: 'Panahon', modal: 'weather' },
      { icon: '🗺️', title: 'Direksyon', modal: 'map' },
      { icon: '🌐', title: 'Isalin', modal: 'translate' },
      { icon: '💬', title: 'Tulong', query: 'Kailangan ko ng tulong' },
    ],
    zh: [
      { icon: '🌤️', title: '天气', modal: 'weather' },
      { icon: '🗺️', title: '方向', modal: 'map' },
      { icon: '🌐', title: '翻译', modal: 'translate' },
      { icon: '💬', title: '帮助', query: '我需要帮助' },
    ],
    ko: [
      { icon: '🌤️', title: '날씨', modal: 'weather' },
      { icon: '🗺️', title: '방향', modal: 'map' },
      { icon: '🌐', title: '번역', modal: 'translate' },
      { icon: '💬', title: '도움', query: '도움이 필요해요' },
    ],
    ja: [
      { icon: '🌤️', title: '天気', modal: 'weather' },
      { icon: '🗺️', title: '方向', modal: 'map' },
      { icon: '🌐', title: '翻訳', modal: 'translate' },
      { icon: '💬', title: 'ヘルプ', query: '助けてください' },
    ],
    id: [
      { icon: '🌤️', title: 'Cuaca', modal: 'weather' },
      { icon: '🗺️', title: 'Arah', modal: 'map' },
      { icon: '🌐', title: 'Terjemah', modal: 'translate' },
      { icon: '💬', title: 'Bantuan', query: 'Saya butuh bantuan' },
    ],
    ur: [
      { icon: '🌤️', title: 'موسم', modal: 'weather' },
      { icon: '🗺️', title: 'سمت', modal: 'map' },
      { icon: '🌐', title: 'ترجمہ', modal: 'translate' },
      { icon: '💬', title: 'مدد', query: 'مجھے مدد چاہیے' },
    ],
    th: [
      { icon: '🌤️', title: 'อากาศ', modal: 'weather' },
      { icon: '🗺️', title: 'ทิศทาง', modal: 'map' },
      { icon: '🌐', title: 'แปล', modal: 'translate' },
      { icon: '💬', title: 'ช่วยเหลือ', query: 'ต้องการความช่วยเหลือ' },
    ],
  };
  return services[base] || en;
}

export default function ChatScreen({
  active,
  langCode,
  chatMessages,
  onSend,
  onReset,
  analysisResult,
  onChangeLanguage,
  kioskStatus,
  showToast,
}) {
  const [input, setInput] = useState('');
  const [diagnosticsOpen, setDiagnosticsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [transcriptFilled, setTranscriptFilled] = useState(false);
  const [isInterimTranscript, setIsInterimTranscript] = useState(false);
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const speechRecognitionRef = useRef(null);

  const lang = getLangDisplay(langCode);
  const services = getServices(langCode);

  // Cleanup: stop recording if component unmounts while listening
  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        try { mediaRecorderRef.current.stop(); } catch {}
      }
    };
  }, []);

  // ─── Deepgram Nova-2 mic capture ─────────────────────────────────
  const toggleSpeechCapture = async () => {
    // If currently recording → stop and transcribe
    if (isListening) {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      return;
    }

    // Start recording
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];

      // ── Real-time interim transcription via Web Speech API ──
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = langCode || 'en-US';

        recognition.onresult = (event) => {
          let interim = '';
          let final = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const t = event.results[i][0].transcript;
            if (event.results[i].isFinal) final += t;
            else interim += t;
          }
          const liveText = final || interim;
          if (liveText) {
            setInput(liveText);
            setIsInterimTranscript(true);
          }
        };

        recognition.onerror = (e) => {
          console.warn('SpeechRecognition interim error:', e.error);
        };

        recognition.start();
        speechRecognitionRef.current = recognition;
      }

      // Prefer webm/opus; fall back to browser default
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : '';
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : {});

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        // Stop real-time recognition
        if (speechRecognitionRef.current) {
          try { speechRecognitionRef.current.stop(); } catch (_) {}
          speechRecognitionRef.current = null;
        }

        // Stop all mic tracks immediately
        stream.getTracks().forEach(t => t.stop());
        setIsListening(false);
        setIsTranscribing(true);

        try {
          const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          const formData = new FormData();
          formData.append('audio', blob, 'speech.webm');
          formData.append('lang', langCode || 'en');

          const res = await fetch('http://localhost:8000/api/transcribe', {
            method: 'POST',
            body: formData,
          });

          if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.detail || `Server error ${res.status}`);
          }

          const data = await res.json();
          const transcript = data.transcript || '';

          if (transcript) {
            setInput(transcript);
            setTimeout(() => {
              inputRef.current?.focus();
              inputRef.current?.select();
            }, 50);
            setTranscriptFilled(true);
            setTimeout(() => setTranscriptFilled(false), 1800);
            if (showToast) showToast('Speech captured! Review and press Send.', 'info');
          } else {
            if (showToast) showToast('No speech detected. Please try again.', 'warning');
          }
        } catch (err) {
          console.error('Deepgram transcription error:', err);
          if (showToast) {
            const msg = err.message.includes('fetch') || err.message.includes('Failed')
              ? 'Backend not running. Start main.py first!'
              : `Transcription failed: ${err.message}`;
            showToast(msg, 'error');
          }
        } finally {
          setIsTranscribing(false);
          setIsInterimTranscript(false);
        }
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setIsListening(true);
      setInput('');
      setIsInterimTranscript(false);

    } catch (err) {
      console.error('Mic error:', err);
      if (showToast) {
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
          showToast('Microphone permission denied. Please allow mic access in your browser.', 'error');
        } else if (err.name === 'NotFoundError') {
          showToast('No microphone found. Please plug in a microphone and try again.', 'error');
        } else {
          showToast('Could not access microphone. Please try typing instead.', 'error');
        }
      }
    }
  };

  // Probability bars — use result or zeros
  const displayProbs = analysisResult?.probabilities?.length
    ? analysisResult.probabilities.slice(0, 5)
    : NLI_LANGUAGES.slice(0, 5).map(l => ({ ...l, confidence: 0 }));

  const rawMatches = analysisResult?.rawMatches || [];
  const highlightedHtml = analysisResult?.highlightedHtml || '';
  const detected = analysisResult?.detected;
  const isLanguageTraced = !!detected;

  // Show service cards only at the start of conversation
  const showServices = chatMessages.length <= 2;

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [chatMessages]);

  useEffect(() => {
    if (active && inputRef.current) inputRef.current.focus();
  }, [active]);

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className={`kiosk-screen screen-chat${active ? ' active' : ''}`} id="screenChat">

      {/* Chat Header */}
      <div className="chat-screen-header">
        <div className="chat-header-left-spacer" style={{ width: '120px' }}></div>
        
        <div className="chat-lang-pill-floating">
          <div className="chat-lang-pill-left">
            <span className="chat-lang-code-badge">{getCountryCode(langCode)}</span>
            <div className="chat-lang-meta">
              <div className="chat-lang-name">{lang.name}</div>
              <div className="chat-lang-sub">
                LINGUA Assistant <span className="chat-online-dot" />
              </div>
            </div>
          </div>

          {langCode === 'en' && detected && (
            <button
              className="chat-detected-badge-suggest"
              onClick={() => onChangeLanguage && onChangeLanguage(detected.code)}
              title={`Switch kiosk language to ${detected.name}`}
            >
              <span className="chat-suggest-code-badge">{getCountryCode(detected.code)}</span>
              <span className="chat-suggest-label">Switch to {detected.name}? ({detected.confidence}%)</span>
            </button>
          )}

          {langCode !== 'en' && (
            <button
              className="chat-detected-badge-suggest badge-english"
              onClick={() => onChangeLanguage && onChangeLanguage('en')}
              title="Switch kiosk language back to English"
            >
              <span className="chat-suggest-code-badge">GB</span>
              <span className="chat-suggest-label">Switch to English?</span>
            </button>
          )}
        </div>

        <button className="btn-new-session" onClick={onReset} title="Start a new session">
          <svg className="refresh-icon" viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          </svg>
          New Session
        </button>
      </div>

      {/* Messages */}
      <div className="chat-messages-window" ref={messagesRef}>
        {showServices && (
          <div className="chat-greeting-area">
            <div className="chat-greeting-robot">
              <img
                src={getAssetPath('/assets/robot_icon.gif')}
                alt="Robot Avatar"
                className="chat-greeting-robot-img"
              />
            </div>
            <div className="chat-greeting-text">
              <h3 className="chat-greeting-title">Hello! How can I help you today?</h3>
              <p className="chat-greeting-subtitle">Choose an option below or ask your question.</p>
            </div>
          </div>
        )}

        {chatMessages.map((msg, i) => (
          <div key={i} className={`chat-bubble-wrap ${msg.sender}`}>
            {msg.sender === 'bot' && (
              <div className="chat-bot-avatar">🤖</div>
            )}
            <div className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          </div>
        ))}

        {/* Service Cards — shown at start of conversation */}
        {showServices && (
          <div className="chat-services-grid">
            {services.map((svc, i) => {
              const svcKey = svc.modal || 'support';
              const svcDesc = getServiceDescription(langCode, svcKey);
              return (
                <button
                  key={i}
                  className="chat-service-card"
                  onClick={() => svc.modal ? setOpenModal(svc.modal) : onSend(svc.query)}
                >
                  <div className="chat-service-icon-wrap">
                    <span className="chat-service-icon">{svc.icon}</span>
                  </div>
                  <div className="chat-service-info">
                    <span className="chat-service-title">{svc.title}</span>
                    <span className="chat-service-desc">{svcDesc}</span>
                  </div>
                  <div className="chat-service-arrow">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Popular Questions / Quick Replies removed */}
      </div>

      {/* Input Bar */}
      <div className="chat-input-area">
        <button 
          className={`chat-mic-button${isListening ? ' listening' : ''}${isTranscribing ? ' transcribing' : ''}`}
          onClick={toggleSpeechCapture}
          title={isTranscribing ? 'Transcribing...' : isListening ? 'Stop — click to transcribe' : 'Click to speak (Deepgram Nova-2)'}
          disabled={isTranscribing}
        >
          {isTranscribing ? (
            <svg className="mic-icon spin" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ display: 'block' }}>
              <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
            </svg>
          ) : (
            <svg className="mic-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ display: 'block' }}>
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
            </svg>
          )}
        </button>
        <input
          ref={inputRef}
          type="text"
          className={`chat-input-field${transcriptFilled ? ' transcript-filled' : ''}${isInterimTranscript ? ' interim' : ''}`}
          placeholder={isTranscribing ? 'Transcribing your speech...' : isListening ? 'Listening... Click mic again to stop.' : lang.placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          disabled={isTranscribing}
        />
        <button className="chat-send-button" onClick={handleSend} disabled={isListening || isTranscribing}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ display: 'block' }}>
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>

      {/* ── NLI Diagnostics Drawer ── */}
      <div className={`nli-drawer${diagnosticsOpen ? ' nli-drawer-open' : ''}`} id="nliDiagnosticsDrawer">

        {/* Drawer Toggle Handle */}
        <button
          className="nli-drawer-toggle"
          onClick={() => setDiagnosticsOpen(o => !o)}
          id="nliDrawerToggle"
        >
          <div className="nli-drawer-toggle-left">
            <span className="nli-drawer-toggle-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
              </svg>
            </span>
            <span className="nli-drawer-toggle-label">
              LINGUA Diagnostics
            </span>
            <span className="nli-live-indicator">
              <span className={`nli-live-dot${kioskStatus === 'thinking' ? ' thinking' : ''}`} />
              {kioskStatus === 'thinking' ? 'ANALYZING...' : 'LIVE TRACING'}
            </span>
          </div>
          <div className="nli-drawer-toggle-right">
            {detected && (
              <span className="nli-drawer-detected-pill">
                {getCountryCode(detected.code)} {detected.name} {detected.confidence}%
              </span>
            )}
            <span className="nli-drawer-chevron">{diagnosticsOpen ? '▼' : '▲'}</span>
          </div>
        </button>

        {/* Drawer Body — only rendered when open for perf */}
        <div className="nli-drawer-body">

          {/* Section 1: Detected Language */}
          {isLanguageTraced ? (
            <div className="nli-drawer-section">
              <div className="nli-drawer-section-title">Detected Mother-Tongue Influence</div>
              <div className="nli-detected-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
                  <span className="nli-detected-flag">{detected.flag}</span>
                  <div style={{ flex: 1 }}>
                    <div className="nli-detected-name">{detected.name}</div>
                    <div className="nli-detected-sub">Mother-Tongue (L1) · {detected.confidence}% confidence</div>
                    <div className="nli-detected-bar-wrap" style={{ marginTop: '6px' }}>
                      <div
                        className="nli-detected-bar"
                        style={{ width: `${detected.confidence}%` }}
                      />
                    </div>
                  </div>
                </div>
                {langCode !== detected.code && (
                  <button
                    className="nli-drawer-switch-btn"
                    onClick={() => onChangeLanguage && onChangeLanguage(detected.code)}
                    title={`Switch kiosk to ${detected.name}`}
                  >
                    Translate Kiosk
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="nli-drawer-section">
              <div className="nli-drawer-section-title">Detected Mother-Tongue Influence</div>
              <div className="nli-no-data">
                {kioskStatus === 'thinking' ? 'Analyzing language patterns...' : "Can't trace your native language. Proceed to chat."}
              </div>
            </div>
          )}

          {/* Section 2: Probability Bars */}
          <div className="nli-drawer-section">
            <div className="nli-drawer-section-title">Mother-Tongue Probability Mapping</div>
            <div className="nli-prob-list">
              {displayProbs.map((lang) => (
                <div key={lang.code} className="nli-prob-row" style={{ gridTemplateColumns: isLanguageTraced ? '24px 100px 1fr 40px' : '24px 100px 1fr' }}>
                  <span className="nli-prob-flag">{lang.flag}</span>
                  <span className="nli-prob-name">{lang.name}</span>
                  <div className="nli-prob-track">
                    <div
                      className={`nli-prob-bar${isLanguageTraced ? '' : ' loading'}`}
                      style={{
                        width: isLanguageTraced ? `${lang.confidence}%` : '100%',
                        transition: isLanguageTraced ? 'width 0.7s cubic-bezier(0.16,1,0.3,1)' : 'none',
                      }}
                    />
                  </div>
                  {isLanguageTraced && (
                    <span className="nli-prob-val">{lang.confidence}%</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Highlighted Input */}
          {highlightedHtml && (
            <div className="nli-drawer-section">
              <div className="nli-drawer-section-title">Mother-Tongue Transfer Markers in Input</div>
              <div
                className="nli-highlighted-text"
                dangerouslySetInnerHTML={{ __html: highlightedHtml }}
              />
            </div>
          )}

          {/* Section 4: Marker Log */}
          <div className="nli-drawer-section">
            <div className="nli-drawer-section-title">Linguistic Markers Triggered</div>
            <div className="nli-markers-log">
              {rawMatches.length === 0 ? (
                <div className="nli-no-data">No mother-tongue transfer markers triggered yet.</div>
              ) : (
                rawMatches.map((match, i) => {
                  const langObj = NLI_LANGUAGES.find(l => l.code === match.langCode);
                  return (
                    <div key={i} className="nli-marker-card">
                      <div className="nli-marker-rule">
                        <span>{match.reason}</span>
                        <span className="nli-marker-origin">{langObj?.name || 'Unknown'} Origin</span>
                      </div>
                      <div className="nli-marker-desc">{match.description}</div>
                      <div className="nli-marker-match">&quot;{match.matchedText}&quot;</div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="chat-screen-footer">
        <span className="chat-footer-hint">Live support staff are available if you need further assistance</span>
      </div>

      {/* Service Modals */}
      {openModal === 'weather' && <WeatherModal onClose={() => setOpenModal(null)} />}
      {openModal === 'map' && <MapModal onClose={() => setOpenModal(null)} />}
      {openModal === 'translate' && <TranslateModal onClose={() => setOpenModal(null)} />}
    </div>
  );
}

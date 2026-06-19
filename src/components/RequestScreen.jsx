'use client';
// src/components/RequestScreen.jsx
// Screen 2: User speaks → audio sent to HuBERT API / or types text (rule-based fallback)

import React, { useRef, useEffect, useState } from 'react';
import WaveVisualizer from './WaveVisualizer';
import { NLI_LANGUAGES } from '../data/nliRules';

export default function RequestScreen({
  active,
  inputText, setInputText, isListening, kioskStatus,
  isInterimTranscript,
  onToggleListening, onSubmit,
  analysisResult, analysisComplete,
}) {
  const inputRef = useRef(null);
  const [recordSecs, setRecordSecs] = useState(0);
  const [diagnosticsOpen, setDiagnosticsOpen] = useState(false);
  const [transcriptFilled, setTranscriptFilled] = useState(false);
  const prevListeningRef = useRef(false);

  // Countdown timer while recording
  useEffect(() => {
    if (isListening) {
      setRecordSecs(0);
      const timer = setInterval(() => setRecordSecs(s => s + 1), 1000);
      return () => clearInterval(timer);
    }
  }, [isListening]);

  useEffect(() => {
    if (active && !isListening && inputRef.current) inputRef.current.focus();
  }, [isListening, active]);

  // Flash the text console whenever a Deepgram transcript populates inputText after recording
  useEffect(() => {
    // Detect transition: was listening, now not listening, and inputText has content
    if (prevListeningRef.current && !isListening && inputText && inputText.trim()) {
      setTranscriptFilled(true);
      const timer = setTimeout(() => setTranscriptFilled(false), 1800);
      return () => clearTimeout(timer);
    }
    prevListeningRef.current = isListening;
  }, [isListening, inputText]);

  const isAnalyzing = kioskStatus === 'thinking';
  const showResults = analysisComplete && analysisResult;
  const hasResults = isAnalyzing || showResults;
  const isLanguageTraced = analysisComplete && !!analysisResult?.detected;

  const displayProbs = showResults
    ? analysisResult.probabilities.slice(0, 7)
    : NLI_LANGUAGES.slice(0, 7).map(l => ({ ...l, confidence: 0 }));

  // Open drawer immediately the moment analysis starts OR completes
  useEffect(() => {
    if (isAnalyzing || analysisComplete) {
      setDiagnosticsOpen(true);
    } else {
      setDiagnosticsOpen(false);
    }
  }, [isAnalyzing, analysisComplete]);

  // Drawer is always fully open when there are results or analysis is running
  const drawerHeight = !hasResults ? '0px' : '340px';

  const handleKey = (e) => {
    if (e.key === 'Enter') onSubmit(inputText);
  };

  // Use uploaded static SVG from public/assets. Replace the file to change the icon.
  const micIconSrc = isListening ? '/assets/mic-listening.svg' : '/assets/mic.svg';

  return (
    <div className={`kiosk-screen screen-request ${active ? 'active' : ''}${hasResults ? ' has-results' : ''}`} id="screenRequest" style={{ paddingBottom: '0' }}>

      <div className="request-header">
        <div className="request-header-title">Language Classifier</div>
        <div className="request-header-subtitle">
          We are here to assist you. Please tap the mic button to speak your request, or type in below. Our system will analyze and adapt to your language.
        </div>
      </div>

      {/* Section: Voice */}
      <div className="request-voice-section">
        <div className="voice-button-container">
          <button
            className={`voice-btn${isListening ? ' listening' : ''}`}
            onClick={onToggleListening}
            title={isListening ? 'Tap to Stop Recording' : 'Tap to Start Recording'}
            aria-label={isListening ? 'Stop recording' : 'Start recording'}
            disabled={isAnalyzing}
          >
            <img src={micIconSrc} alt={isListening ? 'Stop recording' : 'Microphone icon'} className="voice-btn-icon" />
          </button>
          <WaveVisualizer active={isListening} />
        </div>

        <p className="request-prompt">
          {isListening
            ? `🎙️ Recording... ${recordSecs}s — Tap again to stop & analyze`
            : isAnalyzing
              ? 'Analyzing your audio...'
              : 'Tap the microphone and speak your request in English'}
        </p>
      </div>

      {/* Main content spacer to push items to the bottom */}
      <div className="request-main-content">
        {/* Sits as vertical space occupier */}
      </div>

      {/* "Or type it here" label — stays fixed, gets covered by the NLI drawer */}
      <div className="request-text-input-fixed">
        <div className="text-input-divider">Or type it here</div>
      </div>

      <div className={`request-bottom-wrapper${hasResults ? ' has-results' : ''}`}>
        <div className="request-bottom-panel" style={{ marginTop: '-10px', marginBottom: '0px' }}>
          {/* Text console — rides up with the NLI drawer */}
          <div className={`text-console-box${transcriptFilled ? ' transcript-filled' : ''}`}>
            <span className="console-icon">⌨️</span>
            <input
              ref={inputRef}
              type="text"
              className={`text-console-input${transcriptFilled ? ' transcript-filled' : ''}${isInterimTranscript ? ' interim' : ''}`}
              placeholder="e.g., 'How\'s the weather today?' or 'I need directions to...'"
              autoComplete="off"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKey}
            />
            <button
              className="console-submit-btn"
              onClick={() => onSubmit(inputText)}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? 'Analyzing...' : 'Send'}
            </button>
          </div>
        </div>

      {/* ── NLI Diagnostics Drawer ── */}
      <div
        className={`nli-drawer${diagnosticsOpen ? ' nli-drawer-open' : ''}`}
        id="nliDiagnosticsDrawer"
        style={{
          borderRadius: '12px 12px 0 0',
          borderTop: hasResults ? '1px solid hsla(var(--border-glass))' : 'none',
          borderLeft: hasResults ? '1px solid hsla(var(--border-glass))' : 'none',
          borderRight: hasResults ? '1px solid hsla(var(--border-glass))' : 'none',
          borderBottom: 'none',
          background: 'rgba(18, 22, 33, 0.95)',
          height: drawerHeight,
          opacity: hasResults ? 1 : 0,
          visibility: hasResults ? 'visible' : 'hidden',
          transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, visibility 0.4s'
        }}
      >
        {/* Drawer Toggle Handle */}
        <button
          className="nli-drawer-toggle"
          onClick={() => setDiagnosticsOpen(o => !o)}
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
            {analysisComplete && analysisResult?.detected && (
              <span className="nli-drawer-detected-pill">
                {(() => {
                  const map = { en: 'GB', tl: 'PH', ceb: 'PH', zh: 'CN', ko: 'KR', ja: 'JP', id: 'ID', ur: 'PK', th: 'TH', ms: 'MY' };
                  const code = analysisResult.detected.code;
                  return map[code] || code.slice(0, 2).toUpperCase();
                })()} {analysisResult.detected.name} {analysisResult.detected.confidence}%
              </span>
            )}
            <span className="nli-drawer-chevron">{diagnosticsOpen ? '▼' : '▲'}</span>
          </div>
        </button>

        {/* Drawer Body */}
        <div className="nli-drawer-body">
          {/* Section 1: Detected Language */}
          {isLanguageTraced ? (
            <div className="nli-drawer-section">
              <div className="nli-drawer-section-title">Detected Mother-Tongue Influence</div>
              <div className="nli-detected-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span className="nli-detected-flag">{analysisResult.detected.flag}</span>
                  <div style={{ flex: 1 }}>
                    <div className="nli-detected-name">{analysisResult.detected.name}</div>
                    <div className="nli-detected-sub">Mother-Tongue (L1) · {analysisResult.detected.confidence}% confidence</div>
                    <div className="nli-detected-bar-wrap" style={{ marginTop: '6px' }}>
                      <div
                        className="nli-detected-bar"
                        style={{ width: `${analysisResult.detected.confidence}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="nli-drawer-section">
              <div className="nli-drawer-section-title">Detected Mother-Tongue Influence</div>
              <div className="nli-no-data">
                {isAnalyzing ? 'Awaiting analysis...' : "Can't trace your native language. Proceed to chat."}
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
          {analysisComplete && analysisResult?.highlightedHtml && (
            <div className="nli-drawer-section">
              <div className="nli-drawer-section-title">Mother-Tongue Transfer Markers in Input</div>
              <div
                className="nli-highlighted-text"
                dangerouslySetInnerHTML={{ __html: analysisResult.highlightedHtml }}
              />
            </div>
          )}

          {/* Section 4: Marker Log */}
          <div className="nli-drawer-section">
            <div className="nli-drawer-section-title">Linguistic Markers Triggered</div>
            <div className="nli-markers-log">
              {!analysisResult?.rawMatches || analysisResult.rawMatches.length === 0 ? (
                <div className="nli-no-data">No mother-tongue transfer markers triggered yet.</div>
              ) : (
                analysisResult.rawMatches.map((match, i) => {
                  const langObj = NLI_LANGUAGES.find(l => l.code === match.langCode);
                  return (
                    <div key={i} className="nli-marker-card">
                      <div className="nli-marker-rule">
                        <span>{match.reason}</span>
                        <span className="nli-marker-origin">{langObj?.name || 'Unknown'} Origin</span>
                      </div>
                      <div className="nli-marker-desc">{match.description}</div>
                      <div className="nli-marker-match">"{match.matchedText}"</div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

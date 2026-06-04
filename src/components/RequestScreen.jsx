'use client';
// src/components/RequestScreen.jsx
// Screen 2: User speaks → audio sent to HuBERT API / or types text (rule-based fallback)

import React, { useRef, useEffect, useState } from 'react';
import WaveVisualizer from './WaveVisualizer';
import { NLI_LANGUAGES } from '../data/nliRules';

export default function RequestScreen({
  inputText, setInputText, isListening, kioskStatus,
  onToggleListening, onSubmit,
  analysisResult, analysisComplete,
}) {
  const inputRef = useRef(null);
  const [recordSecs, setRecordSecs] = useState(0);

  // Countdown timer while recording
  useEffect(() => {
    if (isListening) {
      setRecordSecs(0);
      const timer = setInterval(() => setRecordSecs(s => s + 1), 1000);
      return () => clearInterval(timer);
    }
  }, [isListening]);

  useEffect(() => {
    if (!isListening && inputRef.current) inputRef.current.focus();
  }, [isListening]);

  const handleKey = (e) => {
    if (e.key === 'Enter') onSubmit(inputText);
  };

  const isAnalyzing = kioskStatus === 'thinking';
  const showResults = analysisComplete && analysisResult;

  const displayProbs = showResults
    ? analysisResult.probabilities.slice(0, 7)
    : NLI_LANGUAGES.slice(0, 7).map(l => ({ ...l, confidence: 0 }));

  return (
    <div className="kiosk-screen screen-request active" id="screenRequest">

      {/* Section: Voice */}
      <div className="request-voice-section">
        <p className="request-prompt">
          {isListening
            ? `🎙️ Recording... ${recordSecs}s — Tap again to stop & analyze`
            : isAnalyzing
              ? '⚙️ Sending audio to HuBERT model...'
              : 'Tap the microphone and speak your request in English'}
        </p>

        <div className="voice-button-container">
          <button
            className={`voice-btn${isListening ? ' listening' : ''}`}
            onClick={onToggleListening}
            title={isListening ? 'Tap to Stop Recording' : 'Tap to Start Recording'}
            disabled={isAnalyzing}
          >
            {isListening ? '⏹' : '🎙️'}
          </button>
          <WaveVisualizer active={isListening} />
        </div>

        {/* Model badge */}
        <div className="model-badge">
          <span className="model-badge-dot" />
          HuBERT MLP Model — <span style={{ color: 'hsl(var(--primary))' }}>Audio-based NLI</span>
        </div>
      </div>

      {/* Divider */}
      <div className="text-input-divider">Or type your request</div>

      {/* Text Input */}
      <div className="text-console-box">
        <span className="console-icon">⌨️</span>
        <input
          ref={inputRef}
          type="text"
          className="text-console-input"
          placeholder="e.g., 'Where is the baggage claim?' or 'Yesterday my flight cancel...'"
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

      {/* NLI Analysis Results — appears inline after submission */}
      {(isAnalyzing || showResults) && (
        <div className={`analysis-panel${analysisComplete ? ' analysis-ready' : ''}`}>
          <div className="analysis-panel-header">
            <span className="analysis-icon">📊</span>
            <span>{isAnalyzing ? 'Analyzing your language patterns...' : 'Language Analysis Complete'}</span>
            {analysisComplete && analysisResult?.detected && (
              <span className="analysis-detected-badge">
                {analysisResult.detected.flag} {analysisResult.detected.name} detected — {analysisResult.detected.confidence}%
              </span>
            )}
          </div>

          <div className="analysis-prob-list">
            {displayProbs.map((lang) => (
              <div key={lang.code} className="analysis-prob-row">
                <span className="analysis-prob-flag">{lang.flag}</span>
                <span className="analysis-prob-name">{lang.name}</span>
                <div className="analysis-prob-track">
                  <div
                    className="analysis-prob-bar"
                    style={{
                      width: `${lang.confidence}%`,
                      transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                      background: lang.confidence > 0
                        ? 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))'
                        : 'rgba(255,255,255,0.05)',
                    }}
                  />
                </div>
                <span className="analysis-prob-val">{lang.confidence}%</span>
              </div>
            ))}
          </div>

          {/* Highlighted input text with L1 markers */}
          {showResults && analysisResult.highlightedHtml && (
            <div className="analysis-highlighted-box">
              <div className="analysis-highlighted-label">Detected L1 Transfer Patterns:</div>
              <div
                className="analysis-highlighted-text"
                dangerouslySetInnerHTML={{ __html: analysisResult.highlightedHtml }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

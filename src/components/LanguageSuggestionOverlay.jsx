'use client';
// src/components/LanguageSuggestionOverlay.jsx
// Appears after analysis on the REQUEST screen

import React from 'react';

export default function LanguageSuggestionOverlay({ visible, suggestionData, onSelectLanguage, onDecline }) {
  if (!suggestionData) return null;
  const { detected } = suggestionData;

  return (
    <div className={`suggestion-overlay${visible ? ' active' : ''}`}>
      <div className="suggestion-card">

        {/* Header */}
        <div className="suggestion-orb-holder">
          <span className="suggestion-flag-icon">{detected?.flag || '🌐'}</span>
        </div>
        <div className="suggestion-confidence-tag">
          {detected?.confidence}% Confidence
        </div>
        <h3 className="suggestion-title">
          Native Language Detected: {detected?.name}
        </h3>
        <p className="suggestion-desc">
          Our NLI engine analyzed your input and identified{' '}
          <strong>{detected?.name} ({detected?.nativeName})</strong> language
          transfer patterns. Would you like to continue in your native language?
        </p>

        {/* Language Options */}
        <div className="suggestion-options-grid">
          {(detected?.choices || []).map((choice) => (
            <button
              key={choice.code}
              className="suggest-lang-option-btn"
              onClick={() => onSelectLanguage(choice.code)}
            >
              <div className="suggest-lang-left">
                <span className="suggest-lang-flag">{choice.flag}</span>
                <div className="suggest-lang-names">
                  <span className="suggest-lang-native">{choice.nativeName}</span>
                  <span className="suggest-lang-standard">Proceed in {choice.name}</span>
                </div>
              </div>
              <span className="suggest-lang-match">{choice.desc}</span>
            </button>
          ))}
        </div>

        {/* Decline / Keep English */}
        <div className="suggestion-actions" style={{ marginTop: '12px', width: '100%' }}>
          <button className="btn-secondary" style={{ width: '100%' }} onClick={onDecline}>
            🇬🇧 &nbsp;Continue in English
          </button>
        </div>
      </div>
    </div>
  );
}

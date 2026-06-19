'use client';
// src/components/LanguageSuggestionOverlay.jsx
// Appears after analysis on the REQUEST screen

import React, { useState } from 'react';

export default function LanguageSuggestionOverlay({ visible, suggestionData, onSelectLanguage, onDecline }) {
  const [showOthers, setShowOthers] = useState(false);
  if (!suggestionData) return null;
  const { detected, probabilities } = suggestionData;
  const isLanguageTraced = !!detected;

  const otherLangs = (probabilities || [])
    .filter(p => {
      if (p.confidence <= 0) return false;
      if (detected) {
        if (p.code === detected.code || p.label === detected.label) return false;
        if (detected.choices && detected.choices.some(choice => choice.code === p.code)) return false;
      }
      return true;
    })
    .slice(0, 3); // Limit to top 3 other languages to avoid cluttering the UI

  const topTraced = probabilities && probabilities.length > 0 ? probabilities[0] : null;
  const flag = detected ? detected.flag : (topTraced ? topTraced.flag : '🌐');
  const title = detected 
    ? `Native Language Detected: ${detected.name}`
    : `Language Patterns Detected`;

  const description = detected ? (
    <>
      Our NLI engine analyzed your input and identified{' '}
      <strong>{detected.name} ({detected.nativeName})</strong> language
      transfer patterns. Would you like to continue in your native language?
    </>
  ) : (
    <>
      Our NLI engine noticed possible mother-tongue influence.
      Would you like to proceed in one of these languages?
    </>
  );

  return (
    <div className={`suggestion-overlay${visible ? ' active' : ''}`}>
      <div className="suggestion-card" style={{ maxWidth: '520px' }}>

        {/* Header */}
        <div className="suggestion-orb-holder">
          <span className="suggestion-flag-icon">{flag}</span>
        </div>
        {detected && (
          <div className="suggestion-confidence-tag">
            {detected.confidence}% Confidence
          </div>
        )}
        <h3 className="suggestion-title">
          {title}
        </h3>
        <p className="suggestion-desc" style={{ marginBottom: '16px' }}>
          {description}
        </p>

        {/* Probability Trace */}
        <div style={{ width: '100%', margin: '8px 0 16px', textAlign: 'left', background: 'rgba(255,255,255,0.02)', padding: '12px 16px', borderRadius: '12px', border: '1px solid hsla(var(--border-glass))' }}>
          <div style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
            Mother-Tongue Probability Trace:
          </div>
          <div className="analysis-prob-list" style={{ gap: '6px' }}>
            {(probabilities || []).slice(0, 5).map((lang) => (
              <div key={lang.code} className="analysis-prob-row" style={{ gridTemplateColumns: isLanguageTraced ? '20px 70px 1fr 35px' : '20px 70px 1fr', gap: '8px', fontSize: '0.72rem' }}>
                <span className="analysis-prob-flag">{lang.flag}</span>
                <span className="analysis-prob-name" style={{ color: 'hsl(var(--text-secondary))' }}>{lang.name}</span>
                <div className="analysis-prob-track" style={{ height: '5px' }}>
                  <div
                    className={`analysis-prob-bar${isLanguageTraced ? '' : ' loading'}`}
                    style={{
                      width: isLanguageTraced ? `${lang.confidence}%` : '100%',
                      height: '100%',
                      background: isLanguageTraced && lang.confidence > 0
                        ? 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))'
                        : 'rgba(255,255,255,0.05)',
                    }}
                  />
                </div>
                {isLanguageTraced && (
                  <span className="analysis-prob-val" style={{ fontSize: '0.7rem' }}>{lang.confidence}%</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Primary Detected Language Options */}
        {detected && (
          <div className="suggestion-options-grid">
            {(detected.choices || []).map((choice) => (
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
                <span className="suggest-lang-match">{choice.desc || `${detected.confidence}% Match`}</span>
              </button>
            ))}
          </div>
        )}

        {/* Collapsible Section Toggle for Other Traced Languages */}
        {otherLangs.length > 0 && (
          <button
            className="btn-secondary"
            style={{
              width: '100%',
              marginTop: '12px',
              padding: '10px 14px',
              fontSize: '0.8rem',
              fontWeight: '600',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid hsla(var(--border-glass))',
              borderRadius: 'var(--radius-md)',
              color: 'hsl(var(--text-secondary))',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
            onClick={() => setShowOthers(!showOthers)}
          >
            {showOthers ? 'Hide Alternative Suggestions ▲' : 'Show Alternative Suggestions ▼'}
          </button>
        )}

        {/* Other Traced Languages Grid (collapsible) */}
        {otherLangs.length > 0 && showOthers && (
          <div className="suggestion-options-grid" style={{ width: '100%', marginTop: '10px' }}>
            {otherLangs.map((lang) => (
              <button
                key={lang.code}
                className="suggest-lang-option-btn"
                onClick={() => onSelectLanguage(lang.code)}
              >
                <div className="suggest-lang-left">
                  <span className="suggest-lang-flag">{lang.flag}</span>
                  <div className="suggest-lang-names">
                    <span className="suggest-lang-native">{lang.nativeName || lang.name}</span>
                    <span className="suggest-lang-standard">Proceed in {lang.name}</span>
                  </div>
                </div>
                <span className="suggest-lang-match">{lang.confidence}% Confidence</span>
              </button>
            ))}
          </div>
        )}

        {/* Decline / Keep English */}
        <div className="suggestion-actions" style={{ marginTop: '16px', width: '100%' }}>
          <button className="btn-secondary" style={{ width: '100%' }} onClick={onDecline}>
            🇬🇧 &nbsp;Continue in English
          </button>
        </div>
      </div>
    </div>
  );
}

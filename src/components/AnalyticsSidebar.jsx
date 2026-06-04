'use client';
// src/components/AnalyticsSidebar.jsx
import React from 'react';
import { NLI_LANGUAGES } from '../data/nliRules';

export default function AnalyticsSidebar({ visible, highlightedHtml, probabilities, rawMatches }) {
  const displayProbs = probabilities.length > 0
    ? probabilities.slice(0, 5)
    : NLI_LANGUAGES.slice(0, 5).map(l => ({ ...l, confidence: 0 }));

  return (
    <aside
      className="kiosk-sidebar-analytics"
      id="analytics-sidebar"
      style={{ display: 'flex', opacity: visible ? 1 : 0, visibility: visible ? 'visible' : 'hidden', transition: 'opacity 0.4s, visibility 0.4s' }}
    >
      <h3 className="sidebar-title">
        <span>📊</span> NLI Diagnostics Dashboard
      </h3>

      {/* Section 1: Parsed Input Highlights */}
      <div className="sidebar-section">
        <h4 className="sidebar-section-title">Parsed Input (L1 Markers Highlighted)</h4>
        <div className="transcription-panel">
          {highlightedHtml ? (
            <span dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
          ) : (
            <span className="no-input">Awaiting voice or typing input...</span>
          )}
        </div>
      </div>

      {/* Section 2: Probability Bars */}
      <div className="sidebar-section">
        <h4 className="sidebar-section-title">L1 Language Probability Models</h4>
        <div className="probability-list">
          {displayProbs.map((lang) => (
            <div key={lang.code} className="prob-item">
              <div className="prob-header">
                <span className="prob-name">{lang.flag} {lang.name} ({lang.nativeName})</span>
                <span className="prob-value">{lang.confidence}%</span>
              </div>
              <div className="prob-track">
                <div
                  className="prob-bar"
                  style={{ width: `${lang.confidence}%`, background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Linguistic Markers Log */}
      <div className="sidebar-section">
        <h4 className="sidebar-section-title">Linguistic Markers Triggered</h4>
        <div className="markers-log">
          {rawMatches.length === 0 ? (
            <div className="no-markers-detected">No linguistic transfer errors triggered yet.</div>
          ) : (
            rawMatches.map((match, i) => {
              const langObj = NLI_LANGUAGES.find(l => l.code === match.langCode);
              return (
                <div key={i} className="marker-log-card detected">
                  <div className="marker-log-rule">
                    <span>{match.reason}</span>
                    <span style={{ color: 'hsl(var(--primary))' }}>{langObj?.name || 'Unknown'} Origin</span>
                  </div>
                  <div className="marker-log-desc">{match.description}</div>
                  <div className="marker-log-match">Match: &quot;{match.matchedText}&quot;</div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </aside>
  );
}

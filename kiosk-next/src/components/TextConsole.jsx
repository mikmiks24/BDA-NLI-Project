'use client';
// src/components/TextConsole.jsx
import React, { useRef } from 'react';
import { PRESETS } from '../hooks/useKiosk';

export default function TextConsole({ inputText, setInputText, onSubmit, onPreset }) {
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSubmit(inputText);
  };

  const handlePreset = (preset) => {
    setInputText(preset.text);
    onPreset(preset);
  };

  return (
    <>
      <div className="text-input-divider">Or Type in English</div>

      <div className="text-console-box">
        <span className="console-icon">⌨️</span>
        <input
          ref={inputRef}
          type="text"
          className="text-console-input"
          id="textConsoleInput"
          placeholder="Say e.g., 'Yesterday I go terminal two but my flight cancel...'"
          autoComplete="off"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="console-submit-btn" onClick={() => onSubmit(inputText)}>
          Analyze
        </button>
      </div>

      {/* Preset Accent Simulator */}
      <div className="simulator-drawer">
        <div className="simulator-header">
          <div className="simulator-title">
            <span>💡</span> Native Language Transfer Simulator (Accents)
          </div>
          <div className="simulator-subtitle">Click a preset below to instantly inject L1 syntactic/grammatical patterns</div>
        </div>
        <div className="simulator-grid">
          {PRESETS.map((preset) => (
            <button
              key={preset.lang}
              className="preset-btn"
              onClick={() => handlePreset(preset)}
            >
              <span className="preset-lang">{preset.flag} {preset.label}</span>
              <span className="preset-snippet">{preset.snippet}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

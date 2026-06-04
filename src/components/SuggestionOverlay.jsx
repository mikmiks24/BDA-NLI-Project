// src/components/SuggestionOverlay.jsx
import React from 'react';
import { useTranslation } from '../context/TranslationContext';

export default function SuggestionOverlay({ onClose }) {
  const { languageData } = useTranslation();
  const suggestions = [
    languageData?.welcomePill || 'English',
    'Option 2',
    'Option 3',
  ];

  return (
    <div className="suggestion-overlay active" onClick={onClose}>
      <div className="suggestion-content" onClick={(e) => e.stopPropagation()}>
        <h3>{languageData?.welcomeTitle || 'Suggestions'}</h3>
        <ul>
          {suggestions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

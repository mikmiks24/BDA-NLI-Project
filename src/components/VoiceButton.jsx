// src/components/VoiceButton.jsx
import React from 'react';
import { useTranslation } from '../context/TranslationContext';

export default function VoiceButton({ onClick }) {
  const { languageData } = useTranslation();
  return (
    <button className="voice-btn" onClick={onClick}>
      🎤
    </button>
  );
}

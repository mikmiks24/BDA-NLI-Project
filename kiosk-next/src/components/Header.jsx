'use client';
// src/components/Header.jsx

import React from 'react';
import StatusBadge from './StatusBadge';
import { getBaseLangCode, NLI_LANGUAGES } from '../data/nliRules';

import { getAssetPath } from '../utils/paths';

function getLangPill(langCode) {
  if (!langCode || langCode === 'en') return null;
  if (langCode === 'en-PH') return { flag: '🇵🇭', name: 'English (PH)' };
  if (langCode === 'ceb') return { flag: '🇵🇭', name: 'Cebuano' };
  if (langCode === 'ms') return { flag: '🇲🇾', name: 'Melayu' };
  const base = getBaseLangCode(langCode);
  const lang = NLI_LANGUAGES.find(l => l.code === base);
  if (lang) return { flag: lang.flag, name: lang.nativeName };
  return null;
}

export default function Header({ kioskStatus, currentScreen, selectedLanguage }) {
  const pill = currentScreen === 'CHAT' ? getLangPill(selectedLanguage) : null;

  return (
    <header className="kiosk-header">
      <div className="kiosk-brand">
        <img src={getAssetPath('/assets/logo.svg')} alt="Brand logo" className="kiosk-logo-img" />
        <h1 className="kiosk-title-text">LINGUA</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {pill && (
          <div className="active-lang-pill">
            <span>{pill.flag}</span>
            <span>{pill.name}</span>
          </div>
        )}
        <StatusBadge status={kioskStatus} />
      </div>
    </header>
  );
}

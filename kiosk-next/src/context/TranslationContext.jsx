'use client';
// src/context/TranslationContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { languageData as LANG_DATA } from '../data/languageData';

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // default English
  const languageData = LANG_DATA[selectedLanguage] || {};

  const setLanguage = (lang) => {
    setSelectedLanguage(lang);
    // Hide analytics sidebar on language switch
    const sidebar = document.querySelector('.kiosk-sidebar-analytics');
    if (sidebar) {
      sidebar.classList.remove('active');
      sidebar.style.display = 'none';
    }
  };

  return (
    <TranslationContext.Provider value={{ selectedLanguage, setLanguage, languageData }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}

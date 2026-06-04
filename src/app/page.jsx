// src/app/page.jsx
import React from 'react';
import { TranslationProvider } from '../context/TranslationContext';
import KioskWrapper from '../components/KioskWrapper';

export default function HomePage() {
  return (
    <TranslationProvider>
      <KioskWrapper />
    </TranslationProvider>
  );
}

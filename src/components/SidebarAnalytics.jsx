// src/components/SidebarAnalytics.jsx
import React from 'react';
import { useTranslation } from '../context/TranslationContext';

export default function SidebarAnalytics() {
  const { languageData } = useTranslation();
  // Simple placeholder content; you can expand with actual analytics UI later.
  return (
    <aside className="kiosk-sidebar-analytics" id="analytics-sidebar">
      <h3 className="sidebar-title">
        {languageData?.supportTitle || 'Analytics'}
      </h3>
      <div className="sidebar-section">
        <p>Analytics content goes here.</p>
      </div>
    </aside>
  );
}


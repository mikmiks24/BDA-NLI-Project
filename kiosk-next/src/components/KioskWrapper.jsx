'use client';
// src/components/KioskWrapper.jsx — New 3-screen orchestrator


import React from 'react';
import useKiosk from '../hooks/useKiosk';
import BezelTop from './BezelTop';
import Header from './Header';
import WelcomeScreen from './WelcomeScreen';
import RequestScreen from './RequestScreen';
import ChatScreen from './ChatScreen';
import LanguageSuggestionOverlay from './LanguageSuggestionOverlay';
import { useState, useEffect } from 'react';
import AnalyticsSidebar from './AnalyticsSidebar';

export default function KioskWrapper() {
  const kiosk = useKiosk();
  const [analyticsVisible, setAnalyticsVisible] = useState(false);
  const [analyticsManualOpen, setAnalyticsManualOpen] = useState(false);

  useEffect(() => {
    if (kiosk.analysisComplete && kiosk.currentScreen === 'REQUEST') {
      setAnalyticsVisible(false); // Disabled duplicate sidebar to prevent overlap with RequestScreen's inline analysis-panel
    }
  }, [kiosk.analysisComplete, kiosk.currentScreen]);

  useEffect(() => {
    if (kiosk.currentScreen === 'CHAT') {
      setAnalyticsVisible(false);
    }
  }, [kiosk.currentScreen]);

  return (
    <div className="kiosk-wrapper" id="kioskWrapper">
      <BezelTop status={kiosk.kioskStatus} />

      <Header
        kioskStatus={kiosk.kioskStatus}
        currentScreen={kiosk.currentScreen}
        selectedLanguage={kiosk.selectedLanguage}
      />

      <main className="kiosk-body kiosk-body-single">

        {/* SCREEN 1: Welcome */}
        <WelcomeScreen 
          active={kiosk.currentScreen === 'WELCOME'} 
          onProceed={kiosk.goToRequest} 
        />

        {/* SCREEN 2: Request (Voice/Text → NLI Analysis) */}
        <RequestScreen
          active={kiosk.currentScreen === 'REQUEST'}
          inputText={kiosk.inputText}
          setInputText={kiosk.setInputText}
          isListening={kiosk.isListening}
          isInterimTranscript={kiosk.isInterimTranscript}
          kioskStatus={kiosk.kioskStatus}
          onToggleListening={kiosk.toggleListening}
          onSubmit={(text) => {
            kiosk.setUserRequest(text);
            kiosk.submitRequest(text);
          }}
          analysisResult={kiosk.analysisResult}
          analysisComplete={kiosk.analysisComplete}
        />

        {/* SCREEN 3: Chat */}
        <ChatScreen
          active={kiosk.currentScreen === 'CHAT'}
          langCode={kiosk.selectedLanguage}
          chatMessages={kiosk.chatMessages}
          onSend={kiosk.sendChatMessage}
          onReset={kiosk.resetSession}
          analysisResult={kiosk.analysisResult}
          onChangeLanguage={kiosk.changeLanguage}
          kioskStatus={kiosk.kioskStatus}
          showToast={kiosk.showToast}
        />

        {/* Language Suggestion Overlay — shown over REQUEST screen after analysis */}
        <LanguageSuggestionOverlay
          visible={kiosk.showSuggestion}
          suggestionData={kiosk.suggestionData}
          onSelectLanguage={(code) => kiosk.proceedToChat(code)}
          onDecline={() => kiosk.proceedToChat('en')}
        />

        <AnalyticsSidebar 
         visible={analyticsVisible}
         highlightedHtml={
          kiosk.analysisResult?.highlightedHtml || ''
         }
         probabilities={
          kiosk.analysisResult?.probabilities || []
         }
         rawMatches={
          kiosk.analysisResult?.rawMatches || []
         }
         detected={kiosk.analysisResult?.detected}
        />
        </main>

      {/* Toast Notifications */}
      {kiosk.toast && (
        <div className={`kiosk-toast${kiosk.toast.type === 'error' ? ' toast-error' : ''}`}>
          <span>{kiosk.toast.type === 'error' ? '⚠️' : 'ℹ️'}</span>
          <span>{kiosk.toast.message}</span>
        </div>
      )}
    </div>
  );
}

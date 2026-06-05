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
import { useState } from 'react';
import AnalyticsSidebar from './AnalyticsSidebar';

export default function KioskWrapper() {
  const kiosk = useKiosk();
  const [analyticsVisible, setAnalyticsVisible] = useState(false);

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
        {kiosk.currentScreen === 'WELCOME' && (
          <WelcomeScreen onProceed={kiosk.goToRequest} />
        )}

        {/* SCREEN 2: Request (Voice/Text → NLI Analysis) */}
        {kiosk.currentScreen === 'REQUEST' && (
          <RequestScreen
            inputText={kiosk.inputText}
            setInputText={kiosk.setInputText}
            isListening={kiosk.isListening}
            kioskStatus={kiosk.kioskStatus}
            onToggleListening={kiosk.toggleListening}
            onSubmit={kiosk.submitRequest}
            analysisResult={kiosk.analysisResult}
            analysisComplete={kiosk.analysisComplete}
          />
        )}

        {/* SCREEN 3: Chat */}
        {kiosk.currentScreen === 'CHAT' && (
          <ChatScreen
            langCode={kiosk.selectedLanguage}
            chatMessages={kiosk.chatMessages}
            onSend={kiosk.sendChatMessage}
            onReset={kiosk.resetSession}
            onToggleAnalytics={() =>
              setAnalyticsVisible(!analyticsVisible)
            }
          />
        )}

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

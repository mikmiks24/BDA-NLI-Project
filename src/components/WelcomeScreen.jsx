'use client';
// src/components/WelcomeScreen.jsx — Clean "Tap to Proceed" landing screen

import React from 'react';

export default function WelcomeScreen({ onProceed }) {
  return (
    <div className="kiosk-screen screen-welcome active" id="screenWelcome">

      {/* Animated Airport Logo */}
      <div className="welcome-logo-wrap">
        <div className="welcome-orb-outer">
          <div className="welcome-orb-inner">
            <span className="welcome-plane">✈️</span>
          </div>
        </div>
        <div className="welcome-orb-ring ring1" />
        <div className="welcome-orb-ring ring2" />
        <div className="welcome-orb-ring ring3" />
      </div>

      <h2 className="welcome-title">Welcome to the Smart Airport Kiosk</h2>
      <p className="welcome-subtitle">
        Our intelligent system will adapt to your native language.
        <br />
        Speak or type your request — we&apos;ll take care of the rest.
      </p>

      <button className="welcome-proceed-btn" onClick={onProceed}>
        <span className="proceed-icon">▶</span>
        Tap to Proceed
      </button>

      <div className="welcome-lang-strip">
        <span>🇵🇭</span><span>🇨🇳</span><span>🇰🇷</span><span>🇯🇵</span>
        <span>🇮🇩</span><span>🇵🇰</span><span>🇹🇭</span><span>🇬🇧</span>
      </div>
      <p className="welcome-lang-label">Serving travelers in 8+ languages</p>
    </div>
  );
}

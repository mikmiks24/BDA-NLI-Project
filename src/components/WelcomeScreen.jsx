'use client';
// src/components/WelcomeScreen.jsx — Clean "Tap to Proceed" landing screen

import React from 'react';

export default function WelcomeScreen({ active, onProceed }) {
  return (
    <div className={`kiosk-screen screen-welcome${active ? ' active' : ''}`} id="screenWelcome">

      {/* Logo */}
      <div className="welcome-logo-wrap">
          <img
            src="/assets/robot_icon.gif"
            alt="Robo Logo"
            className="welcome-logo-gif"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
      </div>

      <h2 className="welcome-title" style={{ opacity: 1 }}>WELCOME!</h2>
      <p className="welcome-subtitle" style={{ opacity: 0.95, letterSpacing: '0.5px' }}>
        Linguistic Identification & Native Guide for Universal Assistance
      </p>

      <button className="welcome-proceed-btn" onClick={onProceed}>
        <span className="proceed-icon">▶</span>
        Tap to Proceed
      </button>
    </div>
  );
}

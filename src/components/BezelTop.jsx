'use client';
// src/components/BezelTop.jsx
import React from 'react';

export default function BezelTop({ status }) {
  return (
    <div className="kiosk-bezel-top">
      <div className="kiosk-camera" />
      <div className={`kiosk-led${status !== 'ready' ? ` ${status}` : ''}`} />
    </div>
  );
}

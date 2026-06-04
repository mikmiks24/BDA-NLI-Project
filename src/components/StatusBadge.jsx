'use client';
// src/components/StatusBadge.jsx
import React from 'react';

const STATUS_LABELS = {
  ready: 'Ready',
  listening: 'Listening...',
  thinking: 'Analyzing...',
  prompt: 'Option Found',
};

export default function StatusBadge({ status }) {
  return (
    <div className="kiosk-status-badge">
      <span className={`status-indicator${status !== 'ready' ? ` ${status}` : ''}`} />
      <span>{STATUS_LABELS[status] || 'Ready'}</span>
    </div>
  );
}

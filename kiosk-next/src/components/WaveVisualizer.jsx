'use client';
// src/components/WaveVisualizer.jsx
import React from 'react';

export default function WaveVisualizer({ active }) {
  return (
    <div className={`wave-visualizer${active ? ' active' : ''}`}>
      {[...Array(8)].map((_, i) => (
        <div key={i} className="wave-bar" />
      ))}
    </div>
  );
}

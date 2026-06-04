'use client';
// src/components/ChatScreen.jsx
// Screen 3: Full-screen translated chatbox — the main service interaction

import React, { useState, useRef, useEffect } from 'react';
import { NLI_LANGUAGES, getBaseLangCode } from '../data/nliRules';

// Determine display info for the active language
function getLangDisplay(langCode) {
  if (!langCode || langCode === 'en') return { flag: '🇬🇧', name: 'English', placeholder: 'Ask e.g., "Where is baggage claim?" or "Which gate is my flight?"' };
  if (langCode === 'en-PH') return { flag: '🇵🇭', name: 'English (PH)', placeholder: 'Ask about flights, gates, baggage, or transit tickets...' };
  if (langCode === 'ceb') return { flag: '🇵🇭', name: 'Cebuano', placeholder: 'Pangutana bahin sa imong flight, gate, o bagahe...' };
  if (langCode === 'ms') return { flag: '🇲🇾', name: 'Bahasa Melayu', placeholder: 'Tanya tentang penerbangan, pintu, atau bagasi anda...' };

  const base = getBaseLangCode(langCode);
  const lang = NLI_LANGUAGES.find(l => l.code === base);
  if (!lang) return { flag: '🌐', name: langCode, placeholder: 'Type your question...' };

  const placeholders = {
    tl: 'Magtanong tungkol sa iyong flight, gate, o bagahe...',
    zh: '请输入您的问题，如航班、登机口、行李...',
    ko: '항공편, 탑승구, 수하물에 대해 질문하세요...',
    ja: '航班、搭乗口、手荷物についてご質問ください...',
    id: 'Tanya tentang penerbangan, gerbang, atau bagasi Anda...',
    ur: 'اپنی پرواز، گیٹ، یا سامان کے بارے میں پوچھیں...',
    th: 'ถามเกี่ยวกับเที่ยวบิน ประตู หรือสัมภาระของคุณ...',
  };

  return { flag: lang.flag, name: lang.nativeName, placeholder: placeholders[base] || 'Type your question...' };
}

// Quick-reply suggestion chips based on language
function getQuickReplies(langCode) {
  const base = getBaseLangCode(langCode);
  const en = ['Where is baggage claim?', 'Which gate is A-12?', 'Where are restrooms?', 'Buy transit ticket'];
  const replies = {
    tl: ['Nasaan ang baggage claim?', 'Aling gate ang A-12?', 'Nasaan ang banyo?', 'Bumili ng tiket'],
    zh: ['行李提取在哪里？', 'A-12登机口在哪？', '洗手间在哪里？', '购买交通票'],
    ko: ['수하물 수취소는 어디?', 'A-12 탑승구는?', '화장실은 어디?', '티켓 구매'],
    ja: ['手荷物受取所はどこ？', 'A-12搭乗口はどこ？', 'お手洗いはどこ？', 'チケット購入'],
    id: ['Di mana pengambilan bagasi?', 'Gerbang A-12 di mana?', 'Di mana toilet?', 'Beli tiket'],
    ur: ['سامان کہاں ملے گا؟', 'گیٹ A-12 کہاں ہے؟', 'واش روم کہاں ہے؟', 'ٹکٹ خریدیں'],
    th: ['รับกระเป๋าที่ไหน?', 'ประตู A-12 อยู่ที่ไหน?', 'ห้องน้ำอยู่ที่ไหน?', 'ซื้อตั๋ว'],
  };
  return replies[base] || en;
}

export default function ChatScreen({ langCode, chatMessages, onSend, onReset }) {
  const [input, setInput] = useState('');
  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  const lang = getLangDisplay(langCode);
  const quickReplies = getQuickReplies(langCode);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [chatMessages]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleQuickReply = (text) => {
    onSend(text);
  };

  return (
    <div className="kiosk-screen screen-chat active" id="screenChat">

      {/* Chat Header */}
      <div className="chat-screen-header">
        <div className="chat-lang-info">
          <span className="chat-lang-flag">{lang.flag}</span>
          <div>
            <div className="chat-lang-name">{lang.name}</div>
            <div className="chat-lang-sub">Airport Helpdesk Assistant</div>
          </div>
        </div>
        <div className="chat-status-dot" />
      </div>

      {/* Messages */}
      <div className="chat-messages-window" ref={messagesRef}>
        {chatMessages.map((msg, i) => (
          <div key={i} className={`chat-bubble-wrap ${msg.sender}`}>
            {msg.sender === 'bot' && (
              <div className="chat-bot-avatar">🤖</div>
            )}
            <div className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Reply Chips */}
      <div className="chat-quick-replies">
        {quickReplies.map((reply, i) => (
          <button key={i} className="quick-reply-chip" onClick={() => handleQuickReply(reply)}>
            {reply}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <div className="chat-input-area">
        <input
          ref={inputRef}
          type="text"
          className="chat-input-field"
          placeholder={lang.placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
        />
        <button className="chat-send-button" onClick={handleSend}>
          ➤
        </button>
      </div>

      {/* Footer */}
      <div className="chat-screen-footer">
        <span className="chat-footer-hint">🟢 Terminal agents are available if you need physical assistance</span>
        <button className="btn-reset-small" onClick={onReset}>↩ New Session</button>
      </div>
    </div>
  );
}

'use client';
// src/components/ServiceModals.jsx
// Simple popup modals for Weather, Map/Directions, and Translation services

import React, { useState, useEffect } from 'react';

// ─── WEATHER MODAL ───
function WeatherModal({ onClose }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try fetching real weather from wttr.in (free, no API key)
    fetch('https://wttr.in/?format=j1')
      .then(r => r.json())
      .then(data => {
        const current = data.current_condition?.[0];
        const forecast = data.weather?.slice(0, 3) || [];
        setWeather({
          temp: current?.temp_C || '—',
          feelsLike: current?.FeelsLikeC || '—',
          desc: current?.weatherDesc?.[0]?.value || 'Unknown',
          humidity: current?.humidity || '—',
          wind: current?.windspeedKmph || '—',
          windDir: current?.winddir16Point || '',
          uv: current?.uvIndex || '—',
          visibility: current?.visibility || '—',
          area: data.nearest_area?.[0]?.areaName?.[0]?.value || 'Your Location',
          country: data.nearest_area?.[0]?.country?.[0]?.value || '',
          forecast: forecast.map(d => ({
            date: d.date,
            maxTemp: d.maxtempC,
            minTemp: d.mintempC,
            desc: d.hourly?.[4]?.weatherDesc?.[0]?.value || '',
            icon: getWeatherIcon(d.hourly?.[4]?.weatherCode),
          })),
          icon: getWeatherIcon(current?.weatherCode),
        });
        setLoading(false);
      })
      .catch(() => {
        // Fallback mock data
        setWeather({
          temp: '28', feelsLike: '30', desc: 'Partly Cloudy',
          humidity: '72', wind: '15', windDir: 'NE', uv: '6', visibility: '10',
          area: 'Your Location', country: '',
          icon: '⛅',
          forecast: [
            { date: 'Tomorrow', maxTemp: '30', minTemp: '24', desc: 'Sunny', icon: '☀️' },
            { date: 'Day After', maxTemp: '29', minTemp: '23', desc: 'Cloudy', icon: '☁️' },
            { date: 'In 3 Days', maxTemp: '27', minTemp: '22', desc: 'Light Rain', icon: '🌧️' },
          ]
        });
        setLoading(false);
      });
  }, []);

  return (
    <div className="svc-modal-overlay active" onClick={onClose}>
      <div className="svc-modal-card" onClick={e => e.stopPropagation()}>
        <div className="svc-modal-header">
          <span className="svc-modal-title">🌤️ Weather Forecast</span>
          <button className="svc-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="svc-modal-body">
          {loading ? (
            <div className="svc-loading">Loading weather data...</div>
          ) : weather ? (
            <>
              <div className="weather-current">
                <div className="weather-main">
                  <span className="weather-icon-big">{weather.icon}</span>
                  <div>
                    <div className="weather-temp">{weather.temp}°C</div>
                    <div className="weather-desc">{weather.desc}</div>
                    <div className="weather-location">{weather.area}{weather.country ? `, ${weather.country}` : ''}</div>
                  </div>
                </div>
                <div className="weather-details-grid">
                  <div className="weather-detail"><span className="weather-detail-label">Feels Like</span><span className="weather-detail-val">{weather.feelsLike}°C</span></div>
                  <div className="weather-detail"><span className="weather-detail-label">Humidity</span><span className="weather-detail-val">{weather.humidity}%</span></div>
                  <div className="weather-detail"><span className="weather-detail-label">Wind</span><span className="weather-detail-val">{weather.wind} km/h {weather.windDir}</span></div>
                  <div className="weather-detail"><span className="weather-detail-label">UV Index</span><span className="weather-detail-val">{weather.uv}</span></div>
                </div>
              </div>
              <div className="weather-forecast-row">
                {weather.forecast.map((d, i) => (
                  <div key={i} className="weather-forecast-card">
                    <div className="forecast-date">{formatForecastDate(d.date)}</div>
                    <div className="forecast-icon">{d.icon}</div>
                    <div className="forecast-temps">
                      <span className="forecast-hi">{d.maxTemp}°</span>
                      <span className="forecast-lo">{d.minTemp}°</span>
                    </div>
                    <div className="forecast-desc">{d.desc}</div>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function formatForecastDate(dateStr) {
  if (!dateStr || dateStr.includes('Day') || dateStr.includes('Tomorrow')) return dateStr;
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en', { weekday: 'short', month: 'short', day: 'numeric' });
  } catch { return dateStr; }
}

function getWeatherIcon(code) {
  const c = parseInt(code, 10);
  if (!c) return '🌤️';
  if (c === 113) return '☀️';
  if (c === 116) return '⛅';
  if (c === 119 || c === 122) return '☁️';
  if ([176, 263, 266, 293, 296, 299, 302].includes(c)) return '🌧️';
  if ([305, 308, 311, 314, 356, 359].includes(c)) return '🌧️';
  if ([200, 386, 389, 392, 395].includes(c)) return '⛈️';
  if ([179, 227, 230, 323, 326, 329, 332, 335, 338, 350, 368, 371, 374, 377].includes(c)) return '❄️';
  if ([143, 248, 260].includes(c)) return '🌫️';
  return '🌤️';
}

// ─── MAP / DIRECTIONS MODAL ───
function MapModal({ onClose }) {
  return (
    <div className="svc-modal-overlay active" onClick={onClose}>
      <div className="svc-modal-card" onClick={e => e.stopPropagation()}>
        <div className="svc-modal-header">
          <span className="svc-modal-title">🗺️ Directions & Map</span>
          <button className="svc-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="svc-modal-body">
          <div className="map-container">
            <svg viewBox="0 0 400 300" className="simple-map-svg">
              {/* Background grid */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(100,200,255,0.06)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="400" height="300" fill="#0f121b" />
              <rect width="400" height="300" fill="url(#grid)" />

              {/* Roads */}
              <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="24"/>
              <line x1="200" y1="0" x2="200" y2="300" stroke="rgba(255,255,255,0.08)" strokeWidth="24"/>
              <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="8 4"/>
              <line x1="200" y1="0" x2="200" y2="300" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="8 4"/>

              {/* Buildings */}
              <rect x="40" y="40" width="80" height="50" rx="6" fill="rgba(0,200,200,0.12)" stroke="rgba(0,200,200,0.3)" strokeWidth="1"/>
              <text x="80" y="68" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Outfit">🏢 Office</text>

              <rect x="260" y="40" width="100" height="50" rx="6" fill="rgba(150,100,255,0.12)" stroke="rgba(150,100,255,0.3)" strokeWidth="1"/>
              <text x="310" y="68" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Outfit">🛍️ Mall</text>

              <rect x="40" y="190" width="90" height="55" rx="6" fill="rgba(255,180,50,0.12)" stroke="rgba(255,180,50,0.3)" strokeWidth="1"/>
              <text x="85" y="221" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Outfit">🍽️ Food Court</text>

              <rect x="280" y="200" width="80" height="50" rx="6" fill="rgba(0,200,100,0.12)" stroke="rgba(0,200,100,0.3)" strokeWidth="1"/>
              <text x="320" y="228" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Outfit">🏥 Clinic</text>

              <rect x="150" y="100" width="100" height="40" rx="6" fill="rgba(255,100,100,0.12)" stroke="rgba(255,100,100,0.3)" strokeWidth="1"/>
              <text x="200" y="124" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="Outfit">🚻 Restrooms</text>

              {/* You Are Here marker */}
              <circle cx="200" cy="200" r="8" fill="#00e5ff" opacity="0.3">
                <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.05;0.3" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="200" cy="200" r="6" fill="#00e5ff"/>
              <text x="200" y="185" textAnchor="middle" fill="#00e5ff" fontSize="8" fontWeight="700" fontFamily="Outfit">📍 YOU ARE HERE</text>
            </svg>
          </div>
          <div className="map-legend">
            <span className="map-legend-item"><span style={{color:'#00e5ff'}}>●</span> Your Location</span>
            <span className="map-legend-item"><span style={{color:'rgba(0,200,200,0.8)'}}>■</span> Office</span>
            <span className="map-legend-item"><span style={{color:'rgba(150,100,255,0.8)'}}>■</span> Mall</span>
            <span className="map-legend-item"><span style={{color:'rgba(255,180,50,0.8)'}}>■</span> Food</span>
            <span className="map-legend-item"><span style={{color:'rgba(0,200,100,0.8)'}}>■</span> Clinic</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TRANSLATE MODAL ───
function TranslateModal({ onClose }) {
  const [sourceText, setSourceText] = useState('');
  const [translated, setTranslated] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('tl');
  const [loading, setLoading] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tl', name: 'Filipino', flag: '🇵🇭' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'id', name: 'Bahasa', flag: '🇮🇩' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  ];

  // Simple mock translations for demo
  const mockTranslations = {
    'hello': { tl: 'Kamusta', zh: '你好', ko: '안녕하세요', ja: 'こんにちは', id: 'Halo', th: 'สวัสดี' },
    'thank you': { tl: 'Salamat', zh: '谢谢', ko: '감사합니다', ja: 'ありがとう', id: 'Terima kasih', th: 'ขอบคุณ' },
    'where is the restroom': { tl: 'Nasaan ang banyo?', zh: '洗手间在哪里？', ko: '화장실은 어디에 있나요?', ja: 'お手洗いはどこですか？', id: 'Di mana kamar mandi?', th: 'ห้องน้ำอยู่ที่ไหน?' },
    'how much': { tl: 'Magkano?', zh: '多少钱？', ko: '얼마예요?', ja: 'いくらですか？', id: 'Berapa harganya?', th: 'ราคาเท่าไหร่?' },
    'help': { tl: 'Tulong', zh: '帮助', ko: '도움', ja: '助けて', id: 'Bantuan', th: 'ช่วยด้วย' },
    'good morning': { tl: 'Magandang umaga', zh: '早上好', ko: '좋은 아침', ja: 'おはようございます', id: 'Selamat pagi', th: 'สวัสดีตอนเช้า' },
  };

  const handleTranslate = () => {
    if (!sourceText.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const lower = sourceText.toLowerCase().trim();
      const match = mockTranslations[lower];
      if (match && match[targetLang]) {
        setTranslated(match[targetLang]);
      } else {
        // Generate a placeholder response
        const target = languages.find(l => l.code === targetLang);
        setTranslated(`[${target?.name || targetLang}] ${sourceText} ✓`);
      }
      setLoading(false);
    }, 500);
  };

  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translated);
    setTranslated(sourceText);
  };

  return (
    <div className="svc-modal-overlay active" onClick={onClose}>
      <div className="svc-modal-card" onClick={e => e.stopPropagation()}>
        <div className="svc-modal-header">
          <span className="svc-modal-title">🌐 Language Translation</span>
          <button className="svc-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="svc-modal-body">
          <div className="translate-lang-row">
            <select className="translate-lang-select" value={sourceLang} onChange={e => setSourceLang(e.target.value)}>
              {languages.map(l => <option key={l.code} value={l.code}>{l.flag} {l.name}</option>)}
            </select>
            <button className="translate-swap-btn" onClick={handleSwap}>⇄</button>
            <select className="translate-lang-select" value={targetLang} onChange={e => setTargetLang(e.target.value)}>
              {languages.map(l => <option key={l.code} value={l.code}>{l.flag} {l.name}</option>)}
            </select>
          </div>
          <div className="translate-boxes">
            <div className="translate-box">
              <textarea
                className="translate-textarea"
                placeholder="Type text to translate..."
                value={sourceText}
                onChange={e => setSourceText(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleTranslate(); } }}
                rows={3}
              />
            </div>
            <div className="translate-box translate-result">
              {loading ? (
                <div className="translate-loading">Translating...</div>
              ) : translated ? (
                <div className="translate-output">{translated}</div>
              ) : (
                <div className="translate-placeholder">Translation will appear here</div>
              )}
            </div>
          </div>
          <button className="translate-btn" onClick={handleTranslate} disabled={loading || !sourceText.trim()}>
            {loading ? 'Translating...' : 'Translate'}
          </button>
          <div className="translate-hint">Try: "hello", "thank you", "where is the restroom", "good morning"</div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ───
export { WeatherModal, MapModal, TranslateModal };

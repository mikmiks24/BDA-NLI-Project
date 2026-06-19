
/**
 * NLI Rules Engine - ES Module export for React
 * Ported from nli-rules.js
 */

export const NLI_LANGUAGES = [
  {
    code: 'tl', name: 'Filipino', nativeName: 'Filipino', flag: '🇵🇭',
    suggestText: 'Would you like to switch to Tagalog?',
    nativeSuggestText: 'Gusto mo bang lumipat sa Tagalog?',
    welcomeMessage: 'Maligayang Pagdating sa LINGUA Assistant Portal!',
    welcomeSubtitle: 'Pumili ng serbisyo sa ibaba o magsalita para sa tulong.',
    choices: [
      { code: 'tl', name: 'Tagalog', nativeName: 'Tagalog (Filipino)', flag: '🇵🇭', desc: 'Pambansang wika ng Pilipinas' },
      { code: 'en-PH', name: 'Philippine English', nativeName: 'English (Philippines)', flag: '🇵🇭', desc: 'Filipino local English standard' }
    ],
    services: {
      weather: { title: 'Lagay ng Panahon', desc: 'Suriin ang kasalukuyang kondisyon ng panahon at hula.' },
      directory: { title: 'Direksyon at Mapa', desc: 'Maghanap ng mga lugar, tindahan, at serbisyo sa malapit.' },
      translate: { title: 'Pagsasalin ng Wika', desc: 'Isalin ang mga parirala at teksto sa iba\'t ibang wika.' },
      support: { title: 'Suporta at Chatbot', desc: 'Kausapin ang aming virtual assistant para sa mabilis na sagot.' }
    },
    rules: [
      { id: 'tl_gender_he_she', type: 'grammar', pattern: /\b(?:mother|sister|wife|daughter|girl|woman|she)\s+([^.]+?\s+)?\bhe\b/i, weight: 0.75, description: 'L1 Transfer: Tagalog uses gender-neutral pronouns ("siya" refers to he/she), leading to common pronoun slips.', reason: 'Grammar: Gender pronoun confusion (he used for female)' },
      { id: 'tl_preposition_sa', type: 'vocabulary', pattern: /\b(?:arrive\s+(?:in|on)\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday))|(?:\bat\s+the\s+hotel)\b/i, weight: 0.65, description: 'L1 Transfer: Tagalog uses the broad locative preposition "sa" for "in", "on", and "at".', reason: 'Lexical: Preposition confusion (mapped from Tagalog "sa")' },
      { id: 'tl_double_tense', type: 'grammar', pattern: /\bwill\s+(?:going|arriving|buying|seeing|taking|printing)\b/i, weight: 0.7, description: 'L1 Transfer: Redundant tense markers.', reason: 'Grammar: Redundant future tense markers' }
    ]
  },
  {
    code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳',
    suggestText: 'Would you like to switch to Chinese?',
    nativeSuggestText: '您想切换到中文界面吗？',
    welcomeMessage: '欢迎使用智能助手服务终端！',
    welcomeSubtitle: '请选择以下服务项目，或使用语音指令获取帮助。',
    choices: [
      { code: 'zh', name: 'Simplified Chinese', nativeName: '简体中文', flag: '🇨🇳', desc: '中国大陆标准普通话' },
      { code: 'zh-HK', name: 'Traditional Chinese (HK)', nativeName: '繁體中文 (香港)', flag: '🇭🇰', desc: '香港繁體粵語/國語' },
      { code: 'zh-TW', name: 'Traditional Chinese (TW)', nativeName: '繁體中文 (台灣)', flag: '🇹🇼', desc: '台灣標準國語' }
    ],
    services: {
      weather: { title: '天气查询', desc: '查看当前天气状况和预报信息。' },
      directory: { title: '方向与地图', desc: '查找附近的地点、商店和服务设施。' },
      translate: { title: '语言翻译', desc: '将短语和文本翻译成多种语言。' },
      support: { title: '客服与智能问答', desc: '与我们的虚拟智能助理交谈，快速解答您的问题。' }
    },
    rules: [
      { id: 'zh_article_drop', type: 'grammar', pattern: /\b(airport|ticket|room|train|bus|gate|passport|flight|receipt)\b(?!s\b)/i, weight: 0.45, description: 'L1 Transfer: Mandarin does not have articles.', reason: 'Grammar: Omission of article (a/the)' },
      { id: 'zh_plural_drop', type: 'grammar', pattern: /\b(?:two|three|four|five|six|seven|eight|nine|ten|many|few|several|some)\s+(ticket|room|dollar|bag|passenger|friend|day|hour|minute)\b/i, weight: 0.7, description: 'L1 Transfer: Chinese nouns do not inflect for plurals.', reason: 'Grammar: Singular noun used after plural quantity' },
      { id: 'zh_base_verb_past', type: 'grammar', pattern: /\b(?:yesterday|last\s+(?:week|month|year|night))\s+([^.]+?\s+)?\b(go|buy|arrive|cancel|see|take|have|make|is|are)\b/i, weight: 0.75, description: 'L1 Transfer: Verb tense omission.', reason: 'Grammar: Base form verb used with past-time adverb' },
      { id: 'zh_very_like', type: 'vocabulary', pattern: /\b(?:very\s+like|really\s+like)\b/i, weight: 0.8, description: 'L1 Transfer: Syntactic translation of "很喜欢".', reason: 'Lexical: Literal translation of "很喜欢" (very like)' },
      { id: 'zh_double_subject', type: 'syntax', pattern: /\b(my\s+friend|my\s+brother|my\s+sister|the\s+train|the\s+plane|the\s+flight)\s+(he|she|it)\s+(is|says|goes|arrives)\b/i, weight: 0.65, description: 'L1 Transfer: Topic-comment double subject.', reason: 'Syntax: Double subject (Noun + Pronoun)' },
      { id: 'zh_gender_swap', type: 'grammar', pattern: /\b(sister|mother|wife|daughter|girl|woman|she)\s+([^.]+?\s+)?\bhe\b/i, weight: 0.7, description: 'L1 Transfer: Chinese uses same phonetic "tā" for he/she.', reason: 'Grammar: Gender pronoun confusion (he used for female)' }
    ]
  },
  {
    code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷',
    suggestText: 'Would you like to switch to Korean?',
    nativeSuggestText: '한국어로 변경하시겠습니까?',
    welcomeMessage: '스마트 어시스턴트 포털에 오신 것을 환영합니다!',
    welcomeSubtitle: '아래에서 서비스를 선택하거나 도움을 받으려면 음성으로 말씀해 주십시오.',
    choices: [
      { code: 'ko', name: 'Korean (Standard)', nativeName: '한국어 표준어', flag: '🇰🇷', desc: '대한민국 표준 한국어' },
      { code: 'ko-KR', name: 'Korean (Casual)', nativeName: '한국어 (구어체)', flag: '🇰🇷', desc: '한국어 대화체 서비스' }
    ],
    services: {
      weather: { title: '날씨 확인', desc: '현재 날씨 상태와 예보를 확인하세요.' },
      directory: { title: '방향 및 지도', desc: '주변 장소, 상점, 서비스를 찾으세요.' },
      translate: { title: '언어 번역', desc: '다양한 언어로 문구와 텍스트를 번역하세요.' },
      support: { title: '지원 및 챗봇', desc: '신속한 답변을 위해 가상 어시스턴트에 문의하세요.' }
    },
    rules: [
      { id: 'ko_handphone', type: 'spelling', pattern: /\b(handphone|skinship|one-piece|sns|selca)\b/i, weight: 0.85, description: 'L1 Transfer: Konglish vocabulary transfer.', reason: 'Lexical: Konglish vocabulary transfer' },
      { id: 'ko_do_verbs', type: 'syntax', pattern: /\b(check-in|cancellation|reserve|booking|payment|shopping)\s+do\b/i, weight: 0.8, description: 'L1 Transfer: Verbalizing nouns using "do" from Korean "-hada".', reason: 'Syntax: Verbalizing nouns using "do" (transfer from Korean "-hada")' },
      { id: 'ko_free_service', type: 'vocabulary', pattern: /\b(?:is\s+service|give\s+service|service\s+ticket|free\s+service)\b/i, weight: 0.8, description: 'L1 Transfer: Korean uses "service" to mean complimentary.', reason: 'Lexical: Using "service" to denote complimentary items' }
    ]
  },
  {
    code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵',
    suggestText: 'Would you like to switch to Japanese?',
    nativeSuggestText: '日本語の画面に切り替えますか？',
    welcomeMessage: 'スマートアシスタントポータルへようこそ！',
    welcomeSubtitle: '以下のサービスを選択するか、マイクに向かって話しかけてください。',
    choices: [
      { code: 'ja', name: 'Japanese', nativeName: '日本語 (標準語)', flag: '🇯🇵', desc: '日本語標準語' },
      { code: 'ja-Kansai', name: 'Japanese (Kansai)', nativeName: '日本語 (関西弁)', flag: '🇯🇵', desc: '関西地方の表現' }
    ],
    services: {
      weather: { title: '天気確認', desc: '現在の天気と予報を確認できます。' },
      directory: { title: '方向と地図', desc: '近くの場所、店舗、サービスを検索できます。' },
      translate: { title: '言語翻訳', desc: 'フレーズやテキストを様々な言語に翻訳できます。' },
      support: { title: 'サポート＆チャットボット', desc: 'バーチャルアシスタントに質問して、即座に解決できます。' }
    },
    rules: [
      { id: 'ja_article_drop', type: 'grammar', pattern: /\b(station|toilet|restroom|airport|hotel|bus|gate|train|luggage)\b(?!s\b)/i, weight: 0.45, description: 'L1 Transfer: Japanese does not have articles.', reason: 'Grammar: Omission of article (a/the)' },
      { id: 'ja_phonetic_spelling', type: 'spelling', pattern: /\b(fright|grobal|growup|teminaru|computar|cohi)\b/i, weight: 0.85, description: 'L1 Transfer: Katakana phonology mapping.', reason: 'Spelling: Katakana phonetic orthography mapping' },
      { id: 'ja_please_ending', type: 'syntax', pattern: /\b(ticket|help|water|card|receipt|bag|direction)\s+please\b/i, weight: 0.6, description: 'L1 Transfer: Syntactic transfer of "~kudasai".', reason: 'Syntax: Sentence-final "please" directly modifying noun' }
    ]
  },
  {
    code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩',
    suggestText: 'Would you like to switch to Indonesian?',
    nativeSuggestText: 'Apakah Anda ingin beralih ke Bahasa Indonesia?',
    welcomeMessage: 'Selamat Datang di Portal Asisten Pintar!',
    welcomeSubtitle: 'Pilih layanan di bawah ini atau berbicaralah untuk mendapatkan bantuan.',
    choices: [
      { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', desc: 'Bahasa persatuan Indonesia' },
      { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', flag: '🇲🇾', desc: 'Bahasa Melayu Malaysia/Singapura' }
    ],
    services: {
      weather: { title: 'Cuaca', desc: 'Periksa kondisi cuaca saat ini dan prakiraan.' },
      directory: { title: 'Arah & Peta', desc: 'Temukan lokasi, toko, dan layanan terdekat.' },
      translate: { title: 'Terjemahan Bahasa', desc: 'Terjemahkan frasa dan teks ke berbagai bahasa.' },
      support: { title: 'Dukungan & Chatbot', desc: 'Bicaralah dengan asisten virtual kami untuk jawaban langsung.' }
    },
    rules: [
      { id: 'id_be_drops', type: 'grammar', pattern: /\b(flight|train|bus|ticket|gate|station|terminal|room|I)\s+(?:very\s+)?(late|far|busy|big|lost|hungry)\b/i, weight: 0.75, description: 'L1 Transfer: Missing copula verb "to be".', reason: 'Grammar: Omission of copula linking verb "to be"' },
      { id: 'id_plural_drops', type: 'grammar', pattern: /\b(?:two|three|four|five|ten|many|some|few|several)\s+(ticket|bag|passenger|day|hour|gate)\b/i, weight: 0.7, description: 'L1 Transfer: Indonesian plural via reduplication.', reason: 'Grammar: Singular noun used after plural modifier' },
      { id: 'id_join_transfer', type: 'vocabulary', pattern: /\bjoin\s+(?:you|him|her|them)\s+(?:to|at)\s+(?:the\s+)?(?:gate|hotel|city|room|airport|flight)\b/i, weight: 0.8, description: 'L1 Transfer: Literal translation of "ikut".', reason: 'Lexical: Using "join" instead of "accompany"' }
    ]
  },
  {
    code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰',
    suggestText: 'Would you like to switch to Urdu?',
    nativeSuggestText: 'کیا آپ اردو میں تبدیل کرنا چاہتے ہیں؟',
    welcomeMessage: 'سمارٹ اسسٹنٹ پورٹل پر خوش آمدید!',
    welcomeSubtitle: 'براہ کرم نیچے دی گئی سروس منتخب کریں یا مدد کے لیے بولیں۔',
    choices: [
      { code: 'ur', name: 'Urdu', nativeName: 'اردو (پاکستان)', flag: '🇵🇰', desc: 'پاکستان کی قومی زبان' },
      { code: 'ur-IN', name: 'Urdu (India)', nativeName: 'اردو (بھارت)', flag: '🇮🇳', desc: 'ہندوستان میں بولی جانے والی اردو' },
      { code: 'pa', name: 'Punjabi', nativeName: 'پنجابی', flag: '🇵🇰', desc: 'پنجابی علاقائی زبان' }
    ],
    services: {
      weather: { title: 'موسم کی معلومات', desc: 'موجودہ موسم اور پیشن گوئی دیکھیں۔' },
      directory: { title: 'سمت اور نقشہ', desc: 'قریبی مقامات، دکانیں اور خدمات تلاش کریں۔' },
      translate: { title: 'زبان ترجمہ', desc: 'جملوں اور متن کو مختلف زبانوں میں ترجمہ کریں۔' },
      support: { title: 'مدد اور چیٹ بوٹ', desc: 'فوری جوابات کے لیے ہمارے ورچوئل اسسٹنٹ سے بات کریں۔' }
    },
    rules: [
      { id: 'ur_tag_questions', type: 'syntax', pattern: /(?:,\s*|\s+)(is\s+it|no)\?/i, weight: 0.8, description: 'L1 Transfer: Sentence-final tags from Urdu.', reason: 'Syntax: Sentence-final literal tag question ("is it?"/"no?")' },
      { id: 'ur_cousin_redundancy', type: 'vocabulary', pattern: /\bcousin\s+(brother|sister)\b/i, weight: 0.85, description: 'L1 Transfer: Redundant gendered nouns.', reason: 'Lexical: Redundant gender descriptor added to "cousin"' },
      { id: 'ur_prepositions', type: 'grammar', pattern: /\b(?:discuss\s+about|order\s+for|coping\s+up|explain\s+about)\b/i, weight: 0.7, description: 'L1 Transfer: Over-insertion of English prepositions.', reason: 'Grammar: Over-insertion of redundant preposition' },
      { id: 'ur_do_one_thing', type: 'vocabulary', pattern: /\bdo\s+one\s+thing\b/i, weight: 0.85, description: 'L1 Transfer: Literal translation of Urdu/Hindi idiom "ek kaam karo".', reason: 'Lexical: Literal translation of idiom "ek kaam karo"' }
    ]
  },
  {
    code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭',
    suggestText: 'Would you like to switch to Thai?',
    nativeSuggestText: 'คุณต้องการเปลี่ยนเป็นภาษาไทยหรือไม่?',
    welcomeMessage: 'ยินดีต้อนรับสู่พอร์ทัลผู้ช่วยอัจฉริยะ!',
    welcomeSubtitle: 'โปรดเลือกบริการด้านล่างหรือพูดคุยเพื่อขอความช่วยเหลือ',
    choices: [
      { code: 'th', name: 'Thai', nativeName: 'ไทย (กลาง)', flag: '🇹🇭', desc: 'ภาษาราชการของประเทศไทย' },
      { code: 'th-Isan', name: 'Thai (Isan)', nativeName: 'ไทย (อีสาน)', flag: '🇹🇭', desc: 'ภาษาถิ่นภาคตะวันออกเฉียงเหนือ' }
    ],
    services: {
      weather: { title: 'สภาพอากาศ', desc: 'ตรวจสอบสภาพอากาศปัจจุบันและพยากรณ์อากาศ' },
      directory: { title: 'ทิศทางและแผนที่', desc: 'ค้นหาสถานที่ ร้านค้า และบริการใกล้เคียง' },
      translate: { title: 'แปลภาษา', desc: 'แปลวลีและข้อความเป็นหลายภาษา' },
      support: { title: 'บริการช่วยเหลือและแชทบอท', desc: 'คุยกับผู้ช่วยเสมือนจริงของเราเพื่อตอบคำถามโดยตรง' }
    },
    rules: [
      { id: 'th_reduplication', type: 'vocabulary', pattern: /\bsame\s*-?\s*same\b/i, weight: 0.9, description: 'L1 Transfer: Thai reduplication pattern "same-same".', reason: 'Lexical: Reduplication collocation "same-same"' },
      { id: 'th_have_drops', type: 'grammar', pattern: /\b(?:no\s+have|not\s+have)\s+(ticket|money|bag|flight|time|room)\b/i, weight: 0.8, description: 'L1 Transfer: Existential "no have" from Thai "mai mee".', reason: 'Grammar: Literal transfer of "mai mee" ("no have")' },
      { id: 'th_final_intensity', type: 'syntax', pattern: /\b(like|love|want|late|far|busy)\s+very\b/i, weight: 0.75, description: 'L1 Transfer: Sentence-final intensive adverbs from Thai.', reason: 'Syntax: Sentence-final adverb placement' }
    ]
  }
];

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function analyzeEnglishText(text) {
  if (!text || text.trim().length === 0) {
    return {
      probabilities: NLI_LANGUAGES.map(lang => ({ ...lang, confidence: 0 })),
      detected: null,
      highlightedHtml: '',
      rawMatches: []
    };
  }

  const scores = {};
  NLI_LANGUAGES.forEach(lang => { scores[lang.code] = 0; });

  const rawMatches = [];

  NLI_LANGUAGES.forEach(lang => {
    lang.rules.forEach(rule => {
      let match;
      const globalRegex = new RegExp(rule.pattern.source, 'gi');
      while ((match = globalRegex.exec(text)) !== null) {
        const matchedText = match[0];
        const matchIndex = match.index;

        if (rule.id === 'zh_article_drop' || rule.id === 'ja_article_drop') {
          const precedingText = text.slice(0, matchIndex).trim();
          const hasArticle = /\b(a|an|the|my|your|his|her|its|our|their|this|that|these|those|some|any|no)$/i.test(precedingText);
          if (hasArticle) continue;
        }
        if (rule.id === 'id_be_drops') {
          const precedingText = text.slice(0, matchIndex).trim();
          const hasCopula = /\b(is|are|am|was|were|feel|seems|looks)$/i.test(precedingText);
          if (hasCopula) continue;
        }

        rawMatches.push({
          langCode: lang.code,
          ruleId: rule.id,
          ruleType: rule.type,
          matchedText,
          description: rule.description,
          reason: rule.reason,
          index: matchIndex,
          length: matchedText.length
        });
        scores[lang.code] += rule.weight;
      }
    });
  });

  let totalScore = 0;
  Object.keys(scores).forEach(code => { totalScore += scores[code]; });

  const probabilities = NLI_LANGUAGES.map(lang => {
    let confidence = 0;
    if (totalScore > 0 && scores[lang.code] > 0) {
      confidence = Math.round((scores[lang.code] / totalScore) * 100);
    }
    return { ...lang, confidence, rawScore: scores[lang.code] };
  });
  probabilities.sort((a, b) => b.confidence - a.confidence);

  let detected = null;
  if (probabilities[0].confidence >= 25 && probabilities[0].rawScore > 0) {
    detected = probabilities[0];
  }

  // Build highlighted HTML
  const sortedMatches = [...rawMatches].sort((a, b) => b.index - a.index);
  const parts = [];
  let currentIdx = text.length;

  sortedMatches.forEach(match => {
    if (match.index + match.length <= currentIdx) {
      const tail = text.slice(match.index + match.length, currentIdx);
      parts.unshift(escapeHtml(tail));
      const matchSegment = text.slice(match.index, match.index + match.length);
      const color = ['zh', 'ja', 'ko'].includes(match.langCode)
        ? 'hsl(var(--primary))'
        : 'hsl(var(--secondary))';
      parts.unshift(
        `<span class="hl-marker" data-reason="${escapeHtml(match.reason)}" style="border-bottom-color:${color}">${escapeHtml(matchSegment)}</span>`
      );
      currentIdx = match.index;
    }
  });
  if (currentIdx > 0) parts.unshift(escapeHtml(text.slice(0, currentIdx)));

  return { probabilities, detected, highlightedHtml: parts.join(''), rawMatches };
}

export function getBaseLangCode(langCode) {
  if (!langCode) return 'en';
  const lower = langCode.toLowerCase();
  if (lower.startsWith('tl') || lower === 'ceb' || lower === 'en-ph') return 'tl';
  if (lower.startsWith('zh')) return 'zh';
  if (lower.startsWith('ko')) return 'ko';
  if (lower.startsWith('ja')) return 'ja';
  if (lower.startsWith('id') || lower === 'ms') return 'id';
  if (lower.startsWith('ur') || lower === 'pa') return 'ur';
  if (lower.startsWith('th')) return 'th';
  return 'en';
}

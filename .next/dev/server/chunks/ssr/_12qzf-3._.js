module.exports = [
"[project]/src/data/nliRules.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * NLI Rules Engine - ES Module export for React
 * Ported from nli-rules.js
 */ __turbopack_context__.s([
    "NLI_LANGUAGES",
    ()=>NLI_LANGUAGES,
    "analyzeEnglishText",
    ()=>analyzeEnglishText,
    "getBaseLangCode",
    ()=>getBaseLangCode
]);
const NLI_LANGUAGES = [
    {
        code: 'tl',
        name: 'Tagalog',
        nativeName: 'Tagalog',
        flag: '🇵🇭',
        suggestText: 'Would you like to switch to Tagalog?',
        nativeSuggestText: 'Gusto mo bang lumipat sa Tagalog?',
        welcomeMessage: 'Maligayang Pagdating sa Kiosk ng Serbisyo sa Paliparan!',
        welcomeSubtitle: 'Pumili ng serbisyo sa ibaba o magsalita para sa tulong.',
        choices: [
            {
                code: 'tl',
                name: 'Tagalog',
                nativeName: 'Tagalog (Filipino)',
                flag: '🇵🇭',
                desc: 'Pambansang wika ng Pilipinas'
            },
            {
                code: 'en-PH',
                name: 'Philippine English',
                nativeName: 'English (Philippines)',
                flag: '🇵🇭',
                desc: 'Filipino local English standard'
            },
            {
                code: 'ceb',
                name: 'Cebuano',
                nativeName: 'Cebuano (Bisaya)',
                flag: '🇵🇭',
                desc: 'Katutubong wika sa Kabisayaan'
            }
        ],
        services: {
            flight: {
                title: 'Katayuan ng Flight',
                desc: 'Suriin ang real-time na pag-alis, pagdating, at mga detalye ng gate.'
            },
            map: {
                title: 'Mapa ng Terminal',
                desc: 'Mag-navigate sa mga terminal, tindahan, lounge, at boarding gate.'
            },
            ticket: {
                title: 'Pagbili ng Tiket',
                desc: 'Bumili o mag-print ng mga tiket para sa tren, bus, o pagkonekta ng flight.'
            },
            support: {
                title: 'Suporta at Chatbot',
                desc: 'Kausapin ang aming virtual assistant para sa mabilis na sagot.'
            }
        },
        rules: [
            {
                id: 'tl_gender_he_she',
                type: 'grammar',
                pattern: /\b(?:mother|sister|wife|daughter|girl|woman|she)\s+([^.]+?\s+)?\bhe\b/i,
                weight: 0.75,
                description: 'L1 Transfer: Tagalog uses gender-neutral pronouns ("siya" refers to he/she), leading to common pronoun slips.',
                reason: 'Grammar: Gender pronoun confusion (he used for female)'
            },
            {
                id: 'tl_preposition_sa',
                type: 'vocabulary',
                pattern: /\b(?:arrive\s+(?:in|on)\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday))|(?:\bat\s+the\s+hotel)\b/i,
                weight: 0.65,
                description: 'L1 Transfer: Tagalog uses the broad locative preposition "sa" for "in", "on", and "at".',
                reason: 'Lexical: Preposition confusion (mapped from Tagalog "sa")'
            },
            {
                id: 'tl_double_tense',
                type: 'grammar',
                pattern: /\bwill\s+(?:going|arriving|buying|seeing|taking|printing)\b/i,
                weight: 0.7,
                description: 'L1 Transfer: Redundant tense markers.',
                reason: 'Grammar: Redundant future tense markers'
            }
        ]
    },
    {
        code: 'zh',
        name: 'Chinese',
        nativeName: '中文',
        flag: '🇨🇳',
        suggestText: 'Would you like to switch to Chinese?',
        nativeSuggestText: '您想切换到中文界面吗？',
        welcomeMessage: '欢迎来到机场自助服务终端！',
        welcomeSubtitle: '请选择以下服务项目，或使用语音指令获取帮助。',
        choices: [
            {
                code: 'zh',
                name: 'Simplified Chinese',
                nativeName: '简体中文',
                flag: '🇨🇳',
                desc: '中国大陆标准普通话'
            },
            {
                code: 'zh-HK',
                name: 'Traditional Chinese (HK)',
                nativeName: '繁體中文 (香港)',
                flag: '🇭🇰',
                desc: '香港繁體粵語/國語'
            },
            {
                code: 'zh-TW',
                name: 'Traditional Chinese (TW)',
                nativeName: '繁體中文 (台灣)',
                flag: '🇹🇼',
                desc: '台灣標準國語'
            }
        ],
        services: {
            flight: {
                title: '航班状态',
                desc: '实时查询起降航班、延误情况以及登机口动态。'
            },
            map: {
                title: '航站楼地图',
                desc: '导航查找航站楼内的商店、值机柜台、贵宾室和登机口。'
            },
            ticket: {
                title: '购买车票/机票',
                desc: '购买或打印火车票、接驳巴士车票或联程航班登机牌。'
            },
            support: {
                title: '客服与智能问答',
                desc: '与我们的虚拟智能助理交谈，快速解答您的问题。'
            }
        },
        rules: [
            {
                id: 'zh_article_drop',
                type: 'grammar',
                pattern: /\b(airport|ticket|room|train|bus|gate|passport|flight|receipt)\b(?!s\b)/i,
                weight: 0.45,
                description: 'L1 Transfer: Mandarin does not have articles.',
                reason: 'Grammar: Omission of article (a/the)'
            },
            {
                id: 'zh_plural_drop',
                type: 'grammar',
                pattern: /\b(?:two|three|four|five|six|seven|eight|nine|ten|many|few|several|some)\s+(ticket|room|dollar|bag|passenger|friend|day|hour|minute)\b/i,
                weight: 0.7,
                description: 'L1 Transfer: Chinese nouns do not inflect for plurals.',
                reason: 'Grammar: Singular noun used after plural quantity'
            },
            {
                id: 'zh_base_verb_past',
                type: 'grammar',
                pattern: /\b(?:yesterday|last\s+(?:week|month|year|night))\s+([^.]+?\s+)?\b(go|buy|arrive|cancel|see|take|have|make|is|are)\b/i,
                weight: 0.75,
                description: 'L1 Transfer: Verb tense omission.',
                reason: 'Grammar: Base form verb used with past-time adverb'
            },
            {
                id: 'zh_very_like',
                type: 'vocabulary',
                pattern: /\b(?:very\s+like|really\s+like)\b/i,
                weight: 0.8,
                description: 'L1 Transfer: Syntactic translation of "很喜欢".',
                reason: 'Lexical: Literal translation of "很喜欢" (very like)'
            },
            {
                id: 'zh_double_subject',
                type: 'syntax',
                pattern: /\b(my\s+friend|my\s+brother|my\s+sister|the\s+train|the\s+plane|the\s+flight)\s+(he|she|it)\s+(is|says|goes|arrives)\b/i,
                weight: 0.65,
                description: 'L1 Transfer: Topic-comment double subject.',
                reason: 'Syntax: Double subject (Noun + Pronoun)'
            },
            {
                id: 'zh_gender_swap',
                type: 'grammar',
                pattern: /\b(sister|mother|wife|daughter|girl|woman|she)\s+([^.]+?\s+)?\bhe\b/i,
                weight: 0.7,
                description: 'L1 Transfer: Chinese uses same phonetic "tā" for he/she.',
                reason: 'Grammar: Gender pronoun confusion (he used for female)'
            }
        ]
    },
    {
        code: 'ko',
        name: 'Korean',
        nativeName: '한국어',
        flag: '🇰🇷',
        suggestText: 'Would you like to switch to Korean?',
        nativeSuggestText: '한국어로 변경하시겠습니까?',
        welcomeMessage: '공항 스마트 서비스 포털에 오신 것을 환영합니다!',
        welcomeSubtitle: '아래에서 서비스를 선택하거나 도움을 받으려면 음성으로 말씀해 주십시오.',
        choices: [
            {
                code: 'ko',
                name: 'Korean (Standard)',
                nativeName: '한국어 표준어',
                flag: '🇰🇷',
                desc: '대한민국 표준 한국어'
            },
            {
                code: 'ko-KR',
                name: 'Korean (Casual)',
                nativeName: '한국어 (구어체)',
                flag: '🇰🇷',
                desc: '한국어 대화체 서비스'
            }
        ],
        services: {
            flight: {
                title: '항공편 상태',
                desc: '실시간 출발, 도착 및 게이트 정보를 확인하십시오.'
            },
            map: {
                title: '터미널 지도',
                desc: '터미널, 상점, 라운지 및 탑승 게이트를 안내합니다.'
            },
            ticket: {
                title: '티켓 구매',
                desc: '열차, 셔틀 또는 연결 항공편에 대한 교통 카드를 구매하십시오.'
            },
            support: {
                title: '지원 및 챗봇',
                desc: '신속한 답변을 위해 가상 지원 데스크에 문의하십시오.'
            }
        },
        rules: [
            {
                id: 'ko_handphone',
                type: 'spelling',
                pattern: /\b(handphone|skinship|one-piece|sns|selca)\b/i,
                weight: 0.85,
                description: 'L1 Transfer: Konglish vocabulary transfer.',
                reason: 'Lexical: Konglish vocabulary transfer'
            },
            {
                id: 'ko_do_verbs',
                type: 'syntax',
                pattern: /\b(check-in|cancellation|reserve|booking|payment|shopping)\s+do\b/i,
                weight: 0.8,
                description: 'L1 Transfer: Verbalizing nouns using "do" from Korean "-hada".',
                reason: 'Syntax: Verbalizing nouns using "do" (transfer from Korean "-hada")'
            },
            {
                id: 'ko_free_service',
                type: 'vocabulary',
                pattern: /\b(?:is\s+service|give\s+service|service\s+ticket|free\s+service)\b/i,
                weight: 0.8,
                description: 'L1 Transfer: Korean uses "service" to mean complimentary.',
                reason: 'Lexical: Using "service" to denote complimentary items'
            }
        ]
    },
    {
        code: 'ja',
        name: 'Japanese',
        nativeName: '日本語',
        flag: '🇯🇵',
        suggestText: 'Would you like to switch to Japanese?',
        nativeSuggestText: '日本語の画面に切り替えますか？',
        welcomeMessage: '空港サービス端末へようこそ！',
        welcomeSubtitle: '以下のサービスを選択するか、マイクに向かって話しかけてください。',
        choices: [
            {
                code: 'ja',
                name: 'Japanese',
                nativeName: '日本語 (標準語)',
                flag: '🇯🇵',
                desc: '日本語標準語'
            },
            {
                code: 'ja-Kansai',
                name: 'Japanese (Kansai)',
                nativeName: '日本語 (関西弁)',
                flag: '🇯🇵',
                desc: '関西地方の表現'
            }
        ],
        services: {
            flight: {
                title: '運航状況',
                desc: '出発、到着、搭乗口情報をリアルタイムで確認できます。'
            },
            map: {
                title: 'ターミナルマップ',
                desc: 'ターミナル、ショップ、ラウンジ、搭乗口への行き方を案内します。'
            },
            ticket: {
                title: '切符・搭乗券の購入',
                desc: '電車、バス、乗り継ぎ便のチケット購入や印刷が可能です。'
            },
            support: {
                title: 'サポート＆チャットボット',
                desc: 'バーチャルアシスタントに質問して、即座に解決できます。'
            }
        },
        rules: [
            {
                id: 'ja_article_drop',
                type: 'grammar',
                pattern: /\b(station|toilet|restroom|airport|hotel|bus|gate|train|luggage)\b(?!s\b)/i,
                weight: 0.45,
                description: 'L1 Transfer: Japanese does not have articles.',
                reason: 'Grammar: Omission of article (a/the)'
            },
            {
                id: 'ja_phonetic_spelling',
                type: 'spelling',
                pattern: /\b(fright|grobal|growup|teminaru|computar|cohi)\b/i,
                weight: 0.85,
                description: 'L1 Transfer: Katakana phonology mapping.',
                reason: 'Spelling: Katakana phonetic orthography mapping'
            },
            {
                id: 'ja_please_ending',
                type: 'syntax',
                pattern: /\b(ticket|help|water|card|receipt|bag|direction)\s+please\b/i,
                weight: 0.6,
                description: 'L1 Transfer: Syntactic transfer of "~kudasai".',
                reason: 'Syntax: Sentence-final "please" directly modifying noun'
            }
        ]
    },
    {
        code: 'id',
        name: 'Indonesian',
        nativeName: 'Bahasa Indonesia',
        flag: '🇮🇩',
        suggestText: 'Would you like to switch to Indonesian?',
        nativeSuggestText: 'Apakah Anda ingin beralih ke Bahasa Indonesia?',
        welcomeMessage: 'Selamat Datang di Portal Layanan Kios Bandara!',
        welcomeSubtitle: 'Pilih layanan di bawah ini atau berbicaralah untuk mendapatkan bantuan.',
        choices: [
            {
                code: 'id',
                name: 'Indonesian',
                nativeName: 'Bahasa Indonesia',
                flag: '🇮🇩',
                desc: 'Bahasa persatuan Indonesia'
            },
            {
                code: 'ms',
                name: 'Malay',
                nativeName: 'Bahasa Melayu',
                flag: '🇲🇾',
                desc: 'Bahasa Melayu Malaysia/Singapura'
            }
        ],
        services: {
            flight: {
                title: 'Status Penerbangan',
                desc: 'Periksa jadwal keberangkatan, kedatangan, dan detail gerbang secara real-time.'
            },
            map: {
                title: 'Peta Terminal',
                desc: 'Navigasikan terminal, toko, ruang tunggu, dan gerbang keberangkatan.'
            },
            ticket: {
                title: 'Pembelian Tiket',
                desc: 'Beli atau cetak tiket kereta bandara, bus shuttle, atau penerbangan lanjutan.'
            },
            support: {
                title: 'Dukungan & Chatbot',
                desc: 'Bicaralah dengan asisten virtual kami untuk jawaban langsung.'
            }
        },
        rules: [
            {
                id: 'id_be_drops',
                type: 'grammar',
                pattern: /\b(flight|train|bus|ticket|gate|station|terminal|room|I)\s+(?:very\s+)?(late|far|busy|big|lost|hungry)\b/i,
                weight: 0.75,
                description: 'L1 Transfer: Missing copula verb "to be".',
                reason: 'Grammar: Omission of copula linking verb "to be"'
            },
            {
                id: 'id_plural_drops',
                type: 'grammar',
                pattern: /\b(?:two|three|four|five|ten|many|some|few|several)\s+(ticket|bag|passenger|day|hour|gate)\b/i,
                weight: 0.7,
                description: 'L1 Transfer: Indonesian plural via reduplication.',
                reason: 'Grammar: Singular noun used after plural modifier'
            },
            {
                id: 'id_join_transfer',
                type: 'vocabulary',
                pattern: /\bjoin\s+(?:you|him|her|them)\s+(?:to|at)\s+(?:the\s+)?(?:gate|hotel|city|room|airport|flight)\b/i,
                weight: 0.8,
                description: 'L1 Transfer: Literal translation of "ikut".',
                reason: 'Lexical: Using "join" instead of "accompany"'
            }
        ]
    },
    {
        code: 'ur',
        name: 'Urdu',
        nativeName: 'اردو',
        flag: '🇵🇰',
        suggestText: 'Would you like to switch to Urdu?',
        nativeSuggestText: 'کیا آپ اردو میں تبدیل کرنا چاہتے ہیں؟',
        welcomeMessage: 'ایئرپورٹ سروسز پورٹل پر خوش آمدید!',
        welcomeSubtitle: 'براہ کرم نیچے دی گئی سروس منتخب کریں یا مدد کے لیے بولیں۔',
        choices: [
            {
                code: 'ur',
                name: 'Urdu',
                nativeName: 'اردو (پاکستان)',
                flag: '🇵🇰',
                desc: 'پاکستان کی قومی زبان'
            },
            {
                code: 'ur-IN',
                name: 'Urdu (India)',
                nativeName: 'اردو (بھارت)',
                flag: '🇮🇳',
                desc: 'ہندوستان میں بولی جانے والی اردو'
            },
            {
                code: 'pa',
                name: 'Punjabi',
                nativeName: 'پنجابی',
                flag: '🇵🇰',
                desc: 'پنجابی علاقائی زبان'
            }
        ],
        services: {
            flight: {
                title: 'فلائٹ کی صورتحال',
                desc: 'پروازوں کی روانگی، آمد اور گیٹ کی تفصیلات معلوم کریں۔'
            },
            map: {
                title: 'ٹرمینل کا نقشہ',
                desc: 'ٹرمینلز، دکانوں، لاؤنجز اور بورڈنگ گیٹس کا راستہ تلاش کریں۔'
            },
            ticket: {
                title: 'ٹکٹ کی خریداری',
                desc: 'ٹرین، شٹل بس، یا کنیکٹنگ پروازوں کے ٹکٹ خریدیں یا پرنٹ کریں۔'
            },
            support: {
                title: 'مدد اور چیٹ بوٹ',
                desc: 'فوری جوابات کے لیے ہمارے ورچوئل اسسٹنٹ سے بات کریں۔'
            }
        },
        rules: [
            {
                id: 'ur_tag_questions',
                type: 'syntax',
                pattern: /(?:,\s*|\s+)(is\s+it|no)\?/i,
                weight: 0.8,
                description: 'L1 Transfer: Sentence-final tags from Urdu.',
                reason: 'Syntax: Sentence-final literal tag question ("is it?"/"no?")'
            },
            {
                id: 'ur_cousin_redundancy',
                type: 'vocabulary',
                pattern: /\bcousin\s+(brother|sister)\b/i,
                weight: 0.85,
                description: 'L1 Transfer: Redundant gendered nouns.',
                reason: 'Lexical: Redundant gender descriptor added to "cousin"'
            },
            {
                id: 'ur_prepositions',
                type: 'grammar',
                pattern: /\b(?:discuss\s+about|order\s+for|coping\s+up|explain\s+about)\b/i,
                weight: 0.7,
                description: 'L1 Transfer: Over-insertion of English prepositions.',
                reason: 'Grammar: Over-insertion of redundant preposition'
            },
            {
                id: 'ur_do_one_thing',
                type: 'vocabulary',
                pattern: /\bdo\s+one\s+thing\b/i,
                weight: 0.85,
                description: 'L1 Transfer: Literal translation of Urdu/Hindi idiom "ek kaam karo".',
                reason: 'Lexical: Literal translation of idiom "ek kaam karo"'
            }
        ]
    },
    {
        code: 'th',
        name: 'Thai',
        nativeName: 'ไทย',
        flag: '🇹🇭',
        suggestText: 'Would you like to switch to Thai?',
        nativeSuggestText: 'คุณต้องการเปลี่ยนเป็นภาษาไทยหรือไม่?',
        welcomeMessage: 'ยินดีต้อนรับสู่เคาน์เตอร์บริการท่าอากาศยานอัจฉริยะ!',
        welcomeSubtitle: 'โปรดเลือกบริการด้านล่างหรือพูดคุยเพื่อขอความช่วยเหลือ',
        choices: [
            {
                code: 'th',
                name: 'Thai',
                nativeName: 'ไทย (กลาง)',
                flag: '🇹🇭',
                desc: 'ภาษาราชการของประเทศไทย'
            },
            {
                code: 'th-Isan',
                name: 'Thai (Isan)',
                nativeName: 'ไทย (อีสาน)',
                flag: '🇹🇭',
                desc: 'ภาษาถิ่นภาคตะวันออกเฉียงเหนือ'
            }
        ],
        services: {
            flight: {
                title: 'สถานะเที่ยวบิน',
                desc: 'ตรวจสอบเที่ยวบินขาเข้า ขาออก และประตูทางออกแบบเรียลไทม์'
            },
            map: {
                title: 'แผนที่อาคารผู้โดยสาร',
                desc: 'ค้นหาเส้นทางไปยังอาคารผู้โดยสาร ร้านค้า ห้องรับรอง และประตูทางออก'
            },
            ticket: {
                title: 'ซื้อตั๋วโดยสาร',
                desc: 'ซื้อหรือพิมพ์ตั๋วสำหรับรถไฟ รถบัสรับส่ง หรือเที่ยวบินต่อเครื่อง'
            },
            support: {
                title: 'บริการช่วยเหลือและแชทบอท',
                desc: 'คุยกับผู้ช่วยเสมือนจริงของเราเพื่อตอบคำถามโดยตรง'
            }
        },
        rules: [
            {
                id: 'th_reduplication',
                type: 'vocabulary',
                pattern: /\bsame\s*-?\s*same\b/i,
                weight: 0.9,
                description: 'L1 Transfer: Thai reduplication pattern "same-same".',
                reason: 'Lexical: Reduplication collocation "same-same"'
            },
            {
                id: 'th_have_drops',
                type: 'grammar',
                pattern: /\b(?:no\s+have|not\s+have)\s+(ticket|money|bag|flight|time|room)\b/i,
                weight: 0.8,
                description: 'L1 Transfer: Existential "no have" from Thai "mai mee".',
                reason: 'Grammar: Literal transfer of "mai mee" ("no have")'
            },
            {
                id: 'th_final_intensity',
                type: 'syntax',
                pattern: /\b(like|love|want|late|far|busy)\s+very\b/i,
                weight: 0.75,
                description: 'L1 Transfer: Sentence-final intensive adverbs from Thai.',
                reason: 'Syntax: Sentence-final adverb placement'
            }
        ]
    }
];
function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
function analyzeEnglishText(text) {
    if (!text || text.trim().length === 0) {
        return {
            probabilities: NLI_LANGUAGES.map((lang)=>({
                    ...lang,
                    confidence: 0
                })),
            detected: null,
            highlightedHtml: '',
            rawMatches: []
        };
    }
    const scores = {};
    NLI_LANGUAGES.forEach((lang)=>{
        scores[lang.code] = 0;
    });
    const rawMatches = [];
    NLI_LANGUAGES.forEach((lang)=>{
        lang.rules.forEach((rule)=>{
            let match;
            const globalRegex = new RegExp(rule.pattern.source, 'gi');
            while((match = globalRegex.exec(text)) !== null){
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
    Object.keys(scores).forEach((code)=>{
        totalScore += scores[code];
    });
    const probabilities = NLI_LANGUAGES.map((lang)=>{
        let confidence = 0;
        if (totalScore > 0 && scores[lang.code] > 0) {
            confidence = Math.round(scores[lang.code] / totalScore * 100);
        }
        return {
            ...lang,
            confidence,
            rawScore: scores[lang.code]
        };
    });
    probabilities.sort((a, b)=>b.confidence - a.confidence);
    let detected = null;
    if (probabilities[0].confidence >= 25 && probabilities[0].rawScore > 0) {
        detected = probabilities[0];
    }
    // Build highlighted HTML
    const sortedMatches = [
        ...rawMatches
    ].sort((a, b)=>b.index - a.index);
    const parts = [];
    let currentIdx = text.length;
    sortedMatches.forEach((match)=>{
        if (match.index + match.length <= currentIdx) {
            const tail = text.slice(match.index + match.length, currentIdx);
            parts.unshift(escapeHtml(tail));
            const matchSegment = text.slice(match.index, match.index + match.length);
            const color = [
                'zh',
                'ja',
                'ko'
            ].includes(match.langCode) ? 'hsl(var(--primary))' : 'hsl(var(--secondary))';
            parts.unshift(`<span class="hl-marker" data-reason="${escapeHtml(match.reason)}" style="border-bottom-color:${color}">${escapeHtml(matchSegment)}</span>`);
            currentIdx = match.index;
        }
    });
    if (currentIdx > 0) parts.unshift(escapeHtml(text.slice(0, currentIdx)));
    return {
        probabilities,
        detected,
        highlightedHtml: parts.join(''),
        rawMatches
    };
}
function getBaseLangCode(langCode) {
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
}),
"[project]/src/data/chatbotData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/chatbotData.js
// Multilingual chatbot Q&A database
__turbopack_context__.s([
    "CHATBOT_DATABASE",
    ()=>CHATBOT_DATABASE,
    "getChatbotDbKey",
    ()=>getChatbotDbKey
]);
const CHATBOT_DATABASE = {
    en: {
        welcome: 'Hello! How can I help you today at the terminal?',
        answers: [
            {
                keys: [
                    'baggage',
                    'luggage',
                    'bag'
                ],
                ans: 'Baggage claim is located on Level 1, near Carousel 4.'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom'
                ],
                ans: 'Restrooms are located just behind the Duty Free shop to your left.'
            },
            {
                keys: [
                    'ticket',
                    'buy',
                    'train',
                    'bus'
                ],
                ans: 'You can purchase local train and shuttle bus tickets in our Ticketing service on this kiosk!'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    'cafe',
                    'eat',
                    'hungry'
                ],
                ans: 'The Food Court is upstairs on Level 2, offering coffee shops and restaurants.'
            },
            {
                keys: [
                    'gate',
                    'flight',
                    'boarding'
                ],
                ans: 'Flight departures are listed under the "Flight Status" card. Gate A-12 is at the end of Concourse A.'
            }
        ],
        fallback: 'I can help you find flights, gates, baggage claim, restrooms, or purchase transit tickets. Please try asking about those.'
    },
    tl: {
        welcome: 'Kamusta! Paano kita matutulungan ngayon sa terminal? (Hello! How can I help you today?)',
        answers: [
            {
                keys: [
                    'baggage',
                    'luggage',
                    'bag',
                    'bagahe',
                    'gamit'
                ],
                ans: 'Ang claim ng bagahe ay nasa Level 1, malapit sa Carousel 4. (Baggage claim is on Level 1, near Carousel 4.)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    'banyo'
                ],
                ans: 'Ang mga banyo ay nasa likod lang ng Duty Free shop sa kaliwa mo. (Restrooms are behind Duty Free on your left.)'
            },
            {
                keys: [
                    'ticket',
                    'buy',
                    'tren',
                    'bus',
                    'tiket'
                ],
                ans: 'Maaari kang bumili ng tiket sa tren o bus sa aming Ticketing card dito! (Train/bus tickets are in the Ticketing service!)'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    'pagkain',
                    'gutom'
                ],
                ans: 'Ang Food Court ay nasa itaas sa Level 2. (Food Court is upstairs on Level 2.)'
            },
            {
                keys: [
                    'gate',
                    'flight',
                    'boarding',
                    'lipad'
                ],
                ans: 'Ang mga flight ay nasa card na "Katayuan ng Flight". Ang Gate A-12 ay nasa dulo ng Concourse A.'
            }
        ],
        fallback: 'Maaari kitang tulungan sa paghahanap ng flights, gate, bagahe, banyo o tiket. (I can help with flights, gates, baggage, restrooms, or tickets.)'
    },
    zh: {
        welcome: '您好！今天在航站楼有什么我可以帮您的？ (Hello! How can I help you today at the terminal?)',
        answers: [
            {
                keys: [
                    'baggage',
                    'luggage',
                    'bag',
                    '行李'
                ],
                ans: '行李提取处位于 1 楼 4 号行李转盘旁。(Baggage claim is on Level 1, near Carousel 4.)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    '洗手间',
                    '厕所'
                ],
                ans: '洗手间位于您左侧的免税店后方。(Restrooms are behind Duty Free on your left.)'
            },
            {
                keys: [
                    'ticket',
                    'buy',
                    '车票',
                    '买票'
                ],
                ans: '您可以在此自助机的购票页面直接购买轻轨和巴士票！(You can buy train/bus tickets here!)'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    '吃',
                    '咖啡',
                    '饿'
                ],
                ans: '餐饮区位于 2 楼。(The Food Court is upstairs on Level 2.)'
            },
            {
                keys: [
                    'gate',
                    'flight',
                    'boarding',
                    '登机口',
                    '航班'
                ],
                ans: '起降航班信息列在"航班状态"卡中。A-12 登机口位于 A 厅尽头。'
            }
        ],
        fallback: '我可以协助您查询航班、登机口、行李提取、洗手间位置或购买交通票。(I can help with flights, gates, baggage, restrooms, or tickets.)'
    },
    ko: {
        welcome: '안녕하세요! 오늘 공항 터미널에서 어떤 도움이 필요하십니까? (Hello! How can I help you today?)',
        answers: [
            {
                keys: [
                    'baggage',
                    'luggage',
                    'bag',
                    '가방',
                    '수하물'
                ],
                ans: '수하물 수취소는 1층 4번 회전식 수취대 옆에 있습니다. (Baggage claim is on Level 1, near Carousel 4.)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    '화장실'
                ],
                ans: '화장실은 왼쪽 면세점 바로 뒤에 있습니다. (Restrooms are behind Duty Free on your left.)'
            },
            {
                keys: [
                    'ticket',
                    'buy',
                    '기차',
                    '버스',
                    '표',
                    '티켓'
                ],
                ans: '기차 및 셔틀 버스 티켓은 본 키오스크의 티켓 구매 메뉴에서 구매하실 수 있습니다! (You can buy train and bus tickets on this kiosk!)'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    '식사',
                    '배고픈',
                    '커피'
                ],
                ans: '식당가는 2층에 있으며, 카페와 식당이 있습니다. (Food Court is upstairs on Level 2.)'
            },
            {
                keys: [
                    'gate',
                    'flight',
                    'boarding',
                    '탑승구',
                    '비행기'
                ],
                ans: '운항 상황은 "항공편 상태" 카드에 나와 있습니다. A-12 탑승구는 콘코스 A 끝에 있습니다.'
            }
        ],
        fallback: '항공편, 탑승구, 수하물, 화장실 또는 티켓 구매에 대해 도와드릴 수 있습니다. (I can help with flights, gates, baggage, restrooms, or tickets.)'
    },
    ja: {
        welcome: 'こんにちは！ターミナルで何かお手伝いできることはありますか？ (Hello! How can I help you today?)',
        answers: [
            {
                keys: [
                    'baggage',
                    'luggage',
                    'bag',
                    '手荷物',
                    '荷物'
                ],
                ans: '手荷物受取所は1階のターンテーブル4の近くにあります。(Baggage claim is on Level 1, near Carousel 4.)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    'トイレ'
                ],
                ans: 'お手洗いは左側の免税店のすぐ裏手にあります。(Restrooms are behind Duty Free on your left.)'
            },
            {
                keys: [
                    'ticket',
                    'buy',
                    '電車',
                    'バス',
                    '切符'
                ],
                ans: 'この端末の「チケット購入」サービスで電車やバスの切符が購入できます！'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    '食事',
                    'カフェ'
                ],
                ans: 'フードコートは2階にあります。(The Food Court is upstairs on Level 2.)'
            },
            {
                keys: [
                    'gate',
                    'flight',
                    'boarding',
                    '搭乗口',
                    '便'
                ],
                ans: 'フライト情報は「運航状況」カードにあります。A-12搭乗口はコンコースAの突き当たりです。'
            }
        ],
        fallback: 'フライト、搭乗口、手荷物受取所、お手洗い、またはチケットの購入についてご案内できます。(I can assist with flights, gates, baggage, restrooms, or tickets.)'
    },
    id: {
        welcome: 'Halo! Ada yang bisa saya bantu hari ini di terminal? (Hello! How can I help you today?)',
        answers: [
            {
                keys: [
                    'baggage',
                    'luggage',
                    'bagasi',
                    'barang',
                    'tas'
                ],
                ans: 'Pengambilan bagasi terletak di Lantai 1, dekat Carousel 4. (Baggage claim is on Level 1, near Carousel 4.)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    'kamar mandi',
                    'wc'
                ],
                ans: 'Toilet berada tepat di belakang toko Duty Free di sebelah kiri Anda.'
            },
            {
                keys: [
                    'ticket',
                    'buy',
                    'tiket',
                    'kereta',
                    'bus'
                ],
                ans: 'Anda dapat membeli tiket kereta dan bus shuttle di menu Pembelian Tiket kios ini!'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    'makan',
                    'lapar',
                    'kopi'
                ],
                ans: 'Pujasera ada di lantai 2. (Food Court is upstairs on Level 2.)'
            },
            {
                keys: [
                    'gate',
                    'flight',
                    'boarding',
                    'gerbang',
                    'terbang'
                ],
                ans: 'Jadwal penerbangan tercantum di kartu "Status Penerbangan". Gerbang A-12 berada di ujung Concourse A.'
            }
        ],
        fallback: 'Saya bisa membantu mencari penerbangan, gerbang, bagasi, toilet, atau tiket. (I can help find flights, gates, baggage, restrooms, or tickets.)'
    },
    ur: {
        welcome: 'ہیلو! میں آج ٹرمینل پر آپ کی کیا مدد کر سکتا ہوں؟ (Hello! How can I help you today?)',
        answers: [
            {
                keys: [
                    'baggage',
                    'luggage',
                    'bag',
                    'سامان'
                ],
                ans: 'سامان وصول کرنے کی جگہ لیول 1 پر، کیروسل 4 کے قریب واقع ہے۔ (Baggage claim is on Level 1, near Carousel 4.)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    'حمام'
                ],
                ans: 'واش رومز آپ کے بائیں جانب ڈیوٹی فری شاپ کے بالکل پیچھے واقع ہیں۔'
            },
            {
                keys: [
                    'ticket',
                    'buy',
                    'ٹکٹ',
                    'ٹرین',
                    'بس'
                ],
                ans: 'آپ اس کیوسک پر ٹرانزٹ ٹکٹ سروس کے ذریعے ٹرین اور شٹل بس کے ٹکٹ خرید سکتے ہیں!'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    'کھانا',
                    'بھوک'
                ],
                ans: 'فوڈ کورٹ اوپر لیول 2 پر ہے۔ (Food Court is upstairs on Level 2.)'
            },
            {
                keys: [
                    'gate',
                    'flight',
                    'boarding',
                    'گیٹ',
                    'پرواز'
                ],
                ans: 'پروازوں کی معلومات "فلائٹ کی صورتحال" میں ہیں۔ گیٹ A-12 ہال A کے آخر میں ہے۔'
            }
        ],
        fallback: 'میں پروازوں، گیٹس، سامان، واش رومز یا ٹکٹوں کے بارے میں مدد کر سکتا ہوں۔ (I can help with flights, gates, baggage, restrooms, or tickets.)'
    },
    th: {
        welcome: 'สวัสดีค่ะ! วันนี้มีอะไรให้ฉันช่วยเหลือที่อาคารผู้โดยสารไหมคะ? (Hello! How can I help you today?)',
        answers: [
            {
                keys: [
                    'baggage',
                    'luggage',
                    'bag',
                    'กระเป๋า',
                    'สัมภาระ'
                ],
                ans: 'จุดรับกระเป๋าสัมภาระตั้งอยู่ที่ชั้น 1 ใกล้กับสายพานหมายเลข 4 (Baggage claim is on Level 1, near Carousel 4.)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    'ห้องน้ำ'
                ],
                ans: 'ห้องน้ำตั้งอยู่ด้านหลังร้านค้าปลอดภาษี (Duty Free) ทางซ้ายมือของคุณ'
            },
            {
                keys: [
                    'ticket',
                    'buy',
                    'ตั๋ว',
                    'รถไฟ',
                    'รถบัส'
                ],
                ans: 'คุณสามารถซื้อตั๋วรถไฟและรถบัสรับส่งได้ที่บริการซื้อตั๋วโดยสารบนตู้บริการนี้ค่ะ!'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    'อาหาร',
                    'หิว',
                    'กาแฟ'
                ],
                ans: 'ศูนย์อาหารอยู่ชั้น 2 ด้านบน (Food Court is upstairs on Level 2.)'
            },
            {
                keys: [
                    'gate',
                    'flight',
                    'boarding',
                    'ประตู',
                    'เที่ยวบิน'
                ],
                ans: 'ข้อมูลเที่ยวบินจะแสดงอยู่ในการ์ด "สถานะเที่ยวบิน" ประตูทางออก A-12 อยู่ที่ปลายอาคาร A'
            }
        ],
        fallback: 'ฉันสามารถช่วยคุณค้นหาเที่ยวบิน ประตูทางออก สัมภาระ ห้องน้ำ หรือซื้อตั๋วโดยสารได้ค่ะ (I can help with flights, gates, baggage, restrooms, or tickets.)'
    }
};
function getChatbotDbKey(langCode) {
    const base = getBaseLangCodeLocal(langCode);
    if (CHATBOT_DATABASE[base]) return base;
    return 'en';
}
function getBaseLangCodeLocal(langCode) {
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
}),
"[project]/src/hooks/useKiosk.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useKiosk
]);
// src/hooks/useKiosk.js — Redesigned for 3-screen flow:
// WELCOME → REQUEST (voice/text + analysis) → CHAT (translated chatbox)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/nliRules.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chatbotData.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function useKiosk() {
    // --- Screens: 'WELCOME' | 'REQUEST' | 'CHAT' ---
    const [currentScreen, setCurrentScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('WELCOME');
    // --- Language ---
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    // --- Status ---
    const [kioskStatus, setKioskStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ready');
    // --- Input ---
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Analysis results (shown inline on REQUEST screen) ---
    const [analysisResult, setAnalysisResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // { probabilities, rawMatches, highlightedHtml, detected }
    const [analysisComplete, setAnalysisComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Language Suggestion overlay ---
    const [showSuggestion, setShowSuggestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestionData, setSuggestionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Chat ---
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- Toast ---
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const recognizerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const highestInterimRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, type = 'info')=>{
        setToast({
            message,
            type
        });
        setTimeout(()=>setToast(null), 5000);
    }, []);
    // Init speech recognition
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const SpeechObj = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechObj) return;
        try {
            const rec = new SpeechObj();
            rec.continuous = false;
            rec.interimResults = true;
            rec.lang = 'en-US';
            rec.onstart = ()=>{
                setIsListening(true);
                highestInterimRef.current = null;
                setKioskStatus('listening');
            };
            rec.onresult = (event)=>{
                let interim = '', final = '';
                for(let i = event.resultIndex; i < event.results.length; ++i){
                    if (event.results[i].isFinal) final += event.results[i][0].transcript;
                    else interim += event.results[i][0].transcript;
                }
                const text = final || interim;
                if (text) {
                    setInputText(text);
                    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeEnglishText"])(text);
                    if (a.detected && (!highestInterimRef.current || a.detected.confidence > highestInterimRef.current.confidence)) {
                        highestInterimRef.current = a.detected;
                    }
                }
            };
            rec.onerror = (e)=>{
                setIsListening(false);
                setKioskStatus('ready');
                if (e.error === 'not-allowed') showToast('Microphone blocked! Allow mic in browser settings.', 'error');
                else if (e.error === 'no-speech') showToast('No speech detected. Please try speaking louder.', 'error');
                else if (e.error === 'network') showToast('Network error. Try typing instead.', 'error');
                else showToast('Mic capture failed. Try typing below.', 'error');
            };
            rec.onend = ()=>{
                setIsListening(false);
                setKioskStatus('ready');
                setTimeout(()=>{
                    setInputText((prev)=>{
                        if (prev.trim().length > 3) runAnalysis(prev);
                        return prev;
                    });
                }, 300);
            };
            recognizerRef.current = rec;
        } catch (err) {
            console.warn('Speech init failed:', err);
        }
    }, []);
    const toggleListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!recognizerRef.current) {
            showToast('Microphone not supported in this browser.', 'error');
            return;
        }
        if (isListening) {
            recognizerRef.current.stop();
        } else {
            setInputText('');
            setAnalysisResult(null);
            setAnalysisComplete(false);
            try {
                recognizerRef.current.start();
            } catch (e) {
                console.warn(e);
            }
        }
    }, [
        isListening,
        showToast
    ]);
    // Run NLI analysis and show results inline
    const runAnalysis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((text)=>{
        if (!text || !text.trim()) return;
        setKioskStatus('thinking');
        setAnalysisComplete(false);
        // Small delay to let user see "Analyzing..." state
        setTimeout(()=>{
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analyzeEnglishText"])(text);
            setAnalysisResult(result);
            setAnalysisComplete(true);
            setKioskStatus('ready');
            const resolved = result.detected || highestInterimRef.current;
            highestInterimRef.current = null;
            if (resolved) {
                // After 1.5s, show the language suggestion popup
                setTimeout(()=>{
                    setSuggestionData({
                        detected: resolved,
                        probabilities: result.probabilities
                    });
                    setShowSuggestion(true);
                    setKioskStatus('prompt');
                }, 1500);
            } else {
                // No L1 detected — go straight to English chat
                setTimeout(()=>proceedToChat('en'), 1800);
            }
        }, 600);
    }, []);
    const submitRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((text)=>{
        if (!text || !text.trim()) return;
        runAnalysis(text);
    }, [
        runAnalysis
    ]);
    // User chose a language (or kept English)
    const proceedToChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((langCode)=>{
        setSelectedLanguage(langCode);
        setShowSuggestion(false);
        setKioskStatus('ready');
        // Init chatbot with welcome message in chosen language
        const dbKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChatbotDbKey"])(langCode);
        const db = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHATBOT_DATABASE"][dbKey] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHATBOT_DATABASE"].en;
        setChatMessages([
            {
                sender: 'bot',
                text: db.welcome
            }
        ]);
        setCurrentScreen('CHAT');
    }, []);
    const sendChatMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((query)=>{
        if (!query.trim()) return;
        setChatMessages((prev)=>[
                ...prev,
                {
                    sender: 'user',
                    text: query
                }
            ]);
        setTimeout(()=>{
            const dbKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChatbotDbKey"])(selectedLanguage);
            const db = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHATBOT_DATABASE"][dbKey] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHATBOT_DATABASE"].en;
            const lowerQuery = query.toLowerCase();
            let found = null;
            for (const item of db.answers){
                if (item.keys.some((k)=>lowerQuery.includes(k))) {
                    found = item.ans;
                    break;
                }
            }
            setChatMessages((prev)=>[
                    ...prev,
                    {
                        sender: 'bot',
                        text: found || db.fallback
                    }
                ]);
        }, 700);
    }, [
        selectedLanguage
    ]);
    const resetSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setCurrentScreen('WELCOME');
        setSelectedLanguage('en');
        setInputText('');
        setAnalysisResult(null);
        setAnalysisComplete(false);
        setShowSuggestion(false);
        setSuggestionData(null);
        setChatMessages([]);
        setKioskStatus('ready');
        highestInterimRef.current = null;
    }, []);
    const goToRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setCurrentScreen('REQUEST');
        setInputText('');
        setAnalysisResult(null);
        setAnalysisComplete(false);
    }, []);
    return {
        currentScreen,
        selectedLanguage,
        kioskStatus,
        inputText,
        setInputText,
        isListening,
        analysisResult,
        analysisComplete,
        showSuggestion,
        setSuggestion: setShowSuggestion,
        suggestionData,
        chatMessages,
        toast,
        // Actions
        goToRequest,
        toggleListening,
        submitRequest,
        proceedToChat,
        sendChatMessage,
        resetSession,
        showToast
    };
}
}),
"[project]/src/components/BezelTop.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BezelTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/BezelTop.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function BezelTop({ status }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-bezel-top",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "kiosk-camera"
            }, void 0, false, {
                fileName: "[project]/src/components/BezelTop.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `kiosk-led${status !== 'ready' ? ` ${status}` : ''}`
            }, void 0, false, {
                fileName: "[project]/src/components/BezelTop.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BezelTop.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/StatusBadge.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/StatusBadge.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const STATUS_LABELS = {
    ready: 'Ready',
    listening: 'Listening...',
    thinking: 'Analyzing...',
    prompt: 'Option Found'
};
function StatusBadge({ status }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-status-badge",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `status-indicator${status !== 'ready' ? ` ${status}` : ''}`
            }, void 0, false, {
                fileName: "[project]/src/components/StatusBadge.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: STATUS_LABELS[status] || 'Ready'
            }, void 0, false, {
                fileName: "[project]/src/components/StatusBadge.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StatusBadge.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/Header.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBadge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusBadge.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Header({ kioskStatus, brandTitle = 'Smart Kiosk Terminal' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "kiosk-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "kiosk-brand",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "kiosk-logo-orb"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "kiosk-title-text",
                        id: "kioskBrandTitle",
                        children: brandTitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBadge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                status: kioskStatus
            }, void 0, false, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/WaveVisualizer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaveVisualizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/WaveVisualizer.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function WaveVisualizer({ active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `wave-visualizer${active ? ' active' : ''}`,
        children: [
            ...Array(8)
        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wave-bar"
            }, i, false, {
                fileName: "[project]/src/components/WaveVisualizer.jsx",
                lineNumber: 9,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/WaveVisualizer.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/TextConsole.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextConsole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/TextConsole.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKiosk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useKiosk.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function TextConsole({ inputText, setInputText, onSubmit, onPreset }) {
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') onSubmit(inputText);
    };
    const handlePreset = (preset)=>{
        setInputText(preset.text);
        onPreset(preset);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-input-divider",
                children: "Or Type in English"
            }, void 0, false, {
                fileName: "[project]/src/components/TextConsole.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-console-box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "console-icon",
                        children: "⌨️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TextConsole.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        className: "text-console-input",
                        id: "textConsoleInput",
                        placeholder: "Say e.g., 'Yesterday I go terminal two but my flight cancel...'",
                        autoComplete: "off",
                        value: inputText,
                        onChange: (e)=>setInputText(e.target.value),
                        onKeyDown: handleKeyDown
                    }, void 0, false, {
                        fileName: "[project]/src/components/TextConsole.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "console-submit-btn",
                        onClick: ()=>onSubmit(inputText),
                        children: "Analyze"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TextConsole.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TextConsole.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "simulator-drawer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "simulator-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "simulator-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "💡"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TextConsole.jsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    " Native Language Transfer Simulator (Accents)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TextConsole.jsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "simulator-subtitle",
                                children: "Click a preset below to instantly inject L1 syntactic/grammatical patterns"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TextConsole.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TextConsole.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "simulator-grid",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKiosk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRESETS"].map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "preset-btn",
                                onClick: ()=>handlePreset(preset),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "preset-lang",
                                        children: [
                                            preset.flag,
                                            " ",
                                            preset.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TextConsole.jsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "preset-snippet",
                                        children: preset.snippet
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TextConsole.jsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, preset.lang, true, {
                                fileName: "[project]/src/components/TextConsole.jsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/TextConsole.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TextConsole.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/WelcomeScreen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WelcomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/WelcomeScreen.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WaveVisualizer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WaveVisualizer.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextConsole$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TextConsole.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function WelcomeScreen({ isListening, inputText, setInputText, onToggleListening, onSubmitText, onPreset }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "kiosk-screen screen-welcome active",
        id: "screenWelcome",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcome-logo",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "welcome-logo-icon",
                    children: "🎙️"
                }, void 0, false, {
                    fileName: "[project]/src/components/WelcomeScreen.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "welcome-title",
                children: "Welcome to Smart Airport Helpdesk"
            }, void 0, false, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "welcome-subtitle",
                children: "We are here to assist you. Please tap the button to speak your request, or type in English below. Our system will analyze and adapt to your language."
            }, void 0, false, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcome-interaction-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "voice-button-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `voice-btn${isListening ? ' listening' : ''}`,
                                id: "voiceBtn",
                                title: "Tap to Speak",
                                onClick: onToggleListening,
                                children: "🎙️"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WelcomeScreen.jsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `listening-text${isListening ? ' active' : ''}`,
                                children: isListening ? 'Listening...' : 'Tap to Speak'
                            }, void 0, false, {
                                fileName: "[project]/src/components/WelcomeScreen.jsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WaveVisualizer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                active: isListening
                            }, void 0, false, {
                                fileName: "[project]/src/components/WelcomeScreen.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextConsole$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        inputText: inputText,
                        setInputText: setInputText,
                        onSubmit: onSubmitText,
                        onPreset: onPreset
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WelcomeScreen.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ServicePortal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicePortal,
    "getPortalData",
    ()=>getPortalData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/ServicePortal.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/nliRules.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const ENGLISH_SERVICES = {
    flight: {
        icon: '✈️',
        title: 'Flight Status',
        desc: 'Check real-time departures, arrivals, and gate details.'
    },
    map: {
        icon: '🗺️',
        title: 'Terminal Map',
        desc: 'Navigate terminals, shops, lounges, and boarding gates.'
    },
    ticket: {
        icon: '🎟️',
        title: 'Ticket Purchase',
        desc: 'Buy or print transit cards for trains, shuttles, or connection flights.'
    },
    support: {
        icon: '🤖',
        title: 'Helpdesk & Chatbot',
        desc: 'Talk with our automated support desk for direct answers.'
    }
};
function getPortalData(langCode) {
    if (!langCode || langCode === 'en' || langCode === 'en-PH') {
        return {
            brand: langCode === 'en-PH' ? 'Smart Kiosk (Philippines)' : 'Smart Kiosk Terminal',
            welcomeTitle: 'Airport Self-Service Portal',
            welcomeSub: 'Select a service below to proceed.',
            pillFlag: langCode === 'en-PH' ? '🇵🇭' : '🇬🇧',
            pillText: langCode === 'en-PH' ? 'English (PH)' : 'English',
            footerHelp: 'Need physical assistance? Terminal agents are on standby.',
            btnReset: 'End Session / Reset',
            services: ENGLISH_SERVICES
        };
    }
    // Cebuano
    if (langCode === 'ceb') {
        return {
            brand: 'Smart Kiosk (Bisaya)',
            pillFlag: '🇵🇭',
            pillText: 'Cebuano',
            welcomeTitle: 'Maayong pag-abot sa Airport Service Portal!',
            welcomeSub: 'Pilia ang serbisyo sa ubos o pagsulti para sa tabang.',
            footerHelp: '🙋: Need physical assistance? Terminal agents are on standby.',
            btnReset: 'Tapuson / I-reset',
            services: {
                flight: {
                    icon: '✈️',
                    title: 'Katayuan sa Flight',
                    desc: 'Susiha ang real-time nga paglarga, pag-abot, ug mga detalye sa gate.'
                },
                map: {
                    icon: '🗺️',
                    title: 'Mapa sa Terminal',
                    desc: 'Pag-navigate sa mga terminal, tindahan, lounges, ug boarding gates.'
                },
                ticket: {
                    icon: '🎟️',
                    title: 'Pagpalit og Tiket',
                    desc: 'Pagpalit o pag-print og mga tiket para sa tren, bus, o nagkonektang flight.'
                },
                support: {
                    icon: '🤖',
                    title: 'Suporta ug Chatbot',
                    desc: 'Pakigsulti sa among virtual assistant para sa dali nga tubag.'
                }
            }
        };
    }
    // Malay
    if (langCode === 'ms') {
        return {
            brand: 'Portal Kios Pintar',
            pillFlag: '🇲🇾',
            pillText: 'Bahasa Melayu',
            welcomeTitle: 'Selamat Datang ke Portal Perkhidmatan Lapangan Terbang!',
            welcomeSub: 'Pilih perkhidmatan di bawah atau bercakap untuk mendapatkan bantuan.',
            footerHelp: '🙋: Need physical assistance? Terminal agents are on standby.',
            btnReset: 'Tamat / Set Semula',
            services: {
                flight: {
                    icon: '✈️',
                    title: 'Status Penerbangan',
                    desc: 'Semak waktu berlepas, ketibaan dan butiran pintu secara langsung.'
                },
                map: {
                    icon: '🗺️',
                    title: 'Peta Terminal',
                    desc: 'Cari jalan di terminal, kedai, ruang rehat dan pintu berlepas.'
                },
                ticket: {
                    icon: '🎟️',
                    title: 'Pembelian Tiket',
                    desc: 'Beli atau cetak tiket tren transit, bas shuttle atau penerbangan sambungan.'
                },
                support: {
                    icon: '🤖',
                    title: 'Sokongan & Chatbot',
                    desc: 'Bercakap dengan pembantu maya kami untuk jawapan pantas.'
                }
            }
        };
    }
    // Base NLI languages
    const base = langCode.split('-')[0];
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].find((l)=>l.code === base);
    if (!lang) return getPortalData('en');
    return {
        brand: `Smart Kiosk (${lang.nativeName})`,
        pillFlag: lang.flag,
        pillText: lang.nativeName,
        welcomeTitle: lang.welcomeMessage,
        welcomeSub: lang.welcomeSubtitle,
        footerHelp: `Physical help? / 🙋: Terminal agents are on standby.`,
        btnReset: 'End / Reset',
        services: {
            flight: {
                icon: '✈️',
                title: lang.services.flight.title,
                desc: lang.services.flight.desc
            },
            map: {
                icon: '🗺️',
                title: lang.services.map.title,
                desc: lang.services.map.desc
            },
            ticket: {
                icon: '🎟️',
                title: lang.services.ticket.title,
                desc: lang.services.ticket.desc
            },
            support: {
                icon: '🤖',
                title: lang.services.support.title,
                desc: lang.services.support.desc
            }
        }
    };
}
function ServicePortal({ langCode, onOpenModal, onReset, onToggleLang, detectedLanguage }) {
    const data = getPortalData(langCode);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-screen active",
        id: "screenPortal",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "portal-layout",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "portal-top-bar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "portal-welcome-msg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "portal-welcome-title",
                                    children: data.welcomeTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicePortal.jsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "portal-welcome-sub",
                                    children: data.welcomeSub
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicePortal.jsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServicePortal.jsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "language-switch-pill",
                            title: "Change Language",
                            onClick: onToggleLang,
                            style: {
                                cursor: 'pointer'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pill-flag",
                                    children: data.pillFlag
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicePortal.jsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "pill-text",
                                    children: data.pillText
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicePortal.jsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServicePortal.jsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServicePortal.jsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "services-grid",
                    children: Object.entries(data.services).map(([key, svc])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "service-card",
                            id: `card-${key}`,
                            onClick: ()=>onOpenModal(key),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "service-icon-box",
                                    children: svc.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicePortal.jsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "service-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "service-title",
                                            children: svc.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServicePortal.jsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "service-desc",
                                            children: svc.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServicePortal.jsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServicePortal.jsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, key, true, {
                            fileName: "[project]/src/components/ServicePortal.jsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ServicePortal.jsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "portal-footer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "kiosk-help-text",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "kiosk-help-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicePortal.jsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: data.footerHelp
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicePortal.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServicePortal.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-reset",
                            onClick: onReset,
                            children: data.btnReset
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServicePortal.jsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServicePortal.jsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServicePortal.jsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ServicePortal.jsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/AnalyticsSidebar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyticsSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/AnalyticsSidebar.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/nliRules.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function AnalyticsSidebar({ visible, highlightedHtml, probabilities, rawMatches }) {
    const displayProbs = probabilities.length > 0 ? probabilities.slice(0, 5) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].slice(0, 5).map((l)=>({
            ...l,
            confidence: 0
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "kiosk-sidebar-analytics",
        id: "analytics-sidebar",
        style: {
            display: 'flex',
            opacity: visible ? 1 : 0,
            visibility: visible ? 'visible' : 'hidden',
            transition: 'opacity 0.4s, visibility 0.4s'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "sidebar-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "📊"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    " NLI Diagnostics Dashboard"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "sidebar-section-title",
                        children: "Parsed Input (L1 Markers Highlighted)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "transcription-panel",
                        children: highlightedHtml ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            dangerouslySetInnerHTML: {
                                __html: highlightedHtml
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "no-input",
                            children: "Awaiting voice or typing input..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "sidebar-section-title",
                        children: "L1 Language Probability Models"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "probability-list",
                        children: displayProbs.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "prob-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "prob-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "prob-name",
                                                children: [
                                                    lang.flag,
                                                    " ",
                                                    lang.name,
                                                    " (",
                                                    lang.nativeName,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "prob-value",
                                                children: [
                                                    lang.confidence,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "prob-track",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "prob-bar",
                                            style: {
                                                width: `${lang.confidence}%`,
                                                background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, lang.code, true, {
                                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "sidebar-section-title",
                        children: "Linguistic Markers Triggered"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "markers-log",
                        children: rawMatches.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "no-markers-detected",
                            children: "No linguistic transfer errors triggered yet."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this) : rawMatches.map((match, i)=>{
                            const langObj = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].find((l)=>l.code === match.langCode);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "marker-log-card detected",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "marker-log-rule",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: match.reason
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'hsl(var(--primary))'
                                                },
                                                children: [
                                                    langObj?.name || 'Unknown',
                                                    " Origin"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 65,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "marker-log-desc",
                                        children: match.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 69,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "marker-log-match",
                                        children: [
                                            'Match: "',
                                            match.matchedText,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 70,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                lineNumber: 64,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/LanguageSuggestionOverlay.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSuggestionOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/LanguageSuggestionOverlay.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function LanguageSuggestionOverlay({ visible, suggestionData, onSelectLanguage, onDecline }) {
    if (!suggestionData) return null;
    const { detected } = suggestionData;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `suggestion-overlay${visible ? ' active' : ''}`,
        onClick: onDecline,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "suggestion-card",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-orb-holder",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "suggestion-flag-icon",
                        children: detected?.flag || '🗺️'
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "suggestion-title",
                    children: [
                        "Traced Native Language: ",
                        detected?.name || 'Unknown'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "suggestion-desc",
                    children: [
                        "Our NLI engine analyzed your input patterns and identified a",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: [
                                detected?.confidence,
                                "% confidence"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        " of",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: [
                                detected?.name,
                                " (",
                                detected?.nativeName,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        " linguistic transfer. Please choose your preferred layout below, or continue in English:"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-options-grid",
                    children: (detected?.choices || []).map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "suggest-lang-option-btn",
                            onClick: ()=>onSelectLanguage(choice.code),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "suggest-lang-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "suggest-lang-flag",
                                            children: choice.flag
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "suggest-lang-names",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "suggest-lang-native",
                                                    children: choice.nativeName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                                    lineNumber: 35,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "suggest-lang-standard",
                                                    children: [
                                                        "Switch to ",
                                                        choice.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                                    lineNumber: 36,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "suggest-lang-match",
                                    children: choice.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, choice.code, true, {
                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-actions",
                    style: {
                        marginTop: '8px',
                        width: '100%'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-secondary",
                        style: {
                            width: '100%'
                        },
                        onClick: onDecline,
                        children: "Keep English (Continue in English)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/modals/FlightModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlightModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/modals/FlightModal.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function FlightModal({ visible, onClose, langCode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `portal-overlay-modal${visible ? ' active' : ''}`,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "portal-modal-card",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "portal-modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "portal-modal-title",
                            children: "✈️ Flight Details"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/FlightModal.jsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "portal-modal-close",
                            onClick: onClose,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/FlightModal.jsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/FlightModal.jsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "portal-modal-body",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ticket-mockup",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ticket-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ticket-brand",
                                        children: "SKY ALLIANCE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/FlightModal.jsx",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ticket-class",
                                        children: "BOARDING PASS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/FlightModal.jsx",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ticket-route",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ticket-stop",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-code",
                                                children: "MIA"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 21,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-city",
                                                children: "Miami Intl Airport"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 22,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/FlightModal.jsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ticket-plane-icon",
                                        children: "✈️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/FlightModal.jsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ticket-stop right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-code",
                                                children: "LHR"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 26,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-city",
                                                children: "London Heathrow"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 27,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/FlightModal.jsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ticket-details-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ticket-info-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-info-label",
                                                children: "Flight"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 32,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-info-val",
                                                children: "SA 405"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/FlightModal.jsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ticket-info-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-info-label",
                                                children: "Gate"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-info-val",
                                                children: "A-12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/FlightModal.jsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ticket-info-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-info-label",
                                                children: "Seat"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-info-val",
                                                children: "14B"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/FlightModal.jsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ticket-info-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-info-label",
                                                children: "Boarding"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-info-val",
                                                children: "04:20 PM"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/FlightModal.jsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ticket-info-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-info-label",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-info-val",
                                                style: {
                                                    color: 'hsl(var(--primary))'
                                                },
                                                children: "BOARDING"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/FlightModal.jsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ticket-info-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-info-label",
                                                children: "Zone"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ticket-info-val",
                                                children: "Zone 2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/modals/FlightModal.jsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ticket-barcode"
                            }, void 0, false, {
                                fileName: "[project]/src/components/modals/FlightModal.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/FlightModal.jsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/FlightModal.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/FlightModal.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/FlightModal.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/modals/MapModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MapModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/modals/MapModal.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function MapModal({ visible, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `portal-overlay-modal${visible ? ' active' : ''}`,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "portal-modal-card",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "portal-modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "portal-modal-title",
                            children: "🗺️ Terminal Map Navigation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/MapModal.jsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "portal-modal-close",
                            onClick: onClose,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/MapModal.jsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/MapModal.jsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "portal-modal-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "map-mockup",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "map-grid-bg"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/MapModal.jsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "map-node gate-a",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "map-label",
                                        children: "Gate A-12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/MapModal.jsx",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/MapModal.jsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "map-node gate-b",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "map-label",
                                        children: "Duty Free Shop"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/MapModal.jsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/MapModal.jsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "map-node lounge",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "map-label",
                                        children: "Airline Lounge"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/MapModal.jsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/MapModal.jsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "map-node kiosk-loc you-are-here",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "map-label",
                                        children: "YOU ARE HERE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/MapModal.jsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/modals/MapModal.jsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/MapModal.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '16px',
                                display: 'flex',
                                gap: '16px',
                                flexWrap: 'wrap'
                            },
                            children: [
                                {
                                    color: 'hsl(var(--primary))',
                                    label: 'Service Points'
                                },
                                {
                                    color: 'hsl(var(--accent))',
                                    label: 'Your Location'
                                }
                            ].map(({ color, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontSize: '0.8rem',
                                        color: 'hsl(var(--text-secondary))'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 10,
                                                height: 10,
                                                borderRadius: '50%',
                                                background: color,
                                                boxShadow: `0 0 8px ${color}`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/MapModal.jsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this),
                                        label
                                    ]
                                }, label, true, {
                                    fileName: "[project]/src/components/modals/MapModal.jsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/MapModal.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/MapModal.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/MapModal.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/MapModal.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/modals/TicketModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TicketModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/modals/TicketModal.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function TicketModal({ visible, onClose, langCode }) {
    const handleBuy = (ticket)=>{
        alert(`🎟️ Ticket printed!\n\n${ticket}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `portal-overlay-modal${visible ? ' active' : ''}`,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "portal-modal-card",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "portal-modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "portal-modal-title",
                            children: "🎟️ Express Transit Ticketing"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/TicketModal.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "portal-modal-close",
                            onClick: onClose,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/TicketModal.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/TicketModal.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "portal-modal-body",
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: 'hsl(var(--text-secondary))'
                            },
                            children: "Select your desired rapid transit ticket below to print or purchase."
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/TicketModal.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "simulator-grid",
                            style: {
                                gridTemplateColumns: '1fr',
                                gap: '12px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "preset-btn",
                                    style: {
                                        padding: '16px',
                                        borderColor: 'hsla(var(--primary), 0.3)'
                                    },
                                    onClick: ()=>handleBuy('Metro Express (to City Center) — Direct rail connection. Every 10 minutes.'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "preset-lang",
                                            style: {
                                                color: 'hsl(var(--primary))'
                                            },
                                            children: "🚆 Metro Express (to City Center)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/TicketModal.jsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "preset-snippet",
                                            children: "Direct rail connection. Runs every 10 minutes."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/TicketModal.jsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/TicketModal.jsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "preset-btn",
                                    style: {
                                        padding: '16px',
                                        borderColor: 'hsla(var(--secondary), 0.3)'
                                    },
                                    onClick: ()=>handleBuy('Airport Shuttle Express (to Central Hotel Hub) — Shuttle bus coach. Every 20 minutes.'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "preset-lang",
                                            style: {
                                                color: 'hsl(var(--secondary))'
                                            },
                                            children: "🚌 Airport Shuttle Express (to Central Hotel Hub)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/TicketModal.jsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "preset-snippet",
                                            children: "Shuttle bus coach. Runs every 20 minutes."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/modals/TicketModal.jsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/modals/TicketModal.jsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/modals/TicketModal.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/TicketModal.jsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/TicketModal.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/TicketModal.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/modals/ChatbotModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatbotModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/modals/ChatbotModal.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ChatbotModal({ visible, onClose, chatMessages, onSend }) {
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [
        chatMessages
    ]);
    const handleSend = ()=>{
        if (!input.trim()) return;
        onSend(input.trim());
        setInput('');
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') handleSend();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `portal-overlay-modal${visible ? ' active' : ''}`,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "portal-modal-card",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "portal-modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "portal-modal-title",
                            children: "🤖 Airport Helpdesk Chatbot"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ChatbotModal.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "portal-modal-close",
                            onClick: onClose,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/modals/ChatbotModal.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/modals/ChatbotModal.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "portal-modal-body",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chat-messages",
                                ref: messagesRef,
                                children: [
                                    chatMessages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `chat-bubble ${msg.sender}`,
                                            children: msg.text
                                        }, i, false, {
                                            fileName: "[project]/src/components/modals/ChatbotModal.jsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)),
                                    chatMessages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chat-bubble bot",
                                        children: "Hello! How can I help you today at the terminal?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/ChatbotModal.jsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/ChatbotModal.jsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chat-input-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "chat-input",
                                        placeholder: 'Ask e.g., "Where is baggage claim?"...',
                                        value: input,
                                        onChange: (e)=>setInput(e.target.value),
                                        onKeyDown: handleKeyDown
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/ChatbotModal.jsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "chat-send-btn",
                                        onClick: handleSend,
                                        children: "Send"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/modals/ChatbotModal.jsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/modals/ChatbotModal.jsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/modals/ChatbotModal.jsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/modals/ChatbotModal.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/modals/ChatbotModal.jsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/modals/ChatbotModal.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/KioskWrapper.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KioskWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/KioskWrapper.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKiosk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useKiosk.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BezelTop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BezelTop.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WelcomeScreen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServicePortal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServicePortal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnalyticsSidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnalyticsSidebar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSuggestionOverlay$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageSuggestionOverlay.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$FlightModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/FlightModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$MapModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/MapModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$TicketModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/TicketModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ChatbotModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/modals/ChatbotModal.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function KioskWrapper() {
    const kiosk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKiosk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Determine brand title based on selected language
    const getBrandTitle = ()=>{
        if (kiosk.selectedLanguage === 'en') return 'Smart Kiosk Terminal';
        if (kiosk.selectedLanguage === 'ceb') return 'Smart Kiosk (Bisaya)';
        if (kiosk.selectedLanguage === 'ms') return 'Portal Kios Pintar';
        if (kiosk.selectedLanguage === 'en-PH') return 'Smart Kiosk (Philippines)';
        return 'Smart Kiosk Terminal';
    };
    const handlePreset = (preset)=>{
        if (preset.lang === 'en') {
            kiosk.processText(preset.text, false);
            setTimeout(()=>kiosk.switchToPortal('en'), 1200);
        } else {
            kiosk.submitInput(preset.text, true);
        }
    };
    const handleToggleLang = ()=>{
        if (kiosk.selectedLanguage === 'en' && kiosk.suggestionData?.detected) {
            kiosk.switchToPortal(kiosk.suggestionData.detected.code);
        } else {
            kiosk.switchToPortal('en');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-wrapper",
        id: "kioskWrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BezelTop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                status: kiosk.kioskStatus
            }, void 0, false, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                kioskStatus: kiosk.kioskStatus,
                brandTitle: getBrandTitle()
            }, void 0, false, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "kiosk-body",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "kiosk-body-with-sidebar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "kiosk-screen-container",
                            id: "screenContainer",
                            children: [
                                kiosk.currentScreen === 'WELCOME' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    isListening: kiosk.isListening,
                                    inputText: kiosk.inputText,
                                    setInputText: kiosk.setInputText,
                                    onToggleListening: kiosk.toggleListening,
                                    onSubmitText: (text)=>kiosk.submitInput(text, true),
                                    onPreset: handlePreset
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KioskWrapper.jsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServicePortal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    langCode: kiosk.selectedLanguage,
                                    onOpenModal: kiosk.openModal,
                                    onReset: kiosk.resetSession,
                                    onToggleLang: handleToggleLang,
                                    detectedLanguage: kiosk.detectedLanguage
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KioskWrapper.jsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSuggestionOverlay$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    visible: kiosk.showSuggestion,
                                    suggestionData: kiosk.suggestionData,
                                    onSelectLanguage: (code)=>kiosk.switchToPortal(code),
                                    onDecline: ()=>{
                                        kiosk.setSuggestion(false);
                                        kiosk.switchToPortal('en');
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KioskWrapper.jsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/KioskWrapper.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnalyticsSidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            visible: kiosk.showAnalytics,
                            highlightedHtml: kiosk.highlightedHtml,
                            probabilities: kiosk.probabilities,
                            rawMatches: kiosk.rawMatches
                        }, void 0, false, {
                            fileName: "[project]/src/components/KioskWrapper.jsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/KioskWrapper.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$FlightModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                visible: kiosk.activeModal === 'flight',
                onClose: kiosk.closeModal,
                langCode: kiosk.selectedLanguage
            }, void 0, false, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$MapModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                visible: kiosk.activeModal === 'map',
                onClose: kiosk.closeModal
            }, void 0, false, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$TicketModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                visible: kiosk.activeModal === 'ticket',
                onClose: kiosk.closeModal,
                langCode: kiosk.selectedLanguage
            }, void 0, false, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modals$2f$ChatbotModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                visible: kiosk.activeModal === 'support',
                onClose: kiosk.closeModal,
                chatMessages: kiosk.chatMessages,
                onSend: kiosk.sendChatMessage
            }, void 0, false, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            kiosk.toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(18, 22, 33, 0.95)',
                    border: kiosk.toast.type === 'error' ? '1px solid rgba(255,75,75,0.5)' : '1px solid hsla(var(--primary), 0.3)',
                    color: '#fff',
                    padding: '14px 24px',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-premium)',
                    zIndex: 1000,
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    animation: 'fadeInUp 0.4s ease'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: kiosk.toast.type === 'error' ? '⚠️' : 'ℹ️'
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: kiosk.toast.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 106,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/KioskWrapper.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// app/page.tsx - NLI Kiosk main entry
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KioskWrapper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/KioskWrapper.jsx [app-ssr] (ecmascript)");
'use client';
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KioskWrapper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=_12qzf-3._.js.map
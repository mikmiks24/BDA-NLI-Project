module.exports = [
"[project]/src/data/chatbotData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/chatbotData.js
// Multilingual chatbot Q&A database — General Assistant
__turbopack_context__.s([
    "CHATBOT_DATABASE",
    ()=>CHATBOT_DATABASE,
    "getChatbotDbKey",
    ()=>getChatbotDbKey
]);
const CHATBOT_DATABASE = {
    en: {
        welcome: 'Hello! How can I help you today?',
        answers: [
            {
                keys: [
                    'directions',
                    'navigate',
                    'find',
                    'where',
                    'location'
                ],
                ans: 'I can help you find your way! Please tell me what you\'re looking for and I\'ll guide you there.'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom'
                ],
                ans: 'Restrooms are typically located near the main entrance or on each floor of the building.'
            },
            {
                keys: [
                    'weather',
                    'rain',
                    'temperature',
                    'forecast'
                ],
                ans: 'I can check the weather for you! Currently the forecast shows mild conditions. Would you like more details?'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    'cafe',
                    'eat',
                    'hungry',
                    'restaurant'
                ],
                ans: 'There are several dining options nearby. Would you like me to recommend a restaurant or café?'
            },
            {
                keys: [
                    'time',
                    'clock',
                    'schedule',
                    'hours',
                    'open'
                ],
                ans: 'The current local time is displayed on the screen. Most services operate from 8 AM to 8 PM.'
            },
            {
                keys: [
                    'help',
                    'assist',
                    'support',
                    'information'
                ],
                ans: 'I\'m here to help! You can ask me about directions, services, schedules, or any general questions you may have.'
            },
            {
                keys: [
                    'emergency',
                    'police',
                    'ambulance',
                    'fire'
                ],
                ans: 'For emergencies, please call the local emergency number immediately. I can also notify nearby staff for assistance.'
            }
        ],
        fallback: 'Hello! How may I assist you today? I can help you with directions, schedules, services, and more.'
    },
    tl: {
        welcome: 'Kamusta! Paano kita matutulungan ngayon? (Hello! How can I help you today?)',
        answers: [
            {
                keys: [
                    'directions',
                    'navigate',
                    'find',
                    'where',
                    'saan',
                    'direksyon'
                ],
                ans: 'Maaari kitang tulungan sa direksyon! Sabihin mo lang kung ano ang hinahanap mo. (I can help you with directions!)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    'banyo'
                ],
                ans: 'Ang mga banyo ay kadalasang matatagpuan malapit sa pangunahing pasukan. (Restrooms are near the main entrance.)'
            },
            {
                keys: [
                    'weather',
                    'rain',
                    'panahon',
                    'ulan'
                ],
                ans: 'Maaari kong suriin ang lagay ng panahon para sa iyo! (I can check the weather for you!)'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    'pagkain',
                    'gutom',
                    'kainan'
                ],
                ans: 'May mga kainan na malapit dito. Gusto mo bang mag-recommend ako? (There are dining options nearby.)'
            },
            {
                keys: [
                    'time',
                    'oras',
                    'schedule',
                    'bukas'
                ],
                ans: 'Ang kasalukuyang oras ay nakalagay sa screen. Karamihan ng serbisyo ay bukas mula 8 AM hanggang 8 PM.'
            },
            {
                keys: [
                    'help',
                    'tulong',
                    'assist',
                    'impormasyon'
                ],
                ans: 'Nandito ako para tumulong! Magtanong ka tungkol sa direksyon, serbisyo, o kahit anong katanungan.'
            },
            {
                keys: [
                    'emergency',
                    'pulis',
                    'ambulansya',
                    'sunog'
                ],
                ans: 'Para sa mga emerhensiya, tumawag agad sa emergency number. Maaari rin akong tumawag ng staff.'
            }
        ],
        fallback: 'Mabuhay! Paano kita matutulungan ngayon? Maaari kitang tulungan sa direksyon, iskedyul, serbisyo, at iba pa.'
    },
    zh: {
        welcome: '您好！今天有什么我可以帮您的？ (Hello! How can I help you today?)',
        answers: [
            {
                keys: [
                    'directions',
                    'navigate',
                    'find',
                    'where',
                    '方向',
                    '在哪里',
                    '找'
                ],
                ans: '我可以帮您找路！请告诉我您要去哪里。(I can help you find your way!)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    '洗手间',
                    '厕所'
                ],
                ans: '洗手间通常位于主入口附近或每层楼。(Restrooms are near the main entrance or on each floor.)'
            },
            {
                keys: [
                    'weather',
                    'rain',
                    '天气',
                    '下雨',
                    '温度'
                ],
                ans: '我可以为您查看天气预报！(I can check the weather for you!)'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    '吃',
                    '咖啡',
                    '饿',
                    '餐厅'
                ],
                ans: '附近有多家餐饮选择。需要我为您推荐吗？(There are dining options nearby.)'
            },
            {
                keys: [
                    'time',
                    '时间',
                    'schedule',
                    '营业'
                ],
                ans: '当前时间显示在屏幕上。大多数服务从早8点到晚8点开放。'
            },
            {
                keys: [
                    'help',
                    '帮助',
                    'assist',
                    '信息'
                ],
                ans: '我在这里帮助您！您可以问我关于方向、服务、日程或任何一般问题。'
            },
            {
                keys: [
                    'emergency',
                    '紧急',
                    '警察',
                    '救护车'
                ],
                ans: '如有紧急情况，请立即拨打当地紧急电话。我也可以通知附近的工作人员。'
            }
        ],
        fallback: '您好！今天我可以如何帮助您？我可以帮助您查找方向、服务、日程等。'
    },
    ko: {
        welcome: '안녕하세요! 오늘 어떤 도움이 필요하십니까? (Hello! How can I help you today?)',
        answers: [
            {
                keys: [
                    'directions',
                    'navigate',
                    'find',
                    'where',
                    '방향',
                    '어디',
                    '찾기'
                ],
                ans: '길 안내를 도와드리겠습니다! 어디를 찾으시는지 알려주세요. (I can help you find your way!)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    '화장실'
                ],
                ans: '화장실은 보통 정문 근처나 각 층에 있습니다. (Restrooms are near the main entrance or on each floor.)'
            },
            {
                keys: [
                    'weather',
                    'rain',
                    '날씨',
                    '비',
                    '온도'
                ],
                ans: '날씨를 확인해 드리겠습니다! (I can check the weather for you!)'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    '식사',
                    '배고픈',
                    '커피',
                    '식당'
                ],
                ans: '근처에 여러 식당이 있습니다. 추천해 드릴까요? (There are dining options nearby.)'
            },
            {
                keys: [
                    'time',
                    '시간',
                    'schedule',
                    '영업'
                ],
                ans: '현재 시간이 화면에 표시됩니다. 대부분의 서비스는 오전 8시~오후 8시에 운영됩니다.'
            },
            {
                keys: [
                    'help',
                    '도움',
                    'assist',
                    '정보'
                ],
                ans: '도움이 필요하시면 말씀해 주세요! 방향, 서비스, 일정 등에 대해 질문하실 수 있습니다.'
            },
            {
                keys: [
                    'emergency',
                    '긴급',
                    '경찰',
                    '구급차'
                ],
                ans: '긴급 상황 시 즉시 긴급 전화번호로 연락하세요. 근처 직원에게도 알릴 수 있습니다.'
            }
        ],
        fallback: '안녕하세요! 오늘 무엇을 도와드릴까요? 방향, 일정, 서비스 등에 대해 도와드릴 수 있습니다.'
    },
    ja: {
        welcome: 'こんにちは！今日は何かお手伝いできることはありますか？ (Hello! How can I help you today?)',
        answers: [
            {
                keys: [
                    'directions',
                    'navigate',
                    'find',
                    'where',
                    '方向',
                    'どこ',
                    '探す'
                ],
                ans: '道案内をいたします！何をお探しかお教えください。(I can help you find your way!)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    'トイレ'
                ],
                ans: 'お手洗いは通常、メインエントランス付近や各階にあります。(Restrooms are near the main entrance or on each floor.)'
            },
            {
                keys: [
                    'weather',
                    'rain',
                    '天気',
                    '雨',
                    '気温'
                ],
                ans: '天気予報を確認いたします！(I can check the weather for you!)'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    '食事',
                    'カフェ',
                    'レストラン'
                ],
                ans: '近くにいくつかの飲食店があります。おすすめしましょうか？(There are dining options nearby.)'
            },
            {
                keys: [
                    'time',
                    '時間',
                    'schedule',
                    '営業'
                ],
                ans: '現在の時刻は画面に表示されています。ほとんどのサービスは午前8時から午後8時まで営業しています。'
            },
            {
                keys: [
                    'help',
                    '助け',
                    'assist',
                    '情報'
                ],
                ans: 'お手伝いいたします！方向、サービス、スケジュール、その他のご質問にお答えできます。'
            },
            {
                keys: [
                    'emergency',
                    '緊急',
                    '警察',
                    '救急車'
                ],
                ans: '緊急の場合は、すぐに緊急通報番号に電話してください。近くのスタッフにも知らせることができます。'
            }
        ],
        fallback: 'こんにちは！本日はどのようなご用件でしょうか？方向、スケジュール、サービスなどについてお手伝いできます。'
    },
    id: {
        welcome: 'Halo! Ada yang bisa saya bantu hari ini? (Hello! How can I help you today?)',
        answers: [
            {
                keys: [
                    'directions',
                    'navigate',
                    'find',
                    'where',
                    'arah',
                    'cari',
                    'di mana'
                ],
                ans: 'Saya dapat membantu Anda menemukan jalan! Beri tahu saya apa yang Anda cari. (I can help you find your way!)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    'kamar mandi',
                    'wc'
                ],
                ans: 'Toilet biasanya terletak di dekat pintu masuk utama atau di setiap lantai.'
            },
            {
                keys: [
                    'weather',
                    'rain',
                    'cuaca',
                    'hujan',
                    'suhu'
                ],
                ans: 'Saya dapat memeriksa prakiraan cuaca untuk Anda! (I can check the weather for you!)'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    'makan',
                    'lapar',
                    'kopi',
                    'restoran'
                ],
                ans: 'Ada beberapa pilihan tempat makan di dekat sini. Mau saya rekomendasikan?'
            },
            {
                keys: [
                    'time',
                    'waktu',
                    'schedule',
                    'buka'
                ],
                ans: 'Waktu saat ini ditampilkan di layar. Sebagian besar layanan beroperasi dari jam 8 pagi hingga 8 malam.'
            },
            {
                keys: [
                    'help',
                    'bantuan',
                    'assist',
                    'informasi'
                ],
                ans: 'Saya di sini untuk membantu! Anda bisa bertanya tentang arah, layanan, jadwal, atau pertanyaan umum lainnya.'
            },
            {
                keys: [
                    'emergency',
                    'darurat',
                    'polisi',
                    'ambulans'
                ],
                ans: 'Untuk keadaan darurat, segera hubungi nomor darurat setempat. Saya juga dapat memberi tahu staf terdekat.'
            }
        ],
        fallback: 'Halo! Bagaimana saya dapat membantu Anda hari ini? Saya dapat membantu dengan arah, jadwal, layanan, dan lainnya.'
    },
    ur: {
        welcome: 'ہیلو! میں آج آپ کی کیا مدد کر سکتا ہوں؟ (Hello! How can I help you today?)',
        answers: [
            {
                keys: [
                    'directions',
                    'navigate',
                    'find',
                    'where',
                    'سمت',
                    'کہاں',
                    'تلاش'
                ],
                ans: 'میں آپ کو راستہ تلاش کرنے میں مدد کر سکتا ہوں! مجھے بتائیں کہ آپ کیا ڈھونڈ رہے ہیں۔'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    'حمام'
                ],
                ans: 'واش رومز عام طور پر مرکزی دروازے کے قریب یا ہر منزل پر واقع ہوتے ہیں۔'
            },
            {
                keys: [
                    'weather',
                    'rain',
                    'موسم',
                    'بارش'
                ],
                ans: 'میں آپ کے لیے موسم کی پیشن گوئی دیکھ سکتا ہوں! (I can check the weather for you!)'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    'کھانا',
                    'بھوک',
                    'ریستوران'
                ],
                ans: 'قریب میں کھانے کے کئی اختیارات موجود ہیں۔ کیا آپ سفارش چاہتے ہیں؟'
            },
            {
                keys: [
                    'time',
                    'وقت',
                    'schedule',
                    'کھلا'
                ],
                ans: 'موجودہ وقت اسکرین پر دکھایا گیا ہے۔ زیادہ تر خدمات صبح 8 بجے سے رات 8 بجے تک دستیاب ہیں۔'
            },
            {
                keys: [
                    'help',
                    'مدد',
                    'assist',
                    'معلومات'
                ],
                ans: 'میں یہاں مدد کے لیے ہوں! آپ سمت، خدمات، شیڈول، یا کسی بھی عمومی سوال کے بارے میں پوچھ سکتے ہیں۔'
            },
            {
                keys: [
                    'emergency',
                    'ایمرجنسی',
                    'پولیس',
                    'ایمبولینس'
                ],
                ans: 'ہنگامی صورتحال کے لیے، فوری طور پر مقامی ایمرجنسی نمبر پر کال کریں۔'
            }
        ],
        fallback: 'السلام علیکم! آج میں آپ کی کس طرح مدد کر سکتا ہوں؟ میں سمت، شیڈول، خدمات اور مزید میں مدد کر سکتا ہوں۔'
    },
    th: {
        welcome: 'สวัสดีค่ะ! วันนี้มีอะไรให้ฉันช่วยเหลือไหมคะ? (Hello! How can I help you today?)',
        answers: [
            {
                keys: [
                    'directions',
                    'navigate',
                    'find',
                    'where',
                    'ทาง',
                    'ที่ไหน',
                    'หา'
                ],
                ans: 'ฉันสามารถช่วยคุณหาทางได้! บอกฉันว่าคุณกำลังมองหาอะไร (I can help you find your way!)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    'ห้องน้ำ'
                ],
                ans: 'ห้องน้ำมักจะอยู่ใกล้ทางเข้าหลักหรือในแต่ละชั้นของอาคาร'
            },
            {
                keys: [
                    'weather',
                    'rain',
                    'อากาศ',
                    'ฝน',
                    'อุณหภูมิ'
                ],
                ans: 'ฉันสามารถตรวจสอบพยากรณ์อากาศให้คุณได้! (I can check the weather for you!)'
            },
            {
                keys: [
                    'food',
                    'coffee',
                    'อาหาร',
                    'หิว',
                    'กาแฟ',
                    'ร้านอาหาร'
                ],
                ans: 'มีตัวเลือกร้านอาหารหลายแห่งใกล้เคียง ต้องการให้แนะนำไหม?'
            },
            {
                keys: [
                    'time',
                    'เวลา',
                    'schedule',
                    'เปิด'
                ],
                ans: 'เวลาปัจจุบันแสดงอยู่บนหน้าจอ บริการส่วนใหญ่เปิดให้บริการตั้งแต่ 8.00 น. ถึง 20.00 น.'
            },
            {
                keys: [
                    'help',
                    'ช่วย',
                    'assist',
                    'ข้อมูล'
                ],
                ans: 'ฉันอยู่ที่นี่เพื่อช่วยเหลือ! คุณสามารถถามเกี่ยวกับทิศทาง บริการ ตารางเวลา หรือคำถามทั่วไปอื่นๆ'
            },
            {
                keys: [
                    'emergency',
                    'ฉุกเฉิน',
                    'ตำรวจ',
                    'รถพยาบาล'
                ],
                ans: 'สำหรับกรณีฉุกเฉิน กรุณาโทรหมายเลขฉุกเฉินท้องถิ่นทันที'
            }
        ],
        fallback: 'สวัสดีครับ/ค่ะ! วันนี้ฉันสามารถช่วยคุณได้อย่างไร? ฉันสามารถช่วยเรื่องทิศทาง ตารางเวลา บริการ และอื่นๆ'
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
// src/hooks/useKiosk.js
// Uses the real HuBERT MLP model via Python FastAPI backend (http://localhost:8000)
// Flow: WELCOME → REQUEST (record audio / type text) → CHAT (translated chatbox)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chatbotData.js [app-ssr] (ecmascript)");
'use client';
;
;
const API_BASE = 'http://localhost:8000';
// Label → nliRules language code map (for chatbot compatibility)
const LABEL_TO_LANG = {
    CHN: 'zh',
    JPN: 'ja',
    KOR: 'ko',
    IDN: 'id',
    THA: 'th',
    PAK: 'ur',
    PHL: 'tl'
};
function useKiosk() {
    // --- Screens: 'WELCOME' | 'REQUEST' | 'CHAT' ---
    const [currentScreen, setCurrentScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('WELCOME');
    // --- Language ---
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    // --- Status ---
    const [kioskStatus, setKioskStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ready');
    // --- Text input (shown below mic) ---
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // --- Voice recording state ---
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Analysis results from the HuBERT API ---
    const [analysisResult, setAnalysisResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [analysisComplete, setAnalysisComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Language Suggestion overlay ---
    const [showSuggestion, setShowSuggestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestionData, setSuggestionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Chat ---
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userRequest, setUserRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Ref mirrors userRequest so proceedToChat always reads the latest value
    // (state updates are async; ref is synchronous)
    const userRequestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('');
    // --- Toast ---
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Refs ---
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, type = 'info')=>{
        setToast({
            message,
            type
        });
        setTimeout(()=>setToast(null), 6000);
    }, []);
    // ─────────────────────────────────────────────────────────────────
    // AUDIO RECORDING (MediaRecorder → sends WAV blob to API)
    // ─────────────────────────────────────────────────────────────────
    const startRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            streamRef.current = stream;
            audioChunksRef.current = [];
            const recorder = new MediaRecorder(stream, {
                mimeType: 'audio/webm'
            });
            recorder.ondataavailable = (e)=>{
                if (e.data.size > 0) audioChunksRef.current.push(e.data);
            };
            recorder.onstop = async ()=>{
                // Stop all mic tracks
                stream.getTracks().forEach((t)=>t.stop());
                setIsListening(false);
                setKioskStatus('thinking');
                const blob = new Blob(audioChunksRef.current, {
                    type: 'audio/webm'
                });
                await sendAudioToAPI(blob);
            };
            recorder.start();
            mediaRecorderRef.current = recorder;
            setIsListening(true);
            setKioskStatus('listening');
            setAnalysisResult(null);
            setAnalysisComplete(false);
        } catch (err) {
            console.error('Mic error:', err);
            if (err.name === 'NotAllowedError') {
                showToast('Microphone blocked! Allow mic permissions in your browser.', 'error');
            } else {
                showToast('Could not access microphone. Try typing instead.', 'error');
            }
            setIsListening(false);
            setKioskStatus('ready');
        }
    }, []);
    const stopRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }
    }, []);
    const toggleListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isListening) {
            stopRecording();
        } else {
            startRecording();
        }
    }, [
        isListening,
        startRecording,
        stopRecording
    ]);
    // ─────────────────────────────────────────────────────────────────
    // SEND AUDIO → HuBERT API → Get NLI prediction
    // ─────────────────────────────────────────────────────────────────
    const sendAudioToAPI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (blob)=>{
        setKioskStatus('thinking');
        setAnalysisComplete(false);
        try {
            const formData = new FormData();
            formData.append('audio', blob, 'recording.webm');
            const response = await fetch(`${API_BASE}/api/analyze-audio`, {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || 'API error');
            }
            const data = await response.json();
            processAPIResult(data);
        } catch (err) {
            console.error('API call failed:', err);
            setKioskStatus('ready');
            setAnalysisComplete(false);
            if (err.message.includes('fetch') || err.message.includes('Failed')) {
                showToast('⚠️ Backend server is not running. Start main.py first!', 'error');
            } else {
                showToast(`Analysis error: ${err.message}`, 'error');
            }
        }
    }, []);
    // ─────────────────────────────────────────────────────────────────
    // PROCESS RESULT from API
    // ─────────────────────────────────────────────────────────────────
    const processAPIResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((data)=>{
        // Transform API response into the shape the UI expects
        const probabilities = (data.probabilities || []).map((p)=>({
                code: LABEL_TO_LANG[p.label] || 'en',
                label: p.label,
                name: p.name,
                nativeName: p.name,
                flag: p.flag,
                confidence: p.confidence
            }));
        const detected = data.confidence > 10 ? {
            label: data.detected,
            code: LABEL_TO_LANG[data.detected] || data.code || 'en',
            name: data.name,
            nativeName: data.nativeName || data.name,
            flag: data.flag,
            confidence: data.confidence,
            choices: data.choices || []
        } : null;
        const result = {
            probabilities,
            detected,
            highlightedHtml: '',
            rawMatches: []
        };
        setAnalysisResult(result);
        setAnalysisComplete(true);
        setKioskStatus('ready');
        if (detected) {
            setTimeout(()=>{
                setSuggestionData({
                    detected,
                    probabilities
                });
                setShowSuggestion(true);
                setKioskStatus('prompt');
            }, 1500);
        } else {
            // No L1 detected — go straight to English chat
            setTimeout(()=>proceedToChat('en'), 1800);
        }
    }, []);
    // ─────────────────────────────────────────────────────────────────
    // TEXT SUBMIT — Still uses rule-based engine as fallback for typing
    // (since HuBERT needs audio, not text)
    // ─────────────────────────────────────────────────────────────────
    const submitRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (text)=>{
        if (!text || !text.trim()) return;
        setKioskStatus('thinking');
        setAnalysisResult(null);
        setAnalysisComplete(false);
        try {
            // Try backend text analysis first (if available)
            // If no text endpoint exists, fall back to rule-based
            const { analyzeEnglishText } = await __turbopack_context__.A("[project]/src/data/nliRules.js [app-ssr] (ecmascript, async loader)");
            const result = analyzeEnglishText(text);
            setTimeout(()=>{
                setAnalysisResult(result);
                setAnalysisComplete(true);
                setKioskStatus('ready');
                if (result.detected) {
                    setTimeout(()=>{
                        setSuggestionData({
                            detected: result.detected,
                            probabilities: result.probabilities
                        });
                        setShowSuggestion(true);
                        setKioskStatus('prompt');
                    }, 1500);
                } else {
                    setTimeout(()=>proceedToChat('en'), 1800);
                }
            }, 600);
        } catch (err) {
            setKioskStatus('ready');
            showToast('Analysis failed. Please try speaking instead.', 'error');
        }
    }, []);
    // ─────────────────────────────────────────────────────────────────
    // PROCEED TO CHAT
    // ─────────────────────────────────────────────────────────────────
    const proceedToChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((langCode)=>{
        setSelectedLanguage(langCode);
        setShowSuggestion(false);
        setKioskStatus('ready');
        const dbKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChatbotDbKey"])(langCode);
        const db = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHATBOT_DATABASE"][dbKey] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHATBOT_DATABASE"].en;
        // Use ref — always has the latest value regardless of closure staleness
        const initialRequest = userRequestRef.current.trim();
        if (initialRequest) {
            // Start the chat with the actual user concern, then respond to it.
            const lowerQ = initialRequest.toLowerCase();
            let found = null;
            for (const item of db.answers){
                if (item.keys.some((k)=>lowerQ.includes(k))) {
                    found = item.ans;
                    break;
                }
            }
            setChatMessages([
                {
                    sender: 'user',
                    text: initialRequest
                },
                {
                    sender: 'bot',
                    text: found || db.fallback
                }
            ]);
            setCurrentScreen('CHAT');
            return;
        }
        // No prior request: start with the default welcome greeting
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
        // Save the request if it's the first message (user's initial question)
        if (chatMessages.length <= 1 && !userRequest) {
            setUserRequest(query);
        }
        setChatMessages((prev)=>[
                ...prev,
                {
                    sender: 'user',
                    text: query
                }
            ]);
        setTimeout(async ()=>{
            const { getChatbotDbKey: getKey } = await __turbopack_context__.A("[project]/src/data/chatbotData.js [app-ssr] (ecmascript, async loader)");
            const { CHATBOT_DATABASE: DB } = await __turbopack_context__.A("[project]/src/data/chatbotData.js [app-ssr] (ecmascript, async loader)");
            const dbKey = getKey(selectedLanguage);
            const db = DB[dbKey] || DB.en;
            const lowerQ = query.toLowerCase();
            let found = null;
            for (const item of db.answers){
                if (item.keys.some((k)=>lowerQ.includes(k))) {
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
        setUserRequest('');
        userRequestRef.current = '';
        setAnalysisResult(null);
        setAnalysisComplete(false);
        setShowSuggestion(false);
        setSuggestionData(null);
        setChatMessages([]);
        setKioskStatus('ready');
        if (isListening) stopRecording();
    }, [
        isListening,
        stopRecording
    ]);
    const goToRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setCurrentScreen('REQUEST');
        setInputText('');
        setUserRequest('');
        userRequestRef.current = '';
        setAnalysisResult(null);
        setAnalysisComplete(false);
    }, []);
    // Wrapped setter — keeps ref in sync so proceedToChat always reads the latest
    const setUserRequestAndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((text)=>{
        userRequestRef.current = text;
        setUserRequest(text);
    }, []);
    // Check backend health on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch(`${API_BASE}/api/health`).then((r)=>r.json()).then((d)=>console.log('✅ Backend connected:', d)).catch(()=>console.warn('⚠️ Backend (main.py) not running on port 8000'));
    }, []);
    return {
        currentScreen,
        selectedLanguage,
        kioskStatus,
        inputText,
        setInputText,
        isListening,
        userRequest,
        setUserRequest: setUserRequestAndRef,
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
        name: 'Filipino',
        nativeName: 'Filipino',
        flag: '🇵🇭',
        suggestText: 'Would you like to switch to Tagalog?',
        nativeSuggestText: 'Gusto mo bang lumipat sa Tagalog?',
        welcomeMessage: 'Maligayang Pagdating sa Smart Assistant Portal!',
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
            weather: {
                title: 'Lagay ng Panahon',
                desc: 'Suriin ang kasalukuyang kondisyon ng panahon at hula.'
            },
            directory: {
                title: 'Direksyon at Mapa',
                desc: 'Maghanap ng mga lugar, tindahan, at serbisyo sa malapit.'
            },
            translate: {
                title: 'Pagsasalin ng Wika',
                desc: 'Isalin ang mga parirala at teksto sa iba\'t ibang wika.'
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
        welcomeMessage: '欢迎使用 KAMM 智能助手！',
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
            weather: {
                title: '天气查询',
                desc: '查看当前天气状况和预报信息。'
            },
            directory: {
                title: '方向与地图',
                desc: '查找附近的地点、商店和服务设施。'
            },
            translate: {
                title: '语言翻译',
                desc: '将短语和文本翻译成多种语言。'
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
        welcomeMessage: 'KAMM 어시스턴트 포털에 오신 것을 환영합니다!',
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
            weather: {
                title: '날씨 확인',
                desc: '현재 날씨 상태와 예보를 확인하세요.'
            },
            directory: {
                title: '방향 및 지도',
                desc: '주변 장소, 상점, 서비스를 찾으세요.'
            },
            translate: {
                title: '언어 번역',
                desc: '다양한 언어로 문구와 텍스트를 번역하세요.'
            },
            support: {
                title: '지원 및 챗봇',
                desc: '신속한 답변을 위해 가상 어시스턴트에 문의하세요.'
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
        welcomeMessage: 'KAMM アシスタントポータルへようこそ！',
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
            weather: {
                title: '天気確認',
                desc: '現在の天気と予報を確認できます。'
            },
            directory: {
                title: '方向と地図',
                desc: '近くの場所、店舗、サービスを検索できます。'
            },
            translate: {
                title: '言語翻訳',
                desc: 'フレーズやテキストを様々な言語に翻訳できます。'
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
        welcomeMessage: 'Selamat Datang di Portal KAMM!',
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
            weather: {
                title: 'Cuaca',
                desc: 'Periksa kondisi cuaca saat ini dan prakiraan.'
            },
            directory: {
                title: 'Arah & Peta',
                desc: 'Temukan lokasi, toko, dan layanan terdekat.'
            },
            translate: {
                title: 'Terjemahan Bahasa',
                desc: 'Terjemahkan frasa dan teks ke berbagai bahasa.'
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
        welcomeMessage: 'KAMM اسسٹنٹ پورٹل پر خوش آمدید!',
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
            weather: {
                title: 'موسم کی معلومات',
                desc: 'موجودہ موسم اور پیشن گوئی دیکھیں۔'
            },
            directory: {
                title: 'سمت اور نقشہ',
                desc: 'قریبی مقامات، دکانیں اور خدمات تلاش کریں۔'
            },
            translate: {
                title: 'زبان ترجمہ',
                desc: 'جملوں اور متن کو مختلف زبانوں میں ترجمہ کریں۔'
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
        welcomeMessage: 'ยินดีต้อนรับสู่ KAMM ผู้ช่วยอัจฉริยะ!',
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
            weather: {
                title: 'สภาพอากาศ',
                desc: 'ตรวจสอบสภาพอากาศปัจจุบันและพยากรณ์อากาศ'
            },
            directory: {
                title: 'ทิศทางและแผนที่',
                desc: 'ค้นหาสถานที่ ร้านค้า และบริการใกล้เคียง'
            },
            translate: {
                title: 'แปลภาษา',
                desc: 'แปลวลีและข้อความเป็นหลายภาษา'
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/nliRules.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function getLangPill(langCode) {
    if (!langCode || langCode === 'en') return null;
    if (langCode === 'en-PH') return {
        flag: '🇵🇭',
        name: 'English (PH)'
    };
    if (langCode === 'ceb') return {
        flag: '🇵🇭',
        name: 'Cebuano'
    };
    if (langCode === 'ms') return {
        flag: '🇲🇾',
        name: 'Melayu'
    };
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseLangCode"])(langCode);
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].find((l)=>l.code === base);
    if (lang) return {
        flag: lang.flag,
        name: lang.nativeName
    };
    return null;
}
function Header({ kioskStatus, currentScreen, selectedLanguage }) {
    const pill = currentScreen === 'CHAT' ? getLangPill(selectedLanguage) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "kiosk-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "kiosk-brand",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/assets/logo.svg",
                        alt: "Brand logo",
                        className: "kiosk-logo-img"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "kiosk-title-text",
                        children: "KAMM"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                },
                children: [
                    pill && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "active-lang-pill",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: pill.flag
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: pill.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBadge$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        status: kioskStatus
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/WelcomeScreen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WelcomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/WelcomeScreen.jsx — Clean "Tap to Proceed" landing screen
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function WelcomeScreen({ onProceed }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-screen screen-welcome active",
        id: "screenWelcome",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcome-logo-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "welcome-orb-outer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "welcome-orb-inner",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "welcome-logo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/logo.svg",
                                    alt: "Logo",
                                    className: "welcome-logo-img"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WelcomeScreen.jsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/WelcomeScreen.jsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/WelcomeScreen.jsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "welcome-orb-ring ring1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "welcome-orb-ring ring2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "welcome-orb-ring ring3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "welcome-title",
                children: "Welcome to KAMM"
            }, void 0, false, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "welcome-subtitle",
                style: {
                    opacity: 0.7,
                    fontSize: '0.95rem',
                    marginTop: '4px',
                    letterSpacing: '0.5px'
                },
                children: "Knowledge-Assisted Mother-Tongue Mapping"
            }, void 0, false, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "welcome-proceed-btn",
                onClick: onProceed,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "proceed-icon",
                        children: "▶"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    "Tap to Proceed"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcome-lang-strip",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇵🇭"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇨🇳"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 33,
                        columnNumber: 26
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇰🇷"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 33,
                        columnNumber: 43
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇯🇵"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 33,
                        columnNumber: 60
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇮🇩"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇵🇰"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 34,
                        columnNumber: 26
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇹🇭"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 34,
                        columnNumber: 43
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇬🇧"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 34,
                        columnNumber: 60
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "welcome-lang-label",
                children: "Serving users in 8+ languages"
            }, void 0, false, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WelcomeScreen.jsx",
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
"[project]/src/components/RequestScreen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RequestScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/RequestScreen.jsx
// Screen 2: User speaks → audio sent to HuBERT API / or types text (rule-based fallback)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WaveVisualizer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WaveVisualizer.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/nliRules.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function RequestScreen({ inputText, setInputText, isListening, kioskStatus, onToggleListening, onSubmit, analysisResult, analysisComplete }) {
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [recordSecs, setRecordSecs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Countdown timer while recording
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isListening) {
            setRecordSecs(0);
            const timer = setInterval(()=>setRecordSecs((s)=>s + 1), 1000);
            return ()=>clearInterval(timer);
        }
    }, [
        isListening
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isListening && inputRef.current) inputRef.current.focus();
    }, [
        isListening
    ]);
    const handleKey = (e)=>{
        if (e.key === 'Enter') onSubmit(inputText);
    };
    const isAnalyzing = kioskStatus === 'thinking';
    const showResults = analysisComplete && analysisResult;
    const displayProbs = showResults ? analysisResult.probabilities.slice(0, 7) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].slice(0, 7).map((l)=>({
            ...l,
            confidence: 0
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-screen screen-request active",
        id: "screenRequest",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "request-voice-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "request-prompt",
                        children: isListening ? `🎙️ Recording... ${recordSecs}s — Tap again to stop & analyze` : isAnalyzing ? '⚙️ Sending audio to HuBERT model...' : 'Tap the microphone and speak your request in English'
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "voice-button-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `voice-btn${isListening ? ' listening' : ''}`,
                                onClick: onToggleListening,
                                title: isListening ? 'Tap to Stop Recording' : 'Tap to Start Recording',
                                disabled: isAnalyzing,
                                children: isListening ? '⏹' : '🎙️'
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WaveVisualizer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                active: isListening
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "model-badge",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "model-badge-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            "HuBERT MLP Model — ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'hsl(var(--primary))'
                                },
                                children: "KAMM Audio Analysis"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 69,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RequestScreen.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-input-divider",
                children: "Or type your request"
            }, void 0, false, {
                fileName: "[project]/src/components/RequestScreen.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-console-box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "console-icon",
                        children: "⌨️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        className: "text-console-input",
                        placeholder: "e.g., 'How's the weather today?' or 'I need directions to...'",
                        autoComplete: "off",
                        value: inputText,
                        onChange: (e)=>setInputText(e.target.value),
                        onKeyDown: handleKey
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "console-submit-btn",
                        onClick: ()=>onSubmit(inputText),
                        disabled: isAnalyzing,
                        children: isAnalyzing ? 'Analyzing...' : 'Send'
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RequestScreen.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            (isAnalyzing || showResults) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `analysis-panel${analysisComplete ? ' analysis-ready' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "analysis-panel-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "analysis-icon",
                                children: "📊"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isAnalyzing ? 'Analyzing your mother-tongue patterns...' : 'Mother-Tongue Analysis Complete'
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            analysisComplete && analysisResult?.detected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "analysis-detected-badge",
                                children: [
                                    analysisResult.detected.flag,
                                    " ",
                                    analysisResult.detected.name,
                                    " detected — ",
                                    analysisResult.detected.confidence,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "analysis-prob-list",
                        children: displayProbs.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "analysis-prob-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "analysis-prob-flag",
                                        children: lang.flag
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "analysis-prob-name",
                                        children: lang.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "analysis-prob-track",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "analysis-prob-bar",
                                            style: {
                                                width: `${lang.confidence}%`,
                                                transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                                                background: lang.confidence > 0 ? 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))' : 'rgba(255,255,255,0.05)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestScreen.jsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "analysis-prob-val",
                                        children: [
                                            lang.confidence,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, lang.code, true, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    showResults && analysisResult.highlightedHtml && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "analysis-highlighted-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "analysis-highlighted-label",
                                children: "Detected Mother-Tongue Transfer Patterns:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "analysis-highlighted-text",
                                dangerouslySetInnerHTML: {
                                    __html: analysisResult.highlightedHtml
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RequestScreen.jsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RequestScreen.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ChatScreen.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/ChatScreen.jsx
// Screen 3: Full-screen translated chatbox — the main service interaction
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/nliRules.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// Determine display info for the active language
function getLangDisplay(langCode) {
    if (!langCode || langCode === 'en') return {
        flag: '🇬🇧',
        name: 'English',
        placeholder: 'Ask e.g., "What\'s the weather?" or "Where can I find help?"'
    };
    if (langCode === 'en-PH') return {
        flag: '🇵🇭',
        name: 'English (PH)',
        placeholder: 'Ask about directions, weather, services, or help...'
    };
    if (langCode === 'ceb') return {
        flag: '🇵🇭',
        name: 'Cebuano',
        placeholder: 'Pangutana bahin sa direksyon, panahon, o serbisyo...'
    };
    if (langCode === 'ms') return {
        flag: '🇲🇾',
        name: 'Bahasa Melayu',
        placeholder: 'Tanya tentang arah, cuaca, atau perkhidmatan...'
    };
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseLangCode"])(langCode);
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].find((l)=>l.code === base);
    if (!lang) return {
        flag: '🌐',
        name: langCode,
        placeholder: 'Type your question...'
    };
    const placeholders = {
        tl: 'Magtanong tungkol sa direksyon, panahon, o serbisyo...',
        zh: '请输入您的问题，如方向、天气、服务...',
        ko: '방향, 날씨, 서비스에 대해 질문하세요...',
        ja: '方向、天気、サービスについてご質問ください...',
        id: 'Tanya tentang arah, cuaca, atau layanan Anda...',
        ur: 'سمت، موسم، یا خدمات کے بارے میں پوچھیں...',
        th: 'ถามเกี่ยวกับทิศทาง สภาพอากาศ หรือบริการ...'
    };
    return {
        flag: lang.flag,
        name: lang.nativeName,
        placeholder: placeholders[base] || 'Type your question...'
    };
}
// Quick-reply suggestion chips based on language
function getQuickReplies(langCode) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseLangCode"])(langCode);
    const en = [
        'What\'s the weather today?',
        'Where are restrooms?',
        'I need directions',
        'How can you help me?'
    ];
    const replies = {
        tl: [
            'Ano ang panahon ngayon?',
            'Nasaan ang banyo?',
            'Kailangan ko ng direksyon',
            'Paano mo ako matutulungan?'
        ],
        zh: [
            '今天天气怎么样？',
            '洗手间在哪里？',
            '我需要方向指引',
            '你能帮我什么？'
        ],
        ko: [
            '오늘 날씨는?',
            '화장실은 어디?',
            '길 안내가 필요해요',
            '어떤 도움을 줄 수 있나요?'
        ],
        ja: [
            '今日の天気は？',
            'お手洗いはどこ？',
            '道を教えてください',
            '何を手伝ってくれますか？'
        ],
        id: [
            'Bagaimana cuaca hari ini?',
            'Di mana toilet?',
            'Saya butuh petunjuk arah',
            'Apa yang bisa Anda bantu?'
        ],
        ur: [
            'آج موسم کیسا ہے؟',
            'واش روم کہاں ہے؟',
            'مجھے سمت چاہیے',
            'آپ کیسے مدد کر سکتے ہیں؟'
        ],
        th: [
            'วันนี้อากาศเป็นอย่างไร?',
            'ห้องน้ำอยู่ที่ไหน?',
            'ต้องการคำแนะนำทิศทาง',
            'คุณช่วยอะไรได้บ้าง?'
        ]
    };
    return replies[base] || en;
}
// Service cards data based on language
function getServices(langCode) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseLangCode"])(langCode);
    const en = [
        {
            icon: '🌤️',
            title: 'Weather',
            query: 'What\'s the weather like today?'
        },
        {
            icon: '🗺️',
            title: 'Directions',
            query: 'I need directions'
        },
        {
            icon: '🌐',
            title: 'Translate',
            query: 'Can you help me translate something?'
        },
        {
            icon: '💬',
            title: 'Support',
            query: 'I need help'
        }
    ];
    const services = {
        tl: [
            {
                icon: '🌤️',
                title: 'Panahon',
                query: 'Ano ang panahon ngayon?'
            },
            {
                icon: '🗺️',
                title: 'Direksyon',
                query: 'Kailangan ko ng direksyon'
            },
            {
                icon: '🌐',
                title: 'Isalin',
                query: 'Maaari mo bang isalin ito?'
            },
            {
                icon: '💬',
                title: 'Tulong',
                query: 'Kailangan ko ng tulong'
            }
        ],
        zh: [
            {
                icon: '🌤️',
                title: '天气',
                query: '今天天气怎么样？'
            },
            {
                icon: '🗺️',
                title: '方向',
                query: '我需要方向指引'
            },
            {
                icon: '🌐',
                title: '翻译',
                query: '你能帮我翻译吗？'
            },
            {
                icon: '💬',
                title: '帮助',
                query: '我需要帮助'
            }
        ],
        ko: [
            {
                icon: '🌤️',
                title: '날씨',
                query: '오늘 날씨는?'
            },
            {
                icon: '🗺️',
                title: '방향',
                query: '길 안내가 필요해요'
            },
            {
                icon: '🌐',
                title: '번역',
                query: '번역 도움이 필요해요'
            },
            {
                icon: '💬',
                title: '도움',
                query: '도움이 필요해요'
            }
        ],
        ja: [
            {
                icon: '🌤️',
                title: '天気',
                query: '今日の天気は？'
            },
            {
                icon: '🗺️',
                title: '方向',
                query: '道を教えてください'
            },
            {
                icon: '🌐',
                title: '翻訳',
                query: '翻訳を手伝ってください'
            },
            {
                icon: '💬',
                title: 'ヘルプ',
                query: '助けてください'
            }
        ],
        id: [
            {
                icon: '🌤️',
                title: 'Cuaca',
                query: 'Bagaimana cuaca hari ini?'
            },
            {
                icon: '🗺️',
                title: 'Arah',
                query: 'Saya butuh petunjuk arah'
            },
            {
                icon: '🌐',
                title: 'Terjemah',
                query: 'Bisa bantu terjemahkan?'
            },
            {
                icon: '💬',
                title: 'Bantuan',
                query: 'Saya butuh bantuan'
            }
        ],
        ur: [
            {
                icon: '🌤️',
                title: 'موسم',
                query: 'آج موسم کیسا ہے؟'
            },
            {
                icon: '🗺️',
                title: 'سمت',
                query: 'مجھے سمت چاہیے'
            },
            {
                icon: '🌐',
                title: 'ترجمہ',
                query: 'ترجمہ میں مدد کریں'
            },
            {
                icon: '💬',
                title: 'مدد',
                query: 'مجھے مدد چاہیے'
            }
        ],
        th: [
            {
                icon: '🌤️',
                title: 'อากาศ',
                query: 'วันนี้อากาศเป็นอย่างไร?'
            },
            {
                icon: '🗺️',
                title: 'ทิศทาง',
                query: 'ต้องการคำแนะนำทิศทาง'
            },
            {
                icon: '🌐',
                title: 'แปล',
                query: 'ช่วยแปลให้หน่อย'
            },
            {
                icon: '💬',
                title: 'ช่วยเหลือ',
                query: 'ต้องการความช่วยเหลือ'
            }
        ]
    };
    return services[base] || en;
}
function ChatScreen({ langCode, chatMessages, onSend, onReset, analysisResult }) {
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [diagnosticsOpen, setDiagnosticsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lang = getLangDisplay(langCode);
    const quickReplies = getQuickReplies(langCode);
    const services = getServices(langCode);
    // Probability bars — use result or zeros
    const displayProbs = analysisResult?.probabilities?.length ? analysisResult.probabilities.slice(0, 5) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].slice(0, 5).map((l)=>({
            ...l,
            confidence: 0
        }));
    const rawMatches = analysisResult?.rawMatches || [];
    const highlightedHtml = analysisResult?.highlightedHtml || '';
    const detected = analysisResult?.detected;
    // Show service cards only at the start of conversation
    const showServices = chatMessages.length <= 2;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [
        chatMessages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (inputRef.current) inputRef.current.focus();
    }, []);
    const handleSend = ()=>{
        if (!input.trim()) return;
        onSend(input.trim());
        setInput('');
    };
    const handleKey = (e)=>{
        if (e.key === 'Enter') handleSend();
    };
    const handleQuickReply = (text)=>{
        onSend(text);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-screen screen-chat active",
        id: "screenChat",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-screen-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-lang-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chat-lang-flag",
                                children: lang.flag
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chat-lang-name",
                                        children: lang.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chat-lang-sub",
                                        children: "KAMM Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-header-right",
                        children: [
                            detected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chat-detected-badge",
                                children: [
                                    detected.flag,
                                    " ",
                                    detected.name,
                                    " — ",
                                    detected.confidence,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chat-status-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-messages-window",
                ref: messagesRef,
                children: [
                    chatMessages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `chat-bubble-wrap ${msg.sender}`,
                            children: [
                                msg.sender === 'bot' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "chat-bot-avatar",
                                    children: "🤖"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatScreen.jsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `chat-bubble ${msg.sender}`,
                                    children: msg.text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatScreen.jsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/ChatScreen.jsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)),
                    showServices && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-services-grid",
                        children: services.map((svc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "chat-service-card",
                                onClick: ()=>onSend(svc.query),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chat-service-icon",
                                        children: svc.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chat-service-title",
                                        children: svc.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 195,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-quick-replies",
                children: quickReplies.map((reply, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "quick-reply-chip",
                        onClick: ()=>handleQuickReply(reply),
                        children: reply
                    }, i, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-input-area",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        className: "chat-input-field",
                        placeholder: lang.placeholder,
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        onKeyDown: handleKey
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "chat-send-button",
                        onClick: handleSend,
                        children: "➤"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `nli-drawer${diagnosticsOpen ? ' nli-drawer-open' : ''}`,
                id: "nliDiagnosticsDrawer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nli-drawer-toggle",
                        onClick: ()=>setDiagnosticsOpen((o)=>!o),
                        id: "nliDrawerToggle",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nli-drawer-toggle-icon",
                                children: "📊"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nli-drawer-toggle-label",
                                children: "KAMM Diagnostics"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            detected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nli-drawer-detected-pill",
                                children: [
                                    detected.flag,
                                    " ",
                                    detected.name,
                                    " ",
                                    detected.confidence,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "nli-drawer-chevron",
                                children: diagnosticsOpen ? '▼' : '▲'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nli-drawer-body",
                        children: [
                            detected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nli-drawer-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section-title",
                                        children: "Detected Mother-Tongue Influence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-detected-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "nli-detected-flag",
                                                children: detected.flag
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "nli-detected-name",
                                                        children: detected.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 262,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "nli-detected-sub",
                                                        children: [
                                                            "Mother-Tongue (L1) · ",
                                                            detected.confidence,
                                                            "% confidence"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-detected-bar-wrap",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "nli-detected-bar",
                                                    style: {
                                                        width: `${detected.confidence}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ChatScreen.jsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nli-drawer-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section-title",
                                        children: "Detected Mother-Tongue Influence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 275,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-no-data",
                                        children: "No mother-tongue influence detected — native English speaker pattern."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nli-drawer-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section-title",
                                        children: "Mother-Tongue Probability Mapping"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-prob-list",
                                        children: displayProbs.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-prob-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "nli-prob-flag",
                                                        children: lang.flag
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 286,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "nli-prob-name",
                                                        children: lang.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 287,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "nli-prob-track",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "nli-prob-bar",
                                                            style: {
                                                                width: `${lang.confidence}%`,
                                                                transition: 'width 0.7s cubic-bezier(0.16,1,0.3,1)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ChatScreen.jsx",
                                                            lineNumber: 289,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 288,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "nli-prob-val",
                                                        children: [
                                                            lang.confidence,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 297,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, lang.code, true, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this),
                            highlightedHtml && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nli-drawer-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section-title",
                                        children: "Mother-Tongue Transfer Markers in Input"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-highlighted-text",
                                        dangerouslySetInnerHTML: {
                                            __html: highlightedHtml
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 305,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nli-drawer-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section-title",
                                        children: "Linguistic Markers Triggered"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-markers-log",
                                        children: rawMatches.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "nli-no-data",
                                            children: "No mother-tongue transfer markers triggered yet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChatScreen.jsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this) : rawMatches.map((match, i)=>{
                                            const langObj = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].find((l)=>l.code === match.langCode);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-marker-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "nli-marker-rule",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: match.reason
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                                lineNumber: 326,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "nli-marker-origin",
                                                                children: [
                                                                    langObj?.name || 'Unknown',
                                                                    " Origin"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                                lineNumber: 327,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 325,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "nli-marker-desc",
                                                        children: match.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 329,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "nli-marker-match",
                                                        children: [
                                                            '"',
                                                            match.matchedText,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 330,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 324,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-screen-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chat-footer-hint",
                        children: "🟢 Live support staff are available if you need further assistance"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-reset-small",
                        onClick: onReset,
                        children: "↩ New Session"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 342,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChatScreen.jsx",
        lineNumber: 157,
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
// Appears after analysis on the REQUEST screen
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function LanguageSuggestionOverlay({ visible, suggestionData, onSelectLanguage, onDecline }) {
    if (!suggestionData) return null;
    const { detected } = suggestionData;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `suggestion-overlay${visible ? ' active' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "suggestion-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-orb-holder",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "suggestion-flag-icon",
                        children: detected?.flag || '🌐'
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-confidence-tag",
                    children: [
                        detected?.confidence,
                        "% Confidence"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "suggestion-title",
                    children: [
                        "Native Language Detected: ",
                        detected?.name
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "suggestion-desc",
                    children: [
                        "Our NLI engine analyzed your input and identified",
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
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        " language transfer patterns. Would you like to continue in your native language?"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 25,
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
                                            lineNumber: 40,
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
                                                    lineNumber: 42,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "suggest-lang-standard",
                                                    children: [
                                                        "Proceed in ",
                                                        choice.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                                    lineNumber: 43,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "suggest-lang-match",
                                    children: choice.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, choice.code, true, {
                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-actions",
                    style: {
                        marginTop: '12px',
                        width: '100%'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-secondary",
                        style: {
                            width: '100%'
                        },
                        onClick: onDecline,
                        children: "🇬🇧  Continue in English"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
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
        className: `kiosk-sidebar-analytics ${visible ? 'show' : 'hide'}`,
        id: "analytics-sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "sidebar-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "📊"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    " KAMM Diagnostics Dashboard"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "sidebar-section-title",
                        children: "Parsed Input (Mother-Tongue Markers Highlighted)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 24,
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
                            lineNumber: 27,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "no-input",
                            children: "Awaiting voice or typing input..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "sidebar-section-title",
                        children: "Mother-Tongue Probability Mapping"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 36,
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
                                                lineNumber: 41,
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
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 40,
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
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, lang.code, true, {
                                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                lineNumber: 35,
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
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "markers-log",
                        children: rawMatches.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "no-markers-detected",
                            children: "No mother-tongue transfer markers triggered yet."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                            lineNumber: 60,
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
                                                lineNumber: 67,
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
                                                lineNumber: 68,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 66,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "marker-log-desc",
                                        children: match.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 70,
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
                                        lineNumber: 71,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                lineNumber: 65,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                lineNumber: 56,
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
"[project]/src/components/KioskWrapper.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KioskWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// src/components/KioskWrapper.jsx — New 3-screen orchestrator
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKiosk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useKiosk.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BezelTop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BezelTop.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WelcomeScreen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RequestScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RequestScreen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChatScreen.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSuggestionOverlay$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageSuggestionOverlay.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnalyticsSidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnalyticsSidebar.jsx [app-ssr] (ecmascript)");
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
function KioskWrapper() {
    const kiosk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKiosk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const [analyticsVisible, setAnalyticsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [analyticsManualOpen, setAnalyticsManualOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (kiosk.analysisComplete && kiosk.currentScreen === 'REQUEST') {
            setAnalyticsVisible(true);
        }
    }, [
        kiosk.analysisComplete,
        kiosk.currentScreen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (kiosk.currentScreen === 'CHAT') {
            setAnalyticsVisible(false);
        }
    }, [
        kiosk.currentScreen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-wrapper",
        id: "kioskWrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BezelTop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                status: kiosk.kioskStatus
            }, void 0, false, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                kioskStatus: kiosk.kioskStatus,
                currentScreen: kiosk.currentScreen,
                selectedLanguage: kiosk.selectedLanguage
            }, void 0, false, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "kiosk-body kiosk-body-single",
                children: [
                    kiosk.currentScreen === 'WELCOME' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onProceed: kiosk.goToRequest
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    kiosk.currentScreen === 'REQUEST' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RequestScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        inputText: kiosk.inputText,
                        setInputText: kiosk.setInputText,
                        isListening: kiosk.isListening,
                        kioskStatus: kiosk.kioskStatus,
                        onToggleListening: kiosk.toggleListening,
                        onSubmit: (text)=>{
                            kiosk.setUserRequest(text);
                            kiosk.submitRequest(text);
                        },
                        analysisResult: kiosk.analysisResult,
                        analysisComplete: kiosk.analysisComplete
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    kiosk.currentScreen === 'CHAT' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatScreen$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        langCode: kiosk.selectedLanguage,
                        chatMessages: kiosk.chatMessages,
                        onSend: kiosk.sendChatMessage,
                        onReset: kiosk.resetSession,
                        analysisResult: kiosk.analysisResult
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSuggestionOverlay$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        visible: kiosk.showSuggestion,
                        suggestionData: kiosk.suggestionData,
                        onSelectLanguage: (code)=>kiosk.proceedToChat(code),
                        onDecline: ()=>kiosk.proceedToChat('en')
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnalyticsSidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        visible: analyticsVisible,
                        highlightedHtml: kiosk.analysisResult?.highlightedHtml || '',
                        probabilities: kiosk.analysisResult?.probabilities || [],
                        rawMatches: kiosk.analysisResult?.rawMatches || []
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            kiosk.toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `kiosk-toast${kiosk.toast.type === 'error' ? ' toast-error' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: kiosk.toast.type === 'error' ? '⚠️' : 'ℹ️'
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: kiosk.toast.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/KioskWrapper.jsx",
        lineNumber: 34,
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

//# sourceMappingURL=_0qcru_n._.js.map
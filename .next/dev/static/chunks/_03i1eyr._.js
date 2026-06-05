(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/chatbotData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useKiosk.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useKiosk
]);
// src/hooks/useKiosk.js
// Uses the real HuBERT MLP model via Python FastAPI backend (http://localhost:8000)
// Flow: WELCOME → REQUEST (record audio / type text) → CHAT (translated chatbox)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/chatbotData.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    _s();
    // --- Screens: 'WELCOME' | 'REQUEST' | 'CHAT' ---
    const [currentScreen, setCurrentScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('WELCOME');
    // --- Language ---
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    // --- Status ---
    const [kioskStatus, setKioskStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ready');
    // --- Text input (shown below mic) ---
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // --- Voice recording state ---
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Analysis results from the HuBERT API ---
    const [analysisResult, setAnalysisResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [analysisComplete, setAnalysisComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Language Suggestion overlay ---
    const [showSuggestion, setShowSuggestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestionData, setSuggestionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Chat ---
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- Toast ---
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Refs ---
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[showToast]": (message, type = 'info')=>{
            setToast({
                message,
                type
            });
            setTimeout({
                "useKiosk.useCallback[showToast]": ()=>setToast(null)
            }["useKiosk.useCallback[showToast]"], 6000);
        }
    }["useKiosk.useCallback[showToast]"], []);
    // ─────────────────────────────────────────────────────────────────
    // AUDIO RECORDING (MediaRecorder → sends WAV blob to API)
    // ─────────────────────────────────────────────────────────────────
    const startRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[startRecording]": async ()=>{
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                streamRef.current = stream;
                audioChunksRef.current = [];
                const recorder = new MediaRecorder(stream, {
                    mimeType: 'audio/webm'
                });
                recorder.ondataavailable = ({
                    "useKiosk.useCallback[startRecording]": (e)=>{
                        if (e.data.size > 0) audioChunksRef.current.push(e.data);
                    }
                })["useKiosk.useCallback[startRecording]"];
                recorder.onstop = ({
                    "useKiosk.useCallback[startRecording]": async ()=>{
                        // Stop all mic tracks
                        stream.getTracks().forEach({
                            "useKiosk.useCallback[startRecording]": (t)=>t.stop()
                        }["useKiosk.useCallback[startRecording]"]);
                        setIsListening(false);
                        setKioskStatus('thinking');
                        const blob = new Blob(audioChunksRef.current, {
                            type: 'audio/webm'
                        });
                        await sendAudioToAPI(blob);
                    }
                })["useKiosk.useCallback[startRecording]"];
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
        }
    }["useKiosk.useCallback[startRecording]"], []);
    const stopRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[stopRecording]": ()=>{
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                mediaRecorderRef.current.stop();
            }
        }
    }["useKiosk.useCallback[stopRecording]"], []);
    const toggleListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[toggleListening]": ()=>{
            if (isListening) {
                stopRecording();
            } else {
                startRecording();
            }
        }
    }["useKiosk.useCallback[toggleListening]"], [
        isListening,
        startRecording,
        stopRecording
    ]);
    // ─────────────────────────────────────────────────────────────────
    // SEND AUDIO → HuBERT API → Get NLI prediction
    // ─────────────────────────────────────────────────────────────────
    const sendAudioToAPI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[sendAudioToAPI]": async (blob)=>{
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
        }
    }["useKiosk.useCallback[sendAudioToAPI]"], []);
    // ─────────────────────────────────────────────────────────────────
    // PROCESS RESULT from API
    // ─────────────────────────────────────────────────────────────────
    const processAPIResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[processAPIResult]": (data)=>{
            // Transform API response into the shape the UI expects
            const probabilities = (data.probabilities || []).map({
                "useKiosk.useCallback[processAPIResult].probabilities": (p)=>({
                        code: LABEL_TO_LANG[p.label] || 'en',
                        label: p.label,
                        name: p.name,
                        nativeName: p.name,
                        flag: p.flag,
                        confidence: p.confidence
                    })
            }["useKiosk.useCallback[processAPIResult].probabilities"]);
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
                setTimeout({
                    "useKiosk.useCallback[processAPIResult]": ()=>{
                        setSuggestionData({
                            detected,
                            probabilities
                        });
                        setShowSuggestion(true);
                        setKioskStatus('prompt');
                    }
                }["useKiosk.useCallback[processAPIResult]"], 1500);
            } else {
                // No L1 detected — go straight to English chat
                setTimeout({
                    "useKiosk.useCallback[processAPIResult]": ()=>proceedToChat('en')
                }["useKiosk.useCallback[processAPIResult]"], 1800);
            }
        }
    }["useKiosk.useCallback[processAPIResult]"], []);
    // ─────────────────────────────────────────────────────────────────
    // TEXT SUBMIT — Still uses rule-based engine as fallback for typing
    // (since HuBERT needs audio, not text)
    // ─────────────────────────────────────────────────────────────────
    const submitRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[submitRequest]": async (text)=>{
            if (!text || !text.trim()) return;
            setKioskStatus('thinking');
            setAnalysisResult(null);
            setAnalysisComplete(false);
            try {
                // Try backend text analysis first (if available)
                // If no text endpoint exists, fall back to rule-based
                const { analyzeEnglishText } = await __turbopack_context__.A("[project]/src/data/nliRules.js [app-client] (ecmascript, async loader)");
                const result = analyzeEnglishText(text);
                setTimeout({
                    "useKiosk.useCallback[submitRequest]": ()=>{
                        setAnalysisResult(result);
                        setAnalysisComplete(true);
                        setKioskStatus('ready');
                        if (result.detected) {
                            setTimeout({
                                "useKiosk.useCallback[submitRequest]": ()=>{
                                    setSuggestionData({
                                        detected: result.detected,
                                        probabilities: result.probabilities
                                    });
                                    setShowSuggestion(true);
                                    setKioskStatus('prompt');
                                }
                            }["useKiosk.useCallback[submitRequest]"], 1500);
                        } else {
                            setTimeout({
                                "useKiosk.useCallback[submitRequest]": ()=>proceedToChat('en')
                            }["useKiosk.useCallback[submitRequest]"], 1800);
                        }
                    }
                }["useKiosk.useCallback[submitRequest]"], 600);
            } catch (err) {
                setKioskStatus('ready');
                showToast('Analysis failed. Please try speaking instead.', 'error');
            }
        }
    }["useKiosk.useCallback[submitRequest]"], []);
    // ─────────────────────────────────────────────────────────────────
    // PROCEED TO CHAT
    // ─────────────────────────────────────────────────────────────────
    const proceedToChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[proceedToChat]": (langCode)=>{
            setSelectedLanguage(langCode);
            setShowSuggestion(false);
            setKioskStatus('ready');
            // Init chatbot with welcome message in the chosen language
            const dbKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChatbotDbKey"])(langCode);
            const db = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATBOT_DATABASE"][dbKey] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATBOT_DATABASE"].en;
            setChatMessages([
                {
                    sender: 'bot',
                    text: db.welcome
                }
            ]);
            setCurrentScreen('CHAT');
        }
    }["useKiosk.useCallback[proceedToChat]"], []);
    const sendChatMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[sendChatMessage]": (query)=>{
            if (!query.trim()) return;
            setChatMessages({
                "useKiosk.useCallback[sendChatMessage]": (prev)=>[
                        ...prev,
                        {
                            sender: 'user',
                            text: query
                        }
                    ]
            }["useKiosk.useCallback[sendChatMessage]"]);
            setTimeout({
                "useKiosk.useCallback[sendChatMessage]": async ()=>{
                    const { getChatbotDbKey: getKey } = await __turbopack_context__.A("[project]/src/data/chatbotData.js [app-client] (ecmascript, async loader)");
                    const { CHATBOT_DATABASE: DB } = await __turbopack_context__.A("[project]/src/data/chatbotData.js [app-client] (ecmascript, async loader)");
                    const dbKey = getKey(selectedLanguage);
                    const db = DB[dbKey] || DB.en;
                    const lowerQ = query.toLowerCase();
                    let found = null;
                    for (const item of db.answers){
                        if (item.keys.some({
                            "useKiosk.useCallback[sendChatMessage]": (k)=>lowerQ.includes(k)
                        }["useKiosk.useCallback[sendChatMessage]"])) {
                            found = item.ans;
                            break;
                        }
                    }
                    setChatMessages({
                        "useKiosk.useCallback[sendChatMessage]": (prev)=>[
                                ...prev,
                                {
                                    sender: 'bot',
                                    text: found || db.fallback
                                }
                            ]
                    }["useKiosk.useCallback[sendChatMessage]"]);
                }
            }["useKiosk.useCallback[sendChatMessage]"], 700);
        }
    }["useKiosk.useCallback[sendChatMessage]"], [
        selectedLanguage
    ]);
    const resetSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[resetSession]": ()=>{
            setCurrentScreen('WELCOME');
            setSelectedLanguage('en');
            setInputText('');
            setAnalysisResult(null);
            setAnalysisComplete(false);
            setShowSuggestion(false);
            setSuggestionData(null);
            setChatMessages([]);
            setKioskStatus('ready');
            if (isListening) stopRecording();
        }
    }["useKiosk.useCallback[resetSession]"], [
        isListening,
        stopRecording
    ]);
    const goToRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[goToRequest]": ()=>{
            setCurrentScreen('REQUEST');
            setInputText('');
            setAnalysisResult(null);
            setAnalysisComplete(false);
        }
    }["useKiosk.useCallback[goToRequest]"], []);
    // Check backend health on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKiosk.useEffect": ()=>{
            fetch(`${API_BASE}/api/health`).then({
                "useKiosk.useEffect": (r)=>r.json()
            }["useKiosk.useEffect"]).then({
                "useKiosk.useEffect": (d)=>console.log('✅ Backend connected:', d)
            }["useKiosk.useEffect"]).catch({
                "useKiosk.useEffect": ()=>console.warn('⚠️ Backend (main.py) not running on port 8000')
            }["useKiosk.useEffect"]);
        }
    }["useKiosk.useEffect"], []);
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
_s(useKiosk, "Lkga6GdMq9iGiWn1ApQ3K06sO8g=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BezelTop.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BezelTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/BezelTop.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function BezelTop({ status }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-bezel-top",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "kiosk-camera"
            }, void 0, false, {
                fileName: "[project]/src/components/BezelTop.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = BezelTop;
var _c;
__turbopack_context__.k.register(_c, "BezelTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StatusBadge.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/StatusBadge.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-status-badge",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `status-indicator${status !== 'ready' ? ` ${status}` : ''}`
            }, void 0, false, {
                fileName: "[project]/src/components/StatusBadge.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = StatusBadge;
var _c;
__turbopack_context__.k.register(_c, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/nliRules.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/Header.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBadge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusBadge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/nliRules.js [app-client] (ecmascript)");
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
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLangCode"])(langCode);
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].find((l)=>l.code === base);
    if (lang) return {
        flag: lang.flag,
        name: lang.nativeName
    };
    return null;
}
function Header({ kioskStatus, currentScreen, selectedLanguage }) {
    const pill = currentScreen === 'CHAT' ? getLangPill(selectedLanguage) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "kiosk-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "kiosk-brand",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "kiosk-logo-orb"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "kiosk-title-text",
                        children: "Smart Kiosk Terminal"
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                },
                children: [
                    pill && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "active-lang-pill",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: pill.flag
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusBadge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WelcomeScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WelcomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/WelcomeScreen.jsx — Clean "Tap to Proceed" landing screen
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function WelcomeScreen({ onProceed }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-screen screen-welcome active",
        id: "screenWelcome",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcome-logo-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "welcome-orb-outer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "welcome-orb-inner",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "welcome-plane",
                                children: "✈️"
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "welcome-orb-ring ring1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "welcome-orb-ring ring2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "welcome-orb-ring ring3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "welcome-title",
                children: "Welcome to the Smart Airport Kiosk"
            }, void 0, false, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "welcome-subtitle",
                children: [
                    "Our intelligent system will adapt to your native language.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    "Speak or type your request — we'll take care of the rest."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "welcome-proceed-btn",
                onClick: onProceed,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "proceed-icon",
                        children: "▶"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    "Tap to Proceed"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcome-lang-strip",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇵🇭"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇨🇳"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 35,
                        columnNumber: 26
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇰🇷"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 35,
                        columnNumber: 43
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇯🇵"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 35,
                        columnNumber: 60
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇮🇩"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇵🇰"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 36,
                        columnNumber: 26
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇹🇭"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 36,
                        columnNumber: 43
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🇬🇧"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WelcomeScreen.jsx",
                        lineNumber: 36,
                        columnNumber: 60
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "welcome-lang-label",
                children: "Serving travelers in 8+ languages"
            }, void 0, false, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WelcomeScreen.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = WelcomeScreen;
var _c;
__turbopack_context__.k.register(_c, "WelcomeScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WaveVisualizer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaveVisualizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/WaveVisualizer.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function WaveVisualizer({ active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `wave-visualizer${active ? ' active' : ''}`,
        children: [
            ...Array(8)
        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = WaveVisualizer;
var _c;
__turbopack_context__.k.register(_c, "WaveVisualizer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RequestScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RequestScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/RequestScreen.jsx
// Screen 2: User speaks → audio sent to HuBERT API / or types text (rule-based fallback)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WaveVisualizer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WaveVisualizer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/nliRules.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function RequestScreen({ inputText, setInputText, isListening, kioskStatus, onToggleListening, onSubmit, analysisResult, analysisComplete }) {
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [recordSecs, setRecordSecs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Countdown timer while recording
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RequestScreen.useEffect": ()=>{
            if (isListening) {
                setRecordSecs(0);
                const timer = setInterval({
                    "RequestScreen.useEffect.timer": ()=>setRecordSecs({
                            "RequestScreen.useEffect.timer": (s)=>s + 1
                        }["RequestScreen.useEffect.timer"])
                }["RequestScreen.useEffect.timer"], 1000);
                return ({
                    "RequestScreen.useEffect": ()=>clearInterval(timer)
                })["RequestScreen.useEffect"];
            }
        }
    }["RequestScreen.useEffect"], [
        isListening
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RequestScreen.useEffect": ()=>{
            if (!isListening && inputRef.current) inputRef.current.focus();
        }
    }["RequestScreen.useEffect"], [
        isListening
    ]);
    const handleKey = (e)=>{
        if (e.key === 'Enter') onSubmit(inputText);
    };
    const isAnalyzing = kioskStatus === 'thinking';
    const showResults = analysisComplete && analysisResult;
    const displayProbs = showResults ? analysisResult.probabilities.slice(0, 7) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].slice(0, 7).map((l)=>({
            ...l,
            confidence: 0
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-screen screen-request active",
        id: "screenRequest",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "request-voice-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "request-prompt",
                        children: isListening ? `🎙️ Recording... ${recordSecs}s — Tap again to stop & analyze` : isAnalyzing ? '⚙️ Sending audio to HuBERT model...' : 'Tap the microphone and speak your request in English'
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "voice-button-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WaveVisualizer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "model-badge",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "model-badge-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            "HuBERT MLP Model — ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'hsl(var(--primary))'
                                },
                                children: "Audio-based NLI"
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-input-divider",
                children: "Or type your request"
            }, void 0, false, {
                fileName: "[project]/src/components/RequestScreen.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-console-box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "console-icon",
                        children: "⌨️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        className: "text-console-input",
                        placeholder: "e.g., 'Where is the baggage claim?' or 'Yesterday my flight cancel...'",
                        autoComplete: "off",
                        value: inputText,
                        onChange: (e)=>setInputText(e.target.value),
                        onKeyDown: handleKey
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            (isAnalyzing || showResults) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `analysis-panel${analysisComplete ? ' analysis-ready' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "analysis-panel-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "analysis-icon",
                                children: "📊"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isAnalyzing ? 'Analyzing your language patterns...' : 'Language Analysis Complete'
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            analysisComplete && analysisResult?.detected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "analysis-prob-list",
                        children: displayProbs.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "analysis-prob-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "analysis-prob-flag",
                                        children: lang.flag
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "analysis-prob-name",
                                        children: lang.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "analysis-prob-track",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    showResults && analysisResult.highlightedHtml && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "analysis-highlighted-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "analysis-highlighted-label",
                                children: "Detected L1 Transfer Patterns:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(RequestScreen, "wd/LulHcsxeae4oK8OS1I/hvX6Q=");
_c = RequestScreen;
var _c;
__turbopack_context__.k.register(_c, "RequestScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChatScreen.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/ChatScreen.jsx
// Screen 3: Full-screen translated chatbox — the main service interaction
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/nliRules.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Determine display info for the active language
function getLangDisplay(langCode) {
    if (!langCode || langCode === 'en') return {
        flag: '🇬🇧',
        name: 'English',
        placeholder: 'Ask e.g., "Where is baggage claim?" or "Which gate is my flight?"'
    };
    if (langCode === 'en-PH') return {
        flag: '🇵🇭',
        name: 'English (PH)',
        placeholder: 'Ask about flights, gates, baggage, or transit tickets...'
    };
    if (langCode === 'ceb') return {
        flag: '🇵🇭',
        name: 'Cebuano',
        placeholder: 'Pangutana bahin sa imong flight, gate, o bagahe...'
    };
    if (langCode === 'ms') return {
        flag: '🇲🇾',
        name: 'Bahasa Melayu',
        placeholder: 'Tanya tentang penerbangan, pintu, atau bagasi anda...'
    };
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLangCode"])(langCode);
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].find((l)=>l.code === base);
    if (!lang) return {
        flag: '🌐',
        name: langCode,
        placeholder: 'Type your question...'
    };
    const placeholders = {
        tl: 'Magtanong tungkol sa iyong flight, gate, o bagahe...',
        zh: '请输入您的问题，如航班、登机口、行李...',
        ko: '항공편, 탑승구, 수하물에 대해 질문하세요...',
        ja: '航班、搭乗口、手荷物についてご質問ください...',
        id: 'Tanya tentang penerbangan, gerbang, atau bagasi Anda...',
        ur: 'اپنی پرواز، گیٹ، یا سامان کے بارے میں پوچھیں...',
        th: 'ถามเกี่ยวกับเที่ยวบิน ประตู หรือสัมภาระของคุณ...'
    };
    return {
        flag: lang.flag,
        name: lang.nativeName,
        placeholder: placeholders[base] || 'Type your question...'
    };
}
// Quick-reply suggestion chips based on language
function getQuickReplies(langCode) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLangCode"])(langCode);
    const en = [
        'Where is baggage claim?',
        'Which gate is A-12?',
        'Where are restrooms?',
        'Buy transit ticket'
    ];
    const replies = {
        tl: [
            'Nasaan ang baggage claim?',
            'Aling gate ang A-12?',
            'Nasaan ang banyo?',
            'Bumili ng tiket'
        ],
        zh: [
            '行李提取在哪里？',
            'A-12登机口在哪？',
            '洗手间在哪里？',
            '购买交通票'
        ],
        ko: [
            '수하물 수취소는 어디?',
            'A-12 탑승구는?',
            '화장실은 어디?',
            '티켓 구매'
        ],
        ja: [
            '手荷物受取所はどこ？',
            'A-12搭乗口はどこ？',
            'お手洗いはどこ？',
            'チケット購入'
        ],
        id: [
            'Di mana pengambilan bagasi?',
            'Gerbang A-12 di mana?',
            'Di mana toilet?',
            'Beli tiket'
        ],
        ur: [
            'سامان کہاں ملے گا؟',
            'گیٹ A-12 کہاں ہے؟',
            'واش روم کہاں ہے؟',
            'ٹکٹ خریدیں'
        ],
        th: [
            'รับกระเป๋าที่ไหน?',
            'ประตู A-12 อยู่ที่ไหน?',
            'ห้องน้ำอยู่ที่ไหน?',
            'ซื้อตั๋ว'
        ]
    };
    return replies[base] || en;
}
function ChatScreen({ langCode, chatMessages, onSend, onReset }) {
    _s();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lang = getLangDisplay(langCode);
    const quickReplies = getQuickReplies(langCode);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatScreen.useEffect": ()=>{
            if (messagesRef.current) {
                messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
            }
        }
    }["ChatScreen.useEffect"], [
        chatMessages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatScreen.useEffect": ()=>{
            if (inputRef.current) inputRef.current.focus();
        }
    }["ChatScreen.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-screen screen-chat active",
        id: "screenChat",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-screen-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-lang-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chat-lang-flag",
                                children: lang.flag
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chat-lang-name",
                                        children: lang.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chat-lang-sub",
                                        children: "Airport Helpdesk Assistant"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-status-dot"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-messages-window",
                ref: messagesRef,
                children: chatMessages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `chat-bubble-wrap ${msg.sender}`,
                        children: [
                            msg.sender === 'bot' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chat-bot-avatar",
                                children: "🤖"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `chat-bubble ${msg.sender}`,
                                children: msg.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-quick-replies",
                children: quickReplies.map((reply, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "quick-reply-chip",
                        onClick: ()=>handleQuickReply(reply),
                        children: reply
                    }, i, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-input-area",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        className: "chat-input-field",
                        placeholder: lang.placeholder,
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        onKeyDown: handleKey
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "chat-send-button",
                        onClick: handleSend,
                        children: "➤"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-screen-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chat-footer-hint",
                        children: "🟢 Terminal agents are available if you need physical assistance"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-reset-small",
                        onClick: onReset,
                        children: "↩ New Session"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChatScreen.jsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(ChatScreen, "4ZGB0BqKpMxoMrbGE0EbmiyKEoY=");
_c = ChatScreen;
var _c;
__turbopack_context__.k.register(_c, "ChatScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LanguageSuggestionOverlay.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSuggestionOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/LanguageSuggestionOverlay.jsx
// Appears after analysis on the REQUEST screen
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function LanguageSuggestionOverlay({ visible, suggestionData, onSelectLanguage, onDecline }) {
    if (!suggestionData) return null;
    const { detected } = suggestionData;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `suggestion-overlay${visible ? ' active' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "suggestion-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-orb-holder",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "suggestion-desc",
                    children: [
                        "Our NLI engine analyzed your input and identified",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-options-grid",
                    children: (detected?.choices || []).map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "suggest-lang-option-btn",
                            onClick: ()=>onSelectLanguage(choice.code),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "suggest-lang-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "suggest-lang-flag",
                                            children: choice.flag
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "suggest-lang-names",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "suggest-lang-native",
                                                    children: choice.nativeName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                                    lineNumber: 42,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-actions",
                    style: {
                        marginTop: '12px',
                        width: '100%'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = LanguageSuggestionOverlay;
var _c;
__turbopack_context__.k.register(_c, "LanguageSuggestionOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/KioskWrapper.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KioskWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/KioskWrapper.jsx — New 3-screen orchestrator
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKiosk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useKiosk.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BezelTop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BezelTop.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WelcomeScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RequestScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RequestScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChatScreen.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSuggestionOverlay$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageSuggestionOverlay.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function KioskWrapper() {
    _s();
    const kiosk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKiosk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-wrapper",
        id: "kioskWrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BezelTop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                status: kiosk.kioskStatus
            }, void 0, false, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                kioskStatus: kiosk.kioskStatus,
                currentScreen: kiosk.currentScreen,
                selectedLanguage: kiosk.selectedLanguage
            }, void 0, false, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "kiosk-body kiosk-body-single",
                children: [
                    kiosk.currentScreen === 'WELCOME' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onProceed: kiosk.goToRequest
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    kiosk.currentScreen === 'REQUEST' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RequestScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        inputText: kiosk.inputText,
                        setInputText: kiosk.setInputText,
                        isListening: kiosk.isListening,
                        kioskStatus: kiosk.kioskStatus,
                        onToggleListening: kiosk.toggleListening,
                        onSubmit: kiosk.submitRequest,
                        analysisResult: kiosk.analysisResult,
                        analysisComplete: kiosk.analysisComplete
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    kiosk.currentScreen === 'CHAT' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        langCode: kiosk.selectedLanguage,
                        chatMessages: kiosk.chatMessages,
                        onSend: kiosk.sendChatMessage,
                        onReset: kiosk.resetSession
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSuggestionOverlay$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        visible: kiosk.showSuggestion,
                        suggestionData: kiosk.suggestionData,
                        onSelectLanguage: (code)=>kiosk.proceedToChat(code),
                        onDecline: ()=>kiosk.proceedToChat('en')
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            kiosk.toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `kiosk-toast${kiosk.toast.type === 'error' ? ' toast-error' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: kiosk.toast.type === 'error' ? '⚠️' : 'ℹ️'
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: kiosk.toast.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/KioskWrapper.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(KioskWrapper, "2K1Q/JZSZDLi0bXMN/5DWKDh0S8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKiosk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = KioskWrapper;
var _c;
__turbopack_context__.k.register(_c, "KioskWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// app/page.tsx - NLI Kiosk main entry
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KioskWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/KioskWrapper.jsx [app-client] (ecmascript)");
'use client';
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KioskWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_03i1eyr._.js.map
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
                ans: 'Ang kasalukuyang oras ay nakalagay sa screen. Karamihan ng serbisyo ay bukas mula 8 AM hanggang 8 PM. (The current time is displayed on the screen. Most services are open from 8:00 AM to 8:00 PM.)'
            },
            {
                keys: [
                    'help',
                    'tulong',
                    'assist',
                    'impormasyon'
                ],
                ans: 'Nandito ako para tumulong! Magtanong ka tungkol sa direksyon, serbisyo, o kahit anong katanungan. (I am here to help! Feel free to ask about directions, services, or any other inquiries.)'
            },
            {
                keys: [
                    'emergency',
                    'pulis',
                    'ambulansya',
                    'sunog'
                ],
                ans: 'Para sa mga emerhensiya, tumawag agad sa emergency number. Maaari rin akong tumawag ng staff. (For emergencies, please call the emergency number immediately. I can also contact a staff member if needed.)'
            }
        ],
        fallback: 'Mabuhay! Paano kita matutulungan ngayon? Maaari kitang tulungan sa direksyon, iskedyul, serbisyo, at iba pa. (Hello! How may I assist you today? I can help you with directions, schedules, services, and more.)'
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
                ans: '当前时间显示在屏幕上。大多数服务从早8点到晚8点开放。(The current time is displayed on the screen. Most services are open from 8:00 AM to 8:00 PM.)'
            },
            {
                keys: [
                    'help',
                    '帮助',
                    'assist',
                    '信息'
                ],
                ans: '我在这里帮助您！您可以问我关于方向、服务、日程或任何一般问题。(I am here to help you! You can ask me about directions, services, schedules, or any general questions.)'
            },
            {
                keys: [
                    'emergency',
                    '紧急',
                    '警察',
                    '救护车'
                ],
                ans: '如有紧急情况，请立即拨打当地紧急电话。我也可以通知附近的工作人员。(In case of an emergency, please call the local emergency number immediately. I can also notify nearby staff members.)'
            }
        ],
        fallback: '您好！今天我可以如何帮助您？我可以帮助您查找方向、服务、日程等。(Hello! How can I help you today? I can assist you with finding directions, services, schedules, and more.)'
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
                ans: '현재 시간이 화면에 표시됩니다. 대부분의 서비스는 오전 8시~오후 8시에 운영됩니다. (The current time is displayed on the screen. Most services operate from 8:00 AM to 8:00 PM.)'
            },
            {
                keys: [
                    'help',
                    '도움',
                    'assist',
                    '정보'
                ],
                ans: '도움이 필요하시면 말씀해 주세요! 방향, 서비스, 일정 등에 대해 질문하실 수 있습니다. (Let me know if you need help! You can ask about directions, services, schedules, and more.)'
            },
            {
                keys: [
                    'emergency',
                    '긴급',
                    '경찰',
                    '구급차'
                ],
                ans: '긴급 상황 시 즉시 긴급 전화번호로 연락하세요. 근처 직원에게도 알릴 수 있습니다. (In case of an emergency, please contact the emergency number immediately. I can also notify nearby staff.)'
            }
        ],
        fallback: '안녕하세요! 오늘 무엇을 도와드릴까요? 방향, 일정, 서비스 등에 대해 도와드릴 수 있습니다. (Hello! How can I help you today? I can assist you with directions, schedules, services, and more.)'
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
                ans: '現在の時刻は画面に表示されています。ほとんどのサービスは午前8時から午後8時まで営業しています。(The current time is displayed on the screen. Most services are open from 8:00 AM to 8:00 PM.)'
            },
            {
                keys: [
                    'help',
                    '助け',
                    'assist',
                    '情報'
                ],
                ans: 'お手伝いいたします！方向、サービス、スケジュール、その他のご質問にお答えできます。(I’m here to help! I can answer questions about directions, services, schedules, and more.)'
            },
            {
                keys: [
                    'emergency',
                    '緊急',
                    '警察',
                    '救急車'
                ],
                ans: '緊急の場合は、すぐに緊急通報番号に電話してください。近くのスタッフにも知らせることができます。(In case of an emergency, please call the emergency number immediately. I can also notify nearby staff.)'
            }
        ],
        fallback: 'こんにちは！本日はどのようなご用件でしょうか？方向、スケジュール、サービスなどについてお手伝いできます。(Hello! How may I help you today? I can assist you with directions, schedules, services, and more.)'
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
                ans: 'Toilet biasanya terletak di dekat pintu masuk utama atau di setiap lantai. (Toilets are usually located near the main entrance or on each floor.)'
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
                ans: 'Ada beberapa pilihan tempat makan di dekat sini. Mau saya rekomendasikan? (There are several dining options nearby. Would you like me to recommend some?)'
            },
            {
                keys: [
                    'time',
                    'waktu',
                    'schedule',
                    'buka'
                ],
                ans: 'Waktu saat ini ditampilkan di layar. Sebagian besar layanan beroperasi dari jam 8 pagi hingga 8 malam. (The current time is displayed on the screen. Most services operate from 8:00 AM to 8:00 PM.)'
            },
            {
                keys: [
                    'help',
                    'bantuan',
                    'assist',
                    'informasi'
                ],
                ans: 'Saya di sini untuk membantu! Anda bisa bertanya tentang arah, layanan, jadwal, atau pertanyaan umum lainnya. (I am here to help! You can ask about directions, services, schedules, or any general questions.)'
            },
            {
                keys: [
                    'emergency',
                    'darurat',
                    'polisi',
                    'ambulans'
                ],
                ans: 'Untuk keadaan darurat, segera hubungi nomor darurat setempat. Saya juga dapat memberi tahu staf terdekat. (For emergencies, please immediately contact the local emergency number. I can also notify nearby staff.)'
            }
        ],
        fallback: 'Halo! Bagaimana saya dapat membantu Anda hari ini? Saya dapat membantu dengan arah, jadwal, layanan, dan lainnya. (Hello! How can I help you today? I can assist you with directions, schedules, services, and more.)'
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
                ans: 'میں آپ کو راستہ تلاش کرنے میں مدد کر سکتا ہوں! مجھے بتائیں کہ آپ کیا ڈھونڈ رہے ہیں۔ (I can help you find your way! Tell me what you are looking for.)'
            },
            {
                keys: [
                    'toilet',
                    'restroom',
                    'bathroom',
                    'حمام'
                ],
                ans: 'واش رومز عام طور پر مرکزی دروازے کے قریب یا ہر منزل پر واقع ہوتے ہیں۔ (Restrooms are usually located near the main entrance or on each floor.)'
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
                ans: 'قریب میں کھانے کے کئی اختیارات موجود ہیں۔ کیا آپ سفارش چاہتے ہیں؟ (There are several dining options nearby. Would you like a recommendation?)'
            },
            {
                keys: [
                    'time',
                    'وقت',
                    'schedule',
                    'کھلا'
                ],
                ans: 'موجودہ وقت اسکرین پر دکھایا گیا ہے۔ زیادہ تر خدمات صبح 8 بجے سے رات 8 بجے تک دستیاب ہیں۔ (The current time is displayed on the screen. Most services are available from 8:00 AM to 8:00 PM.)'
            },
            {
                keys: [
                    'help',
                    'مدد',
                    'assist',
                    'معلومات'
                ],
                ans: 'میں یہاں مدد کے لیے ہوں! آپ سمت، خدمات، شیڈول، یا کسی بھی عمومی سوال کے بارے میں پوچھ سکتے ہیں۔ (I am here to help! You can ask about directions, services, schedules, or any general questions.)'
            },
            {
                keys: [
                    'emergency',
                    'ایمرجنسی',
                    'پولیس',
                    'ایمبولینس'
                ],
                ans: 'ہنگامی صورتحال کے لیے، فوری طور پر مقامی ایمرجنسی نمبر پر کال کریں۔ (For emergencies, please immediately call the local emergency number.)'
            }
        ],
        fallback: 'السلام علیکم! آج میں آپ کی کس طرح مدد کر سکتا ہوں؟ میں سمت، شیڈول، خدمات اور مزید میں مدد کر سکتا ہوں۔ (Peace be upon you! How can I help you today? I can assist you with directions, schedules, services, and more.)'
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
                ans: 'ห้องน้ำมักจะอยู่ใกล้ทางเข้าหลักหรือในแต่ละชั้นของอาคาร (Restrooms are usually located near the main entrance or on each floor of a building.)'
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
                ans: 'มีตัวเลือกร้านอาหารหลายแห่งใกล้เคียง ต้องการให้แนะนำไหม? (There are several restaurant options nearby. Would you like any recommendations?)'
            },
            {
                keys: [
                    'time',
                    'เวลา',
                    'schedule',
                    'เปิด'
                ],
                ans: 'เวลาปัจจุบันแสดงอยู่บนหน้าจอ บริการส่วนใหญ่เปิดให้บริการตั้งแต่ 8.00 น. ถึง 20.00 น. (The current time is displayed on the screen. Most services are available from 8:00 AM to 8:00 PM.)'
            },
            {
                keys: [
                    'help',
                    'ช่วย',
                    'assist',
                    'ข้อมูล'
                ],
                ans: 'ฉันอยู่ที่นี่เพื่อช่วยเหลือ! คุณสามารถถามเกี่ยวกับทิศทาง บริการ ตารางเวลา หรือคำถามทั่วไปอื่นๆ (Im here to help you! You can ask about directions, services, schedules, or other general questions.)'
            },
            {
                keys: [
                    'emergency',
                    'ฉุกเฉิน',
                    'ตำรวจ',
                    'รถพยาบาล'
                ],
                ans: 'สำหรับกรณีฉุกเฉิน กรุณาโทรหมายเลขฉุกเฉินท้องถิ่นทันที (In case of an emergency, please call the emergency number immediately. I can also notify nearby staff.)'
            }
        ],
        fallback: 'สวัสดีครับ/ค่ะ! วันนี้ฉันสามารถช่วยคุณได้อย่างไร? ฉันสามารถช่วยเรื่องทิศทาง ตารางเวลา บริการ และอื่นๆ (Hello! How can I help you today? I can assist you with directions, schedules, services, and more.)'
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
        name: 'Filipino',
        nativeName: 'Filipino',
        flag: '🇵🇭',
        suggestText: 'Would you like to switch to Tagalog?',
        nativeSuggestText: 'Gusto mo bang lumipat sa Tagalog?',
        welcomeMessage: 'Maligayang Pagdating sa LINGUA Assistant Portal!',
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
        welcomeMessage: '欢迎使用智能助手服务终端！',
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
        welcomeMessage: '스마트 어시스턴트 포털에 오신 것을 환영합니다!',
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
        welcomeMessage: 'スマートアシスタントポータルへようこそ！',
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
        welcomeMessage: 'Selamat Datang di Portal Asisten Pintar!',
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
        welcomeMessage: 'سمارٹ اسسٹنٹ پورٹل پر خوش آمدید!',
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
        welcomeMessage: 'ยินดีต้อนรับสู่พอร์ทัลผู้ช่วยอัจฉริยะ!',
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/nliRules.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const API_BASE = 'http://localhost:8000';
// ── Text-to-Speech helper ──────────────────────────────────────────
// langCode → BCP-47 locale for SpeechSynthesis
const LANG_TO_LOCALE = {
    en: 'en-US',
    'en-PH': 'en-PH',
    tl: 'fil-PH',
    ceb: 'fil-PH',
    zh: 'zh-CN',
    'zh-HK': 'zh-HK',
    'zh-TW': 'zh-TW',
    ko: 'ko-KR',
    ja: 'ja-JP',
    id: 'id-ID',
    ms: 'ms-MY',
    ur: 'ur-PK',
    th: 'th-TH'
};
function speakText(text, langCode = 'en') {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !window.speechSynthesis) return;
    // Cancel any current speech before speaking
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = LANG_TO_LOCALE[langCode] || 'en-US';
    utter.rate = 1.0;
    utter.pitch = 1.0;
    utter.volume = 1.0;
    // Try to pick a matching voice for the language
    const voices = window.speechSynthesis.getVoices();
    const match = voices.find((v)=>v.lang.startsWith(utter.lang.slice(0, 2)));
    if (match) utter.voice = match;
    window.speechSynthesis.speak(utter);
}
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
    // --- TTS Speak Function ---
    const speak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[speak]": (text, langCode = 'en')=>{
            speakText(text, langCode);
        }
    }["useKiosk.useCallback[speak]"], []);
    // --- Analysis results from the HuBERT API ---
    const [analysisResult, setAnalysisResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [analysisComplete, setAnalysisComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Language Suggestion overlay ---
    const [showSuggestion, setShowSuggestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestionData, setSuggestionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Chat ---
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userRequest, setUserRequest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Ref mirrors userRequest so proceedToChat always reads the latest value
    // (state updates are async; ref is synchronous)
    const userRequestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    // --- Toast ---
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Real-time interim transcript flag ---
    const [isInterimTranscript, setIsInterimTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- Refs ---
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const suggestionTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const speechRecognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    const cancelSuggestionTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[cancelSuggestionTimer]": ()=>{
            if (suggestionTimerRef.current) {
                clearTimeout(suggestionTimerRef.current);
                suggestionTimerRef.current = null;
            }
        }
    }["useKiosk.useCallback[cancelSuggestionTimer]"], []);
    const hideSuggestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[hideSuggestion]": ()=>{
            cancelSuggestionTimer();
            setShowSuggestion(false);
            setSuggestionData(null);
        }
    }["useKiosk.useCallback[hideSuggestion]"], [
        cancelSuggestionTimer
    ]);
    const scheduleSuggestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[scheduleSuggestion]": (result)=>{
            cancelSuggestionTimer();
            suggestionTimerRef.current = setTimeout({
                "useKiosk.useCallback[scheduleSuggestion]": ()=>{
                    suggestionTimerRef.current = null;
                    // Only show overlay if a language was actually detected
                    if (result?.detected) {
                        setSuggestionData(result);
                        setShowSuggestion(true);
                    } else {
                        // No language traced — go straight to chat in English
                        setCurrentScreen('CHAT');
                    }
                }
            }["useKiosk.useCallback[scheduleSuggestion]"], 3000);
        }
    }["useKiosk.useCallback[scheduleSuggestion]"], [
        cancelSuggestionTimer
    ]);
    // ─────────────────────────────────────────────────────────────────
    // AUDIO RECORDING (MediaRecorder → sends WAV blob to API)
    // ─────────────────────────────────────────────────────────────────
    const startRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[startRecording]": async ()=>{
            // Stop any ongoing speech output immediately when the user starts speaking
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                streamRef.current = stream;
                audioChunksRef.current = [];
                // ── Real-time interim transcription via Web Speech API ──
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                if (SpeechRecognition) {
                    const recognition = new SpeechRecognition();
                    recognition.continuous = true;
                    recognition.interimResults = true;
                    recognition.lang = 'en-US';
                    recognition.onresult = ({
                        "useKiosk.useCallback[startRecording]": (event)=>{
                            let interim = '';
                            let final = '';
                            for(let i = event.resultIndex; i < event.results.length; i++){
                                const transcript = event.results[i][0].transcript;
                                if (event.results[i].isFinal) {
                                    final += transcript;
                                } else {
                                    interim += transcript;
                                }
                            }
                            // Show live interim text (marked as interim so UI can style it)
                            const liveText = final || interim;
                            if (liveText) {
                                setInputText(liveText);
                                setIsInterimTranscript(true);
                            }
                        }
                    })["useKiosk.useCallback[startRecording]"];
                    recognition.onerror = ({
                        "useKiosk.useCallback[startRecording]": (e)=>{
                            // Non-critical — Deepgram will still provide final transcript
                            console.warn('SpeechRecognition interim error:', e.error);
                        }
                    })["useKiosk.useCallback[startRecording]"];
                    recognition.start();
                    speechRecognitionRef.current = recognition;
                }
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
                        // Stop real-time recognition
                        if (speechRecognitionRef.current) {
                            try {
                                speechRecognitionRef.current.stop();
                            } catch (_) {}
                            speechRecognitionRef.current = null;
                        }
                        // Stop all mic tracks
                        stream.getTracks().forEach({
                            "useKiosk.useCallback[startRecording]": (t)=>t.stop()
                        }["useKiosk.useCallback[startRecording]"]);
                        setIsListening(false);
                        setKioskStatus('thinking');
                        const blob = new Blob(audioChunksRef.current, {
                            type: 'audio/webm'
                        });
                        // ── Run HuBERT NLI analysis AND Deepgram transcription concurrently ──
                        await Promise.allSettled([
                            sendAudioToAPI(blob),
                            // Deepgram: final accurate transcript replaces the interim one
                            ({
                                "useKiosk.useCallback[startRecording]": async ()=>{
                                    try {
                                        const fd = new FormData();
                                        fd.append('audio', blob, 'speech.webm');
                                        fd.append('lang', 'en');
                                        const res = await fetch(`${API_BASE}/api/transcribe`, {
                                            method: 'POST',
                                            body: fd
                                        });
                                        if (res.ok) {
                                            const data = await res.json();
                                            if (data.transcript) {
                                                setInputText(data.transcript);
                                                userRequestRef.current = data.transcript;
                                                setUserRequest(data.transcript);
                                            }
                                        }
                                    } catch (e) {
                                        console.warn('Deepgram transcription skipped:', e.message);
                                    } finally{
                                        setIsInterimTranscript(false);
                                    }
                                }
                            })["useKiosk.useCallback[startRecording]"]()
                        ]);
                    }
                })["useKiosk.useCallback[startRecording]"];
                recorder.start();
                mediaRecorderRef.current = recorder;
                setIsListening(true);
                setKioskStatus('listening');
                setInputText('');
                setIsInterimTranscript(false);
                setAnalysisResult(null);
                setAnalysisComplete(false);
                hideSuggestion();
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
            const detected = data.confidence > 35 ? {
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
            scheduleSuggestion(result);
        }
    }["useKiosk.useCallback[processAPIResult]"], [
        scheduleSuggestion
    ]);
    // TEXT SUBMIT — Still uses rule-based engine as fallback for typing
    // (since HuBERT needs audio, not text)
    // ─────────────────────────────────────────────────────────────────
    const submitRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[submitRequest]": async (text)=>{
            if (!text || !text.trim()) return;
            setKioskStatus('thinking');
            setAnalysisResult(null);
            setAnalysisComplete(false);
            hideSuggestion();
            try {
                // Fetch text analysis from the backend using the fine-tuned RoBERTa model
                const response = await fetch(`${API_BASE}/api/analyze-text`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        text
                    })
                });
                if (!response.ok) {
                    throw new Error('Backend text analysis failed');
                }
                const data = await response.json();
                const probabilities = (data.probabilities || []).map({
                    "useKiosk.useCallback[submitRequest].probabilities": (p)=>({
                            code: LABEL_TO_LANG[p.label] || 'en',
                            label: p.label,
                            name: p.name,
                            nativeName: p.name,
                            flag: p.flag,
                            confidence: p.confidence
                        })
                }["useKiosk.useCallback[submitRequest].probabilities"]);
                // Let's run local rule-based analysis to get the text highlights and rules matches
                const { analyzeEnglishText } = await __turbopack_context__.A("[project]/src/data/nliRules.js [app-client] (ecmascript, async loader)");
                const rulesResult = analyzeEnglishText(text);
                const detected = data.confidence > 25 ? {
                    label: data.detected,
                    code: LABEL_TO_LANG[data.detected] || data.code || 'en',
                    name: data.name,
                    nativeName: data.nativeName || data.name,
                    flag: data.flag,
                    confidence: data.confidence,
                    choices: data.choices || []
                } : null;
                // Blend probabilities and detected to favor high-precision rule matches over statistical model predictions
                let blendedProbabilities = [];
                let finalDetected = null;
                if (rulesResult.rawMatches && rulesResult.rawMatches.length > 0) {
                    blendedProbabilities = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].map({
                        "useKiosk.useCallback[submitRequest]": (lang)=>{
                            const modelP = probabilities.find({
                                "useKiosk.useCallback[submitRequest]": (p)=>p.code === lang.code
                            }["useKiosk.useCallback[submitRequest]"]) || {
                                confidence: 0
                            };
                            const ruleP = rulesResult.probabilities.find({
                                "useKiosk.useCallback[submitRequest]": (p)=>p.code === lang.code
                            }["useKiosk.useCallback[submitRequest]"]) || {
                                confidence: 0
                            };
                            const blendedConf = Math.round(modelP.confidence * 0.3 + ruleP.confidence * 0.7);
                            return {
                                code: lang.code,
                                label: modelP.label || lang.code.toUpperCase(),
                                name: lang.name,
                                nativeName: lang.nativeName || lang.name,
                                flag: lang.flag,
                                confidence: blendedConf
                            };
                        }
                    }["useKiosk.useCallback[submitRequest]"]);
                    blendedProbabilities.sort({
                        "useKiosk.useCallback[submitRequest]": (a, b)=>b.confidence - a.confidence
                    }["useKiosk.useCallback[submitRequest]"]);
                    const topProb = blendedProbabilities[0];
                    if (topProb && topProb.confidence >= 25) {
                        finalDetected = {
                            label: topProb.label,
                            code: topProb.code,
                            name: topProb.name,
                            nativeName: topProb.nativeName,
                            flag: topProb.flag,
                            confidence: topProb.confidence,
                            choices: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].find({
                                "useKiosk.useCallback[submitRequest]": (l)=>l.code === topProb.code
                            }["useKiosk.useCallback[submitRequest]"])?.choices || []
                        };
                    }
                } else {
                    blendedProbabilities = probabilities;
                    finalDetected = detected;
                }
                const result = {
                    probabilities: blendedProbabilities,
                    detected: finalDetected,
                    highlightedHtml: rulesResult.highlightedHtml || '',
                    rawMatches: rulesResult.rawMatches || []
                };
                setAnalysisResult(result);
                setAnalysisComplete(true);
                setKioskStatus('ready');
                scheduleSuggestion(result);
            } catch (err) {
                console.warn('Backend text analysis failed, falling back to local rule-based engine:', err);
                // Fallback to rule-based engine
                try {
                    const { analyzeEnglishText } = await __turbopack_context__.A("[project]/src/data/nliRules.js [app-client] (ecmascript, async loader)");
                    const result = analyzeEnglishText(text);
                    setAnalysisResult(result);
                    setAnalysisComplete(true);
                    setKioskStatus('ready');
                    scheduleSuggestion(result);
                } catch (fallbackErr) {
                    console.error('Text analysis fallback failed:', fallbackErr);
                    setKioskStatus('ready');
                    showToast('Text analysis failed.', 'error');
                }
            }
        }
    }["useKiosk.useCallback[submitRequest]"], []);
    // ─────────────────────────────────────────────────────────────────
    // PROCEED TO CHAT
    // ─────────────────────────────────────────────────────────────────
    const proceedToChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[proceedToChat]": (langCode)=>{
            setSelectedLanguage(langCode);
            hideSuggestion();
            const dbKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChatbotDbKey"])(langCode);
            const db = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATBOT_DATABASE"][dbKey] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$chatbotData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHATBOT_DATABASE"].en;
            // Use ref — always has the latest value regardless of closure staleness
            const initialRequest = userRequestRef.current.trim();
            if (initialRequest) {
                // Start the chat with the actual user concern, then respond to it.
                const lowerQ = initialRequest.toLowerCase();
                let found = null;
                for (const item of db.answers){
                    if (item.keys.some({
                        "useKiosk.useCallback[proceedToChat]": (k)=>lowerQ.includes(k)
                    }["useKiosk.useCallback[proceedToChat]"])) {
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
            const greeting = db.welcome;
            setChatMessages([
                {
                    sender: 'bot',
                    text: greeting
                }
            ]);
            setCurrentScreen('CHAT');
            speak(greeting, langCode);
        }
    }["useKiosk.useCallback[proceedToChat]"], [
        speak
    ]);
    const sendChatMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[sendChatMessage]": (query)=>{
            if (!query.trim()) return;
            // Save the request if it's the first message (user's initial question)
            if (chatMessages.length <= 1 && !userRequest) {
                setUserRequest(query);
            }
            setChatMessages({
                "useKiosk.useCallback[sendChatMessage]": (prev)=>[
                        ...prev,
                        {
                            sender: 'user',
                            text: query
                        }
                    ]
            }["useKiosk.useCallback[sendChatMessage]"]);
            setKioskStatus('thinking');
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
                    setKioskStatus('ready');
                }
            }["useKiosk.useCallback[sendChatMessage]"], 700);
        }
    }["useKiosk.useCallback[sendChatMessage]"], [
        selectedLanguage,
        chatMessages,
        userRequest
    ]);
    const changeLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[changeLanguage]": (langCode)=>{
            setSelectedLanguage(langCode);
            const names = {
                en: 'English',
                tl: 'Filipino',
                zh: 'Chinese',
                ko: 'Korean',
                ja: 'Japanese',
                id: 'Indonesian',
                ur: 'Urdu',
                th: 'Thai'
            };
            const langName = names[langCode] || langCode;
            showToast(`Kiosk translated to ${langName}`, 'info');
        }
    }["useKiosk.useCallback[changeLanguage]"], [
        showToast
    ]);
    // Background NLI analysis of the ongoing conversation (constantly running on every response)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKiosk.useEffect": ()=>{
            if (currentScreen !== 'CHAT') return;
            if (selectedLanguage !== 'en') return;
            const userMsgs = chatMessages.filter({
                "useKiosk.useEffect.userMsgs": (m)=>m.sender === 'user'
            }["useKiosk.useEffect.userMsgs"]).map({
                "useKiosk.useEffect.userMsgs": (m)=>m.text
            }["useKiosk.useEffect.userMsgs"]);
            if (userMsgs.length === 0) return;
            const combinedText = userMsgs.join('\n');
            // Query backend model to dynamically trace L1 on user chat replies
            fetch(`${API_BASE}/api/analyze-text`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: combinedText
                })
            }).then({
                "useKiosk.useEffect": (res)=>{
                    if (!res.ok) throw new Error('API text analysis failed');
                    return res.json();
                }
            }["useKiosk.useEffect"]).then({
                "useKiosk.useEffect": async (data)=>{
                    const probabilities = (data.probabilities || []).map({
                        "useKiosk.useEffect.probabilities": (p)=>({
                                code: LABEL_TO_LANG[p.label] || 'en',
                                label: p.label,
                                name: p.name,
                                nativeName: p.name,
                                flag: p.flag,
                                confidence: p.confidence
                            })
                    }["useKiosk.useEffect.probabilities"]);
                    // Get local rule-based highlights and details
                    const { analyzeEnglishText } = await __turbopack_context__.A("[project]/src/data/nliRules.js [app-client] (ecmascript, async loader)");
                    const rulesResult = analyzeEnglishText(combinedText);
                    const detected = data.confidence > 25 ? {
                        label: data.detected,
                        code: LABEL_TO_LANG[data.detected] || data.code || 'en',
                        name: data.name,
                        nativeName: data.nativeName || data.name,
                        flag: data.flag,
                        confidence: data.confidence,
                        choices: data.choices || []
                    } : null;
                    // Blend probabilities and detected to favor high-precision rule matches over statistical model predictions
                    let blendedProbabilities = [];
                    let finalDetected = null;
                    if (rulesResult.rawMatches && rulesResult.rawMatches.length > 0) {
                        blendedProbabilities = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].map({
                            "useKiosk.useEffect": (lang)=>{
                                const modelP = probabilities.find({
                                    "useKiosk.useEffect": (p)=>p.code === lang.code
                                }["useKiosk.useEffect"]) || {
                                    confidence: 0
                                };
                                const ruleP = rulesResult.probabilities.find({
                                    "useKiosk.useEffect": (p)=>p.code === lang.code
                                }["useKiosk.useEffect"]) || {
                                    confidence: 0
                                };
                                const blendedConf = Math.round(modelP.confidence * 0.3 + ruleP.confidence * 0.7);
                                return {
                                    code: lang.code,
                                    label: modelP.label || lang.code.toUpperCase(),
                                    name: lang.name,
                                    nativeName: lang.nativeName || lang.name,
                                    flag: lang.flag,
                                    confidence: blendedConf
                                };
                            }
                        }["useKiosk.useEffect"]);
                        blendedProbabilities.sort({
                            "useKiosk.useEffect": (a, b)=>b.confidence - a.confidence
                        }["useKiosk.useEffect"]);
                        const topProb = blendedProbabilities[0];
                        if (topProb && topProb.confidence >= 25) {
                            finalDetected = {
                                label: topProb.label,
                                code: topProb.code,
                                name: topProb.name,
                                nativeName: topProb.nativeName,
                                flag: topProb.flag,
                                confidence: topProb.confidence,
                                choices: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].find({
                                    "useKiosk.useEffect": (l)=>l.code === topProb.code
                                }["useKiosk.useEffect"])?.choices || []
                            };
                        }
                    } else {
                        blendedProbabilities = probabilities;
                        finalDetected = detected;
                    }
                    setAnalysisResult({
                        probabilities: blendedProbabilities,
                        detected: finalDetected,
                        highlightedHtml: rulesResult.highlightedHtml || '',
                        rawMatches: rulesResult.rawMatches || []
                    });
                }
            }["useKiosk.useEffect"]).catch({
                "useKiosk.useEffect": async (err)=>{
                    console.warn('Real-time model tracing failed, using fallback engine:', err);
                    const { analyzeEnglishText } = await __turbopack_context__.A("[project]/src/data/nliRules.js [app-client] (ecmascript, async loader)");
                    const result = analyzeEnglishText(combinedText);
                    setAnalysisResult(result);
                }
            }["useKiosk.useEffect"]);
        }
    }["useKiosk.useEffect"], [
        chatMessages,
        currentScreen,
        selectedLanguage
    ]);
    const resetSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[resetSession]": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
            setCurrentScreen('WELCOME');
            setSelectedLanguage('en');
            setInputText('');
            setUserRequest('');
            userRequestRef.current = '';
            setAnalysisResult(null);
            setAnalysisComplete(false);
            hideSuggestion();
            setChatMessages([]);
            setKioskStatus('ready');
            if (isListening) stopRecording();
        }
    }["useKiosk.useCallback[resetSession]"], [
        hideSuggestion,
        isListening,
        stopRecording
    ]);
    const goToRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[goToRequest]": ()=>{
            setCurrentScreen('REQUEST');
            setInputText('');
            setUserRequest('');
            userRequestRef.current = '';
            setAnalysisResult(null);
            setAnalysisComplete(false);
            hideSuggestion();
            speak('We are here to assist you. Please tap the mic button to speak your request, or type in below. Our system will analyze and adapt to your language.', 'en');
        }
    }["useKiosk.useCallback[goToRequest]"], [
        hideSuggestion,
        speak
    ]);
    // Wrapped setter — keeps ref in sync so proceedToChat always reads the latest
    const setUserRequestAndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useKiosk.useCallback[setUserRequestAndRef]": (text)=>{
            userRequestRef.current = text;
            setUserRequest(text);
        }
    }["useKiosk.useCallback[setUserRequestAndRef]"], []);
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
            return ({
                "useKiosk.useEffect": ()=>cancelSuggestionTimer()
            })["useKiosk.useEffect"];
        }
    }["useKiosk.useEffect"], [
        cancelSuggestionTimer
    ]);
    // Speak welcome greeting when kiosk first loads
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKiosk.useEffect": ()=>{
            const timer = setTimeout({
                "useKiosk.useEffect.timer": ()=>{
                    speak('Welcome! Please tap the screen to proceed.', 'en');
                }
            }["useKiosk.useEffect.timer"], 1200);
            return ({
                "useKiosk.useEffect": ()=>clearTimeout(timer)
            })["useKiosk.useEffect"];
        }
    }["useKiosk.useEffect"], [
        speak
    ]);
    return {
        currentScreen,
        selectedLanguage,
        kioskStatus,
        inputText,
        setInputText,
        isListening,
        userRequest,
        isInterimTranscript,
        setUserRequest: setUserRequestAndRef,
        analysisResult,
        analysisComplete,
        showSuggestion,
        setSuggestion: setShowSuggestion,
        suggestionData,
        chatMessages,
        toast,
        speak,
        // Actions
        goToRequest,
        toggleListening,
        submitRequest,
        proceedToChat,
        sendChatMessage,
        resetSession,
        showToast,
        changeLanguage
    };
}
_s(useKiosk, "9ALfNG+d+ES8sivmywURxUarsvQ=");
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/assets/logo.svg",
                        alt: "Brand logo",
                        className: "kiosk-logo-img"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "kiosk-title-text",
                        children: "LINGUA"
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
function WelcomeScreen({ active, onProceed }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `kiosk-screen screen-welcome${active ? ' active' : ''}`,
        id: "screenWelcome",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "welcome-logo-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/assets/robot_icon.gif",
                    alt: "Robo Logo",
                    className: "welcome-logo-gif",
                    style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/WelcomeScreen.jsx",
                    lineNumber: 12,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "welcome-title",
                style: {
                    opacity: 1
                },
                children: "WELCOME!"
            }, void 0, false, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "welcome-subtitle",
                style: {
                    opacity: 0.95,
                    letterSpacing: '0.5px'
                },
                children: "Linguistic Identification & Native Guide for Universal Assistance"
            }, void 0, false, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 21,
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
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    "Tap to Proceed"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WelcomeScreen.jsx",
                lineNumber: 25,
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
function RequestScreen({ active, inputText, setInputText, isListening, kioskStatus, isInterimTranscript, onToggleListening, onSubmit, analysisResult, analysisComplete }) {
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [recordSecs, setRecordSecs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [diagnosticsOpen, setDiagnosticsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transcriptFilled, setTranscriptFilled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const prevListeningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
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
            if (active && !isListening && inputRef.current) inputRef.current.focus();
        }
    }["RequestScreen.useEffect"], [
        isListening,
        active
    ]);
    // Flash the text console whenever a Deepgram transcript populates inputText after recording
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RequestScreen.useEffect": ()=>{
            // Detect transition: was listening, now not listening, and inputText has content
            if (prevListeningRef.current && !isListening && inputText && inputText.trim()) {
                setTranscriptFilled(true);
                const timer = setTimeout({
                    "RequestScreen.useEffect.timer": ()=>setTranscriptFilled(false)
                }["RequestScreen.useEffect.timer"], 1800);
                return ({
                    "RequestScreen.useEffect": ()=>clearTimeout(timer)
                })["RequestScreen.useEffect"];
            }
            prevListeningRef.current = isListening;
        }
    }["RequestScreen.useEffect"], [
        isListening,
        inputText
    ]);
    const isAnalyzing = kioskStatus === 'thinking';
    const showResults = analysisComplete && analysisResult;
    const hasResults = isAnalyzing || showResults;
    const isLanguageTraced = analysisComplete && !!analysisResult?.detected;
    const displayProbs = showResults ? analysisResult.probabilities.slice(0, 7) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].slice(0, 7).map((l)=>({
            ...l,
            confidence: 0
        }));
    // Open drawer immediately the moment analysis starts OR completes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RequestScreen.useEffect": ()=>{
            if (isAnalyzing || analysisComplete) {
                setDiagnosticsOpen(true);
            } else {
                setDiagnosticsOpen(false);
            }
        }
    }["RequestScreen.useEffect"], [
        isAnalyzing,
        analysisComplete
    ]);
    // Drawer is always fully open when there are results or analysis is running
    const drawerHeight = !hasResults ? '0px' : '340px';
    const handleKey = (e)=>{
        if (e.key === 'Enter') onSubmit(inputText);
    };
    // Use uploaded static SVG from public/assets. Replace the file to change the icon.
    const micIconSrc = isListening ? '/assets/mic-listening.svg' : '/assets/mic.svg';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `kiosk-screen screen-request ${active ? 'active' : ''}${hasResults ? ' has-results' : ''}`,
        id: "screenRequest",
        style: {
            paddingBottom: '0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "request-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "request-header-title",
                        children: "Language Classifier"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "request-header-subtitle",
                        children: "We are here to assist you. Please tap the mic button to speak your request, or type in below. Our system will analyze and adapt to your language."
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RequestScreen.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "request-voice-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "voice-button-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `voice-btn${isListening ? ' listening' : ''}`,
                                onClick: onToggleListening,
                                title: isListening ? 'Tap to Stop Recording' : 'Tap to Start Recording',
                                "aria-label": isListening ? 'Stop recording' : 'Start recording',
                                disabled: isAnalyzing,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: micIconSrc,
                                    alt: isListening ? 'Stop recording' : 'Microphone icon',
                                    className: "voice-btn-icon"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RequestScreen.jsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WaveVisualizer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                active: isListening
                            }, void 0, false, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "request-prompt",
                        children: isListening ? `🎙️ Recording... ${recordSecs}s — Tap again to stop & analyze` : isAnalyzing ? 'Analyzing your audio...' : 'Tap the microphone and speak your request in English'
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RequestScreen.jsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "request-main-content"
            }, void 0, false, {
                fileName: "[project]/src/components/RequestScreen.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "request-text-input-fixed",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-input-divider",
                    children: "Or type it here"
                }, void 0, false, {
                    fileName: "[project]/src/components/RequestScreen.jsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RequestScreen.jsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `request-bottom-wrapper${hasResults ? ' has-results' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "request-bottom-panel",
                        style: {
                            marginTop: '-10px',
                            marginBottom: '0px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-console-box${transcriptFilled ? ' transcript-filled' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "console-icon",
                                    children: "⌨️"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RequestScreen.jsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: inputRef,
                                    type: "text",
                                    className: `text-console-input${transcriptFilled ? ' transcript-filled' : ''}${isInterimTranscript ? ' interim' : ''}`,
                                    placeholder: "e.g., 'How\\'s the weather today?' or 'I need directions to...'",
                                    autoComplete: "off",
                                    value: inputText,
                                    onChange: (e)=>setInputText(e.target.value),
                                    onKeyDown: handleKey
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RequestScreen.jsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "console-submit-btn",
                                    onClick: ()=>onSubmit(inputText),
                                    disabled: isAnalyzing,
                                    children: isAnalyzing ? 'Analyzing...' : 'Send'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RequestScreen.jsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RequestScreen.jsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `nli-drawer${diagnosticsOpen ? ' nli-drawer-open' : ''}`,
                        id: "nliDiagnosticsDrawer",
                        style: {
                            borderRadius: '12px 12px 0 0',
                            borderTop: hasResults ? '1px solid hsla(var(--border-glass))' : 'none',
                            borderLeft: hasResults ? '1px solid hsla(var(--border-glass))' : 'none',
                            borderRight: hasResults ? '1px solid hsla(var(--border-glass))' : 'none',
                            borderBottom: 'none',
                            background: 'rgba(18, 22, 33, 0.95)',
                            height: drawerHeight,
                            opacity: hasResults ? 1 : 0,
                            visibility: hasResults ? 'visible' : 'hidden',
                            transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, visibility 0.4s'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "nli-drawer-toggle",
                                onClick: ()=>setDiagnosticsOpen((o)=>!o),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-toggle-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "nli-drawer-toggle-icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    width: "18",
                                                    height: "18",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                                        lineNumber: 168,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestScreen.jsx",
                                                    lineNumber: 167,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 166,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "nli-drawer-toggle-label",
                                                children: "LINGUA Diagnostics"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 171,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "nli-live-indicator",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `nli-live-dot${kioskStatus === 'thinking' ? ' thinking' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                                        lineNumber: 175,
                                                        columnNumber: 15
                                                    }, this),
                                                    kioskStatus === 'thinking' ? 'ANALYZING...' : 'LIVE TRACING'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 174,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                        lineNumber: 165,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-toggle-right",
                                        children: [
                                            analysisComplete && analysisResult?.detected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "nli-drawer-detected-pill",
                                                children: [
                                                    (()=>{
                                                        const map = {
                                                            en: 'GB',
                                                            tl: 'PH',
                                                            ceb: 'PH',
                                                            zh: 'CN',
                                                            ko: 'KR',
                                                            ja: 'JP',
                                                            id: 'ID',
                                                            ur: 'PK',
                                                            th: 'TH',
                                                            ms: 'MY'
                                                        };
                                                        const code = analysisResult.detected.code;
                                                        return map[code] || code.slice(0, 2).toUpperCase();
                                                    })(),
                                                    " ",
                                                    analysisResult.detected.name,
                                                    " ",
                                                    analysisResult.detected.confidence,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "nli-drawer-chevron",
                                                children: diagnosticsOpen ? '▼' : '▲'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 189,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                        lineNumber: 179,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 161,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nli-drawer-body",
                                children: [
                                    isLanguageTraced ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-drawer-section-title",
                                                children: "Detected Mother-Tongue Influence"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-detected-card",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '14px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "nli-detected-flag",
                                                            children: analysisResult.detected.flag
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RequestScreen.jsx",
                                                            lineNumber: 201,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "nli-detected-name",
                                                                    children: analysisResult.detected.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/RequestScreen.jsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "nli-detected-sub",
                                                                    children: [
                                                                        "Mother-Tongue (L1) · ",
                                                                        analysisResult.detected.confidence,
                                                                        "% confidence"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/RequestScreen.jsx",
                                                                    lineNumber: 204,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "nli-detected-bar-wrap",
                                                                    style: {
                                                                        marginTop: '6px'
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "nli-detected-bar",
                                                                        style: {
                                                                            width: `${analysisResult.detected.confidence}%`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/RequestScreen.jsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/RequestScreen.jsx",
                                                            lineNumber: 202,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RequestScreen.jsx",
                                                    lineNumber: 200,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-drawer-section-title",
                                                children: "Detected Mother-Tongue Influence"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-no-data",
                                                children: isAnalyzing ? 'Awaiting analysis...' : "Can't trace your native language. Proceed to chat."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-drawer-section-title",
                                                children: "Mother-Tongue Probability Mapping"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 226,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-prob-list",
                                                children: displayProbs.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "nli-prob-row",
                                                        style: {
                                                            gridTemplateColumns: isLanguageTraced ? '24px 100px 1fr 40px' : '24px 100px 1fr'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "nli-prob-flag",
                                                                children: lang.flag
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                                lineNumber: 230,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "nli-prob-name",
                                                                children: lang.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                                lineNumber: 231,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "nli-prob-track",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `nli-prob-bar${isLanguageTraced ? '' : ' loading'}`,
                                                                    style: {
                                                                        width: isLanguageTraced ? `${lang.confidence}%` : '100%',
                                                                        transition: isLanguageTraced ? 'width 0.7s cubic-bezier(0.16,1,0.3,1)' : 'none'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/RequestScreen.jsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                                lineNumber: 232,
                                                                columnNumber: 19
                                                            }, this),
                                                            isLanguageTraced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "nli-prob-val",
                                                                children: [
                                                                    lang.confidence,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                                lineNumber: 242,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, lang.code, true, {
                                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                                        lineNumber: 229,
                                                        columnNumber: 17
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 227,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                        lineNumber: 225,
                                        columnNumber: 11
                                    }, this),
                                    analysisComplete && analysisResult?.highlightedHtml && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-drawer-section-title",
                                                children: "Mother-Tongue Transfer Markers in Input"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-highlighted-text",
                                                dangerouslySetInnerHTML: {
                                                    __html: analysisResult.highlightedHtml
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-drawer-section-title",
                                                children: "Linguistic Markers Triggered"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 262,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-markers-log",
                                                children: !analysisResult?.rawMatches || analysisResult.rawMatches.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "nli-no-data",
                                                    children: "No mother-tongue transfer markers triggered yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestScreen.jsx",
                                                    lineNumber: 265,
                                                    columnNumber: 17
                                                }, this) : analysisResult.rawMatches.map((match, i)=>{
                                                    const langObj = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].find((l)=>l.code === match.langCode);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "nli-marker-card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "nli-marker-rule",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: match.reason
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                                                        lineNumber: 272,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "nli-marker-origin",
                                                                        children: [
                                                                            langObj?.name || 'Unknown',
                                                                            " Origin"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                                                        lineNumber: 273,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                                lineNumber: 271,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "nli-marker-desc",
                                                                children: match.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                                lineNumber: 275,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "nli-marker-match",
                                                                children: [
                                                                    '"',
                                                                    match.matchedText,
                                                                    '"'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                                lineNumber: 276,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                                        lineNumber: 270,
                                                        columnNumber: 21
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RequestScreen.jsx",
                                                lineNumber: 263,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RequestScreen.jsx",
                                        lineNumber: 261,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RequestScreen.jsx",
                                lineNumber: 194,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RequestScreen.jsx",
                        lineNumber: 144,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RequestScreen.jsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RequestScreen.jsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(RequestScreen, "9zJqHiG3HdekIxVclcOHS2TwB0Q=");
_c = RequestScreen;
var _c;
__turbopack_context__.k.register(_c, "RequestScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ServiceModals.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapModal",
    ()=>MapModal,
    "TranslateModal",
    ()=>TranslateModal,
    "WeatherModal",
    ()=>WeatherModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/ServiceModals.jsx
// Simple popup modals for Weather, Map/Directions, and Translation services
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
// ─── WEATHER MODAL ───
function WeatherModal({ onClose }) {
    _s();
    const [weather, setWeather] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WeatherModal.useEffect": ()=>{
            // Try fetching real weather from wttr.in (free, no API key)
            fetch('https://wttr.in/?format=j1').then({
                "WeatherModal.useEffect": (r)=>r.json()
            }["WeatherModal.useEffect"]).then({
                "WeatherModal.useEffect": (data)=>{
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
                        forecast: forecast.map({
                            "WeatherModal.useEffect": (d)=>({
                                    date: d.date,
                                    maxTemp: d.maxtempC,
                                    minTemp: d.mintempC,
                                    desc: d.hourly?.[4]?.weatherDesc?.[0]?.value || '',
                                    icon: getWeatherIcon(d.hourly?.[4]?.weatherCode)
                                })
                        }["WeatherModal.useEffect"]),
                        icon: getWeatherIcon(current?.weatherCode)
                    });
                    setLoading(false);
                }
            }["WeatherModal.useEffect"]).catch({
                "WeatherModal.useEffect": ()=>{
                    // Fallback mock data
                    setWeather({
                        temp: '28',
                        feelsLike: '30',
                        desc: 'Partly Cloudy',
                        humidity: '72',
                        wind: '15',
                        windDir: 'NE',
                        uv: '6',
                        visibility: '10',
                        area: 'Your Location',
                        country: '',
                        icon: '⛅',
                        forecast: [
                            {
                                date: 'Tomorrow',
                                maxTemp: '30',
                                minTemp: '24',
                                desc: 'Sunny',
                                icon: '☀️'
                            },
                            {
                                date: 'Day After',
                                maxTemp: '29',
                                minTemp: '23',
                                desc: 'Cloudy',
                                icon: '☁️'
                            },
                            {
                                date: 'In 3 Days',
                                maxTemp: '27',
                                minTemp: '22',
                                desc: 'Light Rain',
                                icon: '🌧️'
                            }
                        ]
                    });
                    setLoading(false);
                }
            }["WeatherModal.useEffect"]);
        }
    }["WeatherModal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "svc-modal-overlay active",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "svc-modal-card",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "svc-modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "svc-modal-title",
                            children: "🌤️ Weather Forecast"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceModals.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "svc-modal-close",
                            onClick: onClose,
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceModals.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServiceModals.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "svc-modal-body",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "svc-loading",
                        children: "Loading weather data..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceModals.jsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this) : weather ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "weather-current",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "weather-main",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "weather-icon-big",
                                                children: weather.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceModals.jsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "weather-temp",
                                                        children: [
                                                            weather.temp,
                                                            "°C"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                                        lineNumber: 74,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "weather-desc",
                                                        children: weather.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                                        lineNumber: 75,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "weather-location",
                                                        children: [
                                                            weather.area,
                                                            weather.country ? `, ${weather.country}` : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                                        lineNumber: 76,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServiceModals.jsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "weather-details-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "weather-detail",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "weather-detail-label",
                                                        children: "Feels Like"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                                        lineNumber: 80,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "weather-detail-val",
                                                        children: [
                                                            weather.feelsLike,
                                                            "°C"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                                        lineNumber: 80,
                                                        columnNumber: 107
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServiceModals.jsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "weather-detail",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "weather-detail-label",
                                                        children: "Humidity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                                        lineNumber: 81,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "weather-detail-val",
                                                        children: [
                                                            weather.humidity,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                                        lineNumber: 81,
                                                        columnNumber: 105
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServiceModals.jsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "weather-detail",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "weather-detail-label",
                                                        children: "Wind"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                                        lineNumber: 82,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "weather-detail-val",
                                                        children: [
                                                            weather.wind,
                                                            " km/h ",
                                                            weather.windDir
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                                        lineNumber: 82,
                                                        columnNumber: 101
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServiceModals.jsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "weather-detail",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "weather-detail-label",
                                                        children: "UV Index"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                                        lineNumber: 83,
                                                        columnNumber: 51
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "weather-detail-val",
                                                        children: weather.uv
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                                        lineNumber: 83,
                                                        columnNumber: 105
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServiceModals.jsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ServiceModals.jsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "weather-forecast-row",
                                children: weather.forecast.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "weather-forecast-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "forecast-date",
                                                children: formatForecastDate(d.date)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceModals.jsx",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "forecast-icon",
                                                children: d.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceModals.jsx",
                                                lineNumber: 90,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "forecast-temps",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "forecast-hi",
                                                        children: [
                                                            d.maxTemp,
                                                            "°"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                                        lineNumber: 92,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "forecast-lo",
                                                        children: [
                                                            d.minTemp,
                                                            "°"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                                        lineNumber: 93,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServiceModals.jsx",
                                                lineNumber: 91,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "forecast-desc",
                                                children: d.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceModals.jsx",
                                                lineNumber: 95,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 88,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceModals.jsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : null
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceModals.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServiceModals.jsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ServiceModals.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(WeatherModal, "8S9MM6CRsAKHmMjrPFeKJiV0PfY=");
_c = WeatherModal;
function formatForecastDate(dateStr) {
    if (!dateStr || dateStr.includes('Day') || dateStr.includes('Tomorrow')) return dateStr;
    try {
        const d = new Date(dateStr);
        return d.toLocaleDateString('en', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    } catch  {
        return dateStr;
    }
}
function getWeatherIcon(code) {
    const c = parseInt(code, 10);
    if (!c) return '🌤️';
    if (c === 113) return '☀️';
    if (c === 116) return '⛅';
    if (c === 119 || c === 122) return '☁️';
    if ([
        176,
        263,
        266,
        293,
        296,
        299,
        302
    ].includes(c)) return '🌧️';
    if ([
        305,
        308,
        311,
        314,
        356,
        359
    ].includes(c)) return '🌧️';
    if ([
        200,
        386,
        389,
        392,
        395
    ].includes(c)) return '⛈️';
    if ([
        179,
        227,
        230,
        323,
        326,
        329,
        332,
        335,
        338,
        350,
        368,
        371,
        374,
        377
    ].includes(c)) return '❄️';
    if ([
        143,
        248,
        260
    ].includes(c)) return '🌫️';
    return '🌤️';
}
// ─── MAP / DIRECTIONS MODAL ───
function MapModal({ onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "svc-modal-overlay active",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "svc-modal-card",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "svc-modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "svc-modal-title",
                            children: "🗺️ Directions & Map"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceModals.jsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "svc-modal-close",
                            onClick: onClose,
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceModals.jsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServiceModals.jsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "svc-modal-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "map-container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 400 300",
                                className: "simple-map-svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                            id: "grid",
                                            width: "20",
                                            height: "20",
                                            patternUnits: "userSpaceOnUse",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M 20 0 L 0 0 0 20",
                                                fill: "none",
                                                stroke: "rgba(100,200,255,0.06)",
                                                strokeWidth: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceModals.jsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceModals.jsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "400",
                                        height: "300",
                                        fill: "#0f121b"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "400",
                                        height: "300",
                                        fill: "url(#grid)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "0",
                                        y1: "150",
                                        x2: "400",
                                        y2: "150",
                                        stroke: "rgba(255,255,255,0.08)",
                                        strokeWidth: "24"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "200",
                                        y1: "0",
                                        x2: "200",
                                        y2: "300",
                                        stroke: "rgba(255,255,255,0.08)",
                                        strokeWidth: "24"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "0",
                                        y1: "150",
                                        x2: "400",
                                        y2: "150",
                                        stroke: "rgba(255,255,255,0.15)",
                                        strokeWidth: "2",
                                        strokeDasharray: "8 4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "200",
                                        y1: "0",
                                        x2: "200",
                                        y2: "300",
                                        stroke: "rgba(255,255,255,0.15)",
                                        strokeWidth: "2",
                                        strokeDasharray: "8 4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "40",
                                        y: "40",
                                        width: "80",
                                        height: "50",
                                        rx: "6",
                                        fill: "rgba(0,200,200,0.12)",
                                        stroke: "rgba(0,200,200,0.3)",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "80",
                                        y: "68",
                                        textAnchor: "middle",
                                        fill: "rgba(255,255,255,0.7)",
                                        fontSize: "9",
                                        fontFamily: "Outfit",
                                        children: "🏢 Office"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "260",
                                        y: "40",
                                        width: "100",
                                        height: "50",
                                        rx: "6",
                                        fill: "rgba(150,100,255,0.12)",
                                        stroke: "rgba(150,100,255,0.3)",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "310",
                                        y: "68",
                                        textAnchor: "middle",
                                        fill: "rgba(255,255,255,0.7)",
                                        fontSize: "9",
                                        fontFamily: "Outfit",
                                        children: "🛍️ Mall"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "40",
                                        y: "190",
                                        width: "90",
                                        height: "55",
                                        rx: "6",
                                        fill: "rgba(255,180,50,0.12)",
                                        stroke: "rgba(255,180,50,0.3)",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "85",
                                        y: "221",
                                        textAnchor: "middle",
                                        fill: "rgba(255,255,255,0.7)",
                                        fontSize: "9",
                                        fontFamily: "Outfit",
                                        children: "🍽️ Food Court"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "280",
                                        y: "200",
                                        width: "80",
                                        height: "50",
                                        rx: "6",
                                        fill: "rgba(0,200,100,0.12)",
                                        stroke: "rgba(0,200,100,0.3)",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "320",
                                        y: "228",
                                        textAnchor: "middle",
                                        fill: "rgba(255,255,255,0.7)",
                                        fontSize: "9",
                                        fontFamily: "Outfit",
                                        children: "🏥 Clinic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "150",
                                        y: "100",
                                        width: "100",
                                        height: "40",
                                        rx: "6",
                                        fill: "rgba(255,100,100,0.12)",
                                        stroke: "rgba(255,100,100,0.3)",
                                        strokeWidth: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "200",
                                        y: "124",
                                        textAnchor: "middle",
                                        fill: "rgba(255,255,255,0.7)",
                                        fontSize: "9",
                                        fontFamily: "Outfit",
                                        children: "🚻 Restrooms"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "200",
                                        cy: "200",
                                        r: "8",
                                        fill: "#00e5ff",
                                        opacity: "0.3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                attributeName: "r",
                                                values: "8;16;8",
                                                dur: "2s",
                                                repeatCount: "indefinite"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceModals.jsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                attributeName: "opacity",
                                                values: "0.3;0.05;0.3",
                                                dur: "2s",
                                                repeatCount: "indefinite"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServiceModals.jsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "200",
                                        cy: "200",
                                        r: "6",
                                        fill: "#00e5ff"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "200",
                                        y: "185",
                                        textAnchor: "middle",
                                        fill: "#00e5ff",
                                        fontSize: "8",
                                        fontWeight: "700",
                                        fontFamily: "Outfit",
                                        children: "📍 YOU ARE HERE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ServiceModals.jsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceModals.jsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "map-legend",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "map-legend-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#00e5ff'
                                            },
                                            children: "●"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceModals.jsx",
                                            lineNumber: 182,
                                            columnNumber: 47
                                        }, this),
                                        " Your Location"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceModals.jsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "map-legend-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'rgba(0,200,200,0.8)'
                                            },
                                            children: "■"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceModals.jsx",
                                            lineNumber: 183,
                                            columnNumber: 47
                                        }, this),
                                        " Office"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceModals.jsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "map-legend-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'rgba(150,100,255,0.8)'
                                            },
                                            children: "■"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceModals.jsx",
                                            lineNumber: 184,
                                            columnNumber: 47
                                        }, this),
                                        " Mall"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceModals.jsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "map-legend-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'rgba(255,180,50,0.8)'
                                            },
                                            children: "■"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceModals.jsx",
                                            lineNumber: 185,
                                            columnNumber: 47
                                        }, this),
                                        " Food"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceModals.jsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "map-legend-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'rgba(0,200,100,0.8)'
                                            },
                                            children: "■"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceModals.jsx",
                                            lineNumber: 186,
                                            columnNumber: 47
                                        }, this),
                                        " Clinic"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceModals.jsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServiceModals.jsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServiceModals.jsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServiceModals.jsx",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ServiceModals.jsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c1 = MapModal;
// ─── TRANSLATE MODAL ───
function TranslateModal({ onClose }) {
    _s1();
    const [sourceText, setSourceText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [translated, setTranslated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sourceLang, setSourceLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [targetLang, setTargetLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('tl');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const languages = [
        {
            code: 'en',
            name: 'English',
            flag: '🇬🇧'
        },
        {
            code: 'tl',
            name: 'Filipino',
            flag: '🇵🇭'
        },
        {
            code: 'zh',
            name: '中文',
            flag: '🇨🇳'
        },
        {
            code: 'ko',
            name: '한국어',
            flag: '🇰🇷'
        },
        {
            code: 'ja',
            name: '日本語',
            flag: '🇯🇵'
        },
        {
            code: 'id',
            name: 'Bahasa',
            flag: '🇮🇩'
        },
        {
            code: 'th',
            name: 'ไทย',
            flag: '🇹🇭'
        }
    ];
    // Simple mock translations for demo
    const mockTranslations = {
        'hello': {
            tl: 'Kamusta',
            zh: '你好',
            ko: '안녕하세요',
            ja: 'こんにちは',
            id: 'Halo',
            th: 'สวัสดี'
        },
        'thank you': {
            tl: 'Salamat',
            zh: '谢谢',
            ko: '감사합니다',
            ja: 'ありがとう',
            id: 'Terima kasih',
            th: 'ขอบคุณ'
        },
        'where is the restroom': {
            tl: 'Nasaan ang banyo?',
            zh: '洗手间在哪里？',
            ko: '화장실은 어디에 있나요?',
            ja: 'お手洗いはどこですか？',
            id: 'Di mana kamar mandi?',
            th: 'ห้องน้ำอยู่ที่ไหน?'
        },
        'how much': {
            tl: 'Magkano?',
            zh: '多少钱？',
            ko: '얼마예요?',
            ja: 'いくらですか？',
            id: 'Berapa harganya?',
            th: 'ราคาเท่าไหร่?'
        },
        'help': {
            tl: 'Tulong',
            zh: '帮助',
            ko: '도움',
            ja: '助けて',
            id: 'Bantuan',
            th: 'ช่วยด้วย'
        },
        'good morning': {
            tl: 'Magandang umaga',
            zh: '早上好',
            ko: '좋은 아침',
            ja: 'おはようございます',
            id: 'Selamat pagi',
            th: 'สวัสดีตอนเช้า'
        }
    };
    const handleTranslate = ()=>{
        if (!sourceText.trim()) return;
        setLoading(true);
        setTimeout(()=>{
            const lower = sourceText.toLowerCase().trim();
            const match = mockTranslations[lower];
            if (match && match[targetLang]) {
                setTranslated(match[targetLang]);
            } else {
                // Generate a placeholder response
                const target = languages.find((l)=>l.code === targetLang);
                setTranslated(`[${target?.name || targetLang}] ${sourceText} ✓`);
            }
            setLoading(false);
        }, 500);
    };
    const handleSwap = ()=>{
        setSourceLang(targetLang);
        setTargetLang(sourceLang);
        setSourceText(translated);
        setTranslated(sourceText);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "svc-modal-overlay active",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "svc-modal-card",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "svc-modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "svc-modal-title",
                            children: "🌐 Language Translation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceModals.jsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "svc-modal-close",
                            onClick: onClose,
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceModals.jsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServiceModals.jsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "svc-modal-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "translate-lang-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "translate-lang-select",
                                    value: sourceLang,
                                    onChange: (e)=>setSourceLang(e.target.value),
                                    children: languages.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: l.code,
                                            children: [
                                                l.flag,
                                                " ",
                                                l.name
                                            ]
                                        }, l.code, true, {
                                            fileName: "[project]/src/components/ServiceModals.jsx",
                                            lineNumber: 256,
                                            columnNumber: 35
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceModals.jsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "translate-swap-btn",
                                    onClick: handleSwap,
                                    children: "⇄"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceModals.jsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "translate-lang-select",
                                    value: targetLang,
                                    onChange: (e)=>setTargetLang(e.target.value),
                                    children: languages.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: l.code,
                                            children: [
                                                l.flag,
                                                " ",
                                                l.name
                                            ]
                                        }, l.code, true, {
                                            fileName: "[project]/src/components/ServiceModals.jsx",
                                            lineNumber: 260,
                                            columnNumber: 35
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceModals.jsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServiceModals.jsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "translate-boxes",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "translate-box",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "translate-textarea",
                                        placeholder: "Type text to translate...",
                                        value: sourceText,
                                        onChange: (e)=>setSourceText(e.target.value),
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                e.preventDefault();
                                                handleTranslate();
                                            }
                                        },
                                        rows: 3
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceModals.jsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "translate-box translate-result",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "translate-loading",
                                        children: "Translating..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 276,
                                        columnNumber: 17
                                    }, this) : translated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "translate-output",
                                        children: translated
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "translate-placeholder",
                                        children: "Translation will appear here"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceModals.jsx",
                                        lineNumber: 280,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServiceModals.jsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServiceModals.jsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "translate-btn",
                            onClick: handleTranslate,
                            disabled: loading || !sourceText.trim(),
                            children: loading ? 'Translating...' : 'Translate'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceModals.jsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "translate-hint",
                            children: 'Try: "hello", "thank you", "where is the restroom", "good morning"'
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceModals.jsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServiceModals.jsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServiceModals.jsx",
            lineNumber: 248,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ServiceModals.jsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
_s1(TranslateModal, "ah4l1BBNe0l1gmYF/AKxJAgl70s=");
_c2 = TranslateModal;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "WeatherModal");
__turbopack_context__.k.register(_c1, "MapModal");
__turbopack_context__.k.register(_c2, "TranslateModal");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceModals$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceModals.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLangCode"])(langCode);
    const lang = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].find((l)=>l.code === base);
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
function getCountryCode(langCode) {
    const map = {
        en: 'GB',
        'en-PH': 'PH',
        ceb: 'PH',
        tl: 'PH',
        zh: 'CN',
        ko: 'KR',
        ja: 'JP',
        id: 'ID',
        ur: 'PK',
        th: 'TH',
        ms: 'MY'
    };
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLangCode"])(langCode);
    return map[base] || map[langCode] || langCode.slice(0, 2).toUpperCase();
}
function getServiceDescription(langCode, modal) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLangCode"])(langCode);
    const descriptions = {
        en: {
            weather: 'Check current weather and forecast',
            map: 'Find locations and get directions',
            translate: 'Translate words or phrases',
            support: 'Get help and information support'
        },
        tl: {
            weather: 'Suriin ang kasalukuyang panahon at ulat',
            map: 'Maghanap ng mga lokasyon at kumuha ng direksyon',
            translate: 'Isalin ang mga salita o parirala',
            support: 'Kumuha ng tulong at suporta sa impormasyon'
        },
        zh: {
            weather: '查看当前天气和天气预报',
            map: '查找地点并获取路线',
            translate: '翻译单词或短语',
            support: '获取帮助和信息支持'
        },
        ko: {
            weather: '현재 날씨 및 예보 확인',
            map: '위치 확인 및 길 찾기',
            translate: '단어 또는 구문 번역',
            support: '도움 및 정보 지원 받기'
        },
        ja: {
            weather: '現在の天気と予報を確認',
            map: '場所を検索して道順を取得',
            translate: '単語やフレーズを翻訳',
            support: 'ヘルプと情報サポートの取得'
        },
        id: {
            weather: 'Periksa cuaca saat ini dan prakiraan',
            map: 'Temukan lokasi dan dapatkan arah',
            translate: 'Terjemahkan kata atau frasa',
            support: 'Dapatkan bantuan dan dukungan informasi'
        },
        ur: {
            weather: 'موسم کی موجودہ صورتحال اور پیشگوئی دیکھیں',
            map: 'مقامات تلاش کریں اور سمتیں حاصل کریں',
            translate: 'الفاظ یا جملوں کا ترجمہ کریں',
            support: 'مدد اور معلومات کی سپورٹ حاصل کریں'
        },
        th: {
            weather: 'ตรวจสอบสภาพอากาศปัจจุบันและพยากรณ์อากาศ',
            map: 'ค้นหาสถานที่และขอเส้นทาง',
            translate: 'แปลคำศัพท์หรือวลี',
            support: 'รับความช่วยเหลือและข้อมูลสนับสนุน'
        }
    };
    const descSet = descriptions[base] || descriptions.en;
    return descSet[modal || 'support'] || descSet.support;
}
// Service cards data based on language
function getServices(langCode) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseLangCode"])(langCode);
    const en = [
        {
            icon: '🌤️',
            title: 'Weather',
            modal: 'weather'
        },
        {
            icon: '🗺️',
            title: 'Directions',
            modal: 'map'
        },
        {
            icon: '🌐',
            title: 'Translate',
            modal: 'translate'
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
                modal: 'weather'
            },
            {
                icon: '🗺️',
                title: 'Direksyon',
                modal: 'map'
            },
            {
                icon: '🌐',
                title: 'Isalin',
                modal: 'translate'
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
                modal: 'weather'
            },
            {
                icon: '🗺️',
                title: '方向',
                modal: 'map'
            },
            {
                icon: '🌐',
                title: '翻译',
                modal: 'translate'
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
                modal: 'weather'
            },
            {
                icon: '🗺️',
                title: '방향',
                modal: 'map'
            },
            {
                icon: '🌐',
                title: '번역',
                modal: 'translate'
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
                modal: 'weather'
            },
            {
                icon: '🗺️',
                title: '方向',
                modal: 'map'
            },
            {
                icon: '🌐',
                title: '翻訳',
                modal: 'translate'
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
                modal: 'weather'
            },
            {
                icon: '🗺️',
                title: 'Arah',
                modal: 'map'
            },
            {
                icon: '🌐',
                title: 'Terjemah',
                modal: 'translate'
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
                modal: 'weather'
            },
            {
                icon: '🗺️',
                title: 'سمت',
                modal: 'map'
            },
            {
                icon: '🌐',
                title: 'ترجمہ',
                modal: 'translate'
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
                modal: 'weather'
            },
            {
                icon: '🗺️',
                title: 'ทิศทาง',
                modal: 'map'
            },
            {
                icon: '🌐',
                title: 'แปล',
                modal: 'translate'
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
function ChatScreen({ active, langCode, chatMessages, onSend, onReset, analysisResult, onChangeLanguage, kioskStatus, showToast }) {
    _s();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [diagnosticsOpen, setDiagnosticsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openModal, setOpenModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTranscribing, setIsTranscribing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transcriptFilled, setTranscriptFilled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInterimTranscript, setIsInterimTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const speechRecognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lang = getLangDisplay(langCode);
    const services = getServices(langCode);
    // Cleanup: stop recording if component unmounts while listening
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatScreen.useEffect": ()=>{
            return ({
                "ChatScreen.useEffect": ()=>{
                    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                        try {
                            mediaRecorderRef.current.stop();
                        } catch  {}
                    }
                }
            })["ChatScreen.useEffect"];
        }
    }["ChatScreen.useEffect"], []);
    // ─── Deepgram Nova-2 mic capture ─────────────────────────────────
    const toggleSpeechCapture = async ()=>{
        // If currently recording → stop and transcribe
        if (isListening) {
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                mediaRecorderRef.current.stop();
            }
            return;
        }
        // Start recording
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            audioChunksRef.current = [];
            // ── Real-time interim transcription via Web Speech API ──
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.continuous = true;
                recognition.interimResults = true;
                recognition.lang = langCode || 'en-US';
                recognition.onresult = (event)=>{
                    let interim = '';
                    let final = '';
                    for(let i = event.resultIndex; i < event.results.length; i++){
                        const t = event.results[i][0].transcript;
                        if (event.results[i].isFinal) final += t;
                        else interim += t;
                    }
                    const liveText = final || interim;
                    if (liveText) {
                        setInput(liveText);
                        setIsInterimTranscript(true);
                    }
                };
                recognition.onerror = (e)=>{
                    console.warn('SpeechRecognition interim error:', e.error);
                };
                recognition.start();
                speechRecognitionRef.current = recognition;
            }
            // Prefer webm/opus; fall back to browser default
            const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus') ? 'audio/webm;codecs=opus' : '';
            const recorder = new MediaRecorder(stream, mimeType ? {
                mimeType
            } : {});
            recorder.ondataavailable = (e)=>{
                if (e.data.size > 0) audioChunksRef.current.push(e.data);
            };
            recorder.onstop = async ()=>{
                // Stop real-time recognition
                if (speechRecognitionRef.current) {
                    try {
                        speechRecognitionRef.current.stop();
                    } catch (_) {}
                    speechRecognitionRef.current = null;
                }
                // Stop all mic tracks immediately
                stream.getTracks().forEach((t)=>t.stop());
                setIsListening(false);
                setIsTranscribing(true);
                try {
                    const blob = new Blob(audioChunksRef.current, {
                        type: 'audio/webm'
                    });
                    const formData = new FormData();
                    formData.append('audio', blob, 'speech.webm');
                    formData.append('lang', langCode || 'en');
                    const res = await fetch('http://localhost:8000/api/transcribe', {
                        method: 'POST',
                        body: formData
                    });
                    if (!res.ok) {
                        const err = await res.json().catch(()=>({}));
                        throw new Error(err.detail || `Server error ${res.status}`);
                    }
                    const data = await res.json();
                    const transcript = data.transcript || '';
                    if (transcript) {
                        setInput(transcript);
                        setTimeout(()=>{
                            inputRef.current?.focus();
                            inputRef.current?.select();
                        }, 50);
                        setTranscriptFilled(true);
                        setTimeout(()=>setTranscriptFilled(false), 1800);
                        if (showToast) showToast('Speech captured! Review and press Send.', 'info');
                    } else {
                        if (showToast) showToast('No speech detected. Please try again.', 'warning');
                    }
                } catch (err) {
                    console.error('Deepgram transcription error:', err);
                    if (showToast) {
                        const msg = err.message.includes('fetch') || err.message.includes('Failed') ? 'Backend not running. Start main.py first!' : `Transcription failed: ${err.message}`;
                        showToast(msg, 'error');
                    }
                } finally{
                    setIsTranscribing(false);
                    setIsInterimTranscript(false);
                }
            };
            recorder.start();
            mediaRecorderRef.current = recorder;
            setIsListening(true);
            setInput('');
            setIsInterimTranscript(false);
        } catch (err) {
            console.error('Mic error:', err);
            if (showToast) {
                if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                    showToast('Microphone permission denied. Please allow mic access in your browser.', 'error');
                } else if (err.name === 'NotFoundError') {
                    showToast('No microphone found. Please plug in a microphone and try again.', 'error');
                } else {
                    showToast('Could not access microphone. Please try typing instead.', 'error');
                }
            }
        }
    };
    // Probability bars — use result or zeros
    const displayProbs = analysisResult?.probabilities?.length ? analysisResult.probabilities.slice(0, 5) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].slice(0, 5).map((l)=>({
            ...l,
            confidence: 0
        }));
    const rawMatches = analysisResult?.rawMatches || [];
    const highlightedHtml = analysisResult?.highlightedHtml || '';
    const detected = analysisResult?.detected;
    const isLanguageTraced = !!detected;
    // Show service cards only at the start of conversation
    const showServices = chatMessages.length <= 2;
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
            if (active && inputRef.current) inputRef.current.focus();
        }
    }["ChatScreen.useEffect"], [
        active
    ]);
    const handleSend = ()=>{
        if (!input.trim()) return;
        onSend(input.trim());
        setInput('');
    };
    const handleKey = (e)=>{
        if (e.key === 'Enter') handleSend();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `kiosk-screen screen-chat${active ? ' active' : ''}`,
        id: "screenChat",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-screen-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-header-left-spacer",
                        style: {
                            width: '120px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-lang-pill-floating",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chat-lang-pill-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chat-lang-code-badge",
                                        children: getCountryCode(langCode)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chat-lang-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chat-lang-name",
                                                children: lang.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 376,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chat-lang-sub",
                                                children: [
                                                    "LINGUA Assistant ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "chat-online-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 378,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 377,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            langCode === 'en' && detected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "chat-detected-badge-suggest",
                                onClick: ()=>onChangeLanguage && onChangeLanguage(detected.code),
                                title: `Switch kiosk language to ${detected.name}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chat-suggest-code-badge",
                                        children: getCountryCode(detected.code)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chat-suggest-label",
                                        children: [
                                            "Switch to ",
                                            detected.name,
                                            "? (",
                                            detected.confidence,
                                            "%)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, this),
                            langCode !== 'en' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "chat-detected-badge-suggest badge-english",
                                onClick: ()=>onChangeLanguage && onChangeLanguage('en'),
                                title: "Switch kiosk language back to English",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chat-suggest-code-badge",
                                        children: "GB"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chat-suggest-label",
                                        children: "Switch to English?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 401,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 395,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-new-session",
                        onClick: onReset,
                        title: "Start a new session",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "refresh-icon",
                                viewBox: "0 0 24 24",
                                width: "16",
                                height: "16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "currentColor",
                                    d: "M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatScreen.jsx",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this),
                            "New Session"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 406,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-messages-window",
                ref: messagesRef,
                children: [
                    showServices && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-greeting-area",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chat-greeting-robot",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/robot_icon.gif",
                                    alt: "Robot Avatar",
                                    className: "chat-greeting-robot-img"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatScreen.jsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chat-greeting-text",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "chat-greeting-title",
                                        children: "Hello! How can I help you today?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 426,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "chat-greeting-subtitle",
                                        children: "Choose an option below or ask your question."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 427,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 425,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 417,
                        columnNumber: 11
                    }, this),
                    chatMessages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `chat-bubble-wrap ${msg.sender}`,
                            children: [
                                msg.sender === 'bot' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "chat-bot-avatar",
                                    children: "🤖"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatScreen.jsx",
                                    lineNumber: 435,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `chat-bubble ${msg.sender}`,
                                    children: msg.text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChatScreen.jsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/ChatScreen.jsx",
                            lineNumber: 433,
                            columnNumber: 11
                        }, this)),
                    showServices && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-services-grid",
                        children: services.map((svc, i)=>{
                            const svcKey = svc.modal || 'support';
                            const svcDesc = getServiceDescription(langCode, svcKey);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "chat-service-card",
                                onClick: ()=>svc.modal ? setOpenModal(svc.modal) : onSend(svc.query),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chat-service-icon-wrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "chat-service-icon",
                                            children: svc.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChatScreen.jsx",
                                            lineNumber: 456,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 455,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chat-service-info",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "chat-service-title",
                                                children: svc.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 459,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "chat-service-desc",
                                                children: svcDesc
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 460,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 458,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chat-service-arrow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "16",
                                            height: "16",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "currentColor",
                                                d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 464,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChatScreen.jsx",
                                            lineNumber: 463,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 462,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 450,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-input-area",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `chat-mic-button${isListening ? ' listening' : ''}${isTranscribing ? ' transcribing' : ''}`,
                        onClick: toggleSpeechCapture,
                        title: isTranscribing ? 'Transcribing...' : isListening ? 'Stop — click to transcribe' : 'Click to speak (Deepgram Nova-2)',
                        disabled: isTranscribing,
                        children: isTranscribing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "mic-icon spin",
                            viewBox: "0 0 24 24",
                            width: "20",
                            height: "20",
                            fill: "currentColor",
                            style: {
                                display: 'block'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 486,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChatScreen.jsx",
                            lineNumber: 485,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "mic-icon",
                            viewBox: "0 0 24 24",
                            width: "20",
                            height: "20",
                            fill: "currentColor",
                            style: {
                                display: 'block'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 490,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChatScreen.jsx",
                            lineNumber: 489,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 478,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        className: `chat-input-field${transcriptFilled ? ' transcript-filled' : ''}${isInterimTranscript ? ' interim' : ''}`,
                        placeholder: isTranscribing ? 'Transcribing your speech...' : isListening ? 'Listening... Click mic again to stop.' : lang.placeholder,
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        onKeyDown: handleKey,
                        disabled: isTranscribing
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "chat-send-button",
                        onClick: handleSend,
                        disabled: isListening || isTranscribing,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            width: "18",
                            height: "18",
                            fill: "currentColor",
                            style: {
                                display: 'block'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 506,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChatScreen.jsx",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 504,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 477,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `nli-drawer${diagnosticsOpen ? ' nli-drawer-open' : ''}`,
                id: "nliDiagnosticsDrawer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nli-drawer-toggle",
                        onClick: ()=>setDiagnosticsOpen((o)=>!o),
                        id: "nliDrawerToggle",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nli-drawer-toggle-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "nli-drawer-toggle-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            width: "18",
                                            height: "18",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 523,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChatScreen.jsx",
                                            lineNumber: 522,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 521,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "nli-drawer-toggle-label",
                                        children: "LINGUA Diagnostics"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "nli-live-indicator",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `nli-live-dot${kioskStatus === 'thinking' ? ' thinking' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 530,
                                                columnNumber: 15
                                            }, this),
                                            kioskStatus === 'thinking' ? 'ANALYZING...' : 'LIVE TRACING'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 529,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nli-drawer-toggle-right",
                                children: [
                                    detected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "nli-drawer-detected-pill",
                                        children: [
                                            getCountryCode(detected.code),
                                            " ",
                                            detected.name,
                                            " ",
                                            detected.confidence,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 536,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "nli-drawer-chevron",
                                        children: diagnosticsOpen ? '▼' : '▲'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 540,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 534,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nli-drawer-body",
                        children: [
                            isLanguageTraced ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nli-drawer-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section-title",
                                        children: "Detected Mother-Tongue Influence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 550,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-detected-card",
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            gap: '16px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '14px',
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "nli-detected-flag",
                                                        children: detected.flag
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 553,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "nli-detected-name",
                                                                children: detected.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                                lineNumber: 555,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "nli-detected-sub",
                                                                children: [
                                                                    "Mother-Tongue (L1) · ",
                                                                    detected.confidence,
                                                                    "% confidence"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                                lineNumber: 556,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "nli-detected-bar-wrap",
                                                                style: {
                                                                    marginTop: '6px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "nli-detected-bar",
                                                                    style: {
                                                                        width: `${detected.confidence}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ChatScreen.jsx",
                                                                    lineNumber: 558,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                                lineNumber: 557,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 554,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 552,
                                                columnNumber: 17
                                            }, this),
                                            langCode !== detected.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "nli-drawer-switch-btn",
                                                onClick: ()=>onChangeLanguage && onChangeLanguage(detected.code),
                                                title: `Switch kiosk to ${detected.name}`,
                                                children: "Translate Kiosk"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 566,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 551,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 549,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nli-drawer-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section-title",
                                        children: "Detected Mother-Tongue Influence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 578,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-no-data",
                                        children: kioskStatus === 'thinking' ? 'Analyzing language patterns...' : "Can't trace your native language. Proceed to chat."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 579,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 577,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nli-drawer-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section-title",
                                        children: "Mother-Tongue Probability Mapping"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 587,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-prob-list",
                                        children: displayProbs.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-prob-row",
                                                style: {
                                                    gridTemplateColumns: isLanguageTraced ? '24px 100px 1fr 40px' : '24px 100px 1fr'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "nli-prob-flag",
                                                        children: lang.flag
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 591,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "nli-prob-name",
                                                        children: lang.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 592,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "nli-prob-track",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `nli-prob-bar${isLanguageTraced ? '' : ' loading'}`,
                                                            style: {
                                                                width: isLanguageTraced ? `${lang.confidence}%` : '100%',
                                                                transition: isLanguageTraced ? 'width 0.7s cubic-bezier(0.16,1,0.3,1)' : 'none'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ChatScreen.jsx",
                                                            lineNumber: 594,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 593,
                                                        columnNumber: 19
                                                    }, this),
                                                    isLanguageTraced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "nli-prob-val",
                                                        children: [
                                                            lang.confidence,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 603,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, lang.code, true, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 590,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 588,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 586,
                                columnNumber: 11
                            }, this),
                            highlightedHtml && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nli-drawer-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section-title",
                                        children: "Mother-Tongue Transfer Markers in Input"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 613,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-highlighted-text",
                                        dangerouslySetInnerHTML: {
                                            __html: highlightedHtml
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 614,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 612,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nli-drawer-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-drawer-section-title",
                                        children: "Linguistic Markers Triggered"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 623,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "nli-markers-log",
                                        children: rawMatches.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "nli-no-data",
                                            children: "No mother-tongue transfer markers triggered yet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChatScreen.jsx",
                                            lineNumber: 626,
                                            columnNumber: 17
                                        }, this) : rawMatches.map((match, i)=>{
                                            const langObj = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].find((l)=>l.code === match.langCode);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "nli-marker-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "nli-marker-rule",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: match.reason
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                                lineNumber: 633,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "nli-marker-origin",
                                                                children: [
                                                                    langObj?.name || 'Unknown',
                                                                    " Origin"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                                lineNumber: 634,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 632,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "nli-marker-desc",
                                                        children: match.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 636,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "nli-marker-match",
                                                        children: [
                                                            '"',
                                                            match.matchedText,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                                        lineNumber: 637,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/ChatScreen.jsx",
                                                lineNumber: 631,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChatScreen.jsx",
                                        lineNumber: 624,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChatScreen.jsx",
                                lineNumber: 622,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChatScreen.jsx",
                        lineNumber: 545,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 512,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-screen-footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "chat-footer-hint",
                    children: "Live support staff are available if you need further assistance"
                }, void 0, false, {
                    fileName: "[project]/src/components/ChatScreen.jsx",
                    lineNumber: 650,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 649,
                columnNumber: 7
            }, this),
            openModal === 'weather' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceModals$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeatherModal"], {
                onClose: ()=>setOpenModal(null)
            }, void 0, false, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 654,
                columnNumber: 35
            }, this),
            openModal === 'map' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceModals$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapModal"], {
                onClose: ()=>setOpenModal(null)
            }, void 0, false, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 655,
                columnNumber: 31
            }, this),
            openModal === 'translate' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceModals$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TranslateModal"], {
                onClose: ()=>setOpenModal(null)
            }, void 0, false, {
                fileName: "[project]/src/components/ChatScreen.jsx",
                lineNumber: 656,
                columnNumber: 37
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChatScreen.jsx",
        lineNumber: 366,
        columnNumber: 5
    }, this);
}
_s(ChatScreen, "MzHRAhUlnzhBlY4Xq/Bl33H+kEA=");
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
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function LanguageSuggestionOverlay({ visible, suggestionData, onSelectLanguage, onDecline }) {
    _s();
    const [showOthers, setShowOthers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!suggestionData) return null;
    const { detected, probabilities } = suggestionData;
    const isLanguageTraced = !!detected;
    const otherLangs = (probabilities || []).filter((p)=>{
        if (p.confidence <= 0) return false;
        if (detected) {
            if (p.code === detected.code || p.label === detected.label) return false;
            if (detected.choices && detected.choices.some((choice)=>choice.code === p.code)) return false;
        }
        return true;
    }).slice(0, 3); // Limit to top 3 other languages to avoid cluttering the UI
    const topTraced = probabilities && probabilities.length > 0 ? probabilities[0] : null;
    const flag = detected ? detected.flag : topTraced ? topTraced.flag : '🌐';
    const title = detected ? `Native Language Detected: ${detected.name}` : `Language Patterns Detected`;
    const description = detected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            "Our NLI engine analyzed your input and identified",
            ' ',
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: [
                    detected.name,
                    " (",
                    detected.nativeName,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            " language transfer patterns. Would you like to continue in your native language?"
        ]
    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: "Our NLI engine noticed possible mother-tongue influence. Would you like to proceed in one of these languages?"
    }, void 0, false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `suggestion-overlay${visible ? ' active' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "suggestion-card",
            style: {
                maxWidth: '520px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-orb-holder",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "suggestion-flag-icon",
                        children: flag
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                detected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-confidence-tag",
                    children: [
                        detected.confidence,
                        "% Confidence"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "suggestion-title",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "suggestion-desc",
                    style: {
                        marginBottom: '16px'
                    },
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '100%',
                        margin: '8px 0 16px',
                        textAlign: 'left',
                        background: 'rgba(255,255,255,0.02)',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid hsla(var(--border-glass))'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '0.75rem',
                                color: 'hsl(var(--text-muted))',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                marginBottom: '8px'
                            },
                            children: "Mother-Tongue Probability Trace:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "analysis-prob-list",
                            style: {
                                gap: '6px'
                            },
                            children: (probabilities || []).slice(0, 5).map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "analysis-prob-row",
                                    style: {
                                        gridTemplateColumns: isLanguageTraced ? '20px 70px 1fr 35px' : '20px 70px 1fr',
                                        gap: '8px',
                                        fontSize: '0.72rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "analysis-prob-flag",
                                            children: lang.flag
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "analysis-prob-name",
                                            style: {
                                                color: 'hsl(var(--text-secondary))'
                                            },
                                            children: lang.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "analysis-prob-track",
                                            style: {
                                                height: '5px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `analysis-prob-bar${isLanguageTraced ? '' : ' loading'}`,
                                                style: {
                                                    width: isLanguageTraced ? `${lang.confidence}%` : '100%',
                                                    height: '100%',
                                                    background: isLanguageTraced && lang.confidence > 0 ? 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))' : 'rgba(255,255,255,0.05)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        isLanguageTraced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "analysis-prob-val",
                                            style: {
                                                fontSize: '0.7rem'
                                            },
                                            children: [
                                                lang.confidence,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, lang.code, true, {
                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                detected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-options-grid",
                    children: (detected.choices || []).map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "suggest-lang-names",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "suggest-lang-native",
                                                    children: choice.nativeName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "suggest-lang-standard",
                                                    children: [
                                                        "Proceed in ",
                                                        choice.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                            lineNumber: 104,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "suggest-lang-match",
                                    children: choice.desc || `${detected.confidence}% Match`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, choice.code, true, {
                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                            lineNumber: 97,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this),
                otherLangs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn-secondary",
                    style: {
                        width: '100%',
                        marginTop: '12px',
                        padding: '10px 14px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid hsla(var(--border-glass))',
                        borderRadius: 'var(--radius-md)',
                        color: 'hsl(var(--text-secondary))',
                        cursor: 'pointer',
                        transition: 'var(--transition-fast)'
                    },
                    onClick: ()=>setShowOthers(!showOthers),
                    children: showOthers ? 'Hide Alternative Suggestions ▲' : 'Show Alternative Suggestions ▼'
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this),
                otherLangs.length > 0 && showOthers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-options-grid",
                    style: {
                        width: '100%',
                        marginTop: '10px'
                    },
                    children: otherLangs.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "suggest-lang-option-btn",
                            onClick: ()=>onSelectLanguage(lang.code),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "suggest-lang-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "suggest-lang-flag",
                                            children: lang.flag
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "suggest-lang-names",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "suggest-lang-native",
                                                    children: lang.nativeName || lang.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "suggest-lang-standard",
                                                    children: [
                                                        "Proceed in ",
                                                        lang.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                                    lineNumber: 155,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                            lineNumber: 153,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "suggest-lang-match",
                                    children: [
                                        lang.confidence,
                                        "% Confidence"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                                    lineNumber: 158,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, lang.code, true, {
                            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                            lineNumber: 146,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 144,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "suggestion-actions",
                    style: {
                        marginTop: '16px',
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
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LanguageSuggestionOverlay.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(LanguageSuggestionOverlay, "Jc7sZjp2Q9g1v6EhT3N2uhwTLLg=");
_c = LanguageSuggestionOverlay;
var _c;
__turbopack_context__.k.register(_c, "LanguageSuggestionOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AnalyticsSidebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyticsSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// src/components/AnalyticsSidebar.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/nliRules.js [app-client] (ecmascript)");
'use client';
;
;
;
function AnalyticsSidebar({ visible, highlightedHtml, probabilities, rawMatches, detected }) {
    const displayProbs = probabilities.length > 0 ? probabilities.slice(0, 5) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].slice(0, 5).map((l)=>({
            ...l,
            confidence: 0
        }));
    const isLanguageTraced = !!detected;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `kiosk-sidebar-analytics ${visible ? 'active' : ''}`,
        id: "analytics-sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "sidebar-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "📊"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    " LINGUA Diagnostics Dashboard"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "sidebar-section-title",
                        children: "Parsed Input (Mother-Tongue Markers Highlighted)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "transcription-panel",
                        children: highlightedHtml ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            dangerouslySetInnerHTML: {
                                __html: highlightedHtml
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "no-input",
                            children: "Awaiting voice or typing input..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "sidebar-section-title",
                        children: "Mother-Tongue Probability Mapping"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "probability-list",
                        children: displayProbs.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "prob-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "prob-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, this),
                                            isLanguageTraced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "prob-value",
                                                children: [
                                                    lang.confidence,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                                lineNumber: 45,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "prob-track",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `prob-bar${isLanguageTraced ? '' : ' loading'}`,
                                            style: {
                                                width: isLanguageTraced ? `${lang.confidence}%` : '100%',
                                                background: isLanguageTraced ? 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))' : 'none'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, lang.code, true, {
                                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "sidebar-section-title",
                        children: "Linguistic Markers Triggered"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "markers-log",
                        children: rawMatches.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "no-markers-detected",
                            children: "No mother-tongue transfer markers triggered yet."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this) : rawMatches.map((match, i)=>{
                            const langObj = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$nliRules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLI_LANGUAGES"].find((l)=>l.code === match.langCode);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "marker-log-card detected",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "marker-log-rule",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: match.reason
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                                lineNumber: 74,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'hsl(var(--primary))'
                                                },
                                                children: [
                                                    langObj?.name || 'Unknown',
                                                    " Origin"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                                lineNumber: 75,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 73,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "marker-log-desc",
                                        children: match.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 77,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "marker-log-match",
                                        children: [
                                            'Match: "',
                                            match.matchedText,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                                lineNumber: 72,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnalyticsSidebar.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnalyticsSidebar.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = AnalyticsSidebar;
var _c;
__turbopack_context__.k.register(_c, "AnalyticsSidebar");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnalyticsSidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnalyticsSidebar.jsx [app-client] (ecmascript)");
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
;
;
function KioskWrapper() {
    _s();
    const kiosk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKiosk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [analyticsVisible, setAnalyticsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [analyticsManualOpen, setAnalyticsManualOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KioskWrapper.useEffect": ()=>{
            if (kiosk.analysisComplete && kiosk.currentScreen === 'REQUEST') {
                setAnalyticsVisible(false); // Disabled duplicate sidebar to prevent overlap with RequestScreen's inline analysis-panel
            }
        }
    }["KioskWrapper.useEffect"], [
        kiosk.analysisComplete,
        kiosk.currentScreen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KioskWrapper.useEffect": ()=>{
            if (kiosk.currentScreen === 'CHAT') {
                setAnalyticsVisible(false);
            }
        }
    }["KioskWrapper.useEffect"], [
        kiosk.currentScreen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "kiosk-wrapper",
        id: "kioskWrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BezelTop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                status: kiosk.kioskStatus
            }, void 0, false, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                kioskStatus: kiosk.kioskStatus,
                currentScreen: kiosk.currentScreen,
                selectedLanguage: kiosk.selectedLanguage
            }, void 0, false, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "kiosk-body kiosk-body-single",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WelcomeScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        active: kiosk.currentScreen === 'WELCOME',
                        onProceed: kiosk.goToRequest
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RequestScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        active: kiosk.currentScreen === 'REQUEST',
                        inputText: kiosk.inputText,
                        setInputText: kiosk.setInputText,
                        isListening: kiosk.isListening,
                        isInterimTranscript: kiosk.isInterimTranscript,
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
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatScreen$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        active: kiosk.currentScreen === 'CHAT',
                        langCode: kiosk.selectedLanguage,
                        chatMessages: kiosk.chatMessages,
                        onSend: kiosk.sendChatMessage,
                        onReset: kiosk.resetSession,
                        analysisResult: kiosk.analysisResult,
                        onChangeLanguage: kiosk.changeLanguage,
                        kioskStatus: kiosk.kioskStatus,
                        showToast: kiosk.showToast
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageSuggestionOverlay$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        visible: kiosk.showSuggestion,
                        suggestionData: kiosk.suggestionData,
                        onSelectLanguage: (code)=>kiosk.proceedToChat(code),
                        onDecline: ()=>kiosk.proceedToChat('en')
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnalyticsSidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        visible: analyticsVisible,
                        highlightedHtml: kiosk.analysisResult?.highlightedHtml || '',
                        probabilities: kiosk.analysisResult?.probabilities || [],
                        rawMatches: kiosk.analysisResult?.rawMatches || [],
                        detected: kiosk.analysisResult?.detected
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KioskWrapper.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            kiosk.toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `kiosk-toast${kiosk.toast.type === 'error' ? ' toast-error' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: kiosk.toast.type === 'error' ? '⚠️' : 'ℹ️'
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: kiosk.toast.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/KioskWrapper.jsx",
                        lineNumber: 108,
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
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(KioskWrapper, "GYr5RiYmVXeOiBgn8WGvcvbaWew=", false, function() {
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

//# sourceMappingURL=_0kv5alr._.js.map
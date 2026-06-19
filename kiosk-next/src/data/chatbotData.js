// src/data/chatbotData.js
// Multilingual chatbot Q&A database

export const CHATBOT_DATABASE = {
  en: {
    welcome: 'Hello! How can I help you today?',
    answers: [
      { keys: ['directions', 'navigate', 'find', 'where', 'location'], ans: 'I can help you find your way! Please tell me what you\'re looking for and I\'ll guide you there.' },
      { keys: ['toilet', 'restroom', 'bathroom'], ans: 'Restrooms are typically located near the main entrance or on each floor of the building.' },
      { keys: ['weather', 'rain', 'temperature', 'forecast'], ans: 'I can check the weather for you! Currently the forecast shows mild conditions. Would you like more details?' },
      { keys: ['food', 'coffee', 'cafe', 'eat', 'hungry', 'restaurant'], ans: 'There are several dining options nearby. Would you like me to recommend a restaurant or café?' },
      { keys: ['time', 'clock', 'schedule', 'hours', 'open'], ans: 'The current local time is displayed on the screen. Most services operate from 8 AM to 8 PM.' },
      { keys: ['help', 'assist', 'support', 'information'], ans: 'I\'m here to help! You can ask me about directions, services, schedules, or any general questions you may have.' },
      { keys: ['emergency', 'police', 'ambulance', 'fire'], ans: 'For emergencies, please call the local emergency number immediately. I can also notify nearby staff for assistance.' }
    ],
    fallback: 'Hello! How may I assist you today? I can help you with directions, schedules, services, and more.'
  },
  tl: {
    welcome: 'Kamusta! Paano kita matutulungan ngayon? (Hello! How can I help you today?)',
    answers: [
      { keys: ['directions', 'navigate', 'find', 'where', 'saan', 'direksyon'], ans: 'Maaari kitang tulungan sa direksyon! Sabihin mo lang kung ano ang hinahanap mo. (I can help you with directions!)' },
      { keys: ['toilet', 'restroom', 'bathroom', 'banyo'], ans: 'Ang mga banyo ay kadalasang matatagpuan malapit sa pangunahing pasukan. (Restrooms are near the main entrance.)' },
      { keys: ['weather', 'rain', 'panahon', 'ulan'], ans: 'Maaari kong suriin ang lagay ng panahon para sa iyo! (I can check the weather for you!)' },
      { keys: ['food', 'coffee', 'pagkain', 'gutom', 'kainan'], ans: 'May mga kainan na malapit dito. Gusto mo bang mag-recommend ako? (There are dining options nearby.)' },
      { keys: ['time', 'oras', 'schedule', 'bukas'], ans: 'Ang kasalukuyang oras ay nakalagay sa screen. Karamihan ng serbisyo ay bukas mula 8 AM hanggang 8 PM. (The current time is displayed on the screen. Most services are open from 8:00 AM to 8:00 PM.)' },
      { keys: ['help', 'tulong', 'assist', 'impormasyon'], ans: 'Nandito ako para tumulong! Magtanong ka tungkol sa direksyon, serbisyo, o kahit anong katanungan. (I am here to help! Feel free to ask about directions, services, or any other inquiries.)' },
      { keys: ['emergency', 'pulis', 'ambulansya', 'sunog'], ans: 'Para sa mga emerhensiya, tumawag agad sa emergency number. Maaari rin akong tumawag ng staff. (For emergencies, please call the emergency number immediately. I can also contact a staff member if needed.)' }
    ],
    fallback: 'Mabuhay! Paano kita matutulungan ngayon? Maaari kitang tulungan sa direksyon, iskedyul, serbisyo, at iba pa. (Hello! How may I assist you today? I can help you with directions, schedules, services, and more.)'
  },
  zh: {
    welcome: '您好！今天有什么我可以帮您的？ (Hello! How can I help you today?)',
    answers: [
      { keys: ['directions', 'navigate', 'find', 'where', '方向', '在哪里', '找'], ans: '我可以帮您找路！请告诉我您要去哪里。(I can help you find your way!)' },
      { keys: ['toilet', 'restroom', 'bathroom', '洗手间', '厕所'], ans: '洗手间通常位于主入口附近或每层楼。(Restrooms are near the main entrance or on each floor.)' },
      { keys: ['weather', 'rain', '天气', '下雨', '温度'], ans: '我可以为您查看天气预报！(I can check the weather for you!)' },
      { keys: ['food', 'coffee', '吃', '咖啡', '饿', '餐厅'], ans: '附近有多家餐饮选择。需要我为您推荐吗？(There are dining options nearby.)' },
      { keys: ['time', '时间', 'schedule', '营业'], ans: '当前时间显示在屏幕上。大多数服务从早8点到晚8点开放。(The current time is displayed on the screen. Most services are open from 8:00 AM to 8:00 PM.)' },
      { keys: ['help', '帮助', 'assist', '信息'], ans: '我在这里帮助您！您可以问我关于方向、服务、日程或任何一般问题。(I am here to help you! You can ask me about directions, services, schedules, or any general questions.)' },
      { keys: ['emergency', '紧急', '警察', '救护车'], ans: '如有紧急情况，请立即拨打当地紧急电话。我也可以通知附近的工作人员。(In case of an emergency, please call the local emergency number immediately. I can also notify nearby staff members.)' }
    ],
    fallback: '您好！今天我可以如何帮助您？我可以帮助您查找方向、服务、日程等。(Hello! How can I help you today? I can assist you with finding directions, services, schedules, and more.)'
  },
  ko: {
    welcome: '안녕하세요! 오늘 어떤 도움이 필요하십니까? (Hello! How can I help you today?)',
    answers: [
      { keys: ['directions', 'navigate', 'find', 'where', '방향', '어디', '찾기'], ans: '길 안내를 도와드리겠습니다! 어디를 찾으시는지 알려주세요. (I can help you find your way!)' },
      { keys: ['toilet', 'restroom', 'bathroom', '화장실'], ans: '화장실은 보통 정문 근처나 각 층에 있습니다. (Restrooms are near the main entrance or on each floor.)' },
      { keys: ['weather', 'rain', '날씨', '비', '온도'], ans: '날씨를 확인해 드리겠습니다! (I can check the weather for you!)' },
      { keys: ['food', 'coffee', '식사', '배고픈', '커피', '식당'], ans: '근처에 여러 식당이 있습니다. 추천해 드릴까요? (There are dining options nearby.)' },
      { keys: ['time', '시간', 'schedule', '영업'], ans: '현재 시간이 화면에 표시됩니다. 대부분의 서비스는 오전 8시~오후 8시에 운영됩니다. (The current time is displayed on the screen. Most services operate from 8:00 AM to 8:00 PM.)' },
      { keys: ['help', '도움', 'assist', '정보'], ans: '도움이 필요하시면 말씀해 주세요! 방향, 서비스, 일정 등에 대해 질문하실 수 있습니다. (Let me know if you need help! You can ask about directions, services, schedules, and more.)' },
      { keys: ['emergency', '긴급', '경찰', '구급차'], ans: '긴급 상황 시 즉시 긴급 전화번호로 연락하세요. 근처 직원에게도 알릴 수 있습니다. (In case of an emergency, please contact the emergency number immediately. I can also notify nearby staff.)' }
    ],
    fallback: '안녕하세요! 오늘 무엇을 도와드릴까요? 방향, 일정, 서비스 등에 대해 도와드릴 수 있습니다. (Hello! How can I help you today? I can assist you with directions, schedules, services, and more.)'
  },
  ja: {
    welcome: 'こんにちは！今日は何かお手伝いできることはありますか？ (Hello! How can I help you today?)',
    answers: [
      { keys: ['directions', 'navigate', 'find', 'where', '方向', 'どこ', '探す'], ans: '道案内をいたします！何をお探しかお教えください。(I can help you find your way!)' },
      { keys: ['toilet', 'restroom', 'bathroom', 'トイレ'], ans: 'お手洗いは通常、メインエントランス付近や各階にあります。(Restrooms are near the main entrance or on each floor.)' },
      { keys: ['weather', 'rain', '天気', '雨', '気温'], ans: '天気予報を確認いたします！(I can check the weather for you!)' },
      { keys: ['food', 'coffee', '食事', 'カフェ', 'レストラン'], ans: '近くにいくつかの飲食店があります。おすすめしましょうか？(There are dining options nearby.)' },
      { keys: ['time', '時間', 'schedule', '営業'], ans: '現在の時刻は画面に表示されています。ほとんどのサービスは午前8時から午後8時まで営業しています。(The current time is displayed on the screen. Most services are open from 8:00 AM to 8:00 PM.)' },
      { keys: ['help', '助け', 'assist', '情報'], ans: 'お手伝いいたします！方向、サービス、スケジュール、その他のご質問にお答えできます。(I’m here to help! I can answer questions about directions, services, schedules, and more.)' },
      { keys: ['emergency', '緊急', '警察', '救急車'], ans: '緊急の場合は、すぐに緊急通報番号に電話してください。近くのスタッフにも知らせることができます。(In case of an emergency, please call the emergency number immediately. I can also notify nearby staff.)' }
    ],
    fallback: 'こんにちは！本日はどのようなご用件でしょうか？方向、スケジュール、サービスなどについてお手伝いできます。(Hello! How may I help you today? I can assist you with directions, schedules, services, and more.)'
  },
  id: {
    welcome: 'Halo! Ada yang bisa saya bantu hari ini? (Hello! How can I help you today?)',
    answers: [
      { keys: ['directions', 'navigate', 'find', 'where', 'arah', 'cari', 'di mana'], ans: 'Saya dapat membantu Anda menemukan jalan! Beri tahu saya apa yang Anda cari. (I can help you find your way!)' },
      { keys: ['toilet', 'restroom', 'bathroom', 'kamar mandi', 'wc'], ans: 'Toilet biasanya terletak di dekat pintu masuk utama atau di setiap lantai. (Toilets are usually located near the main entrance or on each floor.)' },
      { keys: ['weather', 'rain', 'cuaca', 'hujan', 'suhu'], ans: 'Saya dapat memeriksa prakiraan cuaca untuk Anda! (I can check the weather for you!)' },
      { keys: ['food', 'coffee', 'makan', 'lapar', 'kopi', 'restoran'], ans: 'Ada beberapa pilihan tempat makan di dekat sini. Mau saya rekomendasikan? (There are several dining options nearby. Would you like me to recommend some?)' },
      { keys: ['time', 'waktu', 'schedule', 'buka'], ans: 'Waktu saat ini ditampilkan di layar. Sebagian besar layanan beroperasi dari jam 8 pagi hingga 8 malam. (The current time is displayed on the screen. Most services operate from 8:00 AM to 8:00 PM.)' },
      { keys: ['help', 'bantuan', 'assist', 'informasi'], ans: 'Saya di sini untuk membantu! Anda bisa bertanya tentang arah, layanan, jadwal, atau pertanyaan umum lainnya. (I am here to help! You can ask about directions, services, schedules, or any general questions.)' },
      { keys: ['emergency', 'darurat', 'polisi', 'ambulans'], ans: 'Untuk keadaan darurat, segera hubungi nomor darurat setempat. Saya juga dapat memberi tahu staf terdekat. (For emergencies, please immediately contact the local emergency number. I can also notify nearby staff.)' }
    ],
    fallback: 'Halo! Bagaimana saya dapat membantu Anda hari ini? Saya dapat membantu dengan arah, jadwal, layanan, dan lainnya. (Hello! How can I help you today? I can assist you with directions, schedules, services, and more.)'
  },
  ur: {
    welcome: 'ہیلو! میں آج آپ کی کیا مدد کر سکتا ہوں؟ (Hello! How can I help you today?)',
    answers: [
      { keys: ['directions', 'navigate', 'find', 'where', 'سمت', 'کہاں', 'تلاش'], ans: 'میں آپ کو راستہ تلاش کرنے میں مدد کر سکتا ہوں! مجھے بتائیں کہ آپ کیا ڈھونڈ رہے ہیں۔ (I can help you find your way! Tell me what you are looking for.)' },
      { keys: ['toilet', 'restroom', 'bathroom', 'حمام'], ans: 'واش رومز عام طور پر مرکزی دروازے کے قریب یا ہر منزل پر واقع ہوتے ہیں۔ (Restrooms are usually located near the main entrance or on each floor.)' },
      { keys: ['weather', 'rain', 'موسم', 'بارش'], ans: 'میں آپ کے لیے موسم کی پیشن گوئی دیکھ سکتا ہوں! (I can check the weather for you!)' },
      { keys: ['food', 'coffee', 'کھانا', 'بھوک', 'ریستوران'], ans: 'قریب میں کھانے کے کئی اختیارات موجود ہیں۔ کیا آپ سفارش چاہتے ہیں؟ (There are several dining options nearby. Would you like a recommendation?)' },
      { keys: ['time', 'وقت', 'schedule', 'کھلا'], ans: 'موجودہ وقت اسکرین پر دکھایا گیا ہے۔ زیادہ تر خدمات صبح 8 بجے سے رات 8 بجے تک دستیاب ہیں۔ (The current time is displayed on the screen. Most services are available from 8:00 AM to 8:00 PM.)' },
      { keys: ['help', 'مدد', 'assist', 'معلومات'], ans: 'میں یہاں مدد کے لیے ہوں! آپ سمت، خدمات، شیڈول، یا کسی بھی عمومی سوال کے بارے میں پوچھ سکتے ہیں۔ (I am here to help! You can ask about directions, services, schedules, or any general questions.)' },
      { keys: ['emergency', 'ایمرجنسی', 'پولیس', 'ایمبولینس'], ans: 'ہنگامی صورتحال کے لیے، فوری طور پر مقامی ایمرجنسی نمبر پر کال کریں۔ (For emergencies, please immediately call the local emergency number.)' }
    ],
    fallback: 'السلام علیکم! آج میں آپ کی کس طرح مدد کر سکتا ہوں؟ میں سمت، شیڈول، خدمات اور مزید میں مدد کر سکتا ہوں۔ (Peace be upon you! How can I help you today? I can assist you with directions, schedules, services, and more.)'
  },
  th: {
    welcome: 'สวัสดีค่ะ! วันนี้มีอะไรให้ฉันช่วยเหลือไหมคะ? (Hello! How can I help you today?)',
    answers: [
      { keys: ['directions', 'navigate', 'find', 'where', 'ทาง', 'ที่ไหน', 'หา'], ans: 'ฉันสามารถช่วยคุณหาทางได้! บอกฉันว่าคุณกำลังมองหาอะไร (I can help you find your way!)' },
      { keys: ['toilet', 'restroom', 'bathroom', 'ห้องน้ำ'], ans: 'ห้องน้ำมักจะอยู่ใกล้ทางเข้าหลักหรือในแต่ละชั้นของอาคาร (Restrooms are usually located near the main entrance or on each floor of a building.)' },
      { keys: ['weather', 'rain', 'อากาศ', 'ฝน', 'อุณหภูมิ'], ans: 'ฉันสามารถตรวจสอบพยากรณ์อากาศให้คุณได้! (I can check the weather for you!)' },
      { keys: ['food', 'coffee', 'อาหาร', 'หิว', 'กาแฟ', 'ร้านอาหาร'], ans: 'มีตัวเลือกร้านอาหารหลายแห่งใกล้เคียง ต้องการให้แนะนำไหม? (There are several restaurant options nearby. Would you like any recommendations?)' },
      { keys: ['time', 'เวลา', 'schedule', 'เปิด'], ans: 'เวลาปัจจุบันแสดงอยู่บนหน้าจอ บริการส่วนใหญ่เปิดให้บริการตั้งแต่ 8.00 น. ถึง 20.00 น. (The current time is displayed on the screen. Most services are available from 8:00 AM to 8:00 PM.)' },
      { keys: ['help', 'ช่วย', 'assist', 'ข้อมูล'], ans: 'ฉันอยู่ที่นี่เพื่อช่วยเหลือ! คุณสามารถถามเกี่ยวกับทิศทาง บริการ ตารางเวลา หรือคำถามทั่วไปอื่นๆ (Im here to help you! You can ask about directions, services, schedules, or other general questions.)' },
      { keys: ['emergency', 'ฉุกเฉิน', 'ตำรวจ', 'รถพยาบาล'], ans: 'สำหรับกรณีฉุกเฉิน กรุณาโทรหมายเลขฉุกเฉินท้องถิ่นทันที (In case of an emergency, please call the emergency number immediately. I can also notify nearby staff.)' }
    ],
    fallback: 'สวัสดีครับ/ค่ะ! วันนี้ฉันสามารถช่วยคุณได้อย่างไร? ฉันสามารถช่วยเรื่องทิศทาง ตารางเวลา บริการ และอื่นๆ (Hello! How can I help you today? I can assist you with directions, schedules, services, and more.)'
  }
};

export function getChatbotDbKey(langCode) {
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

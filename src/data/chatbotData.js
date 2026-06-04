// src/data/chatbotData.js
// Multilingual chatbot Q&A database

export const CHATBOT_DATABASE = {
  en: {
    welcome: 'Hello! How can I help you today at the terminal?',
    answers: [
      { keys: ['baggage', 'luggage', 'bag'], ans: 'Baggage claim is located on Level 1, near Carousel 4.' },
      { keys: ['toilet', 'restroom', 'bathroom'], ans: 'Restrooms are located just behind the Duty Free shop to your left.' },
      { keys: ['ticket', 'buy', 'train', 'bus'], ans: 'You can purchase local train and shuttle bus tickets in our Ticketing service on this kiosk!' },
      { keys: ['food', 'coffee', 'cafe', 'eat', 'hungry'], ans: 'The Food Court is upstairs on Level 2, offering coffee shops and restaurants.' },
      { keys: ['gate', 'flight', 'boarding'], ans: 'Flight departures are listed under the "Flight Status" card. Gate A-12 is at the end of Concourse A.' }
    ],
    fallback: 'I can help you find flights, gates, baggage claim, restrooms, or purchase transit tickets. Please try asking about those.'
  },
  tl: {
    welcome: 'Kamusta! Paano kita matutulungan ngayon sa terminal? (Hello! How can I help you today?)',
    answers: [
      { keys: ['baggage', 'luggage', 'bag', 'bagahe', 'gamit'], ans: 'Ang claim ng bagahe ay nasa Level 1, malapit sa Carousel 4. (Baggage claim is on Level 1, near Carousel 4.)' },
      { keys: ['toilet', 'restroom', 'bathroom', 'banyo'], ans: 'Ang mga banyo ay nasa likod lang ng Duty Free shop sa kaliwa mo. (Restrooms are behind Duty Free on your left.)' },
      { keys: ['ticket', 'buy', 'tren', 'bus', 'tiket'], ans: 'Maaari kang bumili ng tiket sa tren o bus sa aming Ticketing card dito! (Train/bus tickets are in the Ticketing service!)' },
      { keys: ['food', 'coffee', 'pagkain', 'gutom'], ans: 'Ang Food Court ay nasa itaas sa Level 2. (Food Court is upstairs on Level 2.)' },
      { keys: ['gate', 'flight', 'boarding', 'lipad'], ans: 'Ang mga flight ay nasa card na "Katayuan ng Flight". Ang Gate A-12 ay nasa dulo ng Concourse A.' }
    ],
    fallback: 'Maaari kitang tulungan sa paghahanap ng flights, gate, bagahe, banyo o tiket. (I can help with flights, gates, baggage, restrooms, or tickets.)'
  },
  zh: {
    welcome: '您好！今天在航站楼有什么我可以帮您的？ (Hello! How can I help you today at the terminal?)',
    answers: [
      { keys: ['baggage', 'luggage', 'bag', '行李'], ans: '行李提取处位于 1 楼 4 号行李转盘旁。(Baggage claim is on Level 1, near Carousel 4.)' },
      { keys: ['toilet', 'restroom', 'bathroom', '洗手间', '厕所'], ans: '洗手间位于您左侧的免税店后方。(Restrooms are behind Duty Free on your left.)' },
      { keys: ['ticket', 'buy', '车票', '买票'], ans: '您可以在此自助机的购票页面直接购买轻轨和巴士票！(You can buy train/bus tickets here!)' },
      { keys: ['food', 'coffee', '吃', '咖啡', '饿'], ans: '餐饮区位于 2 楼。(The Food Court is upstairs on Level 2.)' },
      { keys: ['gate', 'flight', 'boarding', '登机口', '航班'], ans: '起降航班信息列在"航班状态"卡中。A-12 登机口位于 A 厅尽头。' }
    ],
    fallback: '我可以协助您查询航班、登机口、行李提取、洗手间位置或购买交通票。(I can help with flights, gates, baggage, restrooms, or tickets.)'
  },
  ko: {
    welcome: '안녕하세요! 오늘 공항 터미널에서 어떤 도움이 필요하십니까? (Hello! How can I help you today?)',
    answers: [
      { keys: ['baggage', 'luggage', 'bag', '가방', '수하물'], ans: '수하물 수취소는 1층 4번 회전식 수취대 옆에 있습니다. (Baggage claim is on Level 1, near Carousel 4.)' },
      { keys: ['toilet', 'restroom', 'bathroom', '화장실'], ans: '화장실은 왼쪽 면세점 바로 뒤에 있습니다. (Restrooms are behind Duty Free on your left.)' },
      { keys: ['ticket', 'buy', '기차', '버스', '표', '티켓'], ans: '기차 및 셔틀 버스 티켓은 본 키오스크의 티켓 구매 메뉴에서 구매하실 수 있습니다! (You can buy train and bus tickets on this kiosk!)' },
      { keys: ['food', 'coffee', '식사', '배고픈', '커피'], ans: '식당가는 2층에 있으며, 카페와 식당이 있습니다. (Food Court is upstairs on Level 2.)' },
      { keys: ['gate', 'flight', 'boarding', '탑승구', '비행기'], ans: '운항 상황은 "항공편 상태" 카드에 나와 있습니다. A-12 탑승구는 콘코스 A 끝에 있습니다.' }
    ],
    fallback: '항공편, 탑승구, 수하물, 화장실 또는 티켓 구매에 대해 도와드릴 수 있습니다. (I can help with flights, gates, baggage, restrooms, or tickets.)'
  },
  ja: {
    welcome: 'こんにちは！ターミナルで何かお手伝いできることはありますか？ (Hello! How can I help you today?)',
    answers: [
      { keys: ['baggage', 'luggage', 'bag', '手荷物', '荷物'], ans: '手荷物受取所は1階のターンテーブル4の近くにあります。(Baggage claim is on Level 1, near Carousel 4.)' },
      { keys: ['toilet', 'restroom', 'bathroom', 'トイレ'], ans: 'お手洗いは左側の免税店のすぐ裏手にあります。(Restrooms are behind Duty Free on your left.)' },
      { keys: ['ticket', 'buy', '電車', 'バス', '切符'], ans: 'この端末の「チケット購入」サービスで電車やバスの切符が購入できます！' },
      { keys: ['food', 'coffee', '食事', 'カフェ'], ans: 'フードコートは2階にあります。(The Food Court is upstairs on Level 2.)' },
      { keys: ['gate', 'flight', 'boarding', '搭乗口', '便'], ans: 'フライト情報は「運航状況」カードにあります。A-12搭乗口はコンコースAの突き当たりです。' }
    ],
    fallback: 'フライト、搭乗口、手荷物受取所、お手洗い、またはチケットの購入についてご案内できます。(I can assist with flights, gates, baggage, restrooms, or tickets.)'
  },
  id: {
    welcome: 'Halo! Ada yang bisa saya bantu hari ini di terminal? (Hello! How can I help you today?)',
    answers: [
      { keys: ['baggage', 'luggage', 'bagasi', 'barang', 'tas'], ans: 'Pengambilan bagasi terletak di Lantai 1, dekat Carousel 4. (Baggage claim is on Level 1, near Carousel 4.)' },
      { keys: ['toilet', 'restroom', 'bathroom', 'kamar mandi', 'wc'], ans: 'Toilet berada tepat di belakang toko Duty Free di sebelah kiri Anda.' },
      { keys: ['ticket', 'buy', 'tiket', 'kereta', 'bus'], ans: 'Anda dapat membeli tiket kereta dan bus shuttle di menu Pembelian Tiket kios ini!' },
      { keys: ['food', 'coffee', 'makan', 'lapar', 'kopi'], ans: 'Pujasera ada di lantai 2. (Food Court is upstairs on Level 2.)' },
      { keys: ['gate', 'flight', 'boarding', 'gerbang', 'terbang'], ans: 'Jadwal penerbangan tercantum di kartu "Status Penerbangan". Gerbang A-12 berada di ujung Concourse A.' }
    ],
    fallback: 'Saya bisa membantu mencari penerbangan, gerbang, bagasi, toilet, atau tiket. (I can help find flights, gates, baggage, restrooms, or tickets.)'
  },
  ur: {
    welcome: 'ہیلو! میں آج ٹرمینل پر آپ کی کیا مدد کر سکتا ہوں؟ (Hello! How can I help you today?)',
    answers: [
      { keys: ['baggage', 'luggage', 'bag', 'سامان'], ans: 'سامان وصول کرنے کی جگہ لیول 1 پر، کیروسل 4 کے قریب واقع ہے۔ (Baggage claim is on Level 1, near Carousel 4.)' },
      { keys: ['toilet', 'restroom', 'bathroom', 'حمام'], ans: 'واش رومز آپ کے بائیں جانب ڈیوٹی فری شاپ کے بالکل پیچھے واقع ہیں۔' },
      { keys: ['ticket', 'buy', 'ٹکٹ', 'ٹرین', 'بس'], ans: 'آپ اس کیوسک پر ٹرانزٹ ٹکٹ سروس کے ذریعے ٹرین اور شٹل بس کے ٹکٹ خرید سکتے ہیں!' },
      { keys: ['food', 'coffee', 'کھانا', 'بھوک'], ans: 'فوڈ کورٹ اوپر لیول 2 پر ہے۔ (Food Court is upstairs on Level 2.)' },
      { keys: ['gate', 'flight', 'boarding', 'گیٹ', 'پرواز'], ans: 'پروازوں کی معلومات "فلائٹ کی صورتحال" میں ہیں۔ گیٹ A-12 ہال A کے آخر میں ہے۔' }
    ],
    fallback: 'میں پروازوں، گیٹس، سامان، واش رومز یا ٹکٹوں کے بارے میں مدد کر سکتا ہوں۔ (I can help with flights, gates, baggage, restrooms, or tickets.)'
  },
  th: {
    welcome: 'สวัสดีค่ะ! วันนี้มีอะไรให้ฉันช่วยเหลือที่อาคารผู้โดยสารไหมคะ? (Hello! How can I help you today?)',
    answers: [
      { keys: ['baggage', 'luggage', 'bag', 'กระเป๋า', 'สัมภาระ'], ans: 'จุดรับกระเป๋าสัมภาระตั้งอยู่ที่ชั้น 1 ใกล้กับสายพานหมายเลข 4 (Baggage claim is on Level 1, near Carousel 4.)' },
      { keys: ['toilet', 'restroom', 'bathroom', 'ห้องน้ำ'], ans: 'ห้องน้ำตั้งอยู่ด้านหลังร้านค้าปลอดภาษี (Duty Free) ทางซ้ายมือของคุณ' },
      { keys: ['ticket', 'buy', 'ตั๋ว', 'รถไฟ', 'รถบัส'], ans: 'คุณสามารถซื้อตั๋วรถไฟและรถบัสรับส่งได้ที่บริการซื้อตั๋วโดยสารบนตู้บริการนี้ค่ะ!' },
      { keys: ['food', 'coffee', 'อาหาร', 'หิว', 'กาแฟ'], ans: 'ศูนย์อาหารอยู่ชั้น 2 ด้านบน (Food Court is upstairs on Level 2.)' },
      { keys: ['gate', 'flight', 'boarding', 'ประตู', 'เที่ยวบิน'], ans: 'ข้อมูลเที่ยวบินจะแสดงอยู่ในการ์ด "สถานะเที่ยวบิน" ประตูทางออก A-12 อยู่ที่ปลายอาคาร A' }
    ],
    fallback: 'ฉันสามารถช่วยคุณค้นหาเที่ยวบิน ประตูทางออก สัมภาระ ห้องน้ำ หรือซื้อตั๋วโดยสารได้ค่ะ (I can help with flights, gates, baggage, restrooms, or tickets.)'
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

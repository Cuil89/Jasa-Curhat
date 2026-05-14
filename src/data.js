import {
  AudioLines,
  BadgeCheck,
  CalendarCheck,
  HeartHandshake,
  MessageCircleHeart,
  MessagesSquare,
  MoonStar,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Zap,
} from 'lucide-react';

export const navItems = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Paket', href: '#paket' },
  { label: 'Ritme', href: '#ritme' },
  { label: 'Kontak', href: '#kontak' },
];

export const stats = [
  { value: '08', label: 'mode curhat' },
  { value: '17m', label: 'rata respons' },
  { value: '4.9', label: 'skor nyaman' },
];

export const services = [
  {
    icon: MessageCircleHeart,
    title: 'Chat yang beneran nyimak',
    text: 'Balasan dibuat runtut, tidak asal "sabar", dan tetap terasa manusiawi.',
    color: 'var(--cyan)',
  },
  {
    icon: AudioLines,
    title: 'Voice note recap',
    text: 'Cerita panjang dirapikan jadi poin yang lebih mudah dipahami lagi.',
    color: 'var(--yellow)',
  },
  {
    icon: ShieldCheck,
    title: 'Ruang aman tanpa judging',
    text: 'Boleh bingung, kesel, ragu, atau capek. Semua dimulai dari didengar dulu.',
    color: 'var(--pink)',
  },
  {
    icon: TimerReset,
    title: 'Sesi cepat saat pikiran penuh',
    text: 'Masuk, cerita, tarik napas, lalu pulang dengan langkah kecil yang jelas.',
    color: 'var(--green)',
  },
];

export const moods = [
  {
    key: 'pusing',
    label: 'Pusing',
    accent: 'var(--yellow)',
    title: 'Mode benang kusut',
    response: 'Kita petakan dulu: mana fakta, mana asumsi, mana yang bisa kamu pilih hari ini.',
  },
  {
    key: 'overthinking',
    label: 'Overthinking',
    accent: 'var(--cyan)',
    title: 'Mode rem pikiran',
    response: 'Ambil satu skenario paling mungkin, lalu kita turunkan volumenya pelan-pelan.',
  },
  {
    key: 'patah',
    label: 'Patah hati',
    accent: 'var(--pink)',
    title: 'Mode validasi penuh',
    response: 'Sakitnya tidak perlu dibantah. Kita temani dulu, baru pelan-pelan cari pijakan.',
  },
  {
    key: 'sunyi',
    label: 'Sepi',
    accent: 'var(--green)',
    title: 'Mode ditemani',
    response: 'Kamu tidak harus lucu atau produktif dulu buat layak ditemani ngobrol.',
  },
];

export const packages = [
  {
    name: 'Paket Tarik Napas',
    price: 'Rp29K',
    time: '20 menit',
    badge: 'Ringan',
    icon: MoonStar,
    features: ['Chat privat', 'Balasan reflektif', '1 ringkasan singkat'],
    color: 'var(--yellow)',
  },
  {
    name: 'Paket Deep Talk',
    price: 'Rp79K',
    time: '60 menit',
    badge: 'Favorit',
    icon: Sparkles,
    features: ['Chat atau voice note', 'Pemetaan masalah', 'Action step personal'],
    color: 'var(--cyan)',
    featured: true,
  },
  {
    name: 'Paket Tenang Lagi',
    price: 'Rp149K',
    time: '3 hari',
    badge: 'Intens',
    icon: HeartHandshake,
    features: ['Check-in harian', 'Catatan progres', 'Prioritas respons'],
    color: 'var(--pink)',
  },
];

export const rhythm = [
  {
    step: '01',
    title: 'Pilih energi cerita',
    text: 'Tentukan mau chat ringan, deep talk, atau ditemani beberapa hari.',
    icon: Zap,
  },
  {
    step: '02',
    title: 'Buka ruang aman',
    text: 'Ceritakan yang berantakan tanpa harus terlihat baik-baik saja.',
    icon: MessagesSquare,
  },
  {
    step: '03',
    title: 'Rapikan jadi langkah',
    text: 'Kita tutup sesi dengan rangkuman dan pilihan kecil yang realistis.',
    icon: CalendarCheck,
  },
  {
    step: '04',
    title: 'Jaga batas sehat',
    text: 'Kalau perlu bantuan profesional, kami bantu arahkan tanpa menggurui.',
    icon: BadgeCheck,
  },
];

export const testimonials = [
  {
    quote: 'Rasanya kayak ngobrol sama teman yang waras, tapi tetap punya struktur.',
    name: 'Naya',
    role: 'Mahasiswa tingkat akhir',
  },
  {
    quote: 'Aku datang cuma mau marah-marah. Pulangnya malah punya tiga langkah kecil.',
    name: 'Raka',
    role: 'Creative freelancer',
  },
  {
    quote: 'Kalimatnya tidak menggurui. Aku merasa ditemani, bukan sedang diberi ceramah.',
    name: 'Dimas',
    role: 'Karyawan remote',
  },
];

export const tickerWords = [
  'no toxic positivity',
  'chat hangat',
  'deep talk',
  'respons manusiawi',
  'anti judging',
  'teman cerita',
  'ringkas pikiran',
  'validasi dulu',
];

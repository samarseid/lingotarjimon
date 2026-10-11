
import demoVideo from '@/assets/lingo-demo.mp4';

export const PROTOTYPE_URL = 'https://t.me/LiangoTarjimonBot';
export const DEMO_VIDEO_URL = demoVideo;
export const funding = {
  amount: 50_000,
  allocations: [
    { label: 'Shaxsiy o‘rganish moduli', percent: 40 },
    { label: 'Klaviatura va brauzer kengaytmasi', percent: 30 },
    { label: 'Lingvistlar va sifat nazorati', percent: 20 },
    { label: 'Infratuzilma va AI xarajatlari', percent: 10 },
  ],
};
export const milestones = [
  { label: 'Idea', status: 'done', title: 'So‘z emas, inson', text: 'Ohang, madaniyat va gapiruvchining kontekstini saqlash g‘oyasi.' },
  { label: 'Prototype', status: 'done', title: 'Haqiqiy suhbatlar', text: 'Telegram orqali ishlaydigan tarjima prototipi va foydalanuvchi sinovlari.' },
  { label: 'MVP', status: 'done', title: 'Bir nechta imkoniyat', text: 'Veb platforma: matn, hujjat, she’riyat, tarix va 12 xil ohang.' },
  { label: 'Launched', status: 'current', title: 'Veb ishga tushgan', text: 'Veb va Telegram ishlaydi. Mobil ilova ishlab chiqilmoqda; mobil reliz hali oldinda.' },
] as const;
export const team = [
  { initials: 'SS', name: 'Samar Saidov', role: 'Founder & CEO', skills: 'Mahsulot strategiyasi · tadbirkorlik · foydalanuvchi muammosi', text: 'Muammoni o‘zi boshdan kechirgan. Mahsulot yo‘nalishi va rivojlanishni boshqaradi.' },
  { initials: 'SS', name: 'Torabek Yoldoshev', role: 'CTO', skills: 'Dasturiy muhandislik · AI integratsiyasi · sifat nazorati', text: 'Kontekst, model tanlash va natijani tekshirish zanjirini rivojlantiradi.' },
  { initials: 'MZ', name: 'Majitov Zuxriddin', role: 'Backend engineer', skills: 'Infratuzilma · ma’lumotlar · Telegram integratsiyasi', text: 'Tarjima xizmatlari, ma’lumotlar saqlanishi va Telegram imkoniyatlarini birlashtiradi.' },
  { initials: 'TY', name: 'Nodirbek Tursunov', role: 'CMO', skills: 'Marketing · brend · bozorga chiqish', text: 'Mahsulotning qiymatini foydalanuvchiga yetkazish va auditoriyani kengaytirishga mas’ul.' },
];
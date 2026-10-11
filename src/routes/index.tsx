import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, CheckCheck, Keyboard, Mic, Film, BookOpen, FileText, Feather, Globe2, Sparkles, MessageCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteHeader, SiteFooter } from '@/components/platform/SiteChrome';
import { funding, milestones, PROTOTYPE_URL, team } from '@/components/platform/content';
import hero from '@/assets/lingo-editorial.jpg';

import shotHome from '@/assets/Screenshot_2026-08-10_010506.png';
import shotFile from '@/assets/Screenshot_2026-08-10_010535.png';
import shotPoetry from '@/assets/Screenshot_2026-08-10_010557.png';


export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Lingo — Til o‘zgaradi. Siz emas.' },
    { name: 'description', content: 'Lingo — ohang, madaniyat va shaxsiy ovozni saqlaydigan AI til platformasi. Matn, hujjat va she’riyat; rivojlanayotgan mobil ilova, klaviatura va ovozli tarjima.' },
    { property: 'og:title', content: 'Lingo — Til o‘zgaradi. Siz emas.' },
    { property: 'og:description', content: 'Bitta tarjimondan kengroq: Lingo platformasi, jamoa, yo‘l xaritasi va ishlayotgan Telegram prototipi.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: PlatformPage,
});

const productTabs = [
  { name: 'Matn va ohang', icon: MessageCircle, image: shotHome, title: 'Gap to‘g‘ri. Ohang ham.', text: '26+ tilda 12 xil uslub. Gapiruvchi va tinglovchining konteksti hisobga olinadi: do‘stga yozilgan xat bilan ish xati bir xil eshitilmaydi.', points: ['Rasmiy, casual, street, business va boshqa ohanglar', 'Jins, yosh va madaniy kontekst', 'Tarjima tarixi va shaxsiy lug‘at'] },
  { name: 'Hujjatlar', icon: FileText,image: shotFile, title: 'Butun hujjat. Bir xil ovoz.', text: 'Alohida gaplar emas, hujjat bo‘ylab bir xil termin va uslub. Fayl tarjimasi platformaning mavjud imkoniyatlaridan biri.', points: ['Fayl orqali tarjima', 'Rasmiylik va uslub sozlamalari', 'Uzun matn uchun kuchliroq model yo‘naltirish'] },
  { name: 'She’riyat', icon: Feather, image: shotPoetry, title: 'Ma’no bilan birga, tuyg‘u.', text: 'She’rni so‘zma-so‘z ko‘chirish yetarli emas. Lingo ritm, metafora va qofiyani hisobga olish uchun alohida tarjima yo‘nalishiga ega.', points: ['Ritm va qofiya sozlamalari', 'Metafora va badiiy uslub', 'Adabiy matn uchun chuqurroq AI ishlovi'] },
];
function Label({ number, children, inverse = false }: { number: string; children: React.ReactNode; inverse?: boolean }) {
  return <p className={`site-eyebrow ${inverse ? 'text-paper/60' : 'text-sand'}`}><span className={inverse ? 'text-clay' : 'text-terracotta'}>{number}</span> / {children}</p>;
}
function PlatformPage() {
  const [tab, setTab] = useState(0);
  const product = productTabs[tab] ?? productTabs[0];
  return <main className="lingo-site">
    <SiteHeader home />
    <section className="site-hero">
      <img src={hero} alt="Telefon orqali dunyo bilan muloqot qilayotgan inson — Lingo g‘oyasining ijodiy tasviri" width={1920} height={1024} fetchPriority="high" className="site-hero-image" />
      <div className="site-container relative z-10">
        <p className="site-eyebrow text-ink/65"><span className="site-live-dot" /> AI til platformasi · Toshkent, Uzbekistan</p>
        <h1 className="site-hero-title">Lingo<span className="text-terracotta">.</span></h1>
        <h2 className="site-hero-line">Til o‘zgaradi.<br /><em>Siz emas.</em></h2>
        <p className="site-hero-copy">So‘zlaringiz emas, <strong>sizning ovozingiz</strong> tarjima qilinadi. Suhbatdan she’riyatgacha. Klaviaturadan butun kitobgacha.</p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Button asChild size="lg" className="h-12 rounded-none px-6"><Link to="/demo">Lingo’ni ko‘ring <ArrowUpRight /></Link></Button>
          <a href="#platforma" className="inline-flex items-center gap-2 text-sm font-medium">Platformani kashf eting <ArrowDown className="size-4" /></a>
        </div>
        <div className="site-hero-meta"><span className="flex items-center gap-2"><span className="site-live-dot" /> Veb & Telegram — ishlayapti</span><span>Mobil ilova — yaratilmoqda</span></div>
      </div>
      <div className="site-hero-stamp"><span className="font-mono text-[10px] uppercase">Bir so‘z. Turli ovozlar.</span><span className="font-display text-3xl">salom <ArrowRight className="inline size-5 text-terracotta" /> wassup.</span><span className="font-mono text-[10px] text-sand">UZ → EN / STREET</span></div>
    </section>

    <div className="site-proof-strip"><div className="site-container grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
      {[['26+', 'til, madaniy kontekst bilan'], ['12', 'ohang, bitta shaxsiy ovoz'], ['120', 'ro‘yxatdan o‘tgan foydalanuvchi'], ['$0', 'reklama xarajati']].map(([value, caption]) => <div key={value}><strong className="font-display text-4xl font-normal">{value}</strong><p className="mt-1 text-xs text-sand">{caption}</p></div>)}
    </div><p className="site-container mt-4 font-mono text-[10px] text-sand">Ko‘rsatkichlar: 2026-yil avgustdagi investor materiallari.</p></div>

    <section className="site-container site-section" id="muammo">
      <Label number="01">Muammo → yechim</Label>
      <div className="site-section-heading"><h2 className="site-title">Tarjima to‘g‘ri.<br /><em className="text-terracotta">Lekin sizga o‘xshamaydi.</em></h2><p>Odamlar faqat ma’no bilan gaplashmaydi. Ohang, munosabat va madaniyat ham xabarning bir qismi. Oddiy tarjima shu qatlamlarni yo‘qotadi.</p></div>
      <div className="site-problem-grid">
        <div className="site-problem-item"><span className="site-eyebrow text-sand">01 — Ohang</span><h3>Do‘stga ham, rahbarga ham bitta ovoz.</h3><p>So‘zma-so‘z tarjima samimiy xatni sovuq, ish xatini esa noo‘rin erkin qilib qo‘yishi mumkin.</p><div className="site-solution"><Check className="size-4 shrink-0" /><span>Lingo: vaziyatga mos 12 uslub.</span></div></div>
        <div className="site-problem-item"><span className="site-eyebrow text-sand">02 — Kontekst</span><h3>Kim gapiryapti? Kimga?</h3><p>Jins va yosh manba tilida bilinmasa ham, boshqa tilda grammatika va murojaat shaklini o‘zgartiradi.</p><div className="site-solution"><Check className="size-4 shrink-0" /><span>Lingo: gapiruvchi va tinglovchi konteksti.</span></div></div>
        <div className="site-problem-item"><span className="site-eyebrow text-sand">03 — Madaniyat</span><h3>So‘z o‘tadi. Hazil o‘tmaydi.</h3><p>Sleng, ibora va metaforaning lug‘aviy tarjimasi haqiqiy ma’noni har doim ham saqlamaydi.</p><div className="site-solution"><Check className="size-4 shrink-0" /><span>Lingo: madaniy profil va sifat tekshiruvi.</span></div></div>
      </div>
      <div className="site-quote"><span className="text-terracotta">“</span><p>Biz tilni almashtiramiz.<br /><em>Insonni emas.</em></p><span className="site-eyebrow text-sand">Lingo tamoyili</span></div>
    </section>

    <section className="site-product-band" id="platforma"><div className="site-container site-section">
      <Label number="02">Bitta platforma. Ko‘proq imkoniyat.</Label>
      <div className="site-section-heading"><h2 className="site-title">Tarjimon emas.<br /><em>Til bilan yashash vositasi.</em></h2><p>Bugun ishlayotgan matn, hujjat va she’riy tarjima — kengroq ekotizimning asosi. Keyingi qadam: Lingo’ni kundalik telefon tajribasiga olib kirish.</p></div>
      <div className="site-product-tabs" role="tablist" aria-label="Platforma imkoniyatlari">{productTabs.map((item, index) => <Button key={item.name} variant="ghost" role="tab" aria-selected={index === tab} aria-controls="product-panel" id={`product-tab-${index}`} onClick={() => setTab(index)} className={`rounded-none ${index === tab ? 'site-tab-active' : ''}`}><item.icon />{item.name}</Button>)}</div>
      <div className="site-product-layout" role="tabpanel" id="product-panel" aria-labelledby={`product-tab-${tab}`}>
        <div className="site-product-screen"><div className="flex items-center justify-between border-b border-rule px-5 py-3"><span className="font-mono text-[10px] text-sand">LINGO / WEB PLATFORM</span><span className="flex items-center gap-2 text-xs text-signal"><span className="site-live-dot" />Ishlayapti</span></div><img src={product.image} alt={`${product.name} — Lingo ishlayotgan platformasidan ekran tasviri`} loading="lazy" width={1440} height={900} /></div>
        <div className="site-product-description"><span className="site-eyebrow text-signal">Mavjud imkoniyat</span><h3 className="font-display text-4xl leading-tight">{product.title}</h3><p>{product.text}</p><ul className="space-y-3">{product.points.map(point => <li className="flex items-start gap-3 text-sm" key={point}><CheckCheck className="size-4 shrink-0 text-terracotta" />{point}</li>)}</ul><a href={PROTOTYPE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-terracotta">Telegram prototipini ochish <ArrowUpRight className="size-4" /></a></div>
      </div>
      <div className="site-mobile-heading"><span className="site-status"><span className="site-live-dot" /> Hozirgi bosqich</span><h3 className="font-display text-3xl">Lingo telefoningizga ko‘chmoqda.</h3><p className="max-w-2xl text-sm leading-relaxed text-sand">Mobil ilova ishlab chiqilmoqda. Quyidagi mobil va media imkoniyatlar yo‘l xaritasiga kiradi; ular hozircha to‘liq ishga tushirilgan deb taqdim etilmaydi.</p></div>
      <div className="site-future-grid">{[
        { icon: Keyboard, tag: 'Mobil · ishlab chiqilmoqda', title: 'Har ilovada. Klaviaturadan.', text: 'Chatdan chiqmasdan tarjima, tanlangan ohang va gapiruvchi konteksti. iOS/Android klaviaturasi va brauzer kengaytmasi rejalashtirilgan.' },
        { icon: Mic, tag: 'Keyingi bosqich', title: 'Ovozga ham o‘z ovozingiz.', text: 'Hozirgi ovozli kiritishdan real vaqt suhbat tarjimasiga: nutqni aniqlash → kontekstli tarjima → ovozga qaytarish.' },
        { icon: Film, tag: 'Keyingi bosqich', title: 'Filmning ma’nosi. Qahramonning ohangi.', text: 'Subtitr va dublyaj uchun vaqt belgili tarjima, dialog konteksti hamda qahramonlar bo‘yicha uslub izchilligi. Mualliflik ruxsati bilan.' },
        { icon: BookOpen, tag: 'Uzoq muddatli yo‘nalish', title: 'Bir jumla emas. Butun kitob.', text: 'Boblararo kontekst, terminlar lug‘ati va muallif uslubini saqlaydigan kitob tarjimasi. AI yordamida, muharrir va huquq egasi nazorati bilan.' },
      ].map(item => <div className="site-future-item" key={item.title}><item.icon className="mb-5 size-6 text-terracotta" /><span className="site-eyebrow text-sand">{item.tag}</span><h4>{item.title}</h4><p>{item.text}</p></div>)}</div>
    </div></section>

    <section className="site-container site-section" id="roadmap"><Label number="03">Yo‘l xaritasi</Label><div className="site-section-heading"><h2 className="site-title">G‘oyadan —<br /><em>kundalik odatgacha.</em></h2><p>Veb va Telegram allaqachon foydalanuvchilarda. Endi mavjud tajribani o‘rganish, klaviatura va mobil muloqotga kengaytiramiz.</p></div>
      <div className="site-milestones">{milestones.map((item, index) => <div className={`site-milestone ${item.status === 'current' ? 'is-current' : ''}`} key={item.label}><div className="site-milestone-top"><span className="site-milestone-dot">{item.status === 'done' ? <Check className="size-4" /> : <span className="size-2 rounded-full bg-paper" />}</span><span className="font-mono text-xs">0{index + 1}</span></div><span className="site-eyebrow text-terracotta">{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
      <div className="site-phase-grid">{[
        ['01', '0–6 oy', 'O‘rganish qatlami', 'Tarjima tarixidagi bilim bo‘shliqlaridan shaxsiy kartochkalar va mashqlar. Telegram inline imkoniyati; mobil poydevor.'],
        ['02', '6–12 oy', 'Kundalik muloqot', 'iOS/Android klaviaturasi, mobil ilova va brauzer kengaytmasi. Ohang va profilni barcha yuzalarda birlashtirish.'],
        ['03', '12–18+ oy', 'Ovoz va media', 'Real vaqt ovozli tarjima, subtitr va dublyaj sinovlari. So‘ng uzun formatli, muharrir nazoratidagi kitob tarjimasi.'],
      ].map(([num, time, title, text]) => <div key={num}><span className="font-mono text-xs text-terracotta">{time} / reja</span><h3 className="mt-3 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-sand">{text}</p></div>)}</div><p className="mt-6 font-mono text-[10px] text-sand">Davrlar moliyalashtirish va ishlab chiqish bosqichi boshlanishiga nisbatan berilgan; kafolatlangan reliz sanalari emas.</p>
    </section>

    <section className="site-engine-band" id="texnologiya"><div className="site-container site-section"><Label number="04" inverse>Yechimni qanday quramiz</Label><div className="site-section-heading"><h2 className="site-title">AI — dvigatel.<br /><em className="text-clay">Kontekst — farqimiz.</em></h2><p className="text-paper/65">Bitta modelga qaram emas, bir butun tarjima zanjiri. Tayyor AI modellari almashtiriladi; foydalanuvchi konteksti va sifat qoidalari esa Lingo’ning o‘z qatlamidir.</p></div>
      <div className="site-engine-flow">{[['01', 'Kontekst', 'Til, ohang, gapiruvchi va tinglovchi profili.'], ['02', 'Model tanlash', 'Qisqa matnga tezkor; hujjat va she’rga kuchli model.'], ['03', 'Madaniy moslashuv', 'Sleng, ibora, uslub va terminlar izchilligi.'], ['04', 'Sifat nazorati', 'Jins mosligi, murojaat va natijani qayta tekshirish.']].map(([n, title, text]) => <div key={n}><span className="font-mono text-xs text-clay">{n} <ChevronRight className="ml-2 inline size-3" /></span><h3>{title}</h3><p>{text}</p></div>)}</div>
      <div className="site-technology-row"><p className="site-eyebrow text-paper/50">Yechim qatlamlari</p><div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-paper/80"><span>LLM model routing</span><span>Telegram integratsiyasi</span><span>Kesh & kontekst xotirasi</span><span>STT / TTS <small className="text-clay">reja</small></span><span>Vaqt belgili subtitr <small className="text-clay">reja</small></span></div></div>
      <div className="site-engine-bottom"><Sparkles className="size-6 shrink-0 text-clay" /><p><strong>Tejamkorlik va mas’uliyat.</strong> Takroriy so‘rovlar keshga olinadi, murakkab ishga mos model tanlanadi. Maxfiy hujjatlar uchun ma’lumotlarni boshqarish, badiiy va huquqiy tarjimalar uchun inson tekshiruvi rejalashtiriladi.</p></div>
    </div></section>

    <section className="site-container site-section" id="jamoa"><Label number="05">Jamoa</Label><div className="site-section-heading"><h2 className="site-title">Muammoni bilamiz.<br /><em>Mahsulotni qurayapmiz.</em></h2><p>Strategiya, muhandislik, infratuzilma va bozorga chiqish — bitta jamoada. Faqat taqdimot emas: haqiqiy foydalanuvchilari bor mahsulot.</p></div>
      <div className="site-team-grid">{team.map((person, index) => <div className="site-team-person" key={person.name}><div className={`site-team-monogram team-tone-${index}`}><span className="font-display text-5xl">{person.initials}</span><span className="font-mono text-[10px]">0{index + 1}</span></div><span className="site-eyebrow text-terracotta">{person.role}</span><h3>{person.name}</h3><p>{person.text}</p><span className="site-team-skills">{person.skills}</span></div>)}</div>
      <div className="site-team-reason"><h3 className="font-display text-3xl">Nega aynan biz?</h3><div><p><strong>Muammoni ichidan bilish.</strong> Chet tilda o‘z ovozini yo‘qotish tajribasi mahsulot qarorlarimizning boshlanish nuqtasi.</p><p><strong>Ishlayotgan mahsulot.</strong> Veb, Telegram, hujjat va she’riy tarjima allaqachon yaratilgan. 120 foydalanuvchidan kelgan tajriba — keyingi bosqichlar asosi.</p><p><strong>Modeldan kengroq qatlam.</strong> Madaniy profillar, kontekst va sifat tekshiruvi ustida ishlaymiz; bitta AI modelining qobig‘i bo‘lib qolmaymiz.</p><a href="https://lingo-translator.uz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-terracotta">Jamoaning mahsulot sayti <ArrowUpRight className="size-4" /></a></div></div>
    </section>

    <section className="site-product-band"><div className="site-container site-section"><Label number="06">Daromad modeli</Label><div className="site-section-heading"><h2 className="site-title">Kundalik qiymat.<br /><em>Barqaror biznes.</em></h2><p>Asosiy kirish bepul. Daromad — ko‘proq imkoniyat, professional ish jarayoni va tashkilotlar uchun litsenziyalardan. Quyidagi model — rivojlanish rejasi.</p></div>
      <div className="site-revenue-grid">{[['01', 'Free → Pro', 'Shaxsiy obuna', 'Bepul qatlam: cheklangan kundalik tarjima va asosiy ohanglar. Pro: kengaytirilgan tarjima, 12 uslub, hujjat, she’riyat, tarix va keyingi o‘rganish moduli.', 'Davriy obuna daromadi'], ['02', 'Teams & Education', 'B2B litsenziya', 'Jamoaviy hisoblar, ta’lim tashkilotlari uchun litsenziyalar va ish jarayoniga mos tarjima. Hujjatlar va umumiy terminlar bilan professional foydalanish.', 'Jamoa / tashkilot shartnomasi'], ['03', 'Studios & Publishers', 'Professional tarjima', 'Subtitr va dublyaj studiyalari; keyinchalik nashriyotlar uchun kitob tarjimasi. Muharrir nazorati va mualliflik huquqi bilan loyiha asosida ishlash.', 'Loyiha yoki hajm asosidagi to‘lov']].map(([n, tag, title, text, foot]) => <div key={n} className="site-revenue-item"><span className="site-eyebrow text-terracotta">{tag}</span><h3>{title}</h3><p>{text}</p><span className="site-revenue-foot"><ArrowUpRight className="size-4" />{foot}</span></div>)}</div><p className="mt-5 text-xs text-sand">Tariflar va tijoriy narxlar hali tasdiqlanmagan. Kelajak xizmatlari joriy daromad sifatida ko‘rsatilmagan.</p>
    </div></section>

    <section className="site-container site-section" id="investitsiya"><Label number="07">Keyingi qadam uchun</Label><div className="site-funding-layout"><div><span className="site-eyebrow text-terracotta">Inkubatsiya granti · maqsad</span><h2 className="site-funding-number">${funding.amount.toLocaleString('en-US')}</h2><h3 className="font-display text-3xl">Tarjimadan — til ekotizimiga.</h3><p className="mt-5 max-w-lg text-sm leading-relaxed text-sand">Mavjud investor materiallaridagi so‘rov: o‘rganish qatlamini, klaviaturani va sifat infratuzilmasini rivojlantirish. Mobil, ovoz va media yo‘nalishlari shu poydevor ustida bosqichma-bosqich kengayadi.</p><div className="mt-6 flex flex-wrap gap-4"><Button asChild className="h-11 rounded-none"><Link to="/kitob">Investor kitobini o‘qish <BookOpen /></Link></Button><Button asChild variant="link"><Link to="/pitch">Pitch deck <ArrowUpRight /></Link></Button></div></div><div className="site-funding-breakdown">{funding.allocations.map(item => <div key={item.label}><div className="mb-3 flex items-center justify-between gap-4"><span className="text-sm">{item.label}</span><span className="font-mono text-sm text-terracotta">{item.percent}%</span></div><progress max={100} value={item.percent} aria-label={item.label} className="site-budget-bar" /><span className="mt-2 block font-mono text-[10px] text-sand">${(funding.amount * item.percent / 100).toLocaleString('en-US')}</span></div>)}</div></div></section>

    <section className="site-final-band"><div className="site-container"><p className="site-eyebrow text-paper/65">Dunyo bilan gaplashing. O‘zingiz bo‘lib qoling.</p><h2 className="font-display text-5xl sm:text-6xl">Bir tilda emas.<br /><em>Bir ovozda.</em></h2><Button asChild variant="secondary" size="lg" className="mt-7 h-12 rounded-none"><a href={PROTOTYPE_URL} target="_blank" rel="noreferrer">Lingo’ni Telegram’da sinang <ArrowUpRight /></a></Button><Link to="/demo" className="ml-0 mt-5 flex items-center gap-2 text-sm sm:ml-6 sm:inline-flex">Demo sahifasi <ArrowRight className="size-4" /></Link></div></section>
    <SiteFooter />
  </main>;
}

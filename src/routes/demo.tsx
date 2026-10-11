import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight, Play, MessageCircle, Film, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteHeader, SiteFooter } from '@/components/platform/SiteChrome';
import { DEMO_VIDEO_URL, PROTOTYPE_URL } from '@/components/platform/content';

export const Route = createFileRoute('/demo')({
  head: () => ({ meta: [
    { title: 'Lingo demo — Mahsulotni amalda ko‘ring' },
    { name: 'description', content: 'Lingo demo-video uchun ajratilgan joy, mahsulot namoyishi tavsifi va ishlayotgan Telegram prototipi.' },
    { property: 'og:title', content: 'Lingo demo — Mahsulotni amalda ko‘ring' },
    { property: 'og:description', content: 'Ohang va kontekstni saqlaydigan tarjima: demo tavsifi va Telegram orqali ishlayotgan prototip.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: DemoPage,
});
function DemoPage() {
  return <main className="lingo-site"><SiteHeader />
    <div className="site-container site-section">
      <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-sand"><ArrowLeft className="size-4" /> Lingo platformasi</Link>
      <p className="site-eyebrow text-terracotta">Mahsulot namoyishi / Demo</p>
      <div className="site-section-heading"><h1 className="site-title">Gapdan —<br /><em>amalga.</em></h1><p>Lingo qanday ishlashini ko‘ring. Yoki kutmasdan, mavjud Telegram prototipida o‘z gapingizni tarjima qilib ko‘ring.</p></div>
      <div className="site-demo-video">
        {DEMO_VIDEO_URL ? <video controls preload="metadata" src={DEMO_VIDEO_URL} aria-label="Lingo demo-video" /> : <div className="site-demo-empty"><span className="site-demo-play"><Play className="size-7" /></span><h2 className="font-display text-3xl">Lingo — demo-video</h2><p className="text-sm text-paper/60">Video tez orada joylanadi.</p><span className="mt-4 font-mono text-[10px] uppercase text-clay">1–5 daqiqalik mahsulot namoyishi</span></div>}
        <div className="site-demo-video-footer"><span className="flex items-center gap-2"><Film className="size-4" /> Mahsulotning amaliy namoyishi</span><span>{DEMO_VIDEO_URL ? 'Video tayyor' : 'Hali video joylanmagan'}</span></div>
      </div>
      <div className="site-demo-description"><div><p className="site-eyebrow text-terracotta">Demo tavsifi</p><h2 className="mt-4 font-display text-3xl">Bir xabar. Bir nechta ohang.<br />Bitta shaxsiy ovoz.</h2><p className="mt-5 text-sm leading-relaxed text-sand">Namoyishda Lingo’ning asosiy jarayoni ko‘rsatiladi: matn kiritish, tillarni tanlash, gapiruvchi va tinglovchi kontekstini belgilash, so‘ng turli ohanglardagi tarjimalarni solishtirish. Hujjat va she’riy tarjima mavjud platformaning alohida imkoniyatlari sifatida tanishtiriladi.</p><p className="mt-4 text-sm leading-relaxed text-sand">Mobil klaviatura, real vaqt ovozli tarjima, film va kitob tarjimasi — rivojlanish yo‘nalishlari. Demo ularni ishlayotgan imkoniyatlar bilan aralashtirmaydi.</p></div><ol className="site-demo-chapters">{[['01', 'Matn va kontekst', 'Til, ohang va suhbatdosh profili.'], ['02', 'Natijani solishtirish', 'Bir xabarni casual, street va business uslublarida.'], ['03', 'Platforma imkoniyatlari', 'Hujjat, she’riyat va tarjima tarixi.'], ['04', 'Keyingi bosqich', 'Yaratilayotgan mobil ilova va rivojlanish rejasi.']].map(([n, title, text]) => <li key={n}><span className="font-mono text-xs text-terracotta">{n}</span><div><h3 className="text-sm font-medium">{title}</h3><p className="mt-1 text-xs text-sand">{text}</p></div><Check className="size-4 text-sand" /></li>)}</ol></div>
      <div className="site-demo-prototype"><div><p className="site-eyebrow text-signal"><span className="site-live-dot" /> Ishlayotgan prototip</p><h2 className="mt-4 font-display text-4xl">O‘zingiz sinab ko‘ring.</h2><p className="mt-3 text-sm text-sand">Lingo’ning Telegram prototipi. Haqiqiy xabar, haqiqiy tarjima.</p><p className="mt-3 font-mono text-xs text-terracotta">@LiangoTarjimonBot</p></div><Button asChild size="lg" className="h-12 rounded-none"><a href={PROTOTYPE_URL} target="_blank" rel="noreferrer"><MessageCircle /> Telegram’da ochish <ArrowUpRight /></a></Button></div>
    </div><SiteFooter /></main>;
}

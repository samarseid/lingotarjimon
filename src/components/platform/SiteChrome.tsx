import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PROTOTYPE_URL } from './content';

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const links = [['platforma', 'Platforma'], ['roadmap', 'Yo‘l xaritasi'], ['jamoa', 'Jamoa'], ['investitsiya', 'Investitsiya']];
  return <header className="site-header">
    <div className="site-container flex min-h-20 items-center justify-between gap-5">
      <Link to="/" className="site-wordmark" aria-label="Lingo bosh sahifa">lingo<span className="text-terracotta">.</span></Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Asosiy navigatsiya">
        {links.map(([id, title]) => <a key={id} href={home ? `#${id}` : `/#${id}`} className="site-nav-link">{title}</a>)}
        <Link to="/demo" className="site-nav-link">Demo</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild variant="outline" className="hidden rounded-none border-ink/25 bg-transparent sm:inline-flex"><a href={PROTOTYPE_URL} target="_blank" rel="noreferrer">Sinab ko‘rish <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
      </div>
    </div>
    {open && <nav className="site-container flex flex-col gap-5 border-t border-rule py-6 lg:hidden" aria-label="Mobil navigatsiya">
      {links.map(([id, title]) => <a key={id} href={home ? `#${id}` : `/#${id}`} onClick={() => setOpen(false)}>{title}</a>)}
      <Link to="/demo" onClick={() => setOpen(false)}>Demo <ArrowUpRight className="inline size-4" /></Link>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="site-container site-footer">
    <Link to="/" className="site-wordmark">lingo<span className="text-terracotta">.</span></Link>
    <p className="text-sm text-sand">Toshkentdan. Dunyo bilan suhbat uchun.</p>
    <nav className="flex flex-wrap gap-5 text-sm" aria-label="Qo‘shimcha materiallar"><Link to="/pitch">Pitch deck <ArrowUpRight className="inline size-3" /></Link><Link to="/book">Investor book</Link><Link to="/kitob">Investor kitobi</Link><Link to="/demo">Demo</Link></nav>
    <span className="font-mono text-xs text-sand">© 2026 Lingo</span>
  </footer>;
}
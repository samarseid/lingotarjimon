import { useLayoutEffect, useRef, useState } from "react";
import { Book, type BookCopy } from "./BookShell";

export function BookReader({ copy }: { copy: BookCopy }) {
  const [zoom, setZoom] = useState(1);
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const fit = () => {
      const el = boxRef.current;
      if (!el) return;
      setZoom(Math.min(1, (el.clientWidth - 16) / 794));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <main className="min-h-screen bg-secondary">
      <style media="print">{`
        @page { size: 210mm 297mm; margin: 16mm 18mm; }
        html, body { background: var(--paper); }
      `}</style>

      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-paper px-6 py-4 print:hidden">
        <div>
          <h1 className="font-display text-[22px] leading-none">{copy.ui.heading}</h1>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-sand">
            {copy.ui.meta}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="/" className="font-mono text-[12px] text-sand hover:text-ink">
            ← {copy.ui.deck}
          </a>
          <a
            href={copy.ui.otherHref}
            className="font-mono text-[12px] text-terracotta hover:opacity-70"
          >
            {copy.ui.other}
          </a>
          <button
            onClick={() => window.print()}
            className="rounded-sm bg-terracotta px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.18em] text-paper transition-opacity hover:opacity-90"
          >
            {copy.ui.print}
          </button>
        </div>
      </header>

      <div ref={boxRef} className="px-4 py-10 print:p-0">
        <div
          style={{ zoom }}
          className="print:![zoom:1] [&_.book-sheet]:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.35)] print:[&_.book-sheet]:shadow-none"
        >
          <Book copy={copy} />
        </div>
      </div>
    </main>
  );
}

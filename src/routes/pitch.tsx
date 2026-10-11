import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { slides } from "@/components/deck/slides";

export const Route = createFileRoute("/pitch")({
  head: () => ({
    meta: [
      { title: "Lingo — Pitch Deck | President Tech Award 2026" },
      {
        name: "description",
        content:
          "Lingo pitch deck: AI translation that sounds human. 15 slides — problem, proof, product, market and the ask.",
      },
      { property: "og:title", content: "Lingo — Pitch Deck | President Tech Award 2026" },
      {
        property: "og:description",
        content: "Translation isn't the product — it's the base. The Lingo deck, 15 slides.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),

  component: Deck,
});

function Deck() {
  const [i, setI] = useState(0);
  const [scale, setScale] = useState(1);
  const boxRef = useRef<HTMLDivElement>(null);

  const go = useCallback((n: number) => {
    setI((p) => Math.min(slides.length - 1, Math.max(0, p + n)));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " "].includes(e.key)) go(1);
      if (["ArrowLeft", "PageUp"].includes(e.key)) go(-1);
      if (e.key === "Home") setI(0);
      if (e.key === "End") setI(slides.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useLayoutEffect(() => {
    const fit = () => {
      const el = boxRef.current;
      if (!el) return;
      setScale(Math.min(el.clientWidth / 1280, el.clientHeight / 720));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  const active = slides[i] ?? slides[0];
  if (!active) return null;
  const Current = active.Component;

  return (
    <main className="flex h-screen flex-col bg-ink">
      <h1 className="sr-only">Lingo — Pitch Deck, President Tech Award 2026</h1>

      <div ref={boxRef} className="flex flex-1 items-center justify-center overflow-hidden p-6">
        <div
          style={{ width: 1280 * scale, height: 720 * scale }}
          className="relative overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]"
        >
          <div
            key={i}
            style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
            className="absolute left-0 top-0"
          >
            <Current />
          </div>
        </div>
      </div>

      <nav className="flex items-center justify-between gap-4 border-t border-paper/10 bg-ink px-6 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => go(-1)}
            disabled={i === 0}
            className="rounded-sm border border-paper/20 px-3 py-1.5 font-mono text-[13px] text-paper transition-colors hover:bg-paper/10 disabled:opacity-30"
          >
            ←
          </button>
          <button
            onClick={() => go(1)}
            disabled={i === slides.length - 1}
            className="rounded-sm border border-paper/20 px-3 py-1.5 font-mono text-[13px] text-paper transition-colors hover:bg-paper/10 disabled:opacity-30"
          >
            →
          </button>
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-paper/50">
            {String(i + 1).padStart(2, "0")} / {slides.length} · {active.title}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setI(idx)}
              aria-label={`Slide ${s.id}: ${s.title}`}
              className={`h-[3px] w-6 transition-colors ${
                idx === i ? "bg-terracotta" : "bg-paper/25 hover:bg-paper/60"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/book"
            className="rounded-sm border border-paper/20 px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.18em] text-paper transition-colors hover:bg-paper/10"
          >
            Book EN
          </a>
          <a
            href="/kitob"
            className="rounded-sm border border-paper/20 px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.18em] text-paper transition-colors hover:bg-paper/10"
          >
            Kitob UZ
          </a>

          <a
            href="/print"
            className="rounded-sm bg-terracotta px-3 py-1.5 font-mono text-[12px] uppercase tracking-[0.18em] text-paper transition-opacity hover:opacity-90"
          >
            PDF
          </a>
        </div>

      </nav>
    </main>
  );
}


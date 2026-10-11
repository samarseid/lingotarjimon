import type { ReactNode } from "react";
import { ToneForkMark } from "@/components/deck/ToneFork";

/* ─────────────── content model ───────────────
 * Chapters are plain data so the English and Uzbek editions
 * share one typographic engine and stay in sync.
 */

export type Block =
  | { k: "p"; t: string; drop?: boolean }
  | { k: "sub"; t: string }
  | { k: "quote"; t: string; by?: string }
  | { k: "list"; items: string[]; ordered?: boolean }
  | { k: "kv"; items: [string, string][] }
  | { k: "stats"; items: [string, string][] }
  | { k: "table"; head: string[]; rows: string[][] }
  | { k: "note"; t: string; body: string[] }
  | { k: "figure"; src: string; alt: string; caption: string }
  | { k: "gallery"; items: { src: string; alt: string }[]; caption: string }
  | { k: "fork"; source: string; items: [string, string][] }
  | { k: "rule" };

export type Chapter = {
  n: number;
  kicker: string;
  title: string;
  lead: string;
  blocks: Block[];
};

export type BookCopy = {
  lang: "en" | "uz";
  htmlLang: string;
  brow: string;
  title: string;
  subtitle: string;
  edition: string;
  contentsTitle: string;
  colophon: string[];
  chapters: Chapter[];
  ui: {
    heading: string;
    meta: string;
    deck: string;
    print: string;
    other: string;
    otherHref: string;
  };
};

/* ─────────────── inline markup ───────────────
 * *text*  → terracotta marker highlight
 * _text_  → serif emphasis (the "human" voice)
 * `text`  → mono (the "machine" voice)
 */
export function rich(text: string, keyBase = "r"): ReactNode[] {
  const parts = text.split(/(\*[^*]+\*|_[^_]+_|`[^`]+`)/g).filter(Boolean);
  return parts.map((p, i) => {
    const key = `${keyBase}-${i}`;
    if (p.startsWith("*") && p.endsWith("*") && p.length > 2)
      return (
        <span key={key} className="marker">
          {p.slice(1, -1)}
        </span>
      );
    if (p.startsWith("_") && p.endsWith("_") && p.length > 2)
      return (
        <em key={key} className="font-display not-italic text-[1.12em] text-terracotta">
          {p.slice(1, -1)}
        </em>
      );
    if (p.startsWith("`") && p.endsWith("`") && p.length > 2)
      return (
        <span key={key} className="machine-text text-[0.92em]">
          {p.slice(1, -1)}
        </span>
      );
    return <span key={key}>{p}</span>;
  });
}

/* ─────────────── block renderer ─────────────── */

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        const key = `b${i}`;
        switch (b.k) {
          case "p":
            return (
              <p
                key={key}
                className={`book-p ${b.drop ? "book-drop" : ""}`}
              >
                {rich(b.t, key)}
              </p>
            );

          case "sub":
            return (
              <h3 key={key} className="book-sub">
                {b.t}
              </h3>
            );

          case "quote":
            return (
              <blockquote key={key} className="book-quote">
                <p className="font-display text-[24px] leading-[1.24] text-terracotta">
                  {rich(b.t, key)}
                </p>
                {b.by && (
                  <footer className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-sand">
                    {b.by}
                  </footer>
                )}
              </blockquote>
            );

          case "list":
            return (
              <ul key={key} className="book-list">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-[2px] shrink-0 font-mono text-[10px] text-terracotta">
                      {b.ordered ? String(j + 1).padStart(2, "0") : "—"}
                    </span>
                    <span>{rich(it, `${key}-${j}`)}</span>
                  </li>
                ))}
              </ul>
            );

          case "kv":
            return (
              <dl key={key} className="book-kv">
                {b.items.map(([k, v], j) => (
                  <div
                    key={j}
                    className="grid grid-cols-[168px_1fr] gap-x-5 border-b border-rule/70 py-[9px]"
                  >
                    <dt className="font-display text-[15px] leading-[1.35] text-terracotta">{k}</dt>
                    <dd className="text-[12.5px] leading-[1.55] text-ink/85">
                      {rich(v, `${key}-${j}`)}
                    </dd>
                  </div>
                ))}
              </dl>
            );

          case "stats":
            return (
              <div key={key} className="book-stats">
                {b.items.map(([v, l], j) => (
                  <div key={j}>
                    <p className="hero-num text-[46px] text-ink">{v}</p>
                    <p className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-sand">
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            );

          case "table":
            return (
              <div key={key} className="book-figure">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th
                          key={j}
                          className="border-b border-ink/25 pb-2 font-mono text-[9.5px] font-normal uppercase tracking-[0.2em] text-sand"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, m) => (
                          <td
                            key={m}
                            className={`border-b border-rule/70 py-[9px] pr-4 align-top text-[12px] leading-[1.5] ${
                              m === 0 ? "font-display text-[14px] text-ink" : "text-ink/85"
                            }`}
                          >
                            {rich(c, `${key}-${j}-${m}`)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "note":
            return (
              <aside key={key} className="book-note">
                <p className="font-display text-[16px] leading-[1.25]">{b.t}</p>
                {b.body.map((x, j) => (
                  <p key={j} className="mt-2 text-[11.5px] leading-[1.58] text-ink/80">
                    {rich(x, `${key}-${j}`)}
                  </p>
                ))}
              </aside>
            );

          case "figure":
            return (
              <figure key={key} className="book-figure">
                <img
                  src={b.src}
                  alt={b.alt}
                  className="w-full rounded-[2px] border border-rule object-cover"
                />
                <figcaption className="mt-2 font-mono text-[10px] leading-[1.5] text-sand">
                  {b.caption}
                </figcaption>
              </figure>
            );

          case "gallery":
            return (
              <figure key={key} className="book-figure">
                <div className="grid grid-cols-2 gap-3">
                  {b.items.map((it, j) => (
                    <img
                      key={j}
                      src={it.src}
                      alt={it.alt}
                      className="h-[188px] w-full rounded-[2px] border border-rule object-cover object-top"
                    />
                  ))}
                </div>
                <figcaption className="mt-2 font-mono text-[10px] leading-[1.5] text-sand">
                  {b.caption}
                </figcaption>
              </figure>
            );

          case "fork":
            return (
              <div key={key} className="book-figure flex items-center gap-6">
                <span className="font-display text-[30px] text-terracotta">{b.source}</span>
                <div className="relative pl-7">
                  <span className="absolute left-0 top-1/2 h-px w-7 bg-terracotta/60" />
                  <div className="space-y-1.5 border-l border-terracotta/50 pl-4">
                    {b.items.map(([t, tag], j) => (
                      <p key={j} className="flex items-baseline gap-3">
                        <span className="font-display text-[17px]">{t}</span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-sand">
                          {tag}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );

          case "rule":
          default:
            return <hr key={key} className="book-rule" />;
        }
      })}
    </>
  );
}

/* ─────────────── the book ─────────────── */

function RunningHead({ copy, chapter }: { copy: BookCopy; chapter: Chapter }) {
  return (
    <div className="book-runhead">
      <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-sand">
        {copy.brow}
      </span>
      <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-sand">
        {String(chapter.n).padStart(2, "0")} · {chapter.title}
      </span>
    </div>
  );
}

export function Book({ copy }: { copy: BookCopy }) {
  return (
    <article className="book" lang={copy.htmlLang}>
      {/* title page */}
      <section className="book-sheet book-titlepage grain">
        <div className="flex min-h-0 flex-1 flex-col justify-between">
          <p className="kicker text-terracotta">{copy.brow}</p>
          <div>
            <ToneForkMark tone="dark" />
            <h1 className="mt-8 font-display text-[86px] leading-[0.9] tracking-[-0.035em]">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-[52ch] font-display text-[24px] leading-[1.22] text-terracotta">
              {copy.subtitle}
            </p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-sand">
            {copy.edition}
          </p>
        </div>
      </section>

      {/* contents */}
      <section className="book-sheet grain">
        <div className="book-body">
          <p className="kicker text-sand">{copy.contentsTitle}</p>
          <ol className="mt-8">
            {copy.chapters.map((c) => (
              <li
                key={c.n}
                className="grid grid-cols-[44px_1fr] items-baseline gap-x-4 border-b border-rule/70 py-[11px]"
              >
                <span className="font-mono text-[11px] text-terracotta">
                  {String(c.n).padStart(2, "0")}
                </span>
                <span>
                  <span className="font-display text-[19px] leading-[1.2]">{c.title}</span>
                  <span className="mt-0.5 block text-[11.5px] leading-[1.5] text-sand">
                    {c.kicker}
                  </span>
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-10 border-t border-rule pt-5">
            {copy.colophon.map((x, i) => (
              <p key={i} className="text-[11px] leading-[1.6] text-sand">
                {x}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* chapters */}
      {copy.chapters.map((c) => (
        <section key={c.n} className="book-sheet grain">
          <RunningHead copy={copy} chapter={c} />
          <div className="book-body">
            <header className="book-chapter-head">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-terracotta">
                {String(c.n).padStart(2, "0")} — {c.kicker}
              </p>
              <h2 className="mt-4 font-display text-[44px] leading-[1.02] tracking-[-0.02em]">
                {c.title}
              </h2>
              <p className="mt-4 max-w-[46ch] font-display text-[21px] leading-[1.26] text-terracotta">
                {c.lead}
              </p>
              <div className="mt-6 h-px w-full bg-rule" />
            </header>
            <Blocks blocks={c.blocks} />
          </div>
        </section>
      ))}
    </article>
  );
}

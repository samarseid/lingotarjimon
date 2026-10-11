import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ToneFork, ToneForkMark } from "./ToneFork";
import shotHome from "@/assets/Screenshot_2026-08-10_010506.png";
import shotPoem from "@/assets/Screenshot_2026-08-10_010557.png";
import shotFile from "@/assets/Screenshot_2026-08-10_010535.png";
import shotBot from "@/assets/photo_2026-08-10_01-07-20.jpg";

type Variant = "paper" | "terracotta" | "ink";

const BG: Record<Variant, string> = {
  paper: "bg-paper text-ink",
  terracotta: "bg-terracotta text-paper",
  ink: "bg-ink text-paper",
};

function Stage({
  children,
  variant = "paper",
  kicker,
  num,
}: {
  children: ReactNode;
  variant?: Variant;
  kicker?: string;
  num?: string;
}) {
  const light = variant !== "paper";
  return (
    <div className={`slide-stage grain ${BG[variant]}`}>
      {kicker && (
        <span
          className={`kicker absolute left-[72px] top-[54px] z-20 ${
            light ? "text-paper/55" : "text-sand"
          }`}
        >
          {kicker}
        </span>
      )}
      {num && (
        <span
          className={`absolute right-[72px] top-[52px] z-20 font-mono text-[12px] ${
            light ? "text-paper/45" : "text-sand"
          }`}
        >
          {num} / 15
        </span>
      )}
      <div
        className={`absolute left-[72px] right-[72px] top-[78px] z-20 h-px ${
          light ? "bg-paper/25" : "hairline"
        }`}
      />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Oversized headline that bleeds slightly past the left margin. */
function Head({
  children,
  sm = false,
  className = "",
}: {
  children: ReactNode;
  sm?: boolean;
  className?: string;
}) {
  return (
    <h2 className={`${sm ? "slide-title-sm" : "slide-title"} -ml-[3px] ${className}`}>
      {children}
    </h2>
  );
}

function Note({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`absolute bottom-[46px] left-[72px] font-mono text-[12px] italic ${
        light ? "text-paper/50" : "text-sand"
      }`}
    >
      {children}
    </p>
  );
}

/* ─────────────────────────── 1 · Hook ─────────────────────────── */
function Slide01() {
  return (
    <Stage variant="ink" num="01">
      <div className="absolute inset-0 overflow-hidden">
        {/* the word itself, oversized and cropped by the right edge */}
        <span className="font-display absolute -left-[10px] top-[26px] text-[280px] leading-[0.8] tracking-[-0.05em] text-paper/10">
          salom
        </span>

        <div className="absolute left-[72px] top-[300px] w-[560px]">
          <p className="kicker text-paper/45">Machine</p>
          <p className="machine-text mt-3 text-[40px] text-paper/45">salom → hello</p>

          <p className="kicker mt-14 text-terracotta">Lingo</p>
          <p className="font-display mt-3 text-[52px] leading-[1.05] text-paper">
            hi · wassup ·<br />
            good day · hey you
          </p>
        </div>

        <div className="absolute right-[86px] top-[250px] rotate-[-2deg]">
          <ToneFork size="md" tone="light" />
        </div>

        <div className="absolute bottom-[54px] left-[72px] flex items-end gap-8">
          <div>
            <p className="font-display text-[34px] leading-none text-paper">LINGO</p>
            <p className="mt-2 font-mono text-[12px] italic text-paper/45">
              Translation that knows who's speaking, and to whom.
            </p>
          </div>
        </div>
        <div className="absolute bottom-[58px] right-[72px]">
          <ToneForkMark tone="light" />
        </div>
      </div>
    </Stage>
  );
}

/* ─────────────────────── 2 · Where it started ─────────────────── */
function Slide02() {
  return (
    <Stage kicker="Origin" num="02">
      <div className="absolute left-[72px] top-[132px] w-[700px]">
        <Head>
          This idea
          <br />
          did not come
          <br />
          from a deck
        </Head>
      </div>

      <div className="absolute right-[72px] top-[150px] w-[400px] rotate-[1.2deg] border border-border bg-secondary/70 p-8 text-[17px] leading-[1.5]">
        <p>
          I used to text friends abroad through a translator. Every single time, they{" "}
          <span className="marker">noticed instantly</span>.
        </p>
        <p className="mt-5">
          The grammar was never the problem. I wrote correctly — but{" "}
          <span className="marker">not like a human</span>.
        </p>
      </div>

      <p className="font-display absolute bottom-[92px] left-[72px] w-[640px] text-[27px] leading-[1.25] text-terracotta">
        I built Lingo because I needed it. Then my friends asked for it. Then their friends did.
      </p>

      <div className="absolute bottom-[70px] right-[96px] rotate-[-3deg]">
        <ToneFork size="sm" muted animate={false} />
      </div>
    </Stage>
  );
}

/* ────────────────────────── 3 · Problem ─────────────────────────── */
function Slide03() {
  const cols = [
    {
      n: "01",
      h: "Tone",
      t: "Translators give you one option. In real life you don't write to your boss, your best friend and your partner the same way.",
      rot: "-2.2deg",
      top: 300,
      left: 72,
    },
    {
      n: "02",
      h: "Gender",
      t: 'In Arabic "you wrote" is kataba to a man, katabti to a woman. In Russian "я сказал / я сказала". If the source hides gender, the machine simply guesses.',
      rot: "1.4deg",
      top: 332,
      left: 466,
    },
    {
      n: "03",
      h: "Learning",
      t: 'Courses teach formal language. Living language — nobody does. IELTS exists; there is no certificate for "street English".',
      rot: "-1.1deg",
      top: 286,
      left: 860,
    },
  ];
  return (
    <Stage kicker="Problem" num="03">
      <div className="absolute left-[72px] top-[120px]">
        <Head>
          Three problems.
          <br />
          One <span className="italic text-terracotta">root.</span>
        </Head>
      </div>

      {cols.map((c) => (
        <div
          key={c.n}
          className="absolute w-[348px] border border-border bg-paper p-7 shadow-[6px_6px_0_0_color-mix(in_oklab,var(--terracotta)_16%,transparent)]"
          style={{ top: c.top, left: c.left, transform: `rotate(${c.rot})` }}
        >
          <span className="font-mono text-[12px] text-terracotta">{c.n}</span>
          <h3 className="font-display mt-2 text-[34px] leading-none">{c.h}</h3>
          <p className="mt-4 text-[15px] leading-[1.5] text-ink/80">{c.t}</p>
        </div>
      ))}

      <p className="font-display absolute bottom-[54px] left-[72px] w-[900px] text-[26px] leading-[1.2] text-terracotta">
        All three come from the same cause: the machine doesn't know who is speaking.
      </p>
    </Stage>
  );
}

/* ─────────────────────────── 4 · Proof ─────────────────────────── */
function Slide04() {
  return (
    <Stage kicker="Proof" num="04">
      <div className="absolute left-[72px] top-[112px] w-[560px]">
        <Head sm>
          Neither Google
          <br />
          nor DeepL
          <br />
          ever asks
          <br />
          this question
        </Head>
        <p className="font-display mt-8 text-[36px] italic leading-[1.1] text-terracotta">
          Is the speaker
          <br />
          a woman or a man?
        </p>
      </div>

      {/* vertical split rule */}
      <div className="absolute bottom-[70px] left-[660px] top-[112px] w-px bg-rule" />

      <div className="absolute left-[712px] right-[72px] top-[126px]">
        <div className="border border-border bg-secondary/60 p-7">
          <p className="kicker text-sand">Google Translate</p>
          <p className="machine-text mt-3 text-[22px]">men keldim</p>
          <p className="machine-text mt-1 text-[22px]">я пришёл</p>
          <p className="mt-2 font-mono text-[12px] text-sand">← always male</p>
        </div>

        <div className="mt-6 rotate-[-1deg] border-2 border-terracotta bg-paper p-7">
          <p className="kicker text-terracotta">Lingo · speaker: female</p>
          <p className="mt-3 font-mono text-[22px] text-ink">men keldim</p>
          <p className="font-display mt-1 text-[46px] leading-none text-terracotta">
            я пришла <span className="text-signal">✓</span>
          </p>
        </div>

        <p className="mt-7 text-[15px] leading-[1.5] text-sand">
          Speaker gender is a grammatical requirement in Arabic, Russian, Hebrew, Hindi, Spanish and
          French. DeepL has a formality switch — but no speaker gender.
        </p>
      </div>

      <Note>No major translator asks who is speaking. We do.</Note>
    </Stage>
  );
}

/* ────────────────────────── 5 · Solution ─────────────────────────── */
function Slide05() {
  const qs = [
    { q: "Who is speaking?", a: "gender · age · person or company" },
    { q: "To whom?", a: "manager · friend · client · someone you love" },
    { q: "In what tone?", a: "12 styles · formality level" },
  ];
  return (
    <Stage kicker="Solution" num="05">
      <div className="absolute left-[72px] top-[118px] w-[520px]">
        <Head sm>
          Lingo asks three
          <br />
          questions before
          <br />
          it translates
        </Head>

        <div className="mt-10 space-y-7">
          {qs.map((x, i) => (
            <div key={x.q} className="flex gap-5">
              <span className="mt-2 font-mono text-[12px] text-terracotta">0{i + 1}</span>
              <div>
                <p className="font-display text-[32px] leading-none">{x.q}</p>
                <p className="mt-2 font-mono text-[13px] text-sand">→ {x.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-[64px] top-[186px] rotate-[-1.5deg]">
        <ToneFork size="lg" />
      </div>
    </Stage>
  );
}

/* ─────────────────── 6 · Live today ──────────────────── */
function Slide06() {
  const items = [
    "Web platform — lingo-translator.uz",
    "Telegram mini app",
    "26+ languages · 12 styles",
    "Speaker and recipient context",
    "File translation",
    "Poetry translation — rhyme and meter preserved",
    "Glossary · voice input · history",
  ];
  const shots = [
    {
      src: shotHome,
      alt: "Lingo web platform home screen",
      cls: "left-[16px] top-[0px] h-[214px] rotate-[-3deg] z-20",
    },
    {
      src: shotBot,
      alt: "Lingo Telegram mini app bot",
      cls: "left-[232px] top-[40px] h-[214px] rotate-[2.5deg] z-30",
    },
    {
      src: shotPoem,
      alt: "Lingo poetry translation screen",
      cls: "left-[62px] top-[224px] h-[172px] rotate-[1.5deg] z-10",
    },
    {
      src: shotFile,
      alt: "Lingo file translation screen",
      cls: "left-[268px] top-[268px] h-[172px] rotate-[-2deg] z-20",
    },
  ];
  return (
    <Stage kicker="Traction" num="06">
      <div className="absolute left-[72px] top-[112px]">
        <Head sm>
          Not a plan —<br />
          <span className="italic text-terracotta">it ships</span>
        </Head>
      </div>

      <div className="absolute left-[52px] top-[236px] h-[452px] w-[540px]">
        {shots.map((s) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={`absolute w-auto rounded-[3px] border border-border object-cover object-top shadow-[10px_10px_0_0_color-mix(in_oklab,var(--ink)_10%,transparent)] ${s.cls}`}
          />
        ))}
      </div>

      <ul className="absolute right-[72px] top-[150px] w-[470px]">
        {items.map((i, idx) => (
          <li
            key={i}
            className="flex items-baseline gap-4 border-b border-border py-[13px] text-[17px]"
          >
            <span className="font-mono text-[11px] text-terracotta">
              {String(idx + 1).padStart(2, "0")}
            </span>
            {i}
          </li>
        ))}
      </ul>

      <p className="font-display absolute bottom-[64px] right-[72px] w-[470px] text-right text-[26px] leading-[1.2] text-terracotta">
        All of it built with zero outside funding.
      </p>
    </Stage>
  );
}

/* ────────────────────────── 7 · Numbers ───────────────────────── */
function Slide07() {
  const nums = [
    { n: "120", l: "users" },
    { n: "~1200", l: "monthly visits" },
    { n: "~100%", l: "monthly return" },
    { n: "$0", l: "ad spend" },
  ];
  return (
    <Stage variant="terracotta" kicker="Numbers" num="07">
      <div className="absolute left-[72px] top-[120px]">
        <p className="font-display text-[96px] leading-[0.9] tracking-[-0.03em] text-paper">
          No ads.
        </p>
      </div>

      <div className="absolute left-[72px] right-[72px] top-[288px] grid grid-cols-4">
        {nums.map((x, i) => (
          <div key={x.n} className={i === 0 ? "pr-6" : "border-l border-paper/25 pl-7 pr-6"}>
            <p className="hero-num text-[84px] text-paper">{x.n}</p>
            <p className="mt-4 font-mono text-[13px] text-paper/60">{x.l}</p>
          </div>
        ))}
      </div>

      <p className="absolute bottom-[86px] left-[72px] w-[780px] text-[17px] leading-[1.5] text-paper/75">
        People don't come every day — they come when the need appears. Yet within a month almost all
        of them come back. Every bit of growth is word of mouth.
      </p>

      <div className="absolute bottom-[74px] right-[72px]">
        <ToneForkMark tone="light" />
      </div>
    </Stage>
  );
}

/* ───────────────────────── 8 · Foundation ────────────────────────── */
function Slide08() {
  const layers = [
    { n: "4", t: "Voice translation · real-time conversation", w: "future" },
    { n: "3", t: "Keyboard · extension — everywhere", w: "6–12 mo" },
    { n: "2", t: "Personal language learning", w: "4–8 mo" },
    { n: "1", t: "TRANSLATION — live today", w: "✓" },
  ];
  return (
    <Stage kicker="Strategy" num="08">
      <div className="absolute left-[72px] top-[112px] w-[560px]">
        <Head sm>
          Translation is
          <br />
          not the product.
          <br />
          <span className="italic text-terracotta">It's the base.</span>
        </Head>
      </div>

      <div className="absolute left-[72px] top-[392px] w-[600px]">
        {layers.map((l, i) => {
          const base = i === layers.length - 1;
          return (
            <div
              key={l.n}
              className={`flex items-center justify-between border border-border px-6 py-[14px] ${
                i > 0 ? "border-t-0" : ""
              } ${base ? "bg-terracotta" : "bg-clay/30"}`}
              style={{ marginLeft: base ? 0 : (3 - i) * 14 }}
            >
              <span className={`font-display text-[20px] ${base ? "text-paper" : "text-ink"}`}>
                <span className="mr-3 font-mono text-[12px] opacity-60">{l.n}</span>
                {l.t}
              </span>
              <span className={`font-mono text-[12px] ${base ? "text-paper/75" : "text-sand"}`}>
                {l.w}
              </span>
            </div>
          );
        })}
      </div>

      <div className="slash absolute right-[72px] top-[150px] w-[490px] text-[17px] leading-[1.55]">
        <p>
          Every translation reveals one thing:{" "}
          <span className="marker">what this person could not say themselves.</span>
        </p>
        <p className="mt-5">
          Duolingo teaches abstract vocabulary. We teach the exact phrase you failed to say
          yesterday.
        </p>
        <p className="mt-5">
          Nobody else holds this data — because for competitors translation and learning are separate
          products.
        </p>
      </div>

      <Note>Translation is the entry point. Learning is the product.</Note>
    </Stage>
  );
}

/* ──────────────────── 9 · Market gap ───────────────────── */
function Slide09() {
  const reasons: [string, string][] = [
    ["01", "Slang moves fast. A textbook is reprinted every 3–4 years — outdated the day it ships."],
    [
      "02",
      'Exams drive the curriculum. There is no certificate in "street language", so nobody teaches it.',
    ],
    ["03", 'Teachers learned academically. They read "wassup" in a book; they never used it.'],
  ];
  return (
    <Stage kicker="The gap" num="09">
      <div className="absolute left-[72px] top-[116px] w-[540px]">
        <Head sm>
          Everyone teaches
          <br />
          IELTS.
          <br />
          Living language —<br />
          <span className="italic text-terracotta">nobody.</span>
        </Head>
        <p className="mt-8 w-[430px] text-[16px] leading-[1.55] text-ink/80">
          People study English for ten years. They still can't follow a film, don't know chat
          abbreviations, and sound like a child when they write.
        </p>
      </div>

      <div className="absolute bottom-[56px] left-[80px] rotate-[-4deg]">
        <ToneFork size="sm" muted source="Sup" animate={false} />
      </div>

      <div className="absolute right-[72px] top-[140px] w-[520px]">
        {reasons.map(([n, t], i) => (
          <div
            key={n}
            className="mb-5 border border-border bg-paper p-6"
            style={{ transform: `rotate(${i % 2 === 0 ? "1" : "-1.3"}deg)`, marginLeft: i * 10 }}
          >
            <span className="font-mono text-[12px] text-terracotta">{n}</span>
            <p className="mt-2 text-[16px] leading-[1.5]">{t}</p>
          </div>
        ))}
        <p className="font-display mt-6 text-right text-[22px] leading-[1.25] text-terracotta">
          Our system updates weekly. A publisher never can.
        </p>
      </div>
    </Stage>
  );
}

/* ─────────────────────────── 10 · Market ────────────────────────── */
function Slide10() {
  const waves: [string, string, number][] = [
    ["Today", "Uzbekistan · ~31M internet users, ~6–9M addressable", 0.46],
    ["Year 1", "Central Asia (~40M) + diaspora and migration (2–3M)", 0.64],
    ["Year 2", "Türkiye and Turkic-speaking countries (~90M)", 0.82],
    ["Year 3", "Global", 1],
  ];
  return (
    <Stage variant="ink" kicker="Market" num="10">
      {/* hero number cropped by the right edge */}
      <p className="hero-num absolute right-[16px] top-[104px] z-0 text-[240px] text-terracotta/85">
        $60
      </p>
      <p className="font-display absolute right-[40px] top-[330px] z-10 text-[52px] leading-none text-paper">
        bn+
      </p>
      <p className="absolute right-[40px] top-[392px] z-10 w-[210px] font-mono text-[12px] leading-relaxed text-paper/50">
        global language learning market, annual
      </p>

      <div className="absolute left-[72px] top-[124px] z-10 w-[720px]">
        <p className="font-display text-[72px] leading-[0.95] text-paper">
          The problem
          <br />
          isn't local
        </p>

        <div className="mt-10 space-y-3">
          {waves.map(([k, t, w], i) => (
            <div
              key={k}
              className="flex items-center gap-5 border border-paper/20 px-5 py-[13px]"
              style={{
                width: `${w * 100}%`,
                backgroundColor: `color-mix(in oklab, var(--terracotta) ${10 + i * 12}%, transparent)`,
              }}
            >
              <span className="w-[62px] shrink-0 font-mono text-[12px] text-terracotta">{k}</span>
              <span className="text-[15px] text-paper/90">{t}</span>
            </div>
          ))}
        </div>
      </div>

      <Note light>The problem isn't local. Neither is the market.</Note>
    </Stage>
  );
}

/* ────────────────────── 11 · Business model ─────────────────────── */
function Slide11() {
  const tiers: [string, string][] = [
    ["Free", "limited daily translations, core styles"],
    ["Pro", "unlimited, 12 styles, files, poetry, history, learning module"],
    ["B2B", "dubbing and subtitle studios · team accounts · education institutions"],
  ];
  return (
    <Stage kicker="Business model" num="11">
      <div className="absolute left-[72px] top-[112px] w-[600px]">
        <Head sm>
          Free translation
          <br />
          brings them in.
          <br />
          <span className="italic text-terracotta">Learning</span> keeps
          <br />
          them.
        </Head>
      </div>

      <div className="absolute right-[72px] top-[132px] w-[520px]">
        {tiers.map(([n, d], i) => (
          <div
            key={n}
            className={`mb-4 border border-border p-6 ${i === 1 ? "bg-terracotta text-paper" : "bg-secondary/50"}`}
            style={{ transform: `rotate(${i === 1 ? "-1.2" : "0.6"}deg)`, marginLeft: i * 8 }}
          >
            <p
              className={`font-display text-[30px] leading-none ${i === 1 ? "" : "text-terracotta"}`}
            >
              {n}
            </p>
            <p className={`mt-2 text-[15px] ${i === 1 ? "text-paper/85" : "text-ink/80"}`}>{d}</p>
          </div>
        ))}
      </div>

      <div className="slash absolute bottom-[128px] left-[72px] w-[540px] text-[17px] leading-[1.55]">
        <p>Translation is not a recurring need. People come when they need it.</p>
        <p className="mt-3">Learning is a daily need.</p>
        <p className="font-display mt-3 text-[21px] leading-[1.25] text-terracotta">
          That's why the learning layer is what justifies a subscription.
        </p>
      </div>

      <p className="absolute bottom-[52px] left-[72px] w-[640px] font-mono text-[12px] leading-relaxed text-sand">
        Cost control: short requests go to a fast model, complex ones to a strong model. Repeated
        requests are cached.
      </p>
    </Stage>
  );
}

/* ────────────────────────── 12 · Competition ───────────────────────── */
function Slide12() {
  const them: [string, string][] = [
    ["Google", "fast, universal, no context"],
    ["DeepL", "high quality, partial formality, no gender"],
    ["Duolingo", "gamified, abstract words, no translation"],
  ];
  const us = [
    "12 styles · tone selection",
    "Speaker gender",
    "Living / street language",
    "Translation + learning together",
    "Under-served languages first",
  ];
  return (
    <Stage kicker="Competition" num="12">
      <div className="absolute left-[72px] top-[112px] w-[560px]">
        <Head sm>
          Why they
          <br />
          won't do
          <br />
          this
        </Head>

        <div className="mt-10 space-y-4">
          {them.map(([n, d]) => (
            <div key={n} className="border-b border-border pb-4 opacity-55">
              <p className="font-mono text-[19px] text-ink">{n}</p>
              <p className="machine-text mt-1 text-[15px]">{d}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-[72px] top-[132px] w-[500px] rotate-[-1deg] border-2 border-terracotta bg-paper p-8 shadow-[10px_10px_0_0_color-mix(in_oklab,var(--terracotta)_18%,transparent)]">
        <p className="font-display text-[46px] leading-none text-terracotta">Lingo</p>
        <ul className="mt-6 space-y-3">
          {us.map((u) => (
            <li key={u} className="flex items-baseline gap-3 text-[17px]">
              <span className="text-signal">✓</span>
              {u}
            </li>
          ))}
        </ul>
      </div>

      <p className="font-display absolute bottom-[56px] right-[72px] w-[560px] text-right text-[24px] leading-[1.2] text-terracotta">
        They are universal. We are focused. A universal product fits nobody perfectly.
      </p>
    </Stage>
  );
}

/* ───────────────────────── 13 · Roadmap ──────────────────── */
function Slide13() {
  const blocks: [string, string, string][] = [
    [
      "0–6 mo",
      "Learning module · personal vocabulary and flashcards · Telegram inline mode · shareable cards",
      "10,000 active users, Pro tier launched",
    ],
    [
      "6–12 mo",
      "Mobile keyboard (iOS/Android) · browser extension · native-speaker quality review",
      "First B2B pilot, stable MRR",
    ],
    [
      "12–18 mo",
      "Voice translation · dubbing and subtitle track · fine-tuned open model",
      "Expansion beyond the region",
    ],
  ];
  return (
    <Stage kicker="Roadmap" num="13">
      <div className="absolute left-[72px] top-[118px]">
        <Head>
          The next <span className="italic text-terracotta">18 months</span>
        </Head>
      </div>

      <div className="absolute left-[72px] right-[72px] top-[316px]">
        <div className="hairline h-px w-full" />
        <div className="grid grid-cols-3 gap-9">
          {blocks.map(([t, d, g], i) => (
            <div key={t} className="relative pt-9" style={{ marginTop: i * 26 }}>
              <div className="absolute -top-[5px] left-0 h-[10px] w-[10px] rounded-full bg-terracotta" />
              <p className="font-display text-[34px] leading-none text-terracotta">{t}</p>
              <p className="mt-4 text-[16px] leading-[1.5]">{d}</p>
              <p className="mt-4 font-mono text-[12px] italic text-sand">→ {g}</p>
            </div>
          ))}
        </div>
      </div>
    </Stage>
  );
}

/* ──────────────────────── 14 · Team and ask ─────────────────── */
function Slide14() {
  const team: [string, string, string, string][] = [
    ["Samar Saidov", "CEO", "Entrepreneur, traveller, founder", "SS"],
    ["To'rabek Yo'ldoshev", "CTO", "Software engineer, founder", "SS"],
    ["Majitov Zuxriddin", "CMO", "Marketer, brand builder", "TY"],
  ];
  const alloc: [string, string][] = [
    ["40%", "Product — learning module"],
    ["30%", "Keyboard and extension"],
    ["20%", "Quality review, slang database"],
    ["10%", "Infrastructure and AI"],
  ];
  return (
    <Stage kicker="Team and ask" num="14">
      <div className="absolute left-[72px] top-[112px] flex items-baseline gap-8">
        <Head sm>Team</Head>
      </div>

      <div className="absolute left-[72px] right-[72px] top-[206px] grid grid-cols-3 gap-8">
        {team.map(([n, r, d, ini], i) => (
          <div key={n} className="flex items-center gap-4" style={{ marginTop: i * 12 }}>
            <div className="font-display flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-terracotta text-[19px] text-paper">
              {ini}
            </div>
            <div>
              <p className="font-display text-[22px] leading-tight">{n}</p>
              <p className="font-mono text-[12px] text-terracotta">{r}</p>
              <p className="text-[13px] italic text-sand">{d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-[80px] left-[72px] right-[72px] rotate-[-0.6deg] border border-border bg-clay/25 p-8">
        <div className="flex items-baseline gap-5">
          <p className="hero-num text-[68px] text-terracotta">$50,000</p>
          <p className="font-mono text-[13px] text-sand">incubation grant</p>
        </div>
        <div className="mt-7 grid grid-cols-4 gap-6">
          {alloc.map(([p, l]) => (
            <div key={l} className="border-l border-border pl-4">
              <p className="font-display text-[30px] leading-none">{p}</p>
              <p className="mt-2 text-[13px] leading-snug text-ink/75">{l}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-[12px] text-ink/75">
          In 6 months: 10,000 active users · Pro tier launched · first B2B pilot
        </p>
      </div>

      <Note>We're raising $50,000 to build the learning layer.</Note>
    </Stage>
  );
}

/* ────────────────────────── 15 · Close ─────────────────────────── */
function Slide15() {
  return (
    <Stage variant="ink" num="15">
      <span className="font-display absolute -bottom-[70px] -left-[10px] text-[280px] leading-none tracking-[-0.05em] text-paper/[0.07]">
        lingo
      </span>

      <div className="absolute left-[72px] top-[200px] w-[900px]">
        <h2 className="font-display text-[74px] leading-[1.02] tracking-[-0.03em] text-paper">
          Translate enough,
          <br />
          <span className="italic text-terracotta">and you won't need a translator.</span>
        </h2>
        <p className="mt-10 font-mono text-[13px] italic text-paper/45">
          Tarjima qilaverib, tarjimonga muhtoj bo'lmay qolasiz.
        </p>
      </div>

      <div className="absolute bottom-[64px] left-[72px] flex items-end gap-8">
        <p className="font-display text-[30px] leading-none text-paper">LINGO</p>
        <p className="font-mono text-[13px] text-paper/55">lingo-translator.uz</p>
      </div>
      <div className="absolute bottom-[62px] right-[72px]">
        <ToneForkMark tone="light" />
      </div>
    </Stage>
  );
}

export const slides: { id: number; title: string; Component: () => ReactNode }[] = [
  { id: 1, title: "Hook", Component: Slide01 },
  { id: 2, title: "Where it started", Component: Slide02 },
  { id: 3, title: "Three problems, one root", Component: Slide03 },
  { id: 4, title: "Proof", Component: Slide04 },
  { id: 5, title: "Solution", Component: Slide05 },
  { id: 6, title: "Live today", Component: Slide06 },
  { id: 7, title: "Numbers", Component: Slide07 },
  { id: 8, title: "Foundation", Component: Slide08 },
  { id: 9, title: "Market gap", Component: Slide09 },
  { id: 10, title: "Market", Component: Slide10 },
  { id: 11, title: "Business model", Component: Slide11 },
  { id: 12, title: "Competition", Component: Slide12 },
  { id: 13, title: "Roadmap", Component: Slide13 },
  { id: 14, title: "Team and ask", Component: Slide14 },
  { id: 15, title: "Close", Component: Slide15 },
];

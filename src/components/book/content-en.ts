import type { BookCopy } from "./BookShell";
import shotHome from "@/assets/Screenshot_2026-08-10_010506.png";
import shotFile from "@/assets/Screenshot_2026-08-10_010535.png";
import shotPoetry from "@/assets/Screenshot_2026-08-10_010557.png";
import shotHistory from "@/assets/Screenshot_2026-08-10_010546.png";
import shotBot from "@/assets/photo_2026-08-10_01-07-20.jpg";

export const bookEn: BookCopy = {
  lang: "en",
  htmlLang: "en",
  brow: "Lingo · Investor Book",
  title: "Who is speaking?",
  subtitle:
    "An investor book about the one question no translator asks — and the company we are building on the answer.",
  edition: "First edition · 2026 · Tashkent",
  contentsTitle: "Contents",
  colophon: [
    "Prepared for investors. All product screens in this book are live screens, not mockups.",
    "Traction figures are as of August 2026 and are stated without rounding up.",
    "Contact: Samar Saidov · lingo-translator.uz",
  ],
  ui: {
    heading: "Lingo — Investor Book",
    meta: "12 chapters · A4 portrait · English edition",
    deck: "Pitch deck",
    print: "Save as PDF",
    other: "O‘zbekcha nashr",
    otherHref: "/kitob",
  },

  chapters: [
    {
      n: 1,
      kicker: "Foreword",
      title: "A sentence that never got sent",
      lead: "Every day millions of people write a message in a foreign language, read it back, and delete it.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "The founder of this company once spent eleven minutes writing four sentences to a foreign client. The grammar was correct — a machine had produced it. But it did not sound like him. It sounded like a form. He rewrote it three times, then wrote something shorter and safer instead, and lost the tone he actually needed.",
        },
        {
          k: "p",
          t: "That is the moment Lingo is built around. Not the moment a translation is wrong, but the moment a translation is _correct and still unusable_. Machine translation solved meaning years ago. What it never solved is the part a human hears first: who is speaking, to whom, and in what register.",
        },
        {
          k: "quote",
          t: "Translation is a solved problem. Sounding like yourself in another language is not.",
        },
        {
          k: "p",
          t: "This book is written for one kind of reader: an investor who wants to know whether this is a thin wrapper around a model, or a company with a compounding asset. We answer that directly in chapter 07, and we do not hide the parts that are still small — chapter 06 states our traction plainly, including the number that is not yet impressive.",
        },
        {
          k: "kv",
          items: [
            ["What we are", "A translator that asks about speaker, listener and tone before it translates"],
            ["What we already run", "Web platform, Telegram mini app, 26+ languages, 12 registers"],
            ["What we are building", "A personal language-learning layer fed by real translation behaviour"],
            ["What we are raising", "Pre-seed / seed, to build the learning layer and the keyboard"],
          ],
        },
      ],
    },

    {
      n: 2,
      kicker: "The problem",
      title: "Three problems, one root",
      lead: "Translators are grammatically correct and humanly wrong.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "A translation carries more than meaning. It carries a relationship. When you write to your manager, your closest friend and someone you love, you are the same person using three different languages — and every existing translator collapses all three into one flat output.",
        },
        { k: "sub", t: "01 · Tone is not a setting, it is the message" },
        {
          k: "p",
          t: "Google Translate returns one string. DeepL adds a formal/informal switch, which is two options for a problem that has at least a dozen. Nobody addresses their boss the way they address a childhood friend, and a translation that gets the register wrong is not a small stylistic miss — it is read as rudeness, coldness, or naivety.",
        },
        {
          k: "fork",
          source: "salom",
          items: [
            ["Hi", "casual"],
            ["Wassup", "street"],
            ["Good day", "business"],
            ["Hey you", "romantic"],
          ],
        },
        { k: "sub", t: "02 · Gender is grammar, not preference" },
        {
          k: "p",
          t: "In Arabic, `kataba` is “you wrote” to a man and `katabti` to a woman. In Russian, a woman says `я сказала` and a man says `я сказал`. Uzbek does not mark this at all. So when the source language is genderless and the target language demands gender, the machine has to choose — and it chooses masculine, silently, every time.",
        },
        {
          k: "p",
          t: "For roughly half of all users, that means a translator that has been *misgendering them for a decade*. It is not a rare edge case; in the six languages below it happens in ordinary, everyday sentences.",
        },
        {
          k: "table",
          head: ["Language", "Where gender is forced", "Current behaviour"],
          rows: [
            ["Arabic", "Verbs, adjectives, second person", "Defaults masculine"],
            ["Russian", "Past tense, adjectives", "Defaults masculine"],
            ["Hebrew", "Verbs, second person", "Defaults masculine"],
            ["Hindi", "Verbs, adjectives", "Defaults masculine"],
            ["Spanish", "Adjectives, participles", "Defaults masculine"],
            ["French", "Adjectives, participles", "Defaults masculine"],
          ],
        },
        { k: "sub", t: "03 · Ten years of study, still no fluency" },
        {
          k: "p",
          t: "Courses teach exam language. People finish ten years of English and still cannot follow a film, read chat abbreviations, or write a message that sounds like an adult. The gap is not vocabulary — it is register, idiom and living speech, which is exactly the part no textbook can keep up with.",
        },
        {
          k: "note",
          t: "The real problem is psychological, not technical.",
          body: [
            "People hesitate before sending a message written in a foreign language. Most of the time they do not send it — they shorten it, soften it, or switch to a language where they can be themselves.",
            "Lingo sells confidence, and confidence has retention.",
          ],
        },
      ],
    },

    {
      n: 3,
      kicker: "The gap",
      title: "What the incumbents actually ask",
      lead: "Not one of them asks who is speaking.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "It is worth being precise about the competitive picture, because “Google already does this” is the first objection any investor raises. Google, DeepL and general chat assistants all translate well. The difference is in the inputs they accept before translating.",
        },
        {
          k: "table",
          head: ["", "Speaker gender", "Register", "Culture profile", "Learning loop"],
          rows: [
            ["Google Translate", "no", "no", "no", "no"],
            ["DeepL", "no", "formal / informal", "no", "no"],
            ["ChatGPT (prompted)", "if you ask", "if you ask", "generic", "no"],
            ["Duolingo", "—", "—", "—", "yes, but abstract"],
            ["Lingo", "yes", "12 registers", "26 languages", "yes, from your own text"],
          ],
        },
        {
          k: "p",
          t: "The chat-assistant row deserves an honest note. A skilled user can prompt a general model into a good register. But that requires knowing what to ask for, in a language you do not speak well, every single time. Lingo turns that expertise into two taps — and stores the result, which is the part a prompt cannot do.",
        },
        {
          k: "quote",
          t: "A universal product is optimised for the average user. There is no average speaker.",
        },
        {
          k: "sub", t: "One concrete comparison",
        },
        {
          k: "kv",
          items: [
            ["Source (Uzbek)", "`men charchadim`"],
            ["Google → Spanish", "`estoy cansado` — masculine, always"],
            ["Lingo, female speaker", "_estoy cansada_ — correct, without the user knowing the rule"],
            ["Lingo, business register", "_me encuentro agotado tras la jornada_"],
          ],
        },
      ],
    },

    {
      n: 4,
      kicker: "The product today",
      title: "Not a plan — it already works",
      lead: "Everything in this chapter is live, in production, built without outside investment.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "Lingo asks three questions before it translates, and those three questions are the entire product thesis: who is speaking, who is listening, and in what tone. Everything else — files, poetry, glossary, history — is that same engine applied to a different surface.",
        },
        {
          k: "gallery",
          items: [
            { src: shotHome, alt: "Lingo web platform" },
            { src: shotFile, alt: "Lingo file translation" },
            { src: shotPoetry, alt: "Lingo poetry translation" },
            { src: shotBot, alt: "Lingo Telegram bot" },
          ],
          caption: "Live screens: register control on the web platform, document translation, poetry mode, and the Telegram bot.",
        },
        {
          k: "kv",
          items: [
            ["Who is speaking?", "gender · age · individual or company"],
            ["Speaking to whom?", "manager · client · friend · teacher · someone you love"],
            ["In what tone?", "12 registers · formality level · length"],
          ],
        },
        { k: "sub", t: "Modules already shipped" },
        {
          k: "list",
          ordered: true,
          items: [
            "Web platform at lingo-translator.uz — full register control",
            "Telegram mini app and bot — where our users already are",
            "26+ languages, 12 registers, adjustable formality and length",
            "Document translation with formality preserved across the whole file",
            "Literary and poetry translation — rhyme and metre preserved, three variants offered",
            "Glossary for personal and company terms, voice input, full translation archive",
          ],
        },
        {
          k: "note",
          t: "Why this matters for diligence",
          body: [
            "The team shipped a multi-surface product with 26 languages and zero funding. That is the cheapest possible evidence of execution speed.",
            "Capital is not required to prove the product works. It is required to build the layer that makes usage compound — chapter 08.",
          ],
        },
      ],
    },

    {
      n: 5,
      kicker: "How it works",
      title: "The layer above the model",
      lead: "The model is a commodity. The layer that feeds it is not.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "Lingo is not a single prompt. It is a pipeline in which the model is one replaceable step, deliberately placed at the end. Everything valuable happens before and after it.",
        },
        {
          k: "list",
          ordered: true,
          items: [
            "*Context capture* — speaker gender and age, relationship to the listener, chosen register, target language, prior corrections by this user",
            "*Cultural profile lookup* — a hand-written politeness and idiom profile per language pair: how directness, honorifics, diminutives and refusals behave",
            "*Register construction* — the profile plus the context become a constrained instruction, not a free-form prompt",
            "*Model routing* — short everyday text goes to a fast, cheap model; literary, legal and long-form goes to a strong one; repeated requests are cached",
            "*Post-check* — gender agreement, honorific consistency and glossary terms are verified against the target language rules before output",
            "*Feedback capture* — which of the offered variants the user picked, and what they edited by hand",
          ],
        },
        {
          k: "quote",
          t: "Step six is the company. The other five are engineering.",
        },
        {
          k: "p",
          t: "Step six produces something no competitor can scrape: a record of which register a real person chose in a real situation, and what they corrected afterwards. Public text on the internet shows what people published. Our data shows what they *hesitated over* — the exact material a learning product needs.",
        },
        {
          k: "figure",
          src: shotHistory,
          alt: "Lingo translation history grouped by register",
          caption: "History is not a convenience feature — it is the dataset, stored per register.",
        },
        {
          k: "note",
          t: "Model independence is deliberate",
          body: [
            "Because the model sits behind a routing step, a cheaper or better model can be swapped in without touching the profiles, the post-check or the data.",
            "This also keeps unit economics under our control rather than a vendor's — see chapter 10.",
          ],
        },
      ],
    },

    {
      n: 6,
      kicker: "Traction",
      title: "Small numbers, honestly read",
      lead: "120 users is not a big number, and we will not dress it up as one.",
      blocks: [
        {
          k: "stats",
          items: [
            ["120", "registered users"],
            ["~1 200", "monthly visits"],
            ["~100%", "monthly return rate"],
            ["$0", "advertising spend"],
          ],
        },
        {
          k: "p",
          drop: true,
          t: "These figures are from August 2026, achieved with no marketing budget, no launch campaign and no press. Every user arrived by word of mouth, mostly through Telegram. What matters in that set is not the size — it is the shape.",
        },
        { k: "sub", t: "What the numbers do say" },
        {
          k: "list",
          items: [
            "Return rate is close to 100% per month on a zero budget, which is the cleanest available signal that the product is *needed* rather than tried",
            "Roughly ten visits per user per month means people come back with real work, not curiosity",
            "The most used features are register selection and file translation — the two places where generic tools fail hardest",
          ],
        },
        { k: "sub", t: "What the numbers do not say" },
        {
          k: "list",
          items: [
            "There is no daily habit yet. Translation is need-driven: you translate when something needs translating",
            "We have no paid conversion data, because Pro has not launched",
            "The base is small enough that a single Telegram channel could distort it, so we do not extrapolate from it",
          ],
        },
        {
          k: "note",
          t: "The missing habit is the reason for the learning layer",
          body: [
            "A translator is opened when needed. A learning companion is opened daily. The same data makes the second one possible, which is why chapter 08 is a business decision rather than a feature wish.",
            "Our next milestone is 10 000 active users and a measured Pro conversion rate, not a bigger vanity number.",
          ],
        },
      ],
    },

    {
      n: 7,
      kicker: "Defensibility",
      title: "Why this is hard to copy",
      lead: "Our moat is not the model. It is data, focus and speed of language.",
      blocks: [
        { k: "sub", t: "01 · “Isn’t this a wrapper on ChatGPT?”" },
        {
          k: "p",
          t: "Today we use ready models, as nearly every AI product does. A wrapper, however, is a product where removing the model leaves nothing. Remove the model from Lingo and three assets remain: cultural profiles for 26 languages, the context-to-register logic, and the behavioural record of which register real users chose and edited. The first two took work. The third cannot be bought at any price, because it only comes from usage.",
        },
        { k: "sub", t: "02 · “What if Google adds this?”" },
        {
          k: "p",
          t: "Google could. It will not, because it builds a universal product, and a universal product is tuned for the average user across every language. Writing a deep politeness and idiom profile for Uzbek, Kazakh or Turkmen will never reach the top of that roadmap — the market is too small to justify the attention. A focused product wins its audience precisely where a universal one cannot afford to look.",
        },
        { k: "sub", t: "03 · The living-language layer" },
        {
          k: "p",
          t: "Slang decays fast; 2019 slang is comedy in 2026. A textbook is reissued every three to four years and is outdated the day it ships. Our layer can update weekly. That is not a temporary advantage but a *structural* one: a publisher's production cycle will always be slower than language change, and that will never reverse.",
        },
        { k: "sub", t: "04 · Two products in one place" },
        {
          k: "p",
          t: "For competitors, translating and teaching are separate businesses: Google translates, Duolingo teaches, and neither ever sees the other's data. We hold both sides, so usage itself produces the teaching material.",
        },
        {
          k: "quote",
          t: "Anyone can rent the same model. Nobody can rent our users' hesitation.",
        },
        {
          k: "kv",
          items: [
            ["Copyable in a week", "The interface, the register list, the language count"],
            ["Copyable in a year", "The cultural profiles, if someone hires the linguists"],
            ["Not copyable", "Years of real register choices and hand corrections by our users"],
          ],
        },
      ],
    },

    {
      n: 8,
      kicker: "The loop",
      title: "Translation is the foundation, not the product",
      lead: "Every translation reveals one thing: what this person could not say themselves.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "The strategic move in this company is not a better translator. It is what a translator knows. Each request is a confession of a specific gap — a thought this person could not express, a phrase they struggle with, a register they are unsure of. Nobody else holds that signal at the moment of need.",
        },
        {
          k: "list",
          ordered: true,
          items: [
            "A person translates something they could not write themselves",
            "The system records the gap: the thought, the phrase, the uncertain register",
            "The system teaches exactly that, in the words that person actually needed",
            "They translate less and write more themselves — and stay, because progress is visible",
          ],
        },
        {
          k: "p",
          t: "Duolingo teaches abstractions: apple, horse, the boy eats bread. We teach the sentence someone failed to send yesterday. It is the same pedagogy applied to material that already carries emotional weight, which is why we expect retention to behave like a habit product rather than a utility.",
        },
        { k: "sub", t: "The four layers" },
        {
          k: "kv",
          items: [
            ["Layer 1 — live today", "Translation with register, gender and culture control"],
            ["Layer 2 — 4 to 8 months", "Personal language learning built from your own translation history"],
            ["Layer 3 — 6 to 12 months", "Mobile keyboard and browser extension: Lingo inside every app"],
            ["Layer 4 — 18 months+", "Voice: real-time conversation with register preserved"],
          ],
        },
        {
          k: "note",
          t: "Why the keyboard matters more than it looks",
          body: [
            "A keyboard moves us from a destination people visit to a layer people write through. It multiplies both the data volume and the daily-use frequency without adding acquisition cost.",
          ],
        },
      ],
    },

    {
      n: 9,
      kicker: "Market",
      title: "The problem is not national",
      lead: "We start where we cannot be beaten, then expand along the same complaint.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "Our entry market is deliberately narrow. Uzbek, Kazakh and Turkmen are languages where no global player will ever invest in cultural depth — which makes them the cheapest place on earth to build an unbeatable product. The expansion path then follows a complaint that turns out to be universal.",
        },
        {
          k: "kv",
          items: [
            ["Today · Uzbekistan", "~31M internet users, ~6–9M realistic target audience"],
            ["Year 1 · Central Asia + diaspora", "~40M people plus 2–3M labour migrants; willingness to pay is highest in the diaspora, where documents, work and healthcare make translation a daily necessity"],
            ["Year 2 · Turkic world", "Turkey, Azerbaijan, Tatar and Uyghur speakers — 90M+"],
            ["Year 3 · Global", "The complaint repeats in Japan, Korea and Brazil: “ten years of study, still can’t follow a film”"],
          ],
        },
        {
          k: "stats",
          items: [
            ["$60B+", "language learning, annual"],
            ["~$10B", "translation services"],
            ["6–9M", "reachable users today"],
            ["130M+", "Turkic-speaking expansion"],
          ],
        },
        {
          k: "p",
          t: "We do not claim the whole language-learning market as addressable. The honest framing is narrower: the paying segment we can reach in the first two years is diaspora and business users in Central Asia, and that segment alone supports a substantial company before any global step.",
        },
        {
          k: "quote",
          t: "Start where you are strongest. Expand along the same complaint.",
        },
      ],
    },

    {
      n: 10,
      kicker: "Business model",
      title: "Translation brings them in, learning keeps them",
      lead: "Nobody subscribes to something they use four times a month.",
      blocks: [
        {
          k: "table",
          head: ["Tier", "Contents", "Role"],
          rows: [
            ["Free", "Limited daily translations, core registers", "Habit and trust"],
            [
              "Pro",
              "Unlimited translation, 12 registers, files, poetry, image and video translation, history, personal glossary, learning module",
              "Primary revenue",
            ],
            [
              "B2B",
              "Dubbing and subtitling studios, team accounts, licences for schools and universities",
              "High ability to pay, short sales cycle",
            ],
          ],
        },
        {
          k: "p",
          drop: true,
          t: "The pricing logic follows directly from chapter 06. Translation alone is a need-driven utility: people arrive when something needs translating, which makes a subscription hard to justify. Learning is a daily need. The learning layer is therefore not a cost centre — it is *the basis of the subscription*.",
        },
        { k: "sub", t: "Cost control" },
        {
          k: "list",
          items: [
            "Short prompts route to a fast, cheap model; literary and long-form route to a strong one",
            "Repeated and near-identical requests are served from cache",
            "Cultural profiles reduce token overhead, because the instruction is compiled rather than re-explained",
            "Result: unit cost per active user stays largely independent of user growth",
          ],
        },
        {
          k: "note",
          t: "What we have not measured yet",
          body: [
            "AI cost per active user, the final Pro price point, and the break-even conversion rate are being measured now; first figures land within the next quarter.",
            "We would rather show an investor an unmeasured line than a modelled one.",
          ],
        },
      ],
    },

    {
      n: 11,
      kicker: "Risks",
      title: "What could go wrong",
      lead: "Four risks we are asked about, answered without spin.",
      blocks: [
        {
          k: "kv",
          items: [
            [
              "Model vendors raise prices",
              "Routing and caching already isolate us; profiles and post-check are vendor-neutral, so a cheaper model can be swapped in without product change",
            ],
            [
              "A global player adds register control",
              "They would ship it universally, not deeply. Our defence is per-language cultural depth and the behavioural dataset, neither of which arrives with a feature launch",
            ],
            [
              "Users do not pay for learning",
              "This is the real risk, and it is why the next milestone is a measured Pro conversion rate rather than more users. B2B licensing is the hedge: schools and studios pay per seat regardless of consumer habit",
            ],
            [
              "Small home market",
              "Uzbekistan funds the product; the diaspora and the Turkic world fund the company. Expansion needs no new thesis, only new profiles",
            ],
          ],
        },
        {
          k: "quote",
          t: "The risk we take seriously is habit, not competition.",
        },
      ],
    },

    {
      n: 12,
      kicker: "Team and the ask",
      title: "Who is building this, and what we need",
      lead: "A team that shipped 26 languages with no funding, asking for the layer that compounds.",
      blocks: [
        {
          k: "kv",
          items: [
            ["Samar Saidov — Founder & CEO", "Entrepreneur and startup builder. Lived the problem before building the product"],
            ["To'rabek Yo'ldoshev — CTO", "Software engineer. Owns the pipeline, routing and post-check layer"],
            ["Majitov Zuxriddin — Backend", "Infrastructure, data storage, Telegram and platform surfaces"],
          ],
        },
        { k: "sub", t: "Use of funds" },
        {
          k: "kv",
          items: [
            ["40% — Learning module", "Turning translation history into personal lessons; the layer that creates daily use"],
            ["30% — Keyboard and extension", "Mobile keyboard and browser extension, so Lingo works inside every app"],
            ["20% — Quality and living language", "Linguists for cultural profiles, weekly slang and idiom updates, evaluation harness"],
            ["10% — Infrastructure and AI cost", "Serving, caching and model spend during growth"],
          ],
        },
        { k: "sub", t: "Twelve months from now" },
        {
          k: "list",
          ordered: true,
          items: [
            "10 000 active users, grown mostly through the keyboard and Telegram",
            "Pro launched, with a measured conversion rate and a real price point",
            "First B2B customers: a dubbing studio and an educational institution",
            "Unit economics measured, not modelled",
          ],
        },
        {
          k: "quote",
          t: "Keep translating, and one day the translator stops being necessary.",
          by: "Samar Saidov · lingo-translator.uz",
        },
        {
          k: "p",
          t: "That last line is the ambition, and it is also the business model. A product that shortens its own necessity earns a habit on the way there — and habits, not translations, are what compound.",
        },
      ],
    },
  ],
};

# Lingo deck — kreativ qayta dizayn

Hozirgi deck toza, lekin "har kimning pitch deck"i kabi. Rejaning maqsadi: bir qarashda esda qoladigan, o'zgacha vizual til. Rang oilasi va kontent o'zgarmaydi — kompozitsiya, tipografiya va harakat butunlay yangilanadi.

## Vizual yo'nalish

**Broken grid + terracotta/qog'oz, kuchaytirilgan.** Har slayd 12 ustunli tarmoqqa quriladi, lekin elementlar ataylab tarmoqdan chiqadi: sarlavha chapga "qonaydi", raqam bloklari bir-birining ustiga chiqadi, rasm kartochkalari 2–4° burchakka egiladi.

- Tipografiya: sarlavhalar **Instrument Serif** (juda katta, 92–140px, tor leading, siqilgan tracking), matn **Work Sans**. "Mashina" ovozi IBM Plex Mono'da qoladi — bu qarama-qarshilik deckning asosiy hazili.
- Rang: qog'oz `#F7F1E6` asosiy, lekin har 3–4 slaydda **to'liq terracotta yoki ink to'ldirilgan slayd** keladi (invert) — ritm va "nafas" yaratadi.
- Yuza: nozik grain/noise overlay, qo'lda chizilgan kabi hairline'lar, terracotta marker-highlight (matn ostidan o'tadigan bo'yoq surtmasi).
- Katta raqamlar (bozor hajmi, foizlar) 200px+ o'lchamda, qismi slayd chegarasidan kesib chiqadi.

## Slayd bo'yicha kuchli lahzalar

- **01 Zarba** — "Salom" so'zi ekran bo'yi 240px, o'ng qismi kesilgan; ostida Tone Fork jimgina paydo bo'ladi.
- **03 Muammo** — uch qatlam bir-birining ustiga qo'yilgan kartochka sifatida, har biri qiyshiq.
- **04 Isbot** — split: chapda mono "mashina" tarjimasi kul rangda, o'ngda serif Lingo natijasi terracotta highlight bilan. O'rtada tik hairline.
- **06 Mahsulot ekranlari** — qiyshiq, ustma-ust tushgan brauzer kartochkalari (bugungi tekis grid emas).
- **07 / 10 Raqamlar** — hero raqam + kichik izoh, invert (terracotta fon) slayd.
- **12 Raqobat** — jadval emas, "biz vs ular" ikki blok, ular kulrang/mono, biz serif/terracotta.
- **15 Yakun** — to'liq ink fon, bitta jumla, Tone Fork logotip sifatida.

## Harakat

`motion` (Motion for React) qo'shiladi: slayd almashganda sarlavha pastdan yuqoriga chiqadi, raqamlar hisoblanadi, Tone Fork shoxlari ketma-ket chiziladi. Klaviatura navigatsiyasi va `/print` marshruti saqlanadi; chop etishda animatsiyalar o'chadi.

## Texnik qism

- `src/styles.css`: Instrument Serif + Work Sans `@theme` tokenlari; `slide-invert`, `grain`, `marker`, `tilt-*`, `bleed-left` `@utility`lari; hero raqam uchun `--slide-hero` o'lchamlari. Rang tokenlari o'zgarmaydi.
- `src/routes/__root.tsx`: Google Fonts `<link>`ga Instrument Serif va Work Sans qo'shiladi (Fraunces olib tashlanadi).
- `src/components/deck/slides.tsx`: `Slide` wrapper broken-grid variantlari bilan qayta yoziladi (`variant: paper | terracotta | ink`), 15 slayd yangi kompozitsiyada qayta tuziladi. Matn kontenti o'zgarmaydi.
- `src/components/deck/ToneFork.tsx`: animatsiyali chiziq va logotip rejimi qo'shiladi.
- `src/routes/index.tsx`: slayd o'tish animatsiyasi, 1280x720 scaling va klaviatura saqlanadi.
- Yangi paket: `motion`.
- Tekshirish: Playwright bilan 15 slaydning barchasi skrinshot qilinadi — overflow yo'qligi tasdiqlanadi.

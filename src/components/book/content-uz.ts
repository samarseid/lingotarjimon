import type { BookCopy } from "./BookShell";
import shotHome from "@/assets/Screenshot_2026-08-10_010506.png";
import shotFile from "@/assets/Screenshot_2026-08-10_010535.png";
import shotPoetry from "@/assets/Screenshot_2026-08-10_010557.png";
import shotHistory from "@/assets/Screenshot_2026-08-10_010546.png";
import shotBot from "@/assets/photo_2026-08-10_01-07-20.jpg";

export const bookUz: BookCopy = {
  lang: "uz",
  htmlLang: "uz",
  brow: "Lingo · Investor kitobi",
  title: "Kim gapiryapti?",
  subtitle:
    "Hech bir tarjimon so‘ramaydigan yagona savol — va shu savolning javobi ustiga qurilayotgan kompaniya haqida kitob.",
  edition: "Birinchi nashr · 2026 · Toshkent",
  contentsTitle: "Mundarija",
  colophon: [
    "Investorlar uchun tayyorlangan. Kitobdagi barcha ekran tasvirlari — ishlayotgan mahsulotdan, maket emas.",
    "Ko‘rsatkichlar 2026-yil avgust holatiga, hech qanday yaxshilashsiz keltirilgan.",
    "Aloqa: Samar Saidov · lingo-translator.uz",
  ],
  ui: {
    heading: "Lingo — Investor kitobi",
    meta: "12 bob · A4 portret · o‘zbek nashri",
    deck: "Pitch deck",
    print: "PDF sifatida saqlash",
    other: "English edition",
    otherHref: "/book",
  },

  chapters: [
    {
      n: 1,
      kicker: "So‘zboshi",
      title: "Yuborilmagan xat",
      lead: "Har kuni millionlab odam chet tilida xat yozadi, qayta o‘qiydi va o‘chirib tashlaydi.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "Bu kompaniya asoschisi bir kuni chet ellik mijozga to‘rt gap yozish uchun o‘n bir daqiqa sarfladi. Grammatikasi to‘g‘ri edi — uni mashina chiqargan. Lekin u o‘zi kabi eshitilmadi; anketa kabi eshitildi. Uch marta qayta yozdi, so‘ng qisqaroq va xavfsizroq gap yubordi — va aslida kerak bo‘lgan ohangni yo‘qotdi.",
        },
        {
          k: "p",
          t: "Lingo aynan shu lahza atrofida qurilgan. Tarjima xato bo‘lgan lahza emas, tarjima _to‘g‘ri, lekin ishlatib bo‘lmaydigan_ lahza. Mashina tarjimasi ma‘noni yillar oldin yechdi. U hech qachon yechmagan narsa — odam birinchi eshitadigan qism: kim gapiryapti, kimga va qanday ohangda.",
        },
        {
          k: "quote",
          t: "Tarjima — yechilgan masala. Boshqa tilda o‘zingga o‘xshab gapirish — yo‘q.",
        },
        {
          k: "p",
          t: "Bu kitob bitta o‘quvchi uchun yozilgan: bu narsa model ustidagi yupqa qobiqmi yoki vaqt o‘tgani sari kuchayadigan aktivga ega kompaniyami — buni bilishni istagan investor uchun. Javobni 07-bobda to‘g‘ridan-to‘g‘ri beramiz va hali kichik bo‘lgan joylarni yashirmaymiz: 06-bob ko‘rsatkichlarni, jumladan hali hayratlanarli bo‘lmagan raqamni ham ochiq aytadi.",
        },
        {
          k: "kv",
          items: [
            ["Biz nima", "Tarjima qilishdan oldin gapiruvchi, tinglovchi va ohang haqida so‘raydigan tarjimon"],
            ["Bugun ishlayotgani", "Veb platforma, Telegram mini ilova, 26+ til, 12 uslub"],
            ["Qurayotganimiz", "Haqiqiy tarjima xulqidan oziqlanadigan shaxsiy til o‘rganish qatlami"],
            ["Nima so‘rayapmiz", "Pre-seed / seed — o‘rganish qatlami va klaviatura uchun"],
          ],
        },
      ],
    },

    {
      n: 2,
      kicker: "Muammo",
      title: "Uch muammo, bitta ildiz",
      lead: "Tarjimonlar grammatik jihatdan to‘g‘ri, insoniy jihatdan noto‘g‘ri.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "Tarjima ma‘nodan ko‘proq narsani tashiydi — u munosabatni tashiydi. Rahbaringizga, eng yaqin do‘stingizga va sevgan odamingizga yozganda siz bitta odamsiz, lekin uch xil tildan foydalanasiz. Mavjud tarjimonlarning barchasi bu uchtasini bitta tekis natijaga siqib qo‘yadi.",
        },
        { k: "sub", t: "01 · Ohang sozlama emas, ohangning o‘zi xabar" },
        {
          k: "p",
          t: "Google Translate bitta satr qaytaradi. DeepL rasmiy/norasmiy tugmasini qo‘shadi — kamida o‘n ikki variant talab qiladigan muammoga ikki javob. Hech kim rahbariga bolalikdagi do‘stiga gapirgandek yozmaydi va uslubi xato tarjima kichik stilistik xato emas — u qo‘pollik, sovuqlik yoki soddalik sifatida o‘qiladi.",
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
        { k: "sub", t: "02 · Jins — grammatika, xohish emas" },
        {
          k: "p",
          t: "Arab tilida `kataba` — erkakka, `katabti` — ayolga aytilgan “sen yozdting”. Rus tilida ayol `я сказала`, erkak `я сказал` deydi. O‘zbek tilida bu belgi umuman yo‘q. Shuning uchun manba tilida jins ko‘rsatilmagan, maqsad tili esa talab qilgan holatda mashina tanlashga majbur — va u har safar jimgina erkak shaklini tanlaydi.",
        },
        {
          k: "p",
          t: "Bu foydalanuvchilarning taxminan yarmi uchun *o‘n yildan beri jinsini xato ko‘rsatayotgan* tarjimon degani. Bu kamdan-kam uchraydigan holat emas: quyidagi olti tilda oddiy, kundalik gaplarda sodir bo‘ladi.",
        },
        {
          k: "table",
          head: ["Til", "Jins majburiy joyi", "Hozirgi xulq"],
          rows: [
            ["Arab", "Fe‘l, sifat, ikkinchi shaxs", "Erkak shakli"],
            ["Rus", "O‘tgan zaman, sifatlar", "Erkak shakli"],
            ["Ibroniy", "Fe‘l, ikkinchi shaxs", "Erkak shakli"],
            ["Hind", "Fe‘l, sifatlar", "Erkak shakli"],
            ["Ispan", "Sifat, sifatdosh", "Erkak shakli"],
            ["Fransuz", "Sifat, sifatdosh", "Erkak shakli"],
          ],
        },
        { k: "sub", t: "03 · O‘n yil o‘qib, hali ham gapira olmaydi" },
        {
          k: "p",
          t: "Kurslar imtihon tilini o‘rgatadi. Odam ingliz tilini o‘n yil o‘qib chiqadi, lekin filmni tushunmaydi, chatdagi qisqartmalarni o‘qiy olmaydi va katta odam kabi eshitiladigan xat yozolmaydi. Bo‘shliq lug‘atda emas — uslub, ibora va tirik nutqda, ya‘ni hech bir darslik yetib bora olmaydigan qismda.",
        },
        {
          k: "note",
          t: "Asl muammo psixologik, texnik emas.",
          body: [
            "Odamlar chet tilida yozilgan xabarni yuborishdan oldin ikkilanadi. Ko‘p hollarda yubormaydi — qisqartiradi, yumshatadi yoki o‘zi bo‘lib gapira oladigan tilga o‘tadi.",
            "Lingo ishonch sotadi, ishonch esa qaytishni keltiradi.",
          ],
        },
      ],
    },

    {
      n: 3,
      kicker: "Bo‘shliq",
      title: "Yirik o‘yinchilar nimani so‘raydi",
      lead: "Ularning birortasi ham “kim gapiryapti?” deb so‘ramaydi.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "Raqobat manzarasini aniq aytish kerak, chunki “buni Google allaqachon qiladi” — har qanday investorning birinchi savoli. Google, DeepL va umumiy chat yordamchilari yaxshi tarjima qiladi. Farq — tarjimadan oldin qanday ma‘lumot qabul qilishlarida.",
        },
        {
          k: "table",
          head: ["", "Gapiruvchi jinsi", "Uslub", "Madaniy profil", "O‘rganish sikli"],
          rows: [
            ["Google Translate", "yo‘q", "yo‘q", "yo‘q", "yo‘q"],
            ["DeepL", "yo‘q", "rasmiy / norasmiy", "yo‘q", "yo‘q"],
            ["ChatGPT (prompt bilan)", "so‘rasangiz", "so‘rasangiz", "umumiy", "yo‘q"],
            ["Duolingo", "—", "—", "—", "bor, lekin mavhum"],
            ["Lingo", "bor", "12 uslub", "26 til", "bor — o‘z matningizdan"],
          ],
        },
        {
          k: "p",
          t: "Chat yordamchisi qatoriga halol izoh kerak. Tajribali foydalanuvchi umumiy modelni yaxshi uslubga majburlashi mumkin. Lekin buning uchun nimani so‘rashni bilish kerak — o‘zingiz yaxshi bilmagan tilda va har safar. Lingo shu tajribani ikki bosishga aylantiradi va natijani saqlaydi; prompt esa saqlay olmaydi.",
        },
        {
          k: "quote",
          t: "Universal mahsulot o‘rtacha foydalanuvchiga moslanadi. O‘rtacha gapiruvchi degani esa yo‘q.",
        },
        { k: "sub", t: "Bitta aniq taqqoslash" },
        {
          k: "kv",
          items: [
            ["Manba (o‘zbek)", "`men charchadim`"],
            ["Google → ispan", "`estoy cansado` — har safar erkak shakli"],
            ["Lingo, ayol gapiryapti", "_estoy cansada_ — qoidani bilmasa ham to‘g‘ri"],
            ["Lingo, biznes uslubi", "_me encuentro agotado tras la jornada_"],
          ],
        },
      ],
    },

    {
      n: 4,
      kicker: "Bugungi mahsulot",
      title: "Reja emas — allaqachon ishlaydi",
      lead: "Bu bobdagi hamma narsa ishlab turgan mahsulot, tashqi investitsiyasiz qurilgan.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "Lingo tarjima qilishdan oldin uch savol so‘raydi va shu uch savol — mahsulotning butun mohiyati: kim gapiryapti, kim tinglaydi va qanday ohangda. Qolgan hammasi — fayllar, she‘riyat, lug‘at, arxiv — shu dvigatelning boshqa yuzasidagi ko‘rinishi.",
        },
        {
          k: "gallery",
          items: [
            { src: shotHome, alt: "Lingo veb platformasi" },
            { src: shotFile, alt: "Lingo fayl tarjimasi" },
            { src: shotPoetry, alt: "Lingo she‘riy tarjima" },
            { src: shotBot, alt: "Lingo Telegram bot" },
          ],
          caption: "Ishlayotgan ekranlar: veb platformada uslub boshqaruvi, hujjat tarjimasi, she‘riyat rejimi va Telegram bot.",
        },
        {
          k: "kv",
          items: [
            ["Kim gapiryapti?", "jins · yosh · shaxs yoki kompaniya"],
            ["Kimga gapiryapti?", "rahbar · mijoz · do‘st · o‘qituvchi · sevgan odam"],
            ["Qanday ohangda?", "12 uslub · rasmiylik darajasi · uzunlik"],
          ],
        },
        { k: "sub", t: "Ishga tushgan modullar" },
        {
          k: "list",
          ordered: true,
          items: [
            "Veb platforma — lingo-translator.uz, to‘liq uslub boshqaruvi bilan",
            "Telegram mini ilova va bot — foydalanuvchilarimiz allaqachon shu yerda",
            "26+ til, 12 uslub, rasmiylik va uzunlik sozlamalari",
            "Hujjat tarjimasi — butun fayl bo‘ylab bitta uslub saqlanadi",
            "Badiiy va she‘riy tarjima — qofiya va vazn saqlanadi, uch variant taklif qiladi",
            "Shaxsiy va korporativ atamalar lug‘ati, ovozli kiritish, to‘liq tarjima arxivi",
          ],
        },
        {
          k: "note",
          t: "Bu due diligence uchun nima degani",
          body: [
            "Jamoa 26 tilli, ko‘p yuzali mahsulotni nol mablag‘ bilan ishga tushirdi. Bu — bajarish tezligining eng arzon dalili.",
            "Mahsulot ishlashini isbotlash uchun kapital kerak emas edi. Kapital foydalanishni kuchayuvchi aktivga aylantiradigan qatlam uchun kerak — 08-bob.",
          ],
        },
      ],
    },

    {
      n: 5,
      kicker: "Qanday ishlaydi",
      title: "Model ustidagi qatlam",
      lead: "Model — tovar. Uni oziqlantiradigan qatlam — yo‘q.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "Lingo bitta prompt emas. Bu quvur (pipeline) bo‘lib, unda model — almashtirilishi mumkin bo‘lgan bitta bosqich va u ataylab oxirga qo‘yilgan. Qimmatli narsalarning barchasi undan oldin va keyin sodir bo‘ladi.",
        },
        {
          k: "list",
          ordered: true,
          items: [
            "*Kontekstni olish* — gapiruvchining jinsi va yoshi, tinglovchi bilan munosabati, tanlangan uslub, maqsad tili, shu foydalanuvchining oldingi tuzatishlari",
            "*Madaniy profilni chaqirish* — har til jufti uchun qo‘lda yozilgan xushmuomalalik va ibora profili: to‘g‘ridan-to‘g‘rilik, hurmat shakllari, kichraytirish va rad etish qanday ishlaydi",
            "*Uslubni qurish* — profil va kontekst erkin prompt emas, cheklangan ko‘rsatmaga aylanadi",
            "*Modelni yo‘naltirish* — qisqa kundalik matn tez va arzon modelga, badiiy, huquqiy va uzun matn kuchli modelga; takrorlangan so‘rovlar keshdan",
            "*Keyingi tekshiruv* — jins muvofiqligi, hurmat shakllari izchilligi va lug‘at atamalari maqsad tili qoidalariga solishtiriladi",
            "*Fikrni yig‘ish* — foydalanuvchi qaysi variantni tanladi va qo‘li bilan nimani tuzatdi",
          ],
        },
        {
          k: "quote",
          t: "Oltinchi bosqich — kompaniyaning o‘zi. Qolgan beshtasi — injiniring.",
        },
        {
          k: "p",
          t: "Oltinchi bosqich hech bir raqobatchi yig‘ib olmaydigan narsani ishlab chiqaradi: haqiqiy odam haqiqiy vaziyatda qaysi uslubni tanlagani va keyin nimani tuzatgani haqidagi yozuv. Internetdagi ochiq matn odamlar *nashr qilgan* narsani ko‘rsatadi. Bizning ma‘lumot esa ular *ikkilangan* joyni — o‘rganish mahsulotiga kerak bo‘lgan aynan shu materialni ko‘rsatadi.",
        },
        {
          k: "figure",
          src: shotHistory,
          alt: "Lingo tarjima arxivi, uslublar bo‘yicha guruhlangan",
          caption: "Arxiv qulaylik funksiyasi emas — u uslub bo‘yicha saqlanayotgan ma‘lumot bazasi.",
        },
        {
          k: "note",
          t: "Modeldan mustaqillik — ataylab",
          body: [
            "Model yo‘naltirish bosqichi ortida turgani uchun arzonroq yoki kuchliroq modelni profillarga, tekshiruvga va ma‘lumotga tegmasdan almashtirish mumkin.",
            "Bu birlik iqtisodini yetkazib beruvchi emas, bizning qo‘limizda ushlab turadi — 10-bob.",
          ],
        },
      ],
    },

    {
      n: 6,
      kicker: "Natijalar",
      title: "Kichik raqamlar, halol o‘qilgan",
      lead: "120 foydalanuvchi katta raqam emas va biz uni chiroyli qilib ko‘rsatmaymiz.",
      blocks: [
        {
          k: "stats",
          items: [
            ["120", "ro‘yxatdan o‘tgan foydalanuvchi"],
            ["~1 200", "oylik kirish"],
            ["~100%", "oylik qaytish"],
            ["$0", "reklama xarajati"],
          ],
        },
        {
          k: "p",
          drop: true,
          t: "Bu ko‘rsatkichlar 2026-yil avgust holatiga: marketing budjetisiz, hech qanday kampaniya va matbuotsiz. Har bir foydalanuvchi og‘izdan-og‘izga, asosan Telegram orqali keldi. Bu to‘plamda muhim narsa hajm emas — shakl.",
        },
        { k: "sub", t: "Raqamlar nimani aytadi" },
        {
          k: "list",
          items: [
            "Nol budjetda oylik qaytish 100% ga yaqin — mahsulot sinab ko‘rilgan emas, *kerak* bo‘lganining eng toza signali",
            "Bitta foydalanuvchiga oyiga o‘rtacha o‘n kirish — odamlar qiziqish uchun emas, haqiqiy ish bilan qaytadi",
            "Eng ko‘p ishlatilgani — uslub tanlash va fayl tarjimasi, ya‘ni umumiy vositalar eng qattiq qulaydigan ikki joy",
          ],
        },
        { k: "sub", t: "Raqamlar nimani aytmaydi" },
        {
          k: "list",
          items: [
            "Hali kundalik odat yo‘q. Tarjima ehtiyojga bog‘liq: tarjima qilinadigan narsa bo‘lganda tarjima qilinadi",
            "Pullik konversiya ma‘lumoti yo‘q, chunki Pro hali ishga tushmagan",
            "Baza shunchalik kichik, bitta Telegram kanali uni buzib ko‘rsatishi mumkin — shuning uchun undan ekstrapolyatsiya qilmaymiz",
          ],
        },
        {
          k: "note",
          t: "Yetishmayotgan odat — o‘rganish qatlamining sababi",
          body: [
            "Tarjimon kerak bo‘lganda ochiladi. O‘rganish hamrohi har kuni ochiladi. Xuddi shu ma‘lumot ikkinchisini mumkin qiladi — shu sababli 08-bob istak emas, biznes qarori.",
            "Keyingi maqsad — kattaroq chiroyli raqam emas, 10 000 aktiv foydalanuvchi va o‘lchangan Pro konversiyasi.",
          ],
        },
      ],
    },

    {
      n: 7,
      kicker: "Himoya",
      title: "Buni nusxalash nega qiyin",
      lead: "Bizning devorimiz model emas — ma‘lumot, fokus va tilning tezligi.",
      blocks: [
        { k: "sub", t: "01 · “Bu ChatGPT ustidagi qobiq emasmi?”" },
        {
          k: "p",
          t: "Bugun tayyor modellardan foydalanamiz — deyarli har bir AI mahsuloti shunday qiladi. Lekin qobiq — modelni olib tashlasa hech nima qolmaydigan mahsulot. Lingodan modelni olib tashlasangiz uch aktiv qoladi: 26 til uchun madaniy profillar, kontekstdan uslubga o‘tish mantiqi va haqiqiy foydalanuvchilar qaysi uslubni tanlab, nimani tuzatgani haqidagi xulq yozuvi. Birinchi ikkitasi mehnat talab qildi. Uchinchisini hech qanday pulga sotib olib bo‘lmaydi, chunki u faqat foydalanishdan tug‘iladi.",
        },
        { k: "sub", t: "02 · “Agar Google shuni qo‘shsa?”" },
        {
          k: "p",
          t: "Google qo‘shishi mumkin. Lekin qo‘shmaydi, chunki u universal mahsulot quradi va universal mahsulot barcha tillar bo‘ylab o‘rtacha foydalanuvchiga moslanadi. O‘zbek, qozoq yoki turkman tili uchun chuqur xushmuomalalik va ibora profilini yozish ularning ro‘yxatida hech qachon tepaga chiqmaydi — bozor bu e‘tiborga arzimaydi. Fokuslangan mahsulot o‘z auditoriyasini aynan universal mahsulot qaray olmaydigan joyda oladi.",
        },
        { k: "sub", t: "03 · Tirik til qatlami" },
        {
          k: "p",
          t: "Sleng tez chiriydi: 2019-yilning slengi 2026-yilda kulgi. Darslik uch-to‘rt yilda qayta chiqadi va chiqqan kuni eskirgan bo‘ladi. Bizning qatlam har hafta yangilanishi mumkin. Bu vaqtinchalik ustunlik emas, *strukturaviy* ustunlik: nashriyot ishlab chiqarish sikli tilning o‘zgarishidan har doim sekinroq bo‘ladi va bu hech qachon teskari bo‘lmaydi.",
        },
        { k: "sub", t: "04 · Ikki mahsulot bitta joyda" },
        {
          k: "p",
          t: "Raqobatchilar uchun tarjima va o‘qitish — ikki alohida biznes: Google tarjima qiladi, Duolingo o‘qitadi va ikkalasi bir-birining ma‘lumotini hech qachon ko‘rmaydi. Bizda ikki tomon ham bitta joyda, shuning uchun foydalanishning o‘zi o‘quv materialini ishlab chiqaradi.",
        },
        {
          k: "quote",
          t: "Xuddi shu modelni har kim ijaraga olishi mumkin. Foydalanuvchilarimizning ikkilanishini hech kim ijaraga olmaydi.",
        },
        {
          k: "kv",
          items: [
            ["Bir haftada nusxalanadi", "Interfeys, uslublar ro‘yxati, tillar soni"],
            ["Bir yilda nusxalanadi", "Madaniy profillar — agar kimdir tilshunoslarni yollasa"],
            ["Nusxalanmaydi", "Foydalanuvchilarimizning yillar davomidagi uslub tanlovi va qo‘lda tuzatishlari"],
          ],
        },
      ],
    },

    {
      n: 8,
      kicker: "Sikl",
      title: "Tarjima — mahsulot emas, poydevor",
      lead: "Har bir tarjima bitta narsani ochadi: bu odam o‘zi ayta olmagan gapni.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "Bu kompaniyadagi strategik harakat yaxshiroq tarjimon emas. Strategik harakat — tarjimon nimani bilishi. Har bir so‘rov aniq bir bo‘shliqning tan olinishi: bu odam ifoda eta olmagan fikr, qiynalgan ibora, ishonchsiz uslub. Bu signalni ehtiyoj lahzasida boshqa hech kim ushlab turmaydi.",
        },
        {
          k: "list",
          ordered: true,
          items: [
            "Odam o‘zi yozolmagan narsani tarjima qiladi",
            "Tizim bo‘shliqni yozib oladi: fikr, ibora, ishonchsiz uslub",
            "Tizim aynan shuni — o‘sha odamga haqiqatan kerak bo‘lgan so‘zlarda o‘rgatadi",
            "U kamroq tarjima qilib, ko‘proq o‘zi yozadi — va qoladi, chunki o‘sish ko‘rinadi",
          ],
        },
        {
          k: "p",
          t: "Duolingo mavhum narsalarni o‘rgatadi: olma, ot, bola non yeydi. Biz kimdir kecha yubora olmagan gapni o‘rgatamiz. Bu o‘sha pedagogika, lekin allaqachon his-tuyg‘uga bog‘langan materialda — shuning uchun qaytish ko‘rsatkichi kommunal xizmat emas, odat mahsuloti kabi bo‘lishini kutamiz.",
        },
        { k: "sub", t: "To‘rt qatlam" },
        {
          k: "kv",
          items: [
            ["1-qatlam — bugun ishlaydi", "Uslub, jins va madaniyat boshqaruvi bilan tarjima"],
            ["2-qatlam — 4–8 oy", "Shaxsiy til o‘rganish — o‘z tarjima tarixingizdan qurilgan"],
            ["3-qatlam — 6–12 oy", "Mobil klaviatura va brauzer kengaytmasi: Lingo har ilova ichida"],
            ["4-qatlam — 18 oy+", "Ovoz: uslub saqlangan real vaqt suhbati"],
          ],
        },
        {
          k: "note",
          t: "Klaviatura ko‘rinishidan muhimroq",
          body: [
            "Klaviatura bizni odamlar tashrif qiladigan manzildan odamlar orqali yozadigan qatlamga o‘tkazadi. U ma‘lumot hajmini ham, kunlik foydalanish chastotasini ham jalb qilish xarajatini oshirmasdan ko‘paytiradi.",
          ],
        },
      ],
    },

    {
      n: 9,
      kicker: "Bozor",
      title: "Muammo milliy emas",
      lead: "Yengilmas joydan boshlaymiz, keyin xuddi shu shikoyat bo‘ylab kengayamiz.",
      blocks: [
        {
          k: "p",
          drop: true,
          t: "Kirish bozorimiz ataylab tor. O‘zbek, qozoq va turkman tillari — global o‘yinchi madaniy chuqurlikka hech qachon pul sarflamaydigan tillar. Aynan shuning uchun bu yer dunyoda yengilmas mahsulot qurish uchun eng arzon joy. Kengayish yo‘li esa universal bo‘lib chiqqan shikoyat ortidan boradi.",
        },
        {
          k: "kv",
          items: [
            ["Bugun · O‘zbekiston", "~31 mln internet foydalanuvchisi, ~6–9 mln real maqsadli auditoriya"],
            ["1-yil · Markaziy Osiyo + diaspora", "~40 mln odam va 2–3 mln mehnat migranti; to‘lashga tayyorlik diasporada eng yuqori — hujjat, ish, tibbiyot tarjimani kundalik zaruratga aylantiradi"],
            ["2-yil · Turkiy dunyo", "Turkiya, Ozarbayjon, tatar va uyg‘ur tillari — 90 mln+"],
            ["3-yil · Global", "Shikoyat takrorlanadi: Yaponiya, Koreya, Braziliya — “o‘n yil o‘qidim, hali ham filmni tushunmayman”"],
          ],
        },
        {
          k: "stats",
          items: [
            ["$60B+", "til o‘rganish, yillik"],
            ["~$10B", "tarjima xizmatlari"],
            ["6–9 mln", "bugun erishiladigan foydalanuvchi"],
            ["130 mln+", "turkiy tilli kengayish"],
          ],
        },
        {
          k: "p",
          t: "Butun til o‘rganish bozorini o‘zimizga tegishli deb hisoblamaymiz. Halol chegara torroq: birinchi ikki yilda erishadigan pul to‘lovchi segment — Markaziy Osiyodagi diaspora va biznes foydalanuvchilari. Faqat shu segmentning o‘zi ham global qadamdan oldin jiddiy kompaniyani ko‘taradi.",
        },
        {
          k: "quote",
          t: "Eng kuchli joyingdan boshla. Keyin xuddi shu shikoyat bo‘ylab kengay.",
        },
      ],
    },

    {
      n: 10,
      kicker: "Biznes model",
      title: "Tarjima olib keladi, o‘rganish ushlab turadi",
      lead: "Hech kim oyiga to‘rt marta ishlatadigan narsaga obuna bo‘lmaydi.",
      blocks: [
        {
          k: "table",
          head: ["Tarif", "Tarkibi", "Vazifasi"],
          rows: [
            ["Free", "Kunlik cheklangan tarjima, asosiy uslublar", "Odat va ishonch"],
            [
              "Pro",
              "Cheksiz tarjima, 12 uslub, fayllar, she‘riyat, rasm va video tarjimasi, arxiv, shaxsiy lug‘at, o‘rganish moduli",
              "Asosiy daromad",
            ],
            [
              "B2B",
              "Dublyaj va subtitr studiyalari, jamoa akkauntlari, maktab va universitetlar uchun litsenziya",
              "To‘lash qobiliyati yuqori, savdo sikli qisqa",
            ],
          ],
        },
        {
          k: "p",
          drop: true,
          t: "Narx mantiqi bevosita 06-bobdan kelib chiqadi. Tarjimaning o‘zi ehtiyojga bog‘liq xizmat: odam tarjima kerak bo‘lganda keladi va bu obunani oqlashni qiyinlashtiradi. O‘rganish esa kundalik ehtiyoj. Shuning uchun o‘rganish qatlami xarajat markazi emas — u *obunaning asosi*.",
        },
        { k: "sub", t: "Xarajat nazorati" },
        {
          k: "list",
          items: [
            "Qisqa so‘rovlar tez va arzon modelga, badiiy va uzun matn kuchli modelga yo‘naltiriladi",
            "Takrorlangan va deyarli bir xil so‘rovlar keshdan beriladi",
            "Madaniy profillar token yukini kamaytiradi, chunki ko‘rsatma har safar qayta tushuntirilmaydi",
            "Natija: aktiv foydalanuvchiga birlik xarajati o‘sishdan katta darajada mustaqil qoladi",
          ],
        },
        {
          k: "note",
          t: "Hali o‘lchamagan narsalarimiz",
          body: [
            "Aktiv foydalanuvchiga AI xarajati, Pro yakuniy narxi va zararsizlik konversiyasi hozir o‘lchanmoqda; birinchi raqamlar keyingi chorakda bo‘ladi.",
            "Investorga modellashtirilgan raqamdan ko‘ra o‘lchanmagan qatorni ko‘rsatishni afzal ko‘ramiz.",
          ],
        },
      ],
    },

    {
      n: 11,
      kicker: "Risklar",
      title: "Nima noto‘g‘ri ketishi mumkin",
      lead: "Bizdan so‘raladigan to‘rt risk — bo‘yab-bezamasdan.",
      blocks: [
        {
          k: "kv",
          items: [
            [
              "Model narxlari oshsa",
              "Yo‘naltirish va kesh bizni allaqachon ajratib turadi; profillar va tekshiruv modelga bog‘liq emas, arzonroq modelni mahsulotga tegmasdan almashtirish mumkin",
            ],
            [
              "Global o‘yinchi uslub boshqaruvini qo‘shsa",
              "U buni universal, chuqur bo‘lmagan holda chiqaradi. Bizning himoyamiz — har til uchun madaniy chuqurlik va xulq ma‘lumoti; ikkisi ham funksiya chiqishi bilan paydo bo‘lmaydi",
            ],
            [
              "Odamlar o‘rganish uchun to‘lamasa",
              "Bu haqiqiy risk va shu sababli keyingi maqsad ko‘proq foydalanuvchi emas, o‘lchangan Pro konversiyasi. B2B litsenziya — himoya vositasi: maktab va studiyalar iste‘molchi odatidan qat‘i nazar joy uchun to‘laydi",
            ],
            [
              "Ichki bozor kichik",
              "O‘zbekiston mahsulotni moliyalashtiradi; diaspora va turkiy dunyo kompaniyani. Kengayish uchun yangi g‘oya emas, yangi profillar kerak",
            ],
          ],
        },
        {
          k: "quote",
          t: "Biz jiddiy qabul qiladigan risk — raqobat emas, odat.",
        },
      ],
    },

    {
      n: 12,
      kicker: "Jamoa va so‘rov",
      title: "Buni kim qurayapti va nima kerak",
      lead: "Mablag‘siz 26 tilni ishga tushirgan jamoa kuchayadigan qatlam uchun so‘rayapti.",
      blocks: [
        {
          k: "kv",
          items: [
            ["Samar Saidov — asoschi va CEO", "Tadbirkor, startap quruvchi. Mahsulotdan oldin muammoni o‘zi yashab ko‘rgan"],
            ["To'rabek Yo'ldoshev — CTO", "Dasturchi injener. Quvur, yo‘naltirish va tekshiruv qatlami uning zimmasida"],
            ["Majitov Zuxriddin — backend", "Infratuzilma, ma‘lumot saqlash, Telegram va platforma yuzalari"],
          ],
        },
        { k: "sub", t: "Mablag‘ nimaga ketadi" },
        {
          k: "kv",
          items: [
            ["40% — O‘rganish moduli", "Tarjima tarixini shaxsiy darslarga aylantirish; kundalik foydalanishni yaratadigan qatlam"],
            ["30% — Klaviatura va kengaytma", "Mobil klaviatura va brauzer kengaytmasi — Lingo har ilova ichida ishlashi uchun"],
            ["20% — Sifat va tirik til", "Madaniy profillar uchun tilshunoslar, haftalik sleng va ibora yangilanishi, sifat baholash tizimi"],
            ["10% — Infratuzilma va AI xarajati", "O‘sish davridagi serving, kesh va model xarajatlari"],
          ],
        },
        { k: "sub", t: "12 oydan keyin" },
        {
          k: "list",
          ordered: true,
          items: [
            "10 000 aktiv foydalanuvchi — asosan klaviatura va Telegram orqali",
            "Pro ishga tushgan, konversiya va real narx o‘lchangan",
            "Birinchi B2B mijozlar: dublyaj studiyasi va ta‘lim muassasasi",
            "Birlik iqtisodi modellashtirilgan emas, o‘lchangan",
          ],
        },
        {
          k: "quote",
          t: "Tarjima qilishda davom eting — bir kun tarjimon kerak bo‘lmay qoladi.",
          by: " Saidov · lingo-translator.uz",
        },
        {
          k: "p",
          t: "Bu oxirgi gap — ham maqsad, ham biznes model. O‘z zaruratini qisqartiradigan mahsulot shu yo‘lda odat qozonadi; kuchayadigan narsa esa tarjimalar emas, odatlar.",
        },
      ],
    },
  ],
};

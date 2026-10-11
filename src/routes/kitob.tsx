import { createFileRoute } from "@tanstack/react-router";
import { BookReader } from "@/components/book/BookReader";
import { bookUz } from "@/components/book/content-uz";

export const Route = createFileRoute("/kitob")({
  head: () => ({
    meta: [
      { title: "Lingo — Investor kitobi | Kim gapiryapti?" },
      {
        name: "description",
        content:
          "Lingo investor kitobi, 12 bob: ohang, jins va tirik til muammosi, bugun ishlayotgan mahsulot, natijalar, himoya, bozor, biznes model va so‘rov.",
      },
      { property: "og:title", content: "Lingo — Investor kitobi | Kim gapiryapti?" },
      {
        property: "og:description",
        content:
          "Investor yolg‘iz o‘qiy oladigan 12 bob: “kim gapiryapti?” deb so‘raydigan tarjimon nega kuchayadigan aktivga aylanadi.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <BookReader copy={bookUz} />,
});

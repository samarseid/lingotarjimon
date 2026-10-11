import { createFileRoute } from "@tanstack/react-router";
import { BookReader } from "@/components/book/BookReader";
import { bookEn } from "@/components/book/content-en";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Lingo — Investor Book | Who is speaking?" },
      {
        name: "description",
        content:
          "A 12-chapter investor book on Lingo: tone, gender and living language, the product running today, traction, defensibility, market, model and the ask.",
      },
      { property: "og:title", content: "Lingo — Investor Book | Who is speaking?" },
      {
        property: "og:description",
        content:
          "Twelve chapters an investor can read alone: why a translator that asks who is speaking becomes a compounding asset.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <BookReader copy={bookEn} />,
});

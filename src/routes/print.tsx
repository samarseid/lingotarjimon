import { createFileRoute } from "@tanstack/react-router";
import { slides } from "@/components/deck/slides";

export const Route = createFileRoute("/print")({
  head: () => ({
    meta: [
      { title: "Lingo Pitch Deck — PDF export" },
      {
        name: "description",
        content:
          "Print view of the Lingo pitch deck: all 15 slides in sequence, ready to save as PDF.",
      },
      { property: "og:title", content: "Lingo Pitch Deck — PDF export" },
      {
        property: "og:description",
        content: "Print view for saving the 15-slide Lingo deck as a PDF.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Print,
});

function Print() {
  return (
    <main className="bg-secondary">
      <div className="flex items-center justify-between gap-4 px-6 py-4 print:hidden">
        <h1 className="font-display text-[18px] font-bold">
          Lingo — print view (15 slides)
        </h1>
        <div className="flex items-center gap-3">
          <a href="/" className="font-mono text-[13px] text-sand hover:text-ink">
            ← Back to deck
          </a>
          <button
            onClick={() => window.print()}
            className="rounded-sm bg-terracotta px-3 py-1.5 font-mono text-[13px] text-primary-foreground"
          >
            Save as PDF
          </button>
        </div>
      </div>


      <div className="flex flex-col items-center gap-6 pb-10 print:gap-0 print:pb-0">
        {slides.map(({ id, Component }) => (
          <div key={id} className="print-page border border-border print:border-0">
            <Component />
          </div>
        ))}
      </div>
    </main>
  );
}

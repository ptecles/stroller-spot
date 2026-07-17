import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";
import { StrollerList } from "@/components/StrollerList";
import { compactStrollers } from "@/data/strollers";

export const Route = createFileRoute("/compact")({
  head: () => ({
    meta: [
      { title: "10 Best Compact Strollers of 2026 — Rollwise" },
      {
        name: "description",
        content:
          "Our ranking of the 10 best compact and travel strollers: cabin-friendly folds, ultralight frames, and one-hand collapse designs.",
      },
      { property: "og:title", content: "10 Best Compact Strollers of 2026" },
      {
        property: "og:description",
        content: "Ultralight, cabin-friendly strollers ranked for city and travel families.",
      },
    ],
  }),
  component: CompactPage,
});

function CompactPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[oklch(0.45_0.08_150)]">
          Category 01 · Compact
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
          The 10 Best Compact Strollers
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Ultralight frames, cabin-approved folds, and one-hand collapses — ranked for city
          commutes and long-haul travel days. Prices and weights verified for 2026.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <StrollerList items={compactStrollers} accent="sage" />
      </section>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";
import { StrollerList } from "@/components/StrollerList";
import { robustStrollers } from "@/data/strollers";

export const Route = createFileRoute("/robust")({
  head: () => ({
    meta: [
      { title: "10 Most Robust Strollers of 2026 — Rollwise" },
      {
        name: "description",
        content:
          "The 10 most robust, all-terrain and full-size strollers: plush suspension, air-filled tires, and multi-child capable frames.",
      },
      { property: "og:title", content: "10 Most Robust Strollers of 2026" },
      {
        property: "og:description",
        content: "All-terrain suspension, air tires, and multi-child frames — ranked.",
      },
    ],
  }),
  component: RobustPage,
});

function RobustPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[oklch(0.4_0.12_40)]">
          Category 02 · Robust
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
          The 10 Most Robust Strollers
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Full-size frames, plush suspension, and all-terrain wheels for real-world trails, mixed
          surfaces, and growing families. Every pick is stress-tested in the field.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <StrollerList items={robustStrollers} accent="clay" />
      </section>
    </PageShell>
  );
}

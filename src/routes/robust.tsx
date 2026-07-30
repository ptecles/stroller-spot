import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";
import { StrollerList } from "@/components/StrollerList";
import { robustStrollers } from "@/data/strollers";

export const Route = createFileRoute("/robust")({
  head: () => ({
    meta: [
      { title: "Os 10 Melhores Carrinhos Robustos de 2026 — Happyfam" },
      {
        name: "description",
        content:
          "Os 10 carrinhos mais robustos, para todo tipo de terreno e tamanho real: suspensão macia, pneus infláveis e estruturas para múltiplos filhos.",
      },
      { property: "og:title", content: "Os 10 Melhores Carrinhos Robustos de 2026" },
      {
        property: "og:description",
        content: "Suspensão para todo tipo de terreno, pneus infláveis e estruturas para múltiplos filhos — classificados.",
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
          Categoria 02 · Robusto
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
          Os 10 Melhores Carrinhos Robustos
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Suspensão macia e rodas para todo tipo de terreno, prontos para trilhas e superfícies
          variadas. Maior tamanho e conforto.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <StrollerList items={robustStrollers} accent="clay" />
      </section>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";
import { StrollerList } from "@/components/StrollerList";
import { compactStrollers } from "@/data/strollers";

export const Route = createFileRoute("/compact")({
  head: () => ({
    meta: [
      { title: "Os 10 Melhores Carrinhos Compactos de 2026 — Happyfam" },
      {
        name: "description",
        content:
          "Nosso ranking dos 10 melhores carrinhos compactos e de viagem: dobras aprovadas para cabine, estruturas ultraleves e design de fechamento com uma mão.",
      },
      { property: "og:title", content: "Os 10 Melhores Carrinhos Compactos de 2026" },
      {
        property: "og:description",
        content: "Carrinhos ultraleves e aprovados para cabine, classificados para famílias urbanas e viajantes.",
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
          Categoria 01 · Compacto
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
          Os 10 Melhores Carrinhos Compactos
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Estruturas ultraleves, tamanho aprovado para a cabine do avião (consulte sempre a companhia
          aérea para confirmar) e fechamento com uma mão — ideais para deslocamentos na cidade e viagens.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <StrollerList items={compactStrollers} accent="sage" />
      </section>
    </PageShell>
  );
}

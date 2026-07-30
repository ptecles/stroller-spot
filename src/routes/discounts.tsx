import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";

export const Route = createFileRoute("/discounts")({
  head: () => ({
    meta: [
      { title: "Descontos — Happyfam" },
      {
        name: "description",
        content:
          "Entre no nosso grupo de descontos no WhatsApp: mais de 30 mil pessoas acompanhando promoções diárias e cupons exclusivos de enxoval de bebê.",
      },
      { property: "og:title", content: "Descontos — Happyfam" },
      {
        property: "og:description",
        content:
          "Mais de 30 mil pessoas acompanhando promoções diárias e cupons exclusivos de enxoval de bebê.",
      },
    ],
  }),
  component: DiscountsPage,
});

function DiscountsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Grupo de descontos
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
          Pague o melhor preço em cada item do enxoval.
        </h1>
        <div className="mt-6 space-y-5 text-lg text-muted-foreground">
          <p>
            Entre no nosso grupo de descontos no WhatsApp: mais de 30 mil pessoas acompanhando
            promoções diárias e cupons exclusivos das principais marcas de enxoval de bebê.
          </p>
          <p>
            É essencial para garantir a compra de todos os itens do enxoval pagando o melhor preço
            possível — assim que os preços caem, avisamos por lá.
          </p>
        </div>
        <div className="mt-8">
          <a
            href="https://enxovalinteligente.com.br/grupodescontoswa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Entrar no grupo de descontos
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 sm:grid-cols-3">
          <div>
            <p className="font-serif text-4xl font-semibold tracking-tight text-foreground">
              30 mil+
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Pessoas no grupo</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-semibold tracking-tight text-foreground">
              Diárias
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Promoções compartilhadas</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-semibold tracking-tight text-foreground">
              Exclusivos
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Cupons de desconto</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

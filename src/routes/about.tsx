import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre — Happyfam" },
      {
        name: "description",
        content:
          "Somos uma família com duas crianças que trabalha com enxoval de bebê e já testou mais de 30 modelos de carrinho na vida real.",
      },
      { property: "og:title", content: "Sobre — Happyfam" },
      {
        property: "og:description",
        content:
          "Somos uma família com duas crianças que trabalha com enxoval de bebê e já testou mais de 30 modelos de carrinho na vida real.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Sobre a Happyfam
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
          Testado por quem realmente usa.
        </h1>
        <div className="mt-6 space-y-5 text-lg text-muted-foreground">
          <p>
            Somos uma família com duas crianças e trabalhamos com enxoval de bebê no dia a dia. Ao
            longo desse tempo, já testamos mais de 30 modelos de carrinho na vida real — no carro,
            no elevador, na calçada esburacada, no avião, em viagens e na correria da rotina com os
            filhos.
          </p>
          <p>
            Aqui colocamos apenas os carrinhos que recomendamos de verdade para os nossos amigos e
            que usamos com a nossa própria família. Se não colocaríamos nossos filhos nele, ele não
            entra na lista.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 sm:grid-cols-3">
          <div>
            <p className="font-serif text-4xl font-semibold tracking-tight text-foreground">2</p>
            <p className="mt-1 text-sm text-muted-foreground">Crianças na família</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-semibold tracking-tight text-foreground">30+</p>
            <p className="mt-1 text-sm text-muted-foreground">Modelos testados na vida real</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-semibold tracking-tight text-foreground">0</p>
            <p className="mt-1 text-sm text-muted-foreground">Recomendações que não usaríamos</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

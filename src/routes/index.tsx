import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Mountain, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import heroImg from "@/assets/hero-stroller.jpg";
import { compactStrollers, robustStrollers } from "@/data/strollers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happyfam — Os Melhores Carrinhos de Bebê de 2026, Classificados" },
      {
        name: "description",
        content:
          "Rankings independentes dos 10 melhores carrinhos compactos e dos 10 mais robustos para todo tipo de terreno. Compare preço, peso e recursos.",
      },
      { property: "og:title", content: "Happyfam — Os Melhores Carrinhos de Bebê, Classificados" },
      {
        property: "og:description",
        content:
          "Os 10 melhores carrinhos compactos e os 10 mais robustos para todo tipo de terreno, avaliados.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Guia de carrinhos de bebê · 2026
            </p>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Ande com{" "}
              <span className="italic text-[oklch(0.45_0.08_150)]">confiança.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Testamos, comparamos e classificamos carrinhos para que você não precise. Duas
              listas definitivas — compacto e robusto — atualizadas para famílias reais.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://enxovalinteligente.com.br/grupodescontoswa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Entre no grupo de descontos
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[oklch(0.94_0.03_80)]" />
            <img
              src={heroImg}
              alt="Modern baby stroller in a sunlit park"
              width={1600}
              height={1000}
              className="rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <CategoryCard
            to="/compact"
            tone="sage"
            icon={<Compass className="h-6 w-6" />}
            title="Os 10 Melhores Carrinhos Compactos"
            description="Estruturas leves, dobráveis com uma mão e aprovadas para cabine, ideais para o dia a dia na cidade e viagens."
            preview={compactStrollers.slice(0, 3).map((s) => s.name)}
          />
          <CategoryCard
            to="/robust"
            tone="clay"
            icon={<Mountain className="h-6 w-6" />}
            title="Os 10 Melhores Carrinhos Robustos"
            description="Rodas para todo tipo de terreno, suspensão macia e estrutura para uso em espaços grandes no dia a dia."
            preview={robustStrollers.slice(0, 3).map((s) => s.name)}
          />
        </div>

        {/* Trust strip */}
        <div className="mt-16 grid gap-8 rounded-2xl border border-border bg-card p-8 md:grid-cols-3">
          <Stat number="120+" label="Horas de testes práticos" />
          <Stat number="42" label="Carrinhos avaliados este ano" />
          <Stat number="0" label="Posicionamentos patrocinados — nunca" />
        </div>
      </section>
    </PageShell>
  );
}

function CategoryCard({
  to,
  tone,
  icon,
  title,
  description,
  preview,
}: {
  to: "/compact" | "/robust";
  tone: "sage" | "clay";
  icon: React.ReactNode;
  title: string;
  description: string;
  preview: string[];
}) {
  const bg = tone === "sage" ? "oklch(0.94 0.04 150)" : "oklch(0.94 0.05 45)";
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-2xl border border-border p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
      style={{ backgroundColor: bg }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/70 text-foreground">
        {icon}
      </div>
      <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-3 max-w-md text-foreground/70">{description}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {preview.map((p) => (
          <li
            key={p}
            className="rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-foreground/80"
          >
            {p}
          </li>
        ))}
        <li className="rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-foreground/80">
          + mais 7
        </li>
      </ul>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
        Ver o ranking
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-4xl font-semibold tracking-tight text-foreground">{number}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

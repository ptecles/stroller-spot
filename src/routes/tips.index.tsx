import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { tipPosts } from "@/data/tips";

export const Route = createFileRoute("/tips/")({
  head: () => ({
    meta: [
      { title: "Dicas — Happyfam" },
      {
        name: "description",
        content:
          "Dicas práticas de quem testa carrinho de bebê na vida real: como escolher, o que checar de segurança e como economizar no enxoval.",
      },
      { property: "og:title", content: "Dicas — Happyfam" },
      {
        property: "og:description",
        content:
          "Dicas práticas de quem testa carrinho de bebê na vida real: como escolher, o que checar de segurança e como economizar no enxoval.",
      },
    ],
  }),
  component: TipsIndexPage,
});

function TipsIndexPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Dicas
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
          O que aprendemos testando carrinhos de verdade.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Sem enrolação: guias práticos sobre como escolher, o que checar de segurança e como
          economizar no enxoval.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="flex flex-col gap-6">
          {tipPosts.map((post) => (
            <Link
              key={post.slug}
              to="/tips/$slug"
              params={{ slug: post.slug }}
              className="group block rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg md:p-8"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <span>{post.tag}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-foreground">
                {post.title}
              </h2>
              <p className="mt-3 text-base text-muted-foreground">{post.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Ler mais
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

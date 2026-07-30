import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { tipPosts } from "@/data/tips";

export const Route = createFileRoute("/tips/$slug")({
  loader: ({ params }) => {
    const post = tipPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Happyfam` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
        ]
      : [],
  }),
  component: TipPostPage,
});

function TipPostPage() {
  const post = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link
        to="/tips"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Todas as dicas
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        <span>{post.tag}</span>
        <span>·</span>
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>
      <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
        {post.title}
      </h1>

      <div className="mt-8 space-y-5 text-lg text-muted-foreground">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

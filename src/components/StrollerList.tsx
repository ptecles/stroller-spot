import type { Stroller } from "@/data/strollers";
import { Star, ArrowUpRight, Check } from "lucide-react";

export function StrollerList({ items, accent }: { items: Stroller[]; accent: "sage" | "clay" }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((s) => (
        <article
          key={s.rank}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg md:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex shrink-0 items-start gap-4">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-xl font-serif text-2xl font-semibold ${
                  accent === "sage"
                    ? "bg-[oklch(0.92_0.04_150)] text-[oklch(0.35_0.08_150)]"
                    : "bg-[oklch(0.93_0.05_45)] text-[oklch(0.4_0.12_40)]"
                }`}
              >
                #{s.rank}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {s.brand}
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3.5 w-3.5 fill-current text-[oklch(0.75_0.16_75)]" />
                  <span className="font-medium text-foreground">{s.rating}</span>
                </div>
              </div>
              <h3 className="mt-1 font-serif text-2xl font-semibold tracking-tight text-foreground">
                {s.name}
              </h3>
              <p className="mt-2 text-base text-muted-foreground">{s.tagline}</p>

              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Price</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{s.price}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Weight</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{s.weight}</dd>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    Best for
                  </dt>
                  <dd className="mt-0.5 font-medium text-foreground">{s.bestFor}</dd>
                </div>
              </dl>

              <ul className="mt-5 flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                  >
                    <Check className="h-3 w-3" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex shrink-0 md:flex-col md:items-end">
              <a
                href={s.affiliateUrl}
                rel="sponsored nofollow noopener"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Check price
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                Affiliate link
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

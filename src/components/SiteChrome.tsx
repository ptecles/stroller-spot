import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background font-serif text-lg">
            r
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">Rollwise</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm sm:gap-6">
          <Link
            to="/compact"
            className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground"
          >
            Compact
          </Link>
          <Link
            to="/robust"
            className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground"
          >
            Robust
          </Link>
          <Link
            to="/about"
            className="hidden rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground sm:inline"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="max-w-md">
            <p className="font-serif text-lg font-semibold text-foreground">Rollwise</p>
            <p className="mt-2">
              Independent stroller research for new parents. We only recommend gear we would push
              our own kids in.
            </p>
          </div>
          <div className="text-xs leading-relaxed">
            <p className="font-medium text-foreground">Affiliate disclosure</p>
            <p className="mt-1 max-w-sm">
              Rollwise is reader-supported. When you buy through links on our site, we may earn a
              commission at no extra cost to you.
            </p>
          </div>
        </div>
        <p className="mt-8 text-xs">© {new Date().getFullYear()} Rollwise. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

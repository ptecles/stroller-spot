import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background font-serif text-lg">
            h
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">Happyfam</span>
        </Link>
        <nav className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto text-sm [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-end sm:gap-6 [&::-webkit-scrollbar]:hidden">
          <Link
            to="/compact"
            className="shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground"
          >
            Compactos
          </Link>
          <Link
            to="/robust"
            className="shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground"
          >
            Robustos
          </Link>
          <Link
            to="/discounts"
            className="shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground"
          >
            Descontos
          </Link>
          <Link
            to="/tips"
            className="shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground"
          >
            Dicas
          </Link>
          <Link
            to="/about"
            className="shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground"
          >
            Sobre
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
            <p className="font-serif text-lg font-semibold text-foreground">Happyfam</p>
            <p className="mt-2">
              Pesquisa independente sobre carrinhos de bebê para novos pais. Só recomendamos
              produtos nos quais colocaríamos nossos próprios filhos.
            </p>
          </div>
          <div className="text-xs leading-relaxed">
            <p className="font-medium text-foreground">Aviso de afiliados</p>
            <p className="mt-1 max-w-sm">
              Happyfam é sustentado pelos leitores. Quando você compra através dos links do nosso
              site, podemos ganhar uma comissão sem custo adicional para você.
            </p>
          </div>
        </div>
        <p className="mt-8 text-xs">© {new Date().getFullYear()} Happyfam. Todos os direitos reservados.</p>
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

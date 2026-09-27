import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { menu, restaurant, type MenuItem } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bellavere — Pizzeria · Cardápio" },
      {
        name: "description",
        content:
          "Cardápio digital da Bellavere Pizzeria: pizzas artesanais de forno a lenha, entradas, bebidas e sobremesas italianas.",
      },
      { property: "og:title", content: "Bellavere — Pizzeria · Cardápio" },
      {
        property: "og:description",
        content:
          "Pizza artesanal, ingredientes selecionados e uma experiência feita para compartilhar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function MenuRow({ item }: { item: MenuItem }) {
  const [size, setSize] = useState(1);
  const hasSizes = !!item.sizes;
  const price = hasSizes ? item.sizes![size]!.price : item.price;

  return (
    <article className="border-b border-border py-5 last:border-b-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif-display text-lg font-medium tracking-wide uppercase">
          {item.name}
        </h3>
        <span
          aria-hidden
          className="mx-1 flex-1 border-b border-dotted border-muted-foreground/40"
        />
        <span className="shrink-0 text-base font-medium tabular-nums text-primary">
          {price}
        </span>
      </div>
      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
      {hasSizes && (
        <div className="mt-3 flex gap-2" role="group" aria-label="Tamanho">
          {item.sizes!.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setSize(i)}
              className={`min-h-9 rounded-sm border px-3 text-xs font-medium tracking-wide transition-colors ${
                i === size
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </article>
  );
}

function FeaturedItem({ item }: { item: MenuItem }) {
  const [size, setSize] = useState(1);
  const hasSizes = !!item.sizes;
  const price = hasSizes ? item.sizes![size]!.price : item.price;

  return (
    <article className="border-b border-border pb-6 last:border-b-0">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        width={1024}
        height={768}
        className="aspect-[4/3] w-full rounded-sm object-cover"
      />
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-serif-display text-xl font-medium tracking-wide uppercase">
          {item.name}
        </h3>
        <span className="shrink-0 text-lg font-medium tabular-nums text-primary">
          {price}
        </span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
      {hasSizes && (
        <div className="mt-3 flex gap-2" role="group" aria-label="Tamanho">
          {item.sizes!.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setSize(i)}
              className={`min-h-9 rounded-sm border px-3 text-xs font-medium tracking-wide transition-colors ${
                i === size
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </article>
  );
}

function Index() {
  const [active, setActive] = useState(menu[0]!.id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    for (const cat of menu) {
      const el = sectionRefs.current[cat.id];
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-2xl px-5 pt-10 pb-6 text-center">
          <p className="text-xs font-medium tracking-[0.35em] text-olive uppercase">
            {restaurant.tagline}
          </p>
          <h1 className="font-serif-display mt-2 text-4xl font-medium tracking-[0.12em] sm:text-5xl">
            BELLAVERE
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {restaurant.intro}
          </p>
        </div>
      </header>

      {/* Sticky category nav */}
      <nav
        aria-label="Categorias do cardápio"
        className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur-sm"
      >
        <div className="no-scrollbar mx-auto flex max-w-2xl gap-1 overflow-x-auto px-5 py-3">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className={`min-h-10 shrink-0 rounded-sm px-4 text-sm font-medium tracking-wide transition-colors ${
                active === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Menu */}
      <main className="mx-auto max-w-2xl px-5 pb-16">
        {menu.map((cat) => {
          const featured = cat.items.filter((i) => i.image);
          const regular = cat.items.filter((i) => !i.image);
          return (
            <section
              key={cat.id}
              id={cat.id}
              ref={(el) => {
                sectionRefs.current[cat.id] = el;
              }}
              className="animate-fade-in scroll-mt-24 pt-12"
            >
              <div className="mb-6 flex items-center gap-4">
                <h2 className="font-serif-display text-2xl font-medium tracking-[0.15em] uppercase">
                  {cat.title}
                </h2>
                <span aria-hidden className="h-px flex-1 bg-border" />
              </div>
              {featured.length > 0 && (
                <div className="mb-2 grid gap-8 sm:grid-cols-2">
                  {featured.map((item) => (
                    <FeaturedItem key={item.name} item={item} />
                  ))}
                </div>
              )}
              <div>
                {regular.map((item) => (
                  <MenuRow key={item.name} item={item} />
                ))}
              </div>
            </section>
          );
        })}

        {/* WhatsApp */}
        <div className="mt-14 text-center">
          <a
            href={restaurant.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-primary px-6 text-sm font-medium tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Falar com a pizzaria
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-2xl px-5 py-12 text-center">
          <p className="text-xs font-medium tracking-[0.35em] text-olive uppercase">
            {restaurant.tagline}
          </p>
          <p className="font-serif-display mt-1 text-2xl font-medium tracking-[0.12em]">
            BELLAVERE
          </p>
          <dl className="mt-8 space-y-4 text-sm text-muted-foreground">
            <div>
              <dt className="text-xs font-medium tracking-widest text-foreground uppercase">
                Endereço
              </dt>
              <dd className="mt-1">{restaurant.address}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-widest text-foreground uppercase">
                Horário
              </dt>
              <dd className="mt-1">{restaurant.hours}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-widest text-foreground uppercase">
                Telefone
              </dt>
              <dd className="mt-1">{restaurant.phone}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-widest text-foreground uppercase">
                Instagram
              </dt>
              <dd className="mt-1">{restaurant.instagram}</dd>
            </div>
          </dl>
        </div>
      </footer>
    </div>
  );
}

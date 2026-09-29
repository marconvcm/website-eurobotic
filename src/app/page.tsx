import { ShowcaseSection } from "@/components/showcase-section";
import { futureProducts, products, siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <>
      <section className="bg-surface relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div
          aria-hidden
          className="from-brand/15 to-brand-accent/15 pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-br blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <span className="border-brand/20 bg-brand/5 text-brand inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm font-semibold tracking-widest uppercase">
            <span className="bg-brand-accent size-2 animate-pulse rounded-full" />
            Em breve
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-5xl leading-none font-bold tracking-tight uppercase sm:text-7xl">
            A nova era da{" "}
            <span className="from-brand to-brand-accent bg-gradient-to-r bg-clip-text text-transparent">
              robótica
            </span>{" "}
            está chegando
          </h1>
          <p className="text-muted mx-auto mt-6 max-w-2xl text-xl">
            Soluções completas em robótica para indústria, logística e serviços.
            Estamos preparando algo grande — acompanhe o lançamento.
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="bg-brand shadow-brand/25 hover:bg-brand/90 focus-visible:outline-brand mt-10 inline-flex items-center rounded-full px-8 py-3 text-lg font-semibold text-white shadow-lg transition focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Fale conosco
          </a>
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-32 px-4 py-24 sm:gap-40">
        <ShowcaseSection
          id="produtos"
          title="Nossa linha de produtos"
          subtitle="Soluções prontas para transformar limpeza, indústria e logística."
          items={products}
          priorityFirst
        />
        <ShowcaseSection
          id="produtos-futuros"
          title="Produtos futuros"
          subtitle="O que estamos preparando para as próximas etapas."
          items={futureProducts}
        />
      </div>

      <section className="bg-foreground py-24 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-4xl font-bold tracking-tight uppercase sm:text-5xl">
            Estamos quase prontos
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Quer saber mais sobre nossas soluções? Entre em contato e seja um
            dos primeiros a conhecer a {siteConfig.name}.
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-brand-accent mt-8 inline-block text-xl font-semibold underline-offset-4 hover:underline"
          >
            {siteConfig.contactEmail}
          </a>
          <p className="mt-16 text-sm text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
            reservados.
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-40 pb-24">
      <h1 className="text-4xl font-bold uppercase">Página não encontrada</h1>
      <p className="text-muted mt-4">A página que você procura não existe.</p>
      <Link href="/" className="text-brand mt-8 inline-block underline">
        Voltar ao início
      </Link>
    </section>
  );
}

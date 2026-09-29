"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // Hook your error reporting service (e.g. Sentry) in here.
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto max-w-6xl px-4 pt-40 pb-24">
      <h1 className="text-4xl font-bold uppercase">Algo deu errado</h1>
      <p className="text-foreground/70 mt-4">
        An unexpected error occurred. Please try again.
      </p>
      <button
        type="button"
        onClick={() => retry()}
        className="bg-foreground text-background mt-8 rounded px-4 py-2"
      >
        Tentar novamente
      </button>
    </section>
  );
}

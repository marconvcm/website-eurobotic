"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  // global-error replaces the root layout, so it must render <html> and <body>.
  return (
    <html lang="pt-BR">
      <body
        style={{ fontFamily: "system-ui, sans-serif", padding: "4rem 1rem" }}
      >
        <h1>Algo deu errado</h1>
        <button type="button" onClick={() => retry()}>
          Tentar novamente
        </button>
      </body>
    </html>
  );
}

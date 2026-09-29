import { env } from "@/lib/env";

export const dynamic = "force-dynamic";

/** Liveness probe for uptime monitors. */
export function GET() {
  return Response.json(
    {
      status: "ok",
      environment: env.VERCEL_ENV ?? env.NODE_ENV,
      commit: env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? null,
      timestamp: new Date().toISOString(),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}

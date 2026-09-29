import { z } from "zod";

/**
 * Server-side environment. Validated once at import time so misconfiguration
 * fails the build instead of surfacing at request time.
 *
 * Vercel system variables are documented at:
 * https://vercel.com/docs/projects/environment-variables/system-environment-variables
 */
const serverSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  VERCEL_ENV: z.enum(["development", "preview", "production"]).optional(),
  VERCEL_URL: z.string().optional(),
  VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),
  VERCEL_GIT_COMMIT_SHA: z.string().optional(),
});

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url().optional(),
});

const parsed = serverSchema.extend(clientSchema.shape).safeParse({
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_ENV: process.env.VERCEL_ENV,
  VERCEL_URL: process.env.VERCEL_URL,
  VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
  VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});

if (!parsed.success) {
  console.error(
    "❌ Invalid environment variables:",
    z.flattenError(parsed.error).fieldErrors,
  );
  throw new Error("Invalid environment variables");
}

export const env = parsed.data;

/** True only for the production deployment (not previews or local builds). */
export const isProduction = env.VERCEL_ENV === "production";

/**
 * Canonical absolute URL of the site. Resolution order:
 * explicit NEXT_PUBLIC_SITE_URL → Vercel production domain → Vercel deployment URL → localhost.
 */
export function getSiteUrl(): URL {
  if (env.NEXT_PUBLIC_SITE_URL) return new URL(env.NEXT_PUBLIC_SITE_URL);
  if (env.VERCEL_ENV === "production" && env.VERCEL_PROJECT_PRODUCTION_URL) {
    return new URL(`https://${env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }
  if (env.VERCEL_URL) return new URL(`https://${env.VERCEL_URL}`);
  return new URL(`http://localhost:${process.env.PORT ?? 3000}`);
}

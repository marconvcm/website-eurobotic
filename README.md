# Eurobotic Website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, deployed on Vercel.

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open http://localhost:3000.

## Scripts

| Script           | Description                                 |
| ---------------- | ------------------------------------------- |
| `pnpm dev`       | Start the dev server (Turbopack)            |
| `pnpm build`     | Production build                            |
| `pnpm start`     | Serve the production build                  |
| `pnpm lint`      | ESLint                                      |
| `pnpm typecheck` | Generate route types and run `tsc --noEmit` |
| `pnpm format`    | Format with Prettier                        |
| `pnpm check`     | Format check + lint + typecheck (CI parity) |

## Project structure

```
src/
  app/                 Routes, layouts, metadata files
    api/health/        Liveness endpoint (GET /api/health)
    error.tsx          Segment error boundary
    global-error.tsx   Root error boundary
    not-found.tsx      404 page
    robots.ts          robots.txt (blocks crawlers outside production)
    sitemap.ts         sitemap.xml generated from site config
  components/          Shared UI components
  config/site.ts       Site name, description, navigation
  lib/env.ts           Validated environment variables + site URL helper
```

## What's included

- **Security headers** (HSTS, nosniff, frame-deny, referrer & permissions policy) in `next.config.ts`; `X-Powered-By` disabled.
- **SEO**: `metadataBase`, title template, Open Graph/Twitter metadata, `robots.txt`, `sitemap.xml`. Preview deployments are `noindex`.
- **Env validation** with Zod — invalid config fails the build.
- **Observability**: Vercel Analytics and Speed Insights (enable both in the Vercel dashboard).
- **Typed routes** (`typedRoutes: true`) so broken `<Link>` hrefs fail type-checking.
- **CI** (`.github/workflows/ci.yml`): format, lint, typecheck, build on every PR and push to `main`.

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import it in Vercel — the Next.js framework preset is detected automatically.
3. Optionally set `NEXT_PUBLIC_SITE_URL` to your custom domain (e.g. `https://eurobotic.com`).
   Without it, the Vercel production domain is used.
4. Enable **Analytics** and **Speed Insights** in the project settings.

Every pull request gets a preview deployment; merges to `main` deploy to production.

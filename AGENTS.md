# Agent instructions

This repository is a **Next.js 14 (App Router)** portfolio: **TypeScript (strict)**, **Tailwind CSS**, **shadcn-style UI** (Radix primitives, `class-variance-authority`, `cn()` helper), **@t3-oss/env-nextjs** with **Zod** for public env validation, and **React Three Fiber** + **Three.js** for the animated background.

## Layout

| Area | Role |
|------|------|
| `src/app/` | App Router: `layout.tsx`, `page.tsx`, `globals.css`, dynamic routes, **Route Handlers** under `api/` |
| `src/components/` | UI by feature (`hero/`, `experience/`, `projects/`, `stats/`, `background/`, `shared/`) and `ui/` (primitives) |
| `src/lib/config/` | Runtime config: `env` + `env.schema`, `profile` / `social` derived from env |
| `src/lib/db/` | Drizzle + **libSQL** (Turso in prod, `file:…` SQLite locally). Schema, `queries.ts`, and read helpers used by RSC. |
| `src/lib/types/` | Shared domain types (e.g. `content.ts` for portfolio entities). |
| `src/lib/db/seed/data/` | Seed **only** (initial rows); not used at runtime. |
| `src/hooks/` | Client hooks (e.g. touch) |

## Imports

- Path alias: `@/*` points at the **repository root** (see `tsconfig.json`). App code is typically imported as `@/src/...` (e.g. `@/src/lib/utils`, `@/src/components/...`).

## Conventions to preserve

- **Server Components by default**; add `"use client"` only for hooks, browser APIs, or R3F/Three.
- **Class names**: `cn()` from `@/src/lib/utils` (clsx + tailwind-merge).
- **New public env vars**: extend `env.schema.ts`, then `env.ts` `client` + `runtimeEnv`, and consume via `src/lib/config/profile.ts` (or similar)—do not read `process.env` for validated keys in app code.
- **Database**: set `DATABASE_URL` (and `TURSO_AUTH_TOKEN` for Turso). Local dev: e.g. `file:./.data/local.db`. Run `npm run db:push` (apply schema) and `npm run db:seed` (load rows from `src/lib/db/seed/data/`) before `npm run build` or when the DB is empty. Runtime reads go through `src/lib/db/queries.ts`, not the seed files.
- **New content**: add rows in the DB (or extend seed and re-seed) and add types in `src/lib/types/content.ts` if the shape changes; keep `generateStaticParams` using DB ids from queries.
- **API routes (App Router)**: use `NextResponse` / `NextRequest` from `next/server` in `route.ts`—not the legacy Pages `NextApiRequest` / `NextApiResponse` types.
- **3D**: background code lives under `src/components/background/`; R3F components must be client components.

## Commands

- `npm run dev` — development server  
- `npm run build` — production build  
- `npm run lint` — ESLint (`next/core-web-vitals`)  
- `npm run db:push` / `db:generate` / `db:migrate` — Drizzle schema  
- `npm run db:seed` — populate SQLite / Turso from `src/lib/db/seed/data/`

Prefer small, focused changes that match existing naming and file placement.

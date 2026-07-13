# Knowledge Map

This map provides a direct link between features/domain concepts and the files that implement them to minimize codebase exploration.

## Core Domain
- **Database Schema**: `src/lib/db/schema.ts`
- **Database Queries**: `src/lib/db/queries.ts` (The ONLY place for runtime reads)
- **Domain Types**: `src/lib/types/content.ts`
- **Environment Validation**: `src/lib/config/env.schema.ts` $\rightarrow$ `src/lib/config/env.ts`
- **Application Config**: `src/lib/config/profile.ts`

## UI Layers
- **Page Entry**: `src/app/page.tsx`
- **Global Styles**: `src/app/globals.css`
- **Main Layout**: `src/app/layout.tsx`
- **UI Primitives**: `src/components/ui/` (shadcn/ui)
- **Feature Components**: `src/components/{feature}/`
- **3D Background**: `src/components/background/`

## Data Management
- **Seed Data**: `src/lib/db/seed/data/*.ts`
- **Seed Logic**: `scripts/seed.ts`
- **DB Migration**: `drizzle.config.ts`

## Utilities
- **Tailwind Merger**: `src/lib/utils.ts` (`cn()` helper)

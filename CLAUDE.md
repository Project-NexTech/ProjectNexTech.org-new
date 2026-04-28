# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server with Turbopack.
- `npm run build` — Static export build (Turbopack). Output is written to `out/`.
- `npm start` — Serves the already-built `out/` directory via `npx serve`. It does **not** start Next; run `npm run build` first.
- `npm run lint` — ESLint (Next + TypeScript config).

There is no test framework configured.

## Architecture

This is the marketing/info site for Project NexTech, a student-led STEM nonprofit. It is a **statically exported Next.js 15 App Router site** deployed to GitHub Pages.

### Static export constraints (important)

`next.config.ts` sets `output: "export"` and `images.unoptimized: true`. This shapes the whole codebase:

- No server runtime, no API routes, no `next/image` optimization, no dynamic `[param]` routes that require server rendering. Build output is plain HTML/CSS/JS in `out/`.
- Because image optimization is disabled, raw `<img>` is used in many places and `@next/next/no-img-element` is turned off in `eslint.config.mjs`.
- `src/components/NexImage.tsx` is a thin `next/image` wrapper that defaults `quality` to 100 — use it (or plain `<img>`) when adding images; do not assume the optimizer will downscale anything.
- `public/img/` is the source of truth for all media. Paths are referenced as absolute strings (e.g. `/img/team/...`) from data files.

### Routing & layout

- App Router under `src/app/`. Each top-level section (`about`, `contribute`, `join`, `programs`, `team`) is a folder with `page.tsx` and `layout.tsx`.
- `src/app/layout.tsx` is the root layout: loads Inter via `next/font`, wraps everything in `ThemeRegistry` (MUI ThemeProvider) → `LayoutContent`.
- `LayoutContent.tsx` is a client component that renders `AnnouncementBar` + `Navbar` + `<main>{children}</main>` + `Footer`. The MUI theme provider wraps this so server components render with the theme available.

### Theming

- Single dark theme in `src/theme.ts`. Primary brand color is `#f24c02` (orange), secondary `#4083cc` (blue), backgrounds `#282828` / `#303947`.
- Styling is MUI v7 + Emotion. Components mostly use the `sx` prop and inline `<Box>` layout rather than CSS modules. Two `*.module.css` files exist for layout-level CSS.
- Hardcoded color values matching the theme palette appear throughout (e.g. `#303947`, `#f24c02`); when changing brand colors, search for the literals as well as updating `theme.ts`.

### Data layer

Static content that varies by page lives in plain TS modules under `src/data/`:

- `bigNumbers.ts` — array of stat tiles, indexed positionally by Home / About / Contribute pages (Home picks specific indexes — see `src/app/page.tsx`). Reordering this array will silently change what those pages show.
- `teamData.ts` — three lookup maps keyed by full name: `teamDataMap` (EC flag), `getTeamImages` (thumbnail + carousel images), `getTeamDescription`. Adding a team member means updating all three plus adding `public/img/team/` assets matching the referenced paths. Names must match exactly between the page's role list and the data maps.

Team page role lists (e.g. department managers, board) are inlined in `src/app/team/page.tsx` and rendered through `TeamGrid` → `TeamMemberDialog`.

### Deployment

- `.github/workflows/nextjs.yml` builds on push to `main` and deploys `out/` to GitHub Pages.
- The workflow uses `actions/configure-pages` with `static_site_generator: next`, which can inject `basePath` automatically. `next.config.ts` currently pins `basePath: ""` because the site is served from the apex domain.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: Vite dev server
- `npm run build`: `tsc -b` (strict type check) then `vite build` to `dist/`
- `npm run lint`: oxlint (the Vite template's linter, not ESLint; rules in `.oxlintrc.json`, including `react/exhaustive-deps` and `typescript/no-explicit-any`)
- `npm run preview`: serve `dist/` (has the SPA fallback, so deep links and refreshes work)
- `npx tsc -b`: type check only

There is no test framework. Verify changes with lint, `tsc -b`, the build, and a browser check against `vite preview`.

## What this is

A frontend-only personal portfolio (Vite + React 19 + TypeScript strict + Tailwind CSS v4), deployed to Netlify at `https://amarr-portfolio.netlify.app` from GitHub (`amartopalovic/New-Portfolio`, branch `main`). No backend, no contact form, no environment variables.

## Hard rules

- **`DESIGN.md` is the visual authority.** Flat colour-blocking, no shadows/blur/borders as structure, single font weight (400 only), sharp corners (`rounded-xs` 5px only on filled buttons and the Projects filter chips), no gradients except the hero, accent `#00FFD0` unused, muted `#B6B6B6` never used for text (use `text-secondary`).
- **All site copy and facts come from the owner's CV.** Never invent, embellish or "correct" text, dates, numbers, links or project facts in `src/data/*`.
- **Use theme tokens only** (defined in `src/index.css`). No arbitrary pixel values or raw colours in components.
- Named spacing tokens are only `section` (40px), `band` (52px), `gutter` (20px). DESIGN.md's xxs..xxxl map to Tailwind's numeric scale (1..8); named versions were removed because they collided with Tailwind sizes like `max-w-xl`.
- **Every page must end on a canvas band** so it doesn't merge with the `bg-surface-alt` footer. Bands alternate canvas / `bg-surface-alt`.
- Accessibility adaptations of DESIGN.md are intentional: hover uses `text-secondary` or opacity 0.73 instead of lower-contrast values, 20px page gutter instead of 0, 44px touch targets.

## Architecture

- **Content lives in typed data modules** (`src/data/`): `site.ts` (URL, contact details, CV path, nav), `projects.ts` (projects, categories, Home selection, detail content, images), `about.ts`, `resume.ts`, `experience.ts`, `skills.ts`, `seo.ts` (meta descriptions). Pages render from these; edit data, not markup, to change content.
- **Routing** (`src/router.tsx`): `createBrowserRouter` (library/data mode). `Layout` and `Home` are in the main bundle; every other page uses route-level `lazy`. The root route's `HydrateFallback: () => null` exists to silence React Router's warning on direct loads of lazy routes.
- **`Layout`** owns the skip link, sticky `Header`, `<main id="main" tabIndex={-1}>`, `Footer`, `ScrollRestoration` (PUSH → top, Back/Forward → restore, hash → target) and focus-to-`main` on pathname change (skipped on initial load). The Projects filter uses `setSearchParams(..., { replace: true, preventScrollReset: true })`; without `preventScrollReset`, chip clicks would jump to the top.
- **Head tags:** each page renders `PageMeta` (title, description, canonical, optional `noindex`), which React 19 hoists into `<head>`. `index.html` deliberately has **no** static `<title>` or description (they would duplicate); it holds only site-wide Open Graph/Twitter tags and Person JSON-LD. The 404 (also rendered for unknown project slugs) is `noindex`.
- **Motion:** `main.tsx` wraps the app in `MotionConfig reducedMotion="user"` + `LazyMotion features={domAnimation} strict`. Always use `m.*` (never `motion.*`; strict mode throws). `domAnimation` covers variants, exit (`AnimatePresence`) and `whileInView` (`Reveal`); switch to `domMax` only for layout/drag animations.
- **Images:** `ImageSlot` is a fixed-ratio box (`aspect-screenshot` 16:9, `aspect-portrait` 4:5) with `object-cover`, explicit width/height, lazy by default; `priority` makes it eager/high-priority and is used only for the About photo. Each project has required `image` (960x540 `card.webp`, cards) and `screenshots` (non-empty, 1600x900 `overview.webp`, detail page and the Home featured project), created via the `projectImages()` helper so alt text and `kind` (`'screenshot' | 'illustration'`) are written once. `kind` drives the detail-page caption and the "Screenshots"/"Preview" heading. Source originals live in git-ignored `Pictures/`; optimize them with tooling outside the repo (no image dependencies in `package.json`).
- Shared UI: `ButtonLink` (filled/text variants, sizes, `srLabel`, handles internal `Link` vs external/download `<a>` with `target="_blank" rel="noopener noreferrer"` and hidden "(opens in a new tab)"), `ProjectCard` (stretched title link; focus ring drawn on its `::after`), `TagList` (dot separators attached after each item so wrapped lines never start with a dot).

## Netlify / static files

- `netlify.toml`: build command, `publish = "dist"`, Node pinned.
- `public/_redirects` (`/* /index.html 200` SPA fallback) and `public/_headers` (immutable cache for `/assets/*`, nosniff, referrer policy). Keep redirects and headers there, not in `netlify.toml`.
- `public/sitemap.xml` is static: update it when routes or project slugs change.
- `public/Amar-Topalovic-CV.pdf` must match `site.cvPath` exactly; Netlify is case-sensitive.

## Git

- `.gitattributes` normalizes to LF. Commit messages follow `type: summary` (feat/fix/chore/perf).

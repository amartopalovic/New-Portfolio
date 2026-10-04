# amar-portfolio

Personal portfolio site for Amar Topalović.

## Stack

- Vite + React + TypeScript
- React Router (library mode, `createBrowserRouter`)
- Motion (`motion/react`, formerly Framer Motion) for subtle transitions
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Hanken Grotesk, self-hosted with `@fontsource/hanken-grotesk` (400 weight, latin subset only)
- oxlint for linting

## Scripts

| Command           | What it does                                |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                   |
| `npm run build`   | Type-check (`tsc -b`) and build to `dist/`  |
| `npm run lint`    | Lint with oxlint                            |
| `npm run preview` | Serve the production build locally          |

## Structure

```
public/_redirects        Netlify SPA fallback (/* -> /index.html 200)
public/_headers          Netlify headers: immutable caching for /assets, nosniff, referrer policy
public/                  favicon.svg, apple-touch-icon.png, og-image.png, robots.txt, sitemap.xml
src/main.tsx             Entry: MotionConfig + LazyMotion + RouterProvider
src/router.tsx           Route table (all routes share the Layout; pages other than Home load lazily)
src/data/site.ts         Site data (URL, name, intro, availability, contact details, CV path, nav items)
src/data/seo.ts          Meta descriptions per page
src/data/projects.ts     Project data (card + detail content, categories), filter options, Home selection
src/data/experience.ts   Experience snapshot
src/data/about.ts        About page content (intro, what I do, languages, profile photo)
src/data/resume.ts       Resume entries (experience, education, certificates), recommendation letter URL
src/data/image.ts        Shared ImageAsset type
src/data/skills.ts       Core stack list and About skill groups
src/components/          ButtonLink, button classes, ImageSlot, PageMeta, ProjectCard (Home + Projects), Reveal, TagList
src/components/layout/   Layout (skip link, focus/scroll on navigation), Header, Footer
src/components/home/     Home sections: Hero, FeaturedProject
src/pages/               Page components (Home, Projects, ProjectDetail, About, Resume, Contact, NotFound)
```

The CV is served from `public/Amar-Topalovic-CV.pdf`.

The site is frontend-only: there is no contact form and no backend. Visitors
get in touch through the direct email, phone, LinkedIn and GitHub links on the
Contact page.

## Images

- Profile images go in `src/assets/images/profile/`, project screenshots in
  `src/assets/images/projects/<project-slug>/`.
- Use kebab-case filenames (for example `dashboard-overview.webp`).
- Export optimized files (WebP, or optimized JPG/PNG) at sensible dimensions;
  keep each screenshot well under ~300 KB.
- Every image needs alt text, which lives in the data files next to the image
  reference.

### Adding a screenshot

Screenshots render in `ImageSlot`, a fixed 16:10 box (`aspect-screenshot`)
that reserves space before the image loads. A project has two image fields in
`src/data/projects.ts`:

- `image`: the card thumbnail on Home and Projects (one image).
- `screenshots`: the gallery on the project's detail page (any number).

1. Put the files in `src/assets/images/projects/<project-slug>/`.
2. Import them at the top of `src/data/projects.ts`:
   `import aiDecisionFlowEditor from '../assets/images/projects/ai-decision-flow/editor.webp'`
3. Set `image` and/or add entries to `screenshots`, each with meaningful alt text
   and the file's real pixel size:
   `image: { src: aiDecisionFlowEditor, alt: 'Describe what the screenshot shows', width: 1600, height: 1000 }`
   `screenshots: [{ src: aiDecisionFlowEditor, alt: '...', width: 1600, height: 1000 }]`

Images are cropped to 16:10 with `object-cover`, so export at that ratio. Once
a project has an `image`, its card placeholder disappears; once it has
`screenshots`, the two placeholder slots on its detail page are replaced.

### Adding the profile photo

The About page shows the photo in a 4:5 `ImageSlot` (`aspect-portrait`).

1. Put the file in `src/assets/images/profile/` (for example `amar-topalovic.webp`).
2. Import it at the top of `src/data/about.ts`.
3. Set `profileImage` on `about` with meaningful alt text and the file's real
   pixel size: `profileImage: { src: profilePhoto, alt: 'Portrait of Amar Topalović', width: 800, height: 1000 }`

Export the photo at 4:5; it is cropped with `object-cover`. Once it is set, the
"Photo placeholder" block disappears.

## Performance

- Route splitting: `Layout` and `Home` are in the main bundle; every other page
  is loaded with React Router's route-level `lazy`, so each is its own chunk.
- Motion: the app is wrapped in `LazyMotion` with the `domAnimation` feature set
  (loaded synchronously) and components use `m.*`. `strict` makes any `motion.*`
  usage throw. Switch to `domMax` only if layout or drag animations are added.
- Scroll: React Router's `ScrollRestoration` (in `Layout`) starts link
  navigations at the top, restores position on Back/Forward and scrolls to
  `#hash` targets. The Projects filter uses `preventScrollReset`.
- Caching: `public/_headers` marks hashed `/assets/*` files as immutable for a
  year; HTML, the sitemap, robots and the CV keep Netlify's default revalidation.

## SEO

- The public site URL is `site.url` in `src/data/site.ts` (no trailing slash).
- Each page renders `PageMeta`, which sets its title, meta description and
  canonical link (React 19 hoists them into `<head>`). Descriptions live in
  `src/data/seo.ts`; project pages use the project's `summary`. The 404 page
  (also shown for unknown project slugs) adds `noindex`, because Netlify's SPA
  fallback serves it with status 200.
- The Open Graph/Twitter tags and the Person structured data in `index.html` are
  static and site-wide (crawlers that don't run JavaScript only see these).
- `public/sitemap.xml` is a static file: update it when routes or project slugs
  change. `public/robots.txt` points to it.

## Design

`DESIGN.md` is the visual spec. Its tokens (colors, type scale, spacing, radius,
content width) are defined in `src/index.css`.

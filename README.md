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
netlify.toml             Netlify build settings (npm run build, publish dist, Node 24.13.0)
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

- Profile images go in `src/assets/images/profile/`, project images in
  `src/assets/images/projects/<project-slug>/`.
- Use kebab-case filenames (for example `overview.webp`).
- Export optimized WebP (or optimized JPG/PNG): project images at 1600x900
  (16:9), the profile photo at 960x1200 (4:5); keep each file well under
  ~300 KB.
- Every image needs alt text, which lives in the data files next to the image
  reference.
- `Pictures/` at the repo root holds the original source files. It is
  git-ignored: only the optimized exports in `src/assets/images/` are committed.

### Adding a project image

Project images render in `ImageSlot`, a fixed 16:9 box (`aspect-screenshot`)
that reserves space before the image loads. Each image is a `ProjectImage` in
`src/data/projects.ts` with a `kind`:

- `screenshot`: a real capture of the running app.
- `illustration`: a concept graphic (for example AI-generated). Say so in the
  alt text ("Illustration of ...").

A project has two image fields:

- `image`: the card thumbnail on Home and Projects (no visible caption).
- `screenshots`: the gallery on the project's detail page. Each image gets a
  small caption ("Screenshot" or "Project illustration"). One image spans the
  full column; two or more use a 2-column grid. The section is titled
  "Screenshots" when every image is a screenshot, otherwise "Preview".

1. Put the file in `src/assets/images/projects/<project-slug>/`.
2. Import it at the top of `src/data/projects.ts` and define the image once:
   `const natoursImage: ProjectImage = { src: natoursOverview, alt: '...', width: 1600, height: 900, kind: 'illustration' }`
3. Set `image: natoursImage` and `screenshots: [natoursImage]` (add more entries
   to `screenshots` for a larger gallery).

Images are cropped with `object-cover`, so export at exactly 16:9. Projects
without images keep the temporary placeholders.

### Adding the profile photo

The About page shows the photo in a 4:5 `ImageSlot` (`aspect-portrait`). It is
the only image loaded eagerly with high fetch priority (`priority`), because it
sits at the top of the page.

1. Put the file in `src/assets/images/profile/` (currently `amar-topalovic.webp`).
2. Import it at the top of `src/data/about.ts`.
3. Set `profileImage` on `about` with meaningful alt text and the file's real
   pixel size: `profileImage: { src: profilePhoto, alt: '...', width: 960, height: 1200 }`

Export the photo at 4:5; it is cropped with `object-cover`.

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

## Before launch

- [ ] Add `public/Amar-Topalovic-CV.pdf`. Until it exists, the Download CV
      buttons save the HTML app under that filename, because the SPA fallback
      answers the missing file with `index.html` (status 200).
- [ ] Replace the AI-generated project illustrations with real screenshots when
      available (set `kind: 'screenshot'`), and add an image for the AI Work &
      Study Agent, which still shows placeholders.
- [x] Capstone `liveUrl`, profile photo and project images are set.
- [ ] If a project slug or route changes, update `public/sitemap.xml`.
- [ ] Netlify: the existing `amarr-portfolio` site was created earlier and has
      visitor access protection turned on, so the public URL answers 401. Turn
      that protection off in the site's settings before checking the live site,
      then deploy this repository to that site.
- [ ] Deploy on Netlify:
  - Connect the Git repository; the build command, publish directory and Node
    version come from `netlify.toml`.
  - Make sure the site is reachable at `https://amarr-portfolio.netlify.app`
    (the URL used in canonical links, Open Graph tags and the sitemap).
  - In the deploy's file list, check that `_redirects` and `_headers` are
    present; open a deep link (for example `/projects/natours`) and refresh it.
  - Click Download CV and confirm a real PDF downloads.
  - Check the link preview of the site URL in a share debugger or chat app.

## Design

`DESIGN.md` is the visual spec. Its tokens (colors, type scale, spacing, radius,
content width) are defined in `src/index.css`.

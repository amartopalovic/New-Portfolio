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
src/main.tsx             Entry: MotionConfig + RouterProvider
src/router.tsx           Route table (all routes share the Layout)
src/data/site.ts         Site data (name, intro, availability, contact links, CV path, nav items)
src/data/projects.ts     Project data (card + detail content, categories), filter options, Home selection
src/data/experience.ts   Experience snapshot
src/data/about.ts        About page content (intro, what I do, languages, profile photo)
src/data/image.ts        Shared ImageAsset type
src/data/skills.ts       Core stack list and About skill groups
src/components/          ButtonLink, button classes, ImageSlot, ProjectCard (Home + Projects), Reveal
src/components/layout/   Layout (skip link, focus/scroll on navigation), Header, Footer
src/components/home/     Home sections: Hero, FeaturedProject
src/pages/               Page components (Home, Projects, ProjectDetail, About, NotFound, temporary PagePlaceholder)
```

The CV is served from `public/Amar-Topalovic-CV.pdf`.

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

## Design

`DESIGN.md` is the visual spec. Its tokens (colors, type scale, spacing, radius,
content width) are defined in `src/index.css`.

# andrewghosh.com

Personal website — a minimalist, content-driven site built with [Astro](https://astro.build),
styled after the warm, editorial feel of [paulstamatiou.com](https://paulstamatiou.com).

- Thin **icon rail** on the left (About · Gear · Projects + a light/dark toggle)
- **Editorial serif** typography (Source Serif 4 + Geist Mono, self-hosted)
- Warm paper / warm-dark palette, automatic light/dark with a manual toggle
- Instant, no-flash navigation via Astro View Transitions

## Develop

```sh
npm install      # first time only
npm run dev      # local dev server at http://localhost:4321
npm run build    # build static site into dist/
npm run preview  # preview the production build locally
```

## Where things live

| What | Where |
| --- | --- |
| Icon rail / nav | `src/components/Sidebar.astro` |
| Page shell, fonts, theme script | `src/layouts/BaseLayout.astro` |
| About page (photo + bio) | `src/pages/index.astro` |
| Your photo | `public/images/me.jpg` (add this file) |
| Gear list | `src/content/gear/gear.json` |
| Projects | `src/content/projects/*.md` (one file per project) |
| Colors, typography, layout | `src/styles/global.css` |

## Editing content

- **Add a gear item:** add an object to `src/content/gear/gear.json`. Set
  `"location"` to `"backpack"` or `"owned"` to choose its section. Add an
  optional `"image"` (e.g. `"/images/gear/bag.jpg"`) for a product photo —
  without one, the card shows a letter monogram.
- **Add a project:** drop a new `.md` file into `src/content/projects/`. Lower
  `order` values sort first. Add an optional `cover:` image in the frontmatter
  to render it as a large hero card (à la Paul's photo collections); without a
  cover it renders as a clean text card.

## Deploy

Builds to static files (`npm run build` → `dist/`). Host on Cloudflare Pages,
Netlify, Vercel, or GitHub Pages, then point `andrewghosh.com` at it via DNS.

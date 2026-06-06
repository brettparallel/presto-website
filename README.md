# Presto Website

Production-ready Astro landing page for Presto — a monthly creative partner service.

**Stack:** Astro 6 · TinaCMS · Cloudflare Pages  
**Domain placeholder:** `withpresto.com` — update in `astro.config.mjs`, `tina/config.ts`, and `SchemaOrg.astro`

---

## Quick start

```sh
npm install
npm run dev          # TinaCMS local dev + Astro dev server at localhost:4321
                     # CMS admin at localhost:4321/admin/index.html
```

Or, to run Astro only (no CMS editing):

```sh
npm run dev:astro
```

---

## Project structure

```
/
├── public/
│   ├── assets/          # Brand images, logos, portfolio photos
│   ├── fonts/           # After display font (self-hosted)
│   └── robots.txt
├── src/
│   ├── components/      # One .astro file per section
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── TrustBar.astro
│   │   ├── Problem.astro
│   │   ├── HowItWorks.astro
│   │   ├── Portfolio.astro
│   │   ├── Included.astro
│   │   ├── Compare.astro
│   │   ├── Pricing.astro
│   │   ├── Platforms.astro
│   │   ├── FAQ.astro
│   │   ├── FinalCTA.astro
│   │   ├── Footer.astro
│   │   └── SchemaOrg.astro
│   ├── content/
│   │   └── pages/
│   │       └── home.json   ← all landing page content lives here
│   ├── content.config.ts   ← Astro content collection schema
│   ├── layouts/
│   │   └── Base.astro      ← HTML head, SEO meta, font preconnect
│   ├── pages/
│   │   └── index.astro     ← assembles all components
│   └── styles/
│       ├── tokens.css      ← design tokens (colors, type, spacing)
│       └── global.css      ← all component styles
├── tina/
│   └── config.ts           ← TinaCMS schema (mirrors content collection)
├── astro.config.mjs
└── package.json
```

---

## Content editing

### Local editing (development)

Run `npm run dev` — this starts TinaCMS in local mode.  
Open `http://localhost:4321/admin/index.html` to edit all landing page content visually.  
All edits write directly to `src/content/pages/home.json`.

### Production editing (Tina Cloud)

1. Create a free account at [app.tina.io](https://app.tina.io)
2. Create a project linked to your GitHub repo
3. Copy your **Client ID** and **Read/Write token**
4. Add to Cloudflare Pages environment variables:
   - `TINA_PUBLIC_CLIENT_ID` = your client ID
   - `TINA_TOKEN` = your token
5. Update `package.json` `build` script to: `tinacms build && astro build`
6. Editors visit `https://your-domain.com/admin/index.html`

---

## Deployment — Cloudflare Pages

### First deploy

1. Push this repo to GitHub
2. In Cloudflare Pages → Create application → Connect to Git
3. Select your repo
4. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist/client`
   - **Node version:** 22

That's it. Free tier handles this comfortably.

### Environment variables (Cloudflare Pages settings)

| Variable | Required for | Value |
|---|---|---|
| `TINA_PUBLIC_CLIENT_ID` | TinaCMS production editing | From app.tina.io |
| `TINA_TOKEN` | TinaCMS production editing | From app.tina.io |
| `GITHUB_BRANCH` | TinaCMS | `main` |

---

## SEO

- **Title tag:** `Presto — Your monthly creative partner`
- **Meta description:** Brand-led design, WordPress development, and strategic direction — async, on a subscription, with zero hand-holding required.
- **H1:** `Your brand's creative team. Monthly. No overhead.`
- **JSON-LD:** Organization, WebSite, WebPage, Service (with offers), FAQPage — see `SchemaOrg.astro`
- **Sitemap:** auto-generated at `/sitemap-index.xml`
- **Robots.txt:** `/robots.txt`
- **Internal anchor links:** All nav → section IDs (`#how-it-works`, `#whats-included`, `#pricing`, `#faq`)

---

## Adding future pages

To add a blog, service page, or second landing page:

1. Add a new JSON file to `src/content/pages/` (e.g. `blog-post.json`)
2. Create the corresponding schema fields in `src/content.config.ts`
3. Add the TinaCMS collection in `tina/config.ts`
4. Create `src/pages/blog/[slug].astro` or a static page

The content collection is already modelled to scale — no refactoring needed.

---

## Commands

| Command | Action |
|---|---|
| `npm run dev` | TinaCMS + Astro dev at localhost:4321 |
| `npm run dev:astro` | Astro dev only (no CMS) |
| `npm run build` | Production build to `./dist/client/` |
| `npm run preview` | Preview built site locally |
| `npm run build:tina` | Build with TinaCMS (requires Tina Cloud credentials) |

---

## Flags / known items

- **Logo:** Raster PNGs used from handoff bundle. Request SVG originals from brand for production.
- **Domain:** Update `site` in `astro.config.mjs` and the URLs in `SchemaOrg.astro` before launch.
- **CTA links:** Pricing card CTAs currently point to `#`. Wire to Stripe or booking form before launch.
- **Book a call link:** Footer + FinalCTA point to `#`. Wire to Calendly or equivalent.
- **OG image:** No `/assets/og-default.png` exists yet. Create a 1200×630px social card.
- **Favicon:** Placeholder from Astro minimal template. Replace with Presto branded favicon.

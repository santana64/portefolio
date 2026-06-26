# Noah — Portfolio

> Full-stack product engineer. Je conçois et je livre des SaaS verticaux de bout en bout.
> Full-stack product engineer. I design and ship vertical SaaS end to end.

🔗 **Live:** https://santana64.github.io/portefolio/ · **EN:** https://santana64.github.io/portefolio/en

A **statically pre-rendered** portfolio (Astro) built on a locked design system — *“Machined Carbon + Forge Signal.”* All content — projects, numbers, the Arkoryn venture — is real HTML at build time and fully crawlable. The 3D is a hydrated island that streams in after the content paints.

## Architecture

- **Astro** static output, two pre-rendered locales (`/` FR, `/en` EN) with `hreflang` + canonical.
- **Signature:** a `react-three-fiber` machined object in the hero with a procedural thermal/forge environment — a **hydrated island** (`client:visible`), SSR-safe, with a static SVG fallback and no motion under `prefers-reduced-motion`.
- **Design system:** [`design-system/tokens.css`](design-system/tokens.css) is the single source of truth — cold carbon surfaces + one forge-orange signal, Space Grotesk / IBM Plex Sans / IBM Plex Mono, hairline language, machined radius, mechanical motion. Components hardcode **zero** color / radius / type values.
- **SEO:** title + description per locale, Open Graph + Twitter card (`public/og.png`), favicon, `sitemap`, `robots.txt`.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321/portefolio/
npm run build      # static output → dist/
npm run preview
node scripts/og.mjs # regenerate the OG share card (public/og.png)
```

## Project layout

```
src/
  data/        content (i18n), projects, icons
  components/  Page.astro (all sections) + Hero3D.tsx (R3F island)
  layouts/     Layout.astro (head / SEO / OG)
  pages/       index.astro (FR) · en.astro (EN)
design-system/ tokens.css  (locked design language)
public/        og.png · favicon.svg · robots.txt
```

Deployed to GitHub Pages by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

---

© Noah — Machined Carbon + Forge Signal.

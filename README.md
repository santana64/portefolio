# Noah — Portfolio

> Full-stack product engineer. Je conçois et je livre des SaaS verticaux de bout en bout.
> Full-stack product engineer. I design and ship vertical SaaS end to end.

🔗 **Live :** https://santana64.github.io/portefolio/

A single-page portfolio built on a **locked design system** — *“Machined Carbon + Forge Signal”* — to defeat the #1 reason AI UI looks cheap: under-constraint. Taste is injected as a constraint (`design-system/tokens.css`), then every value in the page derives from it.

## 🎨 The system — Machined Carbon + Forge Signal

- **Cold forged carbon** base (`#0B0D12 → #2E3742`, never `#000`) meets **one hot forge signal** (`#FF6B2C`) — a temperature duality, used once per view.
- **Instrument typography:** Space Grotesk (display) · IBM Plex Sans (body) · IBM Plex Mono (uppercase micro-labels, section numbers, data).
- **Machined edges** (near-zero radius) and a **hairline line-language** instead of shadow soup.
- **Mechanical motion** — precise easing, no bounce, no float-for-no-reason. One signature moment, quiet everywhere else.

Single source of truth: [`design-system/tokens.css`](design-system/tokens.css). Components hardcode **zero** color / radius / type values.

## ✨ Highlights

- **Signature:** a hand-written **WebGL/GLSL forge ambient** — cold carbon field with a single thermal bloom that tracks the cursor.
- **Hero as instrument readout** (not the big-number+gradient template): a typographic manifesto + a live mono rail (`AVAILABILITY · PRODUCTS · MARKETS · TYPESCRIPT`).
- Selected work + a filterable index of **18 projects**, each with an engraved monoline icon; immersive **project case-file modals**.
- **Bilingual FR / EN**, full-screen mobile menu, smooth scroll (Lenis) + orchestrated reveals (GSAP), `prefers-reduced-motion` path, WCAG-AA contrast, visible focus.

## 🧰 Stack

`HTML` · `CSS (design tokens)` · `Vanilla JS` · `WebGL / GLSL` · `GSAP` + `ScrollTrigger` · `Lenis`

The only external deps (GSAP, Lenis) load via CDN; no build step.

## 🚀 Run locally

```bash
python -m http.server 4321
# open http://localhost:4321
```

---

© Noah — Machined Carbon + Forge Signal.

# Noah — Portfolio

> Full-stack product engineer. Je conçois et code des SaaS verticaux de bout en bout.
> Full-stack product engineer. I design and ship vertical SaaS end to end.

🔗 **Live :** https://santana64.github.io/portefolio/

Portfolio **en un seul fichier** (`index.html`), autonome et déployable partout — pensé comme une démonstration d'ingénierie front-end, design & motion.

A single-file (`index.html`), self-contained portfolio — built as a front-end engineering, design & motion showcase.

## ✨ Highlights

- **Shader WebGL fait main** (GLSL : value noise + fbm + domain warping, réactif à la souris) en fond.
- **Smooth scroll Lenis** + **GSAP ScrollTrigger** (reveals, stagger, parallax, compteurs).
- **Curseur magnétique custom** (blend-mode, suivi en lerp, label « VIEW »).
- **Typo cinétique** : titre révélé mot par mot + effet *scramble / decode*.
- **Direction artistique par projet** : chaque projet a son duo de couleurs, son **icône SVG** monoline et une **texture** propre à sa catégorie.
- **Modales projet** immersives (highlights, stack, accents DA), **menu plein écran** mobile, **sound design** Web Audio (off par défaut).
- **Bilingue FR / EN**, accessible (`prefers-reduced-motion`), dégradation propre si les CDN ne chargent pas.

## 🧰 Stack

`HTML` · `CSS` · `Vanilla JS` · `WebGL / GLSL` · `GSAP` + `ScrollTrigger` · `Lenis` · `Web Audio API`

Les seules dépendances externes (GSAP, Lenis) sont chargées via CDN ; aucune étape de build.

## 🚀 Lancer en local

```bash
# n'importe quel serveur statique, par ex. :
python -m http.server 4321
# puis ouvrir http://localhost:4321
```

Ou ouvrir directement `index.html` dans un navigateur.

---

© Noah — conçu, codé & shadé en un seul fichier.

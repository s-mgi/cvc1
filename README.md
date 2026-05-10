# CVC Group Website

Multi-page site for CVC Group — retail, hospitality, and commercial construction.

## Structure

```
cvc-site/
├── index.html         Home
├── about.html         Who We Are
├── retail.html        Retail sector
├── hospitality.html   Hospitality sector
├── commercial.html    Commercial sector
├── projects.html      All projects with category filter
├── contact.html       Contact page with form
├── styles.css         All styles (shared)
├── scripts.js         All scripts (shared)
└── images/            See "Images" below
```

**Editing tip:** All 7 pages share `styles.css` and `scripts.js`. To change a design token (color, font size, etc.) or a global behavior, edit those two files — every page updates. To change copy or sections on a specific page, edit only that page's HTML.

## Design system

**Typography:** Manrope only (300–800 weights). No serif fonts. Italic Manrope in gold is used for emphasis (hero accents, "we build *retail and hospitality* spaces" type pull-quotes).

**Colors:**
- `--black: #0e0f12` (matte black)
- `--ink: #1b1e22` (charcoal text)
- `--gold: #b08a55` (warm bronze)
- `--gold-lt: #c5a070`
- `--gold-dk: #8c6c3f`
- `--cream: #f5efe6` (warm cream sections)
- `--paper: #fafaf7` (warm white background)

**Container:** 1240px max-width, `--pad: clamp(20px, 4vw, 56px)`

## Images

All images use the same drop-in pattern: each `<img>` has `onload="this.classList.add('loaded')"` and `onerror="this.remove()"`. Drop a real file at the path and it fades in over the gradient/SVG fallback. If a file is missing, the page still renders cleanly.

### Image slots

```
images/
├── logo/
│   └── cvc.svg                          Header & footer logo
├── hero/
│   ├── slide-1.jpg                      Homepage hero slideshow
│   ├── slide-2.jpg
│   └── slide-3.jpg
├── projects/
│   ├── luxe-richmond-lounge.jpg         Featured + projects page
│   ├── chillax-and-co.jpg
│   ├── ramonas-kitchen.jpg
│   ├── duo-patisserie-cafe.jpg
│   ├── lenscrafters.jpg                 Retail page
│   ├── sunglass-hut.jpg
│   ├── ray-ban.jpg
│   ├── retail-04.jpg
│   ├── commercial-01.jpg                Commercial page
│   ├── commercial-02.jpg
│   ├── commercial-03.jpg
│   └── commercial-04.jpg
├── sectors/                             Inner-page hero backgrounds
│   ├── retail.jpg
│   ├── retail-intro.jpg
│   ├── hospitality.jpg
│   ├── hospitality-intro.jpg
│   ├── commercial.jpg
│   └── commercial-intro.jpg
├── about/
│   ├── photo-1.jpg                      Small portrait in About intro
│   └── photo-2.jpg                      Large image right side + about-page hero
├── philosophy/
│   └── interior.jpg                     Philosophy section
├── cta/
│   └── background.jpg                   Contact-page hero
└── brands/
    ├── grill-gate.png                   Brand strip (logos override stylized text)
    ├── ramonas-kitchen.png
    ├── chillax.png
    ├── duo.png
    ├── lenscrafters.png
    ├── sunglass-hut.png
    └── ray-ban.png
```

### Recommended specs

- Hero (homepage): 1920×1080+ landscape, JPG, color-graded warm
- Inner-page heros: 1920×900+
- Project cards: portrait 3:4, ~1200×1600
- Intro images: 5:4, ~1400×1120
- About big photo: portrait 4:5, ~1200×1500
- Philosophy: portrait 4:5, ~1400×1750
- Brand logos: PNG with transparency, ~400px wide, light/white version for dark backgrounds

## Animation behavior

- `.rv` — reveal on scroll (opacity + translateY)
- `.stg` — staggered children (each child reveals 80ms after the previous)
- `.img-rv` — image curtain reveal (gold sweep)
- `[data-target]` — counter animation. Set `data-suffix=""` for no "+" (the big "22" on the About intro uses this)
- `prefers-reduced-motion` respected throughout

## Deploy

Connect the repo to Cloudflare Pages. No build step — static HTML.

---

© 2025 CVC Group

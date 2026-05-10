# CVC Group — Site Reference

Single-file HTML site (`index.html`) plus an `images/` folder for drop-in assets. Deploy via Cloudflare Pages, edit directly on GitHub.

---

## Image drop-in system

Drop your photos into the matching folder using the **exact filenames** below. The site picks them up automatically. If a file is missing, a styled fallback (gradient or text) shows in its place.

```
cvc-site/
├── index.html
└── images/
    ├── logo/
    │   └── cvc.svg               ← logo (replaces text logo in nav + footer)
    │
    ├── hero/
    │   ├── slide-1.jpg           ← hero slideshow, slide 01 (active by default)
    │   ├── slide-2.jpg
    │   └── slide-3.jpg
    │
    ├── projects/
    │   ├── luxe-richmond-lounge.jpg
    │   ├── chillax-and-co.jpg
    │   ├── ramonas-kitchen.jpg
    │   └── duo-patisserie-cafe.jpg
    │
    ├── philosophy/
    │   └── interior.jpg          ← right-side image of philosophy section
    │
    ├── about/
    │   ├── photo-1.jpg           ← small square photo next to the "22" (about section)
    │   └── photo-2.jpg           ← large landscape photo, right side of about section
    │
    ├── cta/
    │   └── background.jpg        ← contact CTA left-side background
    │
    ├── brands/
    │   ├── grill-gate.png        ← all 7 brand logos
    │   ├── ramonas-kitchen.png
    │   ├── chillax.png
    │   ├── duo.png
    │   ├── lenscrafters.png
    │   ├── sunglass-hut.png
    │   └── ray-ban.png
    │
    └── gallery/                  ← reserved for future gallery page
```

### Filename rules
- Lowercase, hyphens only — no spaces, no underscores, no capitals.
- Match the extension exactly (`.jpg` for photos, `.png` for brand logos).
- Don't rename the references — rename your file to match the slot.

### Image specs
| Slot | Size | Format | Notes |
|---|---|---|---|
| `logo/cvc.svg` | any | SVG / PNG | Sized to ~54px tall in nav, 42px in footer. Should work on dark backgrounds. |
| `hero/slide-*.jpg` | 1920×1080+ | JPG | Dark/moody works best; left side has a heavy black overlay. |
| `projects/*.jpg` | 600×800 (3:4) | JPG | Portrait. Bottom gradient overlay for text legibility. |
| `philosophy/interior.jpg` | 1200×900+ | JPG | Right-side full bleed. Slight darkening overlay. |
| `about/photo-1.jpg` | 600×600 (1:1) | JPG | Small square photo next to the "22" number. |
| `about/photo-2.jpg` | 800×640 (5:4) | JPG | Larger landscape photo, right column of about section. |
| `cta/background.jpg` | 1920×1080+ | JPG | Heavy left-to-right gradient overlay. |
| `brands/*.png` | 200×80 (or wide) | PNG transparent | Auto-tinted white via CSS filter. |

### Brand logo tinting
Brand logos are auto-tinted white because the strip is dark. To preserve original colors, find this rule in `index.html` and remove the `filter:` line:
```css
.brand img.brand-img.loaded { ... filter: brightness(0) invert(1); }
```

### How fallbacks work
Every slot has a styled fallback. Hero/philosophy/CTA fall back to warm gradients. Project cards fall back to four brown-gold gradients. Brand logos and the CVC logo fall back to styled text. Deploy with zero images and the site still looks complete.

---

## Animation system

The site has a full motion layer. Everything is vanilla JS + CSS — no GSAP, no Lenis, no jQuery.

### What animates and when

**On page load** (loader → hero):
- Black loader with animated `CVC` mark, gold underline bar fills, fades out after ~1.4s
- Nav slides down from top
- Hero headline reveals line-by-line, each line sliding up from below
- Eyebrow, lede, buttons, pager all stagger in
- Active hero slide does a slow ken-burns zoom

**On scroll** (IntersectionObserver triggers):
- `.rv` elements fade up as they enter viewport
- `.stg` (stagger groups) reveal children sequentially with 80ms delays
- `.img-rv` images do a "curtain wipe" — gold panel slides up off the image while the image scales from 1.18 → 1
- Stat counters animate from 0 to target (22+, 189+, 265+, 328+) with easeOutCubic over 1.8s
- Light parallax on philosophy and CTA backgrounds (background-position shifts ±22px based on viewport position)

**Hover effects**:
- Custom cursor (desktop only): a small dot + ring with `mix-blend-mode: difference`. Ring lags slightly via lerp easing. Grows + turns gold over interactive elements.
- Project cards: image scales 1.08, body lifts 6px, gold line fills bottom edge, gradient deepens, "View Project →" arrow shifts right and turns gold
- Buttons: pseudo-element gold fills slide up from below on hover
- Pillars and approach steps: icons lift/rotate/scale
- Brand logos: scale 1.05 on hover
- Footer links: underline wipes in from left
- Nav links: gold underline wipes in with origin flip on hover

**Continuous**:
- Hero slideshow auto-advances every 7s, pauses on hover
- Brand strip is an infinite marquee (35s loop), pauses on hover, with edge fade-out mask
- Hero `01/02/03` pager animates the gold dash on the active number

**Other**:
- Scroll-to-top button (gold circle, bottom-right) appears after scrolling past 600px
- Form input focus: gold border + 1px lift
- `prefers-reduced-motion: reduce` disables all animations and the cursor

### Adding new animated elements

To make any element fade up on scroll:
```html
<div class="rv">...</div>
```

To make children of a container stagger in:
```html
<div class="stg">
  <div>Item 1</div>
  <div>Item 2</div>  <!-- delays apply automatically up to 7 children -->
</div>
```

To add image curtain reveal:
```html
<div class="img-rv">
  <img src="..." />
</div>
```

### Adding more

Want a 4th hero slide?
1. Add `<div class="hero-slide s4"></div>` inside `.hero-slides`
2. Add CSS: `.hero-slide.s4 { background-image: url("images/hero/slide-4.jpg"); }`
3. Add `<span class="num" data-slide="3">04</span>` in `.hero-pager`

Same pattern for project cards or brand logos — copy a block, change the path.

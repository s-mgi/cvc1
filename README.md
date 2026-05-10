# CVC Group — Image Drop-In System

Drop your photos and logos into the matching folder using the **exact filenames** below. The site picks them up automatically — no code changes needed. If a file is missing, a styled fallback (gradient or text) shows in its place.

---

## Folder map

```
cvc-site/
├── index.html
└── images/
    ├── logo/
    │   └── cvc.svg               ← your CVC Group logo (replaces text logo in nav + footer)
    │
    ├── hero/
    │   ├── slide-1.jpg           ← hero slideshow, slide 01 (active by default)
    │   ├── slide-2.jpg           ← hero slideshow, slide 02
    │   └── slide-3.jpg           ← hero slideshow, slide 03
    │
    ├── projects/
    │   ├── luxe-richmond-lounge.jpg
    │   ├── chillax-and-co.jpg
    │   ├── ramonas-kitchen.jpg
    │   └── duo-patisserie-cafe.jpg
    │
    ├── philosophy/
    │   └── interior.jpg          ← "We create spaces that bring out life" right-side image
    │
    ├── cta/
    │   └── background.jpg        ← "Let's Build Something Amazing" left-side background
    │
    ├── brands/
    │   ├── grill-gate.png        ← all brand logos go here
    │   ├── ramonas-kitchen.png
    │   ├── chillax.png
    │   ├── duo.png
    │   ├── lenscrafters.png
    │   ├── sunglass-hut.png
    │   └── ray-ban.png
    │
    └── gallery/                  ← reserved for future gallery page
```

---

## Filename rules

- **Lowercase, hyphens only** — no spaces, no underscores, no capitals. `chillax-and-co.jpg` ✅, `Chillax & Co.jpg` ❌.
- **Match the extension exactly.** If you save a PNG, the filename must end in `.png`. The site references `.jpg` for photos and `.png` for brand logos by default.
- **Don't rename — replace.** If your file is named differently, rename your file to match the slot, don't change the HTML.

## Image specs

| Slot | Recommended size | Format | Notes |
|---|---|---|---|
| `logo/cvc.svg` | any (vector) | SVG preferred, PNG ok | Will be sized to ~54px tall in nav, ~42px in footer. Should work on dark backgrounds. |
| `hero/slide-*.jpg` | 1920×1080 or wider | JPG | Dark/moody photos work best — there's a 0–85% black left-to-right gradient overlay so anything on the left side gets darkened. |
| `projects/*.jpg` | 600×800 (3:4 ratio) | JPG | Portrait orientation. A bottom 35–100% black gradient is overlaid for text legibility. |
| `philosophy/interior.jpg` | 1200×900+ | JPG | Right-side image, full bleed. Slight darkening overlay. |
| `cta/background.jpg` | 1920×1080+ | JPG | Left-side background of the contact CTA. Heavy gradient overlay (black at 70% on the left fading to 35% on right). |
| `brands/*.png` | 200×80 (or similar wide ratio) | PNG with transparent bg | Logos auto-tinted to white. Use single-color logos for cleanest result — the CSS forces `filter: brightness(0) invert(1)` so colored logos will look white. |

## Brand logo tinting

Brand logos in the partners strip are auto-converted to white via a CSS filter, since the strip has a dark background. If you want a brand to keep its original colors, find this rule in `index.html`:

```css
.brand img.brand-img.loaded {
  ...
  filter: brightness(0) invert(1);
}
```

…and remove the `filter:` line.

## How fallbacks work

Each image slot has a styled fallback baked in:

- **Hero slides** → falls back to a warm gold/brown gradient.
- **Project cards** → falls back to four different brown/gold gradients (`p1` through `p4`).
- **Philosophy image** → falls back to a dark warm gradient.
- **CTA background** → falls back to a dark warm gradient.
- **Brand logos** → falls back to the original styled text (the names rendered in Playfair/Manrope).
- **CVC logo** → falls back to the styled text mark (`CVC` with gold italic V).

So you can deploy with zero images and the site still looks complete. Replace fallbacks with real assets one at a time at your own pace.

## Adding more

Want a 4th hero slide? In `index.html`:
1. Add `<div class="hero-slide s4"></div>` inside `.hero-slides`
2. Add the CSS rule `.hero-slide.s4 { background-image: url("images/hero/slide-4.jpg"); }`
3. Add `<span class="num" data-slide="3">04</span>` in the `.hero-pager`

Same pattern for more project cards or brand logos — copy an existing block, change the path.

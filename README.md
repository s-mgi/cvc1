# CVC Group — Homepage Build

Dark/gold rebrand of the CVC Group site, structured loosely on Antra.
Single homepage for review. About / Projects / Contact pages still to build.

## Files
- `index.html` — full homepage
- `styles.css` — design system, all sections styled
- `script.js` — nav, cursor, reveals, count-up, mobile menu
- `images/projects/` — photos cropped from the client's portfolio PDF

## To preview
Open `index.html` directly in a browser, or serve locally:
```
cd cvc-group-site
python3 -m http.server 8000
```
Then open http://localhost:8000

## Design tokens (in styles.css `:root`)
- `--bg` `#0e0e0e` — primary surface
- `--gold` `#b8952e` — accent (matches Previn Court tokens)
- `--gold-lt` `#c9a84c` — hover/highlight
- `--cream` `#f0ede6` — body text on dark
- Display: Cormorant Garamond (Google Fonts)
- Sans: Manrope (Google Fonts)

## Sections built
1. Hero — full-bleed photo, animated headline reveal, hero pillars
2. About — image stack + stat block + intro copy
3. Sectors — Retail / Hospitality / Commercial as a 3-row editorial list
4. Stats — 36 years, 200+ projects, 40+ brands, CA/US
5. Projects — asymmetric 6-card grid w/ hover image zoom
6. Clients — brand marquee + 4-up numbers (BBW 9, Sunglass Hut 10, etc.)
7. Quote — large pull quote
8. Contact — split layout: copy + form (form is currently stubbed w/ alert)
9. Footer — 4-col, gold hairline top border

## Known issues / to address
- **Logo is hand-drawn SVG.** Approximation of the rebrand mockup. If client has the
  proper logo SVG/AI, swap into `nav-logo` and `footer-brand` blocks.
- **Sunglass Hut + Ray-Ban photos** have faint CVC watermark pattern on edges
  (artifact of cropping from the watermarked PDF). Replace with clean
  client-supplied photography when available.
- **Contact form** `onsubmit` is a placeholder alert. Needs to be wired to a
  backend (Cloudflare Worker, Formspree, etc.).
- **"View All Projects"** button links to `projects.html` (not built yet).
- **Hero image** has a tiny black sliver on the left edge — leftover from PDF
  frame. Negligible at production scale but noted.

## Next pages to scope after homepage review
- `about.html` — full company story, "Who We Are" expanded, possibly history timeline
- `projects.html` — full filterable portfolio grid (Retail / Hospitality / Commercial)
- `contact.html` — dedicated contact w/ map, form, hours

# melvinmihaylov.com

Single-page portfolio and services site. Bulgarian first, English second.

## Getting started

Requires Node.js 20.9+.

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /bg
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # biome check .
npm run typecheck  # tsc --noEmit
npm run format     # biome check --write .
```

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) + React 19 |
| Styling | Tailwind v4 + hand-written CSS in `src/app/globals.css` |
| Components | Radix primitives (accordion, tabs), lucide icons |
| Type | Manrope (`next/font/google`, latin + cyrillic) |
| Forms | Formspree |

## Structure

```
src/
  app/(site)/[locale]/     the landing page, one route per locale
  app/(redirect)/          / → /bg
  components/              JourneyPath, SiteHeader, ConceptPreview
  components/sections/     one file per page section
  content/                 all copy: types.ts + bg.ts + en.ts
  resources/               i18n, SEO metadata, structured data, site constants
```

### Content and translation

Every visible string lives in `src/content/bg.ts` and `src/content/en.ts`, both
typed against `LandingContent` in `src/content/types.ts`. Because each file ends
with `satisfies LandingContent`, **a key added to one locale and forgotten in the
other is a build error** — the two can't drift.

To change copy, edit those two files. Nothing else needs touching.

### Sections

The page is one continuous scroll with anchored sections:

`#why` · `#directions` · `#services` · `#integrations` · `#process` · `#about` · `#pricing` · `#contact`

Old multi-page routes (`/pricing`, `/about`, `/work`, `/how-it-works`) permanently
redirect to the matching anchor — see `SECTION_REDIRECTS` in `next.config.mjs`.

### The journey line

`src/components/JourneyPath.tsx` draws the glowing line that threads down the page.
It measures the section anchors, builds one cubic Bézier through them (a simpler
zigzag below 760px), then on scroll binary-searches `getPointAtLength` to find where
the curve crosses 75% of the viewport height. That length drives `strokeDashoffset`
on the glow and light strokes and positions the travelling dot.

It rebuilds on resize via a `ResizeObserver` on `#page`, so section height changes
re-fit the path automatically. **If you add or reorder a section, update `ANCHORS`
and the path definition in that file** — the curve is hand-tuned to the section order.

### Example showcase

The "what else I can build" block (`ExampleShowcase` + `DemoSites`) switches
between eight demo-site mocks. Each mock is pure CSS with its own palette, set
through `--ds-*` custom properties on a `.ds--<key>` class, so the demos read as
different brands rather than recoloured copies. They're sized to a fixed stage
height — if you add content to one, re-check it still fits.

The mocks are interactive — promote an article or dish into the hero slot, pick
a day and a time and confirm the booking, like a product or add it to the cart,
toggle catalogue facets to filter the rows, switch the dashboard metric, select
a deal. Everything that looks clickable is a real button, so the panel is
keyboard-reachable and needs no tabindex of its own.

It auto-advances every 5s while on screen, pauses on hover or focus, and stops
for good once a visitor picks a category or touches anything inside a mock.
Reduced motion disables the cycle.

### Header

The bar is a fixed island. Its border is a gradient that brightens under the
pointer: the fill is painted to the padding box and the lit edge to the border
box, so a transparent 1px border reveals only the gradient ring beneath it. A
second radial gradient blooms inside on hover. Both read `--mx` / `--my`, set
from `pointermove` in `SiteHeader` and reset to 50% on leave; the listener is
skipped on coarse pointers. Technique borrowed from the NULA artifact.

### Theme and motion

Both are attributes on `<html>` (`data-theme`, `data-motion`), restored before first
paint by an inline script in the layout and toggled through `useTheme()` /
`useReducedMotion()` in `src/components/use-preferences.ts`. `data-motion="reduced"`
flattens every animation in CSS and makes the journey line render fully drawn.

The alternate theme is a **dimmed slate, not a light one** — the design is built
for a dark ground, so the toggle moves between a near-black navy and a lighter
slate. The attribute value is still `light` so stored preferences keep working.

## Configuration

- **Contact form** — endpoint in `src/resources/formspree.ts`.
- **Canonical URL** — `NEXT_PUBLIC_SITE_URL`, else the production domain in
  `src/resources/site.ts`. Vercel preview deployments resolve to their own URL.
- **Contact details, name, avatar** — `src/resources/site.ts`.

## SEO

Generated automatically: hreflang alternates for both locales, canonical URLs,
OpenGraph/Twitter cards with a rendered OG image (`/api/og/generate`), `sitemap.xml`,
`robots.txt`, `llms.txt`, a PWA manifest, and a JSON-LD `@graph`
(Person + ProfessionalService + WebPage + FAQPage) built in
`src/resources/structured-data.ts`.

## Notes

- The two brand previews in the directions section (`forme.`, `mono®`) are **design
  concepts, not client work**, and are labelled as such in the copy.
- Section eyebrows are numbered `01 /` … `07 /` by hand in the content files, and
  the hero's `index` ("01 — 07") has to match. Adding a section means renumbering
  both.
- Concept photography is Unsplash-licensed; Manrope is SIL OFL.

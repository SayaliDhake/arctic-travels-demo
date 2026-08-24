# Arctic Travels — Front-End Demo

## What this is

A working React front-end demo built from a UX case study (Arctic Travels — a fictional
luxury ski travel agency). It exists to prove a "UX researcher → UX designer → UX engineer"
skill arc on a design portfolio: the case study documents research/persona/IA/wireframes,
and this repo is the coded proof that the designer can also implement it.

- Portfolio: https://www.connectwithsayali.com/
- Case study: https://www.connectwithsayali.com/arctic-travels/index.html
- This repo's README.md has more on scope/intent — read it too.

## Tech stack

React 19 + Vite + React Router (`HashRouter`, chosen deliberately so routing works on
static hosts like GitHub Pages without server-side rewrite rules). Plain CSS via custom
properties in `src/index.css` — no CSS framework, no component library.

`vite.config.js` sets `base: './'` (relative asset paths) so the build works whether it's
hosted at a domain root or a GitHub Pages project path like `username.github.io/repo-name/`.

## The site now has exactly three pages: LandingV2, ResortDetailV2, Booking

Earlier in this project's history there was a lot more surface area — a mono/wireframe
Landing page, a pre-Figma-export `ResortDetail.jsx`, a `BookingCTA` component, etc. All of
that has been deleted. The entire routed app is now:

- **`/`** → `src/pages/LandingV2.jsx`
- **`/resort-v2`** → `src/pages/ResortDetailV2.jsx`
- **`/booking`** → `src/pages/Booking.jsx`

All three use the same navy/serif design system — navy, serif headings, gold accents, real
photography — and all three share the exact same nav bar and footer via `<SiteNav />` and
`<SiteFooter />` (`src/components/SiteNav.jsx`/`.css` and `SiteFooter.jsx`/`.css`). This was
a deliberate consistency fix: the three pages used to each roll their own nav/footer (or,
for `Booking`, the old `Nav.jsx`/`Footer.jsx`), and they'd drifted slightly out of sync
(different padding, alpha values, link copy, even a dead `href="#"` link or two) until
unified. **Don't fork the nav or footer again** — if a page needs a change there, change
`SiteNav`/`SiteFooter`, not a per-page copy. Both `SiteNav` and `SiteFooter` are
self-contained (own font `@import`, own CSS tokens) so they render identically no matter
which page's stylesheet is loaded alongside them.

**Deleted along the way** (don't recreate these from habit or old memory of the repo):
mono/wireframe Landing system (`Landing.jsx`, `HeroSection.jsx`, `ReviewStrip.jsx`,
`ScrollIndicator.jsx`, `ExplorationCards.jsx`, `Placeholder.jsx`), the pre-Figma-export
`ResortDetail.jsx` (was at `/resort/:slug`), `BookingCTA.jsx` (was only used by the deleted
`ResortDetail.jsx`), and the old shared `Nav.jsx`/`Footer.jsx` (replaced by
`SiteNav.jsx`/`SiteFooter.jsx`, neither of which has a `variant` prop — they only ever
render the navy/serif style, since the mono variant's only caller was the already-deleted
mono Landing page).

## Component architecture

```
<LandingV2 />  (route "/")        <ResortDetailV2 />  (route "/resort-v2")   <Booking />
  <SiteNav />                       <SiteNav />                                <SiteNav />
  ...own content JSX...             ...own content JSX...                      ...booking form...
  <SiteFooter />                    <SiteFooter />                             <SiteFooter />
```

`src/data/content.js` holds all mock content (reviews, resorts, regions, travel windows).
`ResortDetailV2` reads resort copy/amenities from `resorts[0]` in this file rather than
duplicating it; `Booking` reads the same `resorts[0]` plus `travelWindows`.

## Hard constraints — do not violate these without asking

- **No real backend, no real payment processing.** The booking flow (`src/pages/Booking.jsx`)
  ends in a mock confirmation screen, clearly labeled "DEMO — NO REAL PAYMENT IS PROCESSED."
  This is a portfolio piece, not a product — keep it that way.
- **No licensed/scraped stock photography.** The CSS-gradient `.photo` block on
  `Booking.jsx` (the small resort thumbnail in the order summary) stands in for a real photo
  because rights to the original Figma reference photography were never confirmed. If a real
  image is added later, it needs to be one the user actually has rights to use in a public
  GitHub repo. Note: `LandingV2`/`ResortDetailV2` (`src/assets/landing-v2/`,
  `src/assets/resort-v2/`) already use real photos pulled from a Figma Make export the user
  supplied — rights to those specific images have not been independently confirmed by
  Claude in this repo's history, so don't assume they're cleared without asking the user.
- **Node version:** requires Node 20+ (Vite 8 uses `util.styleText`, unavailable before
  Node 20.12). The user hit this exact issue once already — if `npm run dev` fails with a
  `styleText` / `node:util` error, that's the cause.

## Current status / open next steps

1. Code is built and committed locally (2+ commits on `main`), not yet pushed to GitHub.
2. GitHub Pages auto-deploy workflow is already in place at
   `.github/workflows/deploy.yml` — deploys automatically on push to `main` once Pages
   is set to "GitHub Actions" as the source in repo settings.
3. Once pushed + deployed, the case study page needs two buttons added
   ("View Code" → GitHub repo, "View Demo" → GitHub Pages URL) — that edit happens in the
   case study's own HTML/source, not in this repo.

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npx oxlint src    # lint
```

## Reference material (not part of this git repo's history)

`reference/case-study.html` is a snapshot of the live case study page, included here so
you have the full research/brief/persona/design-decisions narrative without needing to
fetch it from the live site. It's gitignored — it's context, not something this repo
should track or deploy.

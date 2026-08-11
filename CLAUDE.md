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

## Important: two visual design systems coexist in this codebase

This is not an inconsistency to "fix" — it reflects where each screen actually is in the
real design process, and the case study is explicit about that.

- **Landing page** (`src/pages/Landing.jsx`) uses the **mono / wireframe** variant —
  black/white/gray, bold sans headings (`.mono-heading`), flat gray `<Placeholder />`
  blocks instead of photography. This matches the client's wireframe-stage Figma export
  (PDF reference the designer supplied).
- **Resort Detail** and **Booking** pages use the **navy / serif "final"** variant — navy
  (`var(--navy)`), serif headings, gold accents. This matches the higher-fidelity final
  screens from Figma.

Shared components take a `variant` prop to switch between the two:
- `<Nav variant="navy" | "mono" />`
- `<Footer variant="navy" | "mono" />`
- `<BookingCTA variant="primary" | "outline" | "mono-solid" | "mono-outline" />`

**Do not silently unify these two styles.** If asked to redesign one page, keep the other
two untouched unless explicitly told to change them too — they're deliberately at different
fidelity because that's genuinely true of the underlying Figma file.

## Component architecture (matches what the case study documents)

```
<Landing />          <ResortDetail />         <Booking />
  <Nav variant=mono>    <Nav variant=navy>       <Nav variant=navy>
  <HeroSection>         ...resort content...     ...booking form...
  <ReviewStrip>         <BookingCTA>              <Footer variant=navy>
  <ScrollIndicator>      <Footer variant=navy>
  <ExplorationCards>
  <BookingCTA>
  <Footer variant=mono>
```

`src/data/content.js` holds all mock content (reviews, resorts, regions, travel windows).
`landingReviews` is a short one-line-quote format for the mono Landing review strip;
`reviews` is the longer-form quote used elsewhere — don't merge these, they're different
copy lengths on purpose.

## Hard constraints — do not violate these without asking

- **No real backend, no real payment processing.** The booking flow (`src/pages/Booking.jsx`)
  ends in a mock confirmation screen, clearly labeled "DEMO — NO REAL PAYMENT IS PROCESSED."
  This is a portfolio piece, not a product — keep it that way.
- **No licensed/scraped stock photography.** `<Placeholder />` (mono) and the CSS-gradient
  `.photo` blocks (navy variant) stand in for real photos because rights to the original
  Figma reference photography were never confirmed. If real images are added later, they
  need to be ones the user actually has rights to use in a public GitHub repo.
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

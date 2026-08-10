# Arctic Travels — Front-End Demo

A working front-end build of the [Arctic Travels UX case study](https://www.connectwithsayali.com/arctic-travels/index.html) — the landing page, a resort detail page, and the booking flow, built as real interactive React components rather than static mockups.

**[Live demo →](#)** _(link added after deploy)_

## What this is

Three screens from the case study, rebuilt in code against the final Figma designs:

- **Landing** — full-bleed hero with a manual (non-autoplaying) region carousel, a review strip, and a single "Book Here" CTA that appears only after the exploration cards, not in the hero. Clicking the hero's "Start your journey" button uses `scrollIntoView({ behavior: 'smooth' })` to bring the user down to that section, per the case study's CTA strategy.
- **Resort detail** — shows how the simplified navbar carries through to inner pages.
- **Booking flow** — a split layout (selection / order summary) modeled on the Blacklane-style pattern from the case study's competitive analysis.

## What this isn't

This is a front-end demo only: mock data, no backend, no real booking or payment processing. The booking flow ends in a clearly-labeled confirmation screen rather than a live transaction. Photography is represented with original CSS gradient placeholders rather than licensed stock photos, to avoid using imagery without confirmed rights.

## Stack

React 19 + Vite + React Router (HashRouter, for clean static hosting). Plain CSS custom properties matching the case study's navy / ice-blue / gold palette and serif/sans type pairing.

## Running locally

npm install
npm run dev

## Background

Part of a UX case study exploring "vibe coding" — using AI-assisted development to close the gap between UX design and front-end implementation. Full process (discovery, research, persona, IA, wireframes) is documented in the case study linked above.

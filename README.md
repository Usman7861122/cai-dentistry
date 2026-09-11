# CAI Dentistry — website

A cosmetic dentistry website built with **Astro + React + Tailwind CSS + Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Then open the URL shown in your terminal (usually `http://localhost:4321`).

## Brand

- Colors and fonts live in `src/styles/global.css` under the `@theme` block
  (teal accent, cream background, Playfair Display + Inter).
- Logo is a text wordmark ("CAI" + italic "Dentistry"), used in
  `src/components/Navbar.tsx` and `src/components/Footer.astro`.

## Project structure

```
src/
  components/   React (.tsx) and Astro (.astro) components for each section
  layouts/      Layout.astro — shared HTML shell (fonts, meta tags)
  pages/        index.astro — the homepage, assembled from the components
  styles/       global.css — Tailwind + the CAI Dentistry theme
public/         Static files served as-is (favicon, images you add)
```

See the full step-by-step guide for how to edit text, add photos, and deploy.

# James Wolf Web Design

A modern portfolio site for **James Wolf Web Design** — built with Next.js (App Router), TypeScript, and Tailwind CSS.

All case studies are **fictional concept redesigns** created for demonstration purposes only. No real clients or businesses are represented.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services, featured work, trust, CTA |
| `/work` | Portfolio grid of concept projects |
| `/work/[slug]` | Individual case study pages |
| `/about` | About James Wolf |
| `/contact` | Contact form (mailto fallback, no backend) |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Project structure

```
src/
  app/           # App Router pages
  components/    # Navbar, Footer, Hero, Services, ProjectCard, CTA, etc.
  lib/           # Site config and project data
```

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3

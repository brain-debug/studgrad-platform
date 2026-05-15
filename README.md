# StudGrad Community Platform

Welcome to the **StudGrad** community website repository! StudGrad is a dedicated, fully responsive platform designed to bridge the gap between academic life and professional success. We connect students and recent graduates with mentors, opportunities, and a thriving community across tech, health, business, creative industries, law, and engineering.

## What it Does

This website serves as the digital home for the StudGrad community, built to convert visitors into active community members through a high-impact, image-heavy, and dynamic user interface.

**Key Features:**
- **Dynamic Single-Page Architecture:** A modern, scrolling experience with Intersection Observer animations.
- **Mobile-First Design:** Fully responsive layout that ensures perfect viewing on smartphones, tablets, and desktops.
- **Interactive FAQ Accordion:** Clean, animated dropdowns for commonly asked questions.
- **Comprehensive Join Flow:** A multi-step questionnaire designed to capture member intent (student vs graduate, field of interest, motivations).
- **Embedded Blog:** A dedicated layout to feature insights, career advice, and success stories.
- **Sleek Branding:** Custom typography (DM Serif Display, DM Sans) and a bespoke color palette (Deep Navy, Amber Gold, Teal, Cream).

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** Custom Vanilla CSS (`globals.css`) strictly following a mobile-first paradigm (No external UI libraries or Tailwind, for complete aesthetic control).
- **Deployment:** Ready for seamless integration and hosting on [Vercel](https://vercel.com).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
- `src/app/page.tsx`: The primary, single-page landing experience.
- `src/app/join/page.tsx`: The interactive onboarding questionnaire.
- `src/app/blog/page.tsx`: Community articles and news.
- `src/app/faq`, `/terms`, `/support`, `/privacy`: Additional static policy and support pages.
- `src/app/globals.css`: The central source of truth for the entire design system and responsive layout logic.

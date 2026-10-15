# TrueFlow Plumbing & Repair

A fast, responsive marketing website for TrueFlow Plumbing & Repair, a family run
plumbing company serving Columbus and central Ohio. The site covers the full
customer journey: hero with rotating offers, about, services, quote request,
team, testimonials, working process, blog highlights and a contact page with a
working form and FAQ.

Built as a single Next.js application. The five pages (Home, About, Services,
Contact, Request a Quote) live on one route and switch through lightweight hash
navigation, which keeps hosting simple and page transitions instant.

The request for quote form posts to `/api/quote`, which validates the payload
and stores the lead through Prisma when a database is configured. The form
degrades gracefully on hosts without a database, so the visitor experience is
identical either way.

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 + shadcn/ui components
- Framer Motion page transitions and animations
- Prisma (optional, scaffolded for future lead storage)

## Getting Started

```bash
# 1. Install dependencies (bun recommended, npm works too)
bun install

# 2. Start the dev server
bun run dev

# 3. Open http://localhost:3000
```

## Production Build

```bash
bun run build
bun run start
```

## Project Structure

```
src/
  app/            # Root route, layout, global styles
  components/
    site/         # TrueFlow sections (header, hero, pages, footer)
    ui/           # shadcn/ui primitives
  lib/            # Site data: services, testimonials, FAQs, blog posts
public/
  images/         # Photography and artwork used across the site
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. On [vercel.com](https://vercel.com), choose **Add New → Project** and import the repo.
3. Vercel detects Next.js automatically. No environment variables are required.
4. Click **Deploy**. Every future push to the main branch redeploys the site.

## Footer Credit

The footer carries a persistent "Designed By M-Webcraft Studio" credit that
links to the studio site.

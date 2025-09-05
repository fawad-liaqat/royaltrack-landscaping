# Royal Track Landscaping – Next.js (App Router)

Production-ready, SEO-optimized Next.js frontend converted from your static HTML/CSS.

## Quick Start

```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

## Build & Run

```bash
pnpm build
pnpm start
```

## Email (Contact form)

Create `.env.local` from `.env.example` and provide SMTP details. The API route at `/api/contact` uses Nodemailer.

## Assets

Put your images in `public/Images/` keeping the same file names as your original HTML (e.g. `FINAL LOGO.jpg`, `Pool.jpg`, `hero-pool.jpg`).

## SEO

- Next.js Metadata API (title, description, OG/Twitter images)
- robots.txt & sitemap.xml via App Router routes
- Organization JSON-LD
- Accessible markup and ARIA labels
```


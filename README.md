# Apexnova Logistics — Website

Production marketing site for **Apexnova Logistics India Pvt Ltd** — built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion. Deployed on Vercel.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx           Root layout — global metadata, JSON-LD, preconnects, fonts
  page.tsx             Home (Hero → WhyChoose → Services → Trust → Nationwide → Coverage)
  about/               About — vision/mission, founder, fleet, process
  services/            Services — service detail, comparison table, process, FAQ
  contact/             Contact — info cards, form, map
  quote/               Quote — 3-step inquiry wizard
  api/quote/           POST endpoint for form submissions (nodemailer SMTP)
  robots.ts            /robots.txt (App Router)
  sitemap.ts           /sitemap.xml (App Router)
  manifest.ts          /manifest.webmanifest (PWA-lite)
components/
  layout/              Navbar, Footer, FAB (Call+WhatsApp), PageTransition
  sections/            Hero, WhyChoose, Services, Trust, Nationwide, Coverage, CTABand
  ui/                  CustomCursor, FloatingParticles, ProgressBar, ToastManager
  GoogleMapEmbed.tsx   Reusable key-less Google Maps iframe
lib/
  site.ts              Single source of truth for brand constants (URL, phone, address)
  animations.ts        Shared Framer Motion variants
```

## Configuration — items to fill in before launch

All hard-coded brand data lives in [`lib/site.ts`](lib/site.ts). Update there once and it propagates to root metadata, JSON-LD, and the WhatsApp/tel links.

### 1. Production domain

[`lib/site.ts`](lib/site.ts) → `SITE_URL`. Currently set to `https://www.apexnovalogistics.com`. Update once the real domain is confirmed; the constant feeds:

- `metadataBase` and all canonicals (`<link rel="canonical">`)
- Organization, WebSite, BreadcrumbList JSON-LD `url` fields
- `app/sitemap.ts` and `app/robots.ts` sitemap reference

### 2. Social media URLs

Update **two places** when real social accounts exist:

- [`lib/site.ts`](lib/site.ts) → `SAME_AS` array (feeds Organization JSON-LD)
- [`components/layout/Footer.tsx`](components/layout/Footer.tsx) → `socials` array (`href` values)
- [`app/contact/page.tsx`](app/contact/page.tsx) → 4 social `<a>` blocks (`href` values)

### 3. Google Analytics 4 / GTM

The placeholder block lives in [`app/layout.tsx`](app/layout.tsx), commented out. To enable:

1. Uncomment the `<Script>` block in the `<head>`.
2. Replace `GA_MEASUREMENT_ID` (two occurrences) with the real GA4 measurement ID, e.g. `G-XXXXXXXXXX`.
3. The script uses `strategy="afterInteractive"` so it never blocks LCP.

For GTM instead of GA4, swap to the standard GTM snippet — same insertion point.

### 4. Google Search Console verification

In [`app/layout.tsx`](app/layout.tsx) → `metadata.verification.google`, paste the GSC verification token once added in Search Console (currently commented out).

### 5. Google Maps

Currently using the **key-less embed** format (`?q=...&output=embed`) via [`components/GoogleMapEmbed.tsx`](components/GoogleMapEmbed.tsx) — no API key required, works on `localhost`, Vercel previews, and production.

To switch to the Maps Embed API for richer features (custom styling, programmatic interaction):

1. Enable **Maps Embed API** in Google Cloud Console.
2. Generate an API key, restrict to your domain + `*.vercel.app`.
3. Add to `.env.local` and Vercel env vars: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...`
4. Update [`GoogleMapEmbed.tsx`](components/GoogleMapEmbed.tsx) to use:
   ```
   https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=...
   ```

### 6. SMTP for the quote/contact form

The API route [`app/api/quote/route.ts`](app/api/quote/route.ts) sends submissions via nodemailer if these env vars are set:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=info@apexnovalogistics.com
SMTP_PASS=...
CONTACT_EMAIL=info@apexnovalogistics.com   # optional; defaults to SMTP_USER
```

If SMTP is not configured, the route silently returns success without sending — no error to the user.

### 7. Icons (PWA + Apple touch)

[`app/manifest.ts`](app/manifest.ts) currently reuses the logo PNG for the 192×192 and 512×512 slots. For a polished PWA experience, drop dedicated icons in `public/`:

- `icon-192.png` (192×192 PNG)
- `icon-512.png` (512×512 PNG)
- `apple-touch-icon.png` (180×180 PNG)

Then update the `src` paths in [`manifest.ts`](app/manifest.ts) and the `icons` block in [`app/layout.tsx`](app/layout.tsx).

### 8. Client / partner logos

The Trust section ([`components/sections/Trust.tsx`](components/sections/Trust.tsx)) renders placeholder tiles until you drop real logo files into:

- `public/images/clients/` — set the `logo` path in the `clients[]` array
- `public/images/partners/` — set the `logo` path in the `partners[]` array

Without a `logo` path, each tile renders the company name as a styled text placeholder.

## SEO checklist (in place)

- ✅ Per-page metadata (title / description / keywords / canonical / OG / Twitter)
- ✅ Organization + LocalBusiness + MovingCompany JSON-LD (root)
- ✅ WebSite JSON-LD (root)
- ✅ BreadcrumbList JSON-LD on `/about`, `/services`, `/contact`, `/quote`
- ✅ Service JSON-LD (one per service) on `/services`
- ✅ FAQPage JSON-LD + visible FAQ accordion on `/services`
- ✅ `robots.ts` (allows all, disallows `/api/`, points to sitemap)
- ✅ `sitemap.ts` (all 5 routes with priorities)
- ✅ `manifest.ts` (PWA-lite, brand theme color `#0F1D4A`)
- ✅ Preconnects: `www.google.com`, `maps.gstatic.com`, `images.unsplash.com`
- ✅ Viewport meta WCAG-compliant (no `maximum-scale`, no `user-scalable=no`)
- ✅ Semantic HTML: one `<h1>` per page, `<nav>` / `<header>` / `<footer>` / `<main>` / `<section>`
- ✅ Form labels (visible or `sr-only`) on every input

## Useful commands

```bash
npm run dev        # Start dev server (hot reload)
npm run build      # Production build + static analysis
npm run start      # Run production build locally
npm run lint       # ESLint
npx tsc --noEmit   # Type-check without emitting
```

## Deployment

Push to `main` → Vercel auto-deploys. Preview deploys are generated for every PR.

Required Vercel env vars (set in dashboard → Settings → Environment Variables):

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL` (for the quote form)
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (only if switching to keyed Maps embed)

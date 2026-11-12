# MedHorizon

**Healthcare that comes to you.**

MedHorizon Management Service is a pre-launch healthcare startup in Greater
Sacramento, California. It brings three things into one coordinated visit:
telehealth evaluation, mobile clinical care at home, and rapid point-of-care
testing — with dispatch, scheduling, clinical workflow, and patient
communication on one platform.

This repository contains the **initial base**: startup documentation, a design
system, and a production-quality Next.js marketing site with a working patient
waitlist.

> **Status:** pre-launch. No clinical service is live. The site collects
> waitlist details only. MedHorizon Management Service provides management and
> administrative services to independent, California-licensed clinical
> practices; it does not practice medicine.

---

## What's here

```
├── app/                     Next.js App Router site
│   ├── page.tsx             Homepage (hero, care, how it works, approach, areas, clinicians, FAQ, CTA)
│   ├── waitlist/            Patient waitlist page + FAQ
│   ├── privacy/             Privacy notice (website and waitlist scope)
│   ├── terms/               Terms of use (California)
│   ├── api/waitlist/        Validated POST endpoint
│   ├── globals.css          Design tokens, reset, utilities
│   └── icon.svg             Favicon
├── components/              Nav, footer, logo, icons, waitlist form
├── lib/waitlist.ts          Local append-only storage adapter (replace before launch)
├── docs/                    Company, market, product, clinical, regulatory,
│                            business model, GTM, roadmap, risks, brand, glossary
├── public/images/           Photography used across the site
└── data/                    Local waitlist records (gitignored)
```

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- Hand-written CSS: global tokens + CSS Modules per component. No UI framework.
- `next/font` for Instrument Serif and Inter Tight.
- Coverage globe: a vendored Framer component (`components/orbit-globe/`)
  rendered with three.js. `lib/framer.ts` shims the authoring helpers it imports
  from the Framer runtime.
- No database in the initial base — the waitlist writes to a local JSONL file
  through one adapter function.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Marketing site: what we do, how it works, coverage, clinicians, FAQ |
| `/waitlist` | Patient waitlist form and launch FAQ |
| `/privacy` | Privacy notice (site and waitlist data) |
| `/terms` | Pre-launch terms of use |
| `POST /api/waitlist` | Validate, dedupe, rate-limit, and store a waitlist entry |

## The waitlist is a stub by design

Entries append to `data/waitlist.jsonl`. That is enough to demo the flow, not
enough to run a company:

- It does not survive ephemeral hosting (e.g., serverless deploys).
- There are no backups, confirmation emails, or CRM sync.
- Rate limiting is in-memory and per instance.

Replace `appendWaitlistEntry()` in `lib/waitlist.ts` with a transactional
database insert, add double opt-in, and add a managed CAPTCHA before public
launch. The migration plan and response playbook are in
[`docs/11-waitlist-program.md`](docs/11-waitlist-program.md).

## Brand

- **Name:** MedHorizon — the horizon where care meets you.
- **Promise:** the doctor's visit, without the waiting room.
- **Palette:** paper `#F5F2EA`, pine `#0E3A2D`, ink `#0B1310`, signal lime
  `#C9F26B`, clay `#9E4429`.
- **Type:** Instrument Serif for display, Inter Tight for text.
- **Voice:** plain, warm, specific. No dashboards, no infrastructure jargon.

The live design system is the code: tokens, type, and utilities in
`app/globals.css`, with one CSS module per component. Strategy:
[`docs/10-brand.md`](docs/10-brand.md)

## Documentation

Start at [`docs/README.md`](docs/README.md). The three documents to read first:

1. [`docs/01-company.md`](docs/01-company.md) — thesis and one-pager
2. [`docs/03-product.md`](docs/03-product.md) — platform architecture
3. [`docs/05-regulatory-compliance.md`](docs/05-regulatory-compliance.md) — what
   we can and cannot claim in California

## Honesty rules baked into the build

- The site says we are launching, never that service is available.
- Coverage is described as rolling out city by city.
- Insurance and pricing are described as being finalized, not guaranteed.
- No invented customer logos, testimonials, or funding claims.
- The waitlist collects no clinical information and says so.

## Not built yet

- Clinical product, dispatch console, integrations, and mobile capture.
- Authentication, tenant management, and analytics.
- Deployed environment and production database.
- Trademark clearance and legal review of public copy.

These are sequenced in [`docs/08-roadmap-metrics.md`](docs/08-roadmap-metrics.md).

## Photography

Site photography comes from Pexels and is used under its free licence. Replace
it with commissioned photography of real MedHorizon clinicians and patients
before public launch.

## License

Proprietary — © 2026 MedHorizon Management Service. All rights reserved. The
name and brand are unregistered and pending clearance.

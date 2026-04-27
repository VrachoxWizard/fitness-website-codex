# Fight Lab Coaching

Croatian-first premium fitness, diet, and online coaching website/app foundation.

The implemented public-site MVP uses:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4 CSS tokens
- next-intl-style locale architecture with Croatian prefixless routes and English `/en`
- Zod + React Hook Form lead validation
- SEO metadata, sitemap, robots, JSON-LD
- Prisma schema placeholder for the future authenticated coaching app

## Run Locally

```bash
pnpm install
pnpm dev
```

Open:

- Croatian: `http://127.0.0.1:3000/`
- English: `http://127.0.0.1:3000/en`

## Checks

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

## Implemented Scope

- Premium “laboratory meets fight camp” landing experience
- Services, packages, about, results, blog, contact, guide, legal/privacy/disclaimer pages
- Mobile navigation, language switcher, sticky mobile CTA
- Generated editorial hero asset in `public/assets/generated/fight-lab-hero.png`
- Design concept reference in `docs/design/fight-lab-homepage-concept.png`
- Consent-aware lead API at `/api/lead`
- Croatian SEO defaults with English secondary routes

## Future Backend Scope

The next implementation stage should wire Clerk, Supabase/Postgres, Prisma repositories, Stripe Checkout/Billing, authenticated intake, dashboard, coach/admin views, and private uploads using the security rules in `AGENTS.md` and `docs/SECURITY_CHECKLIST.md`.

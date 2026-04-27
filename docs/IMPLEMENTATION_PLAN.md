# Implementation Plan

## MVP Timeline

Recommended realistic MVP timeline: **8–10 weeks**.

## Phase 1 — Discovery and Product Definition

Timeline: 3–5 days

Tasks:

- Define service packages.
- Define target users.
- Define pricing.
- Define subscription vs one-time purchase logic.
- Define intake questionnaire.
- Define legal/privacy/disclaimer needs.
- Define sitemap.
- Define main conversion funnel.

Output:

- Product scope
- Sitemap
- Intake structure
- Package/pricing plan
- MVP requirements

## Phase 2 — Technical Setup

Timeline: 2–3 days

Tasks:

- Create Next.js app.
- Add TypeScript.
- Add Tailwind CSS.
- Add shadcn/ui.
- Add ESLint/Prettier.
- Create folder architecture.
- Configure `.env`.
- Add `.env*` to `.gitignore`.
- Set up GitHub.
- Add CI check.

Output:

- Running project skeleton
- Basic design system
- Clean repo structure

## Phase 3 — Public Website

Timeline: 1–2 weeks

Tasks:

- Homepage
- Services
- Pricing
- About/coaches
- Testimonials
- FAQ
- Contact
- Blog foundation
- Croatian/English support
- SEO metadata

Output:

- Conversion-ready website

## Phase 4 — Auth and Roles

Timeline: 3–5 days

Tasks:

- Integrate Clerk/Auth0.
- Add middleware.
- Add user profile model.
- Add roles.
- Protect routes.
- Add server helpers.
- Test unauthorized access.

Output:

- Secure login and route protection

## Phase 5 — Database

Timeline: 3–5 days

Tasks:

- Add Prisma.
- Connect PostgreSQL/Supabase.
- Create models.
- Run migrations.
- Seed admin user.
- Add repository layer.

Output:

- Working database layer

## Phase 6 — Payments

Timeline: 4–7 days

Tasks:

- Set up Stripe products/prices.
- Create checkout sessions.
- Create webhook endpoint.
- Verify webhook signature.
- Store order/subscription.
- Unlock access only after webhook.

Output:

- Working paid purchase flow

## Phase 7 — Intake

Timeline: 1 week

Tasks:

- Build multi-step form.
- Add validation.
- Add consent.
- Save intake.
- Notify coach.
- Add admin review.

Output:

- Client onboarding flow

## Phase 8 — User Dashboard

Timeline: 1–2 weeks

Tasks:

- Overview page
- Intake status
- Plan viewer
- Progress logs
- Messages
- Billing
- Settings

Output:

- User-facing client portal

## Phase 9 — Coach/Admin Dashboard

Timeline: 1–2 weeks

Tasks:

- Client list
- Client profile
- Intake review
- Plan builder
- Message center
- Orders/subscriptions
- Audit logs

Output:

- Internal coaching workflow

## Phase 10 — Testing and Deployment

Timeline: 1 week

Tasks:

- E2E tests
- Mobile QA
- Accessibility QA
- Security QA
- Stripe webhook tests
- Upload tests
- Rate limits
- Sentry
- Vercel deployment
- Domain/HTTPS

Output:

- Production-ready MVP

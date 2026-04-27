# AGENTS.md — AI Coding Agent Rules for Fitness Coaching Platform

## Project Identity

You are working on a bilingual Croatian/English fitness, diet, health-advice and online coaching platform.

The business sells:

- Custom workout plans
- Custom diet plans
- Online coaching
- Transformation packages
- Monthly coaching subscriptions

The product must feel:

- Premium
- Human
- Fitness-themed
- Croatian-market friendly
- Conversion-oriented
- SEO-optimized
- Secure by default
- Non-generic and not AI-template-looking

## Core Business Context

The founders have 15+ years of fitness experience.

Positioning:

- One founder has strong practical athletic background: boxing champion, handball, wrestling, practical coaching experience.
- The other founder is focused on scientific and anecdotal research: bodybuilding, training, supplements, diets, and general health optimization.
- The product should combine practical athlete credibility with evidence-informed coaching.

Default language is Croatian. English is optional via language switch.

## Primary Product Goal

Convert visitors into paying clients through a smooth funnel:

```txt
Visitor
→ Trust-building landing page
→ Service/pricing selection
→ Payment
→ Account creation/login
→ Intake questionnaire
→ Coach review
→ Custom plan delivery
→ Progress support
```

## Non-Negotiable Technical Stack

Use:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui or accessible UI primitives
- PostgreSQL, preferably Supabase or managed Postgres
- Prisma ORM
- Clerk or Auth0 for authentication
- Stripe Checkout/Billing for payments
- Zod for validation
- React Hook Form for forms
- TanStack Query for dashboard server state
- Sentry or equivalent for monitoring
- Vercel or equivalent secure hosting

Do not hand-roll authentication.

Do not put secrets on the frontend.

Do not bypass server-side authorization.

## Architecture Rules

Use this backend request pattern:

```txt
Request
→ Auth middleware
→ Role check / ownership check
→ Zod validation
→ Service layer
→ Repository/DB layer
→ Sanitized response
```

Every protected action must answer:

1. Who is the user?
2. What role do they have?
3. What resource are they accessing?
4. Do they own it, or do they have coach/admin permission?

## Required Roles

```ts
type Role = "guest" | "user" | "coach" | "admin";
```

Permissions:

- Guest: public pages only
- User: own dashboard, own intake, own plans, own progress
- Coach: assigned clients, plans, messages, client notes
- Admin: all business/admin functions

## Security Rules

Mandatory:

- Use battle-tested auth: Clerk/Auth0.
- Protect routes with middleware.
- Protect server actions and route handlers again server-side.
- Use RBAC.
- Add `.env*` files to `.gitignore`.
- Never expose DB credentials, Stripe secret keys, auth secrets, webhook secrets, or email API keys on the frontend.
- Validate all input with Zod on the server.
- Sanitize all errors.
- Use HTTPS in production.
- Store uploaded files privately.
- Validate upload type and size.
- Use signed URLs for private file access.
- Use Stripe webhooks as the source of truth for payment status.
- Add rate limits to auth-sensitive and expensive endpoints.
- Add audit logs for admin/coach actions.

## Frontend Rules

Design must be:

- Mobile-first
- Responsive
- Accessible
- Fast
- Conversion-focused
- Non-generic
- Human and organic

Avoid:

- Generic SaaS cards everywhere
- Random gradients without design purpose
- Overused AI-looking layouts
- Too many CTAs in one section
- Text walls
- Poor mobile spacing
- Low contrast
- Fake testimonials
- Medical claims without disclaimers

Use:

- Strong hero section
- Clear services
- Clear pricing
- Social proof
- Coach credibility
- FAQ
- Sticky mobile CTA
- High-quality imagery
- Smooth but subtle motion
- Strong Croatian copy

## Backend Rules

Use service functions for business logic.

Good:

```ts
await createIntakeForm({ userId: authUser.id, input });
```

Bad:

```ts
await db.intakeForm.create({ data: req.body });
```

Never trust:

- Client-provided user IDs
- Client-provided roles
- Client payment-success redirect
- File names
- MIME type alone
- Frontend validation alone

## React Performance Rules

Do not over-optimize blindly.

Use:

- `React.memo` for expensive child components with stable props.
- `useMemo` for expensive calculations.
- `useCallback` for stable callbacks passed to memoized children.
- Dynamic imports for heavy dashboard/admin widgets.
- Server Components for static content.
- Client Components only when interactivity is needed.

Avoid:

- Large page components with all logic inside.
- Inline object props passed to memoized children.
- Filtering/sorting large arrays on every render.
- Global state for simple local UI state.
- Fetching dashboard data manually in many components instead of using a structured server-state pattern.

## File Upload Rules

For progress photos or documents:

- Require login.
- Validate file size.
- Validate file type.
- Rename files server-side.
- Store in private storage.
- Do not store in `/public`.
- Use signed URLs.
- Add malware scanning if available.
- Never execute uploaded files.

## Payment Rules

Use Stripe Checkout/Billing.

Payment access must be unlocked only after verified webhook events.

Never unlock paid content because the frontend says payment succeeded.

## Content and SEO Rules

Croatian content is default.

Every public service page should include:

- Clear title
- Strong meta description
- Structured headings
- Localized keywords
- Internal links
- FAQ
- CTA
- Trust proof
- Disclaimer where needed

Avoid medical treatment claims. Position as fitness/nutrition coaching, not medical diagnosis or treatment.

## Implementation Priority

Build in this order:

1. Project setup
2. Design system
3. Public bilingual website
4. Auth
5. Database schema
6. Stripe checkout
7. Intake questionnaire
8. User dashboard
9. Coach/admin dashboard
10. Plan builder
11. Messaging/progress
12. Security hardening
13. Testing
14. Deployment
15. SEO/content expansion

## Definition of Done

A feature is done only when:

- It works on mobile and desktop.
- It is typed with TypeScript.
- Inputs are validated server-side.
- Protected access is checked server-side.
- Errors are sanitized.
- Loading and error states exist.
- Accessibility basics are covered.
- It has at least basic tests where appropriate.
- Documentation is updated if architecture or behavior changed.

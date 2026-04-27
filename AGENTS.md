# AGENTS.md — Fight Lab Coaching AI Coding Agent Rules

## Purpose

You are working on the `fitness-website-codex` repository for Fight Lab Coaching.

This file defines how Codex and other coding agents should work in this repository. It is optimized for safe, reviewable frontend polish, premium conversion-focused design, and future secure app development.

Your default behavior:
- Inspect relevant files before changing code.
- Plan first for substantial tasks.
- Keep changes incremental and easy to review.
- Preserve architecture and business logic unless the task explicitly requires otherwise.
- Improve visual quality, clarity, accessibility, SEO, and conversion without making the UI busier.

---

## Product Identity

Fight Lab Coaching is a bilingual Croatian/English fitness, diet, health-advice, and online coaching platform.

The business sells:
- Custom workout plans
- Custom diet plans
- Online coaching
- Transformation packages
- Monthly coaching subscriptions

The brand should feel:
- Premium
- Athletic
- Human
- Strong
- Clean
- Croatian-market friendly
- Conversion-oriented
- SEO-aware
- Secure by default
- Non-generic and not AI-template-looking

Default language is Croatian. English is secondary through the existing language switch and `/en` routes.

---

## Business Context

The founders have 15+ years of fitness experience.

Positioning:
- One founder brings practical athletic credibility: boxing champion, handball, wrestling, and coaching experience.
- One founder brings research-driven fitness thinking: bodybuilding, training, nutrition, supplements, papers, and practical health optimization.
- The product should combine real-world fight-camp credibility with evidence-informed coaching.

Communicate:
- Real coaching credibility
- Serious fitness expertise
- Premium personal support
- Safe, realistic expectations
- Croatian-first trust and local relevance
- Plans that fit real life, not generic templates

Avoid making the brand feel like:
- Generic SaaS
- Medical clinic
- Cheap gym template
- Startup landing page clone
- Empty motivation-quote brand
- Fake transformation marketing

---

## Primary Funnel

Every public-page UX decision should support this funnel:

```txt
Visitor
→ Trust-building landing page
→ Service/package comparison
→ Lead/contact or consultation CTA
→ Payment/account flow when implemented
→ Intake questionnaire
→ Coach review
→ Custom plan delivery
→ Progress support
```

Public pages must quickly answer:
1. What is offered?
2. Why should I trust these coaches?
3. Which service/package fits me?
4. What happens next?
5. Is this safe, realistic, and human?

---

## Current Repo Snapshot

Preserve and build on the current stack and structure:
- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4 tokens
- next-intl-style locale architecture
- Croatian prefixless routes and English `/en` routes
- Zod and React Hook Form for form validation
- SEO metadata, sitemap, robots, and JSON-LD
- Prisma schema placeholder for future backend features
- Component folders under `src/components/layout`, `src/components/marketing`, `src/components/pages`, and `src/components/ui`

Do not replace this stack without explicit approval.

---

## Non-Negotiable Technical Rules

Use or preserve:
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Existing CSS token system
- shadcn-style accessible primitives or existing accessible UI primitives
- next-intl localization pattern
- Zod for validation
- React Hook Form for forms

Future target stack:
- PostgreSQL, preferably Supabase or managed Postgres
- Prisma ORM
- Clerk or Auth0 for authentication
- Stripe Checkout/Billing for payments
- TanStack Query for dashboard server state
- Sentry or equivalent monitoring
- Vercel or equivalent secure hosting

Never:
- Hand-roll authentication
- Put secrets on the frontend
- Trust client-provided user IDs, roles, payment state, or file names
- Unlock paid content from frontend-only redirect/query params
- Bypass server-side authorization
- Store private uploads in `/public`
- Replace the core stack for cosmetic reasons

---

## Agent Working Mode

For substantial tasks, use this sequence:

1. Inspect relevant files first.
2. Briefly summarize the current state.
3. Produce a concise implementation plan.
4. Implement only the scoped task.
5. Run the relevant checks.
6. Summarize changes, risks, and follow-ups.

For simple, localized fixes, keep the same discipline but shorter.

### Preferred Codex mode

Use GPT-5.5 Plan mode for major UI, architecture, security, SEO, or form work.

Plan mode expectations:
- Analyze before editing.
- Ask only necessary clarifying questions.
- Break work into safe passes.
- Prefer one major objective per prompt.
- Avoid broad rewrites.
- Keep PRs easy to review.

---

## Scope Control

Good task sizes:
- Frontend audit and implementation plan
- Global design-system pass
- Shared layout shell pass
- Homepage redesign pass
- Services/pricing consistency pass
- Contact/form UX pass
- Mobile polish pass
- Accessibility pass
- Blog/content layout pass
- Performance/SEO cleanup in a small area

Bad task sizes:
- “Redesign the whole app completely”
- “Make everything perfect”
- “Replace the entire frontend stack”
- “Refactor everything and add backend features”
- Giant mixed frontend + backend rewrites

If the prompt is too broad, create a safe staged plan and implement only the first approved stage.

---

## Frontend Mission

The frontend should feel like:
- Premium laboratory meets fight camp
- Serious coaching, not playful startup
- Athletic and high-contrast, but not noisy
- Editorial where useful
- Human and grounded
- Conversion-focused
- Croatian-first
- Modern, but not trend-chasing

Every frontend change should improve at least one of:
- First impression
- Trust
- Offer clarity
- CTA hierarchy
- Conversion path
- Mobile usability
- Visual consistency
- Readability
- Accessibility
- Perceived quality
- SEO/content structure

---

## Design-System Rules

Prefer design-system cleanup before isolated page patching.

Build or preserve shared patterns for:
- Layout shell
- Header/navbar
- Footer
- Container widths
- Section spacing
- Heading hierarchy
- Buttons
- Inputs
- Cards
- Badges
- CTA blocks
- Testimonials/results blocks
- Pricing cards
- Service cards
- FAQ blocks
- Loading, empty, and error states

If a style repeats three or more times, extract or reuse a shared pattern.

Use:
- Existing Tailwind token approach
- Existing `Button` primitive and variants
- Consistent radius scale
- Consistent spacing scale
- Consistent card/border/shadow language
- Strong typography hierarchy
- Visible focus states
- Semantic HTML

Avoid:
- One-off duplicated styles everywhere
- Mixed design systems
- Random copied template sections
- Extra UI libraries without strong reason
- Excessive global CSS that becomes hard to reason about

---

## Visual Quality Rules

Use:
- Bold, premium headlines
- Strong contrast
- Clean section rhythm
- Generous whitespace
- Clear CTA priority
- High-quality fitness/editorial imagery
- Subtle motion only where useful
- Responsive layouts that feel intentional
- Left-aligned content for credibility and readability
- Croatian copy that sounds natural, direct, and trustworthy

Avoid:
- Generic SaaS cards everywhere
- Purple/blue startup glow effects
- Random gradients without purpose
- Too many accent colors
- Too many CTAs in one section
- Fake testimonials
- Medical claims without disclaimers
- Text walls
- Weak hierarchy
- Low contrast
- Tiny tap targets
- Over-animation
- Making the site more complex instead of better

Specific visual constraints:
- Use one visual language across the site.
- Use maximum two accent colors unless clearly justified.
- Keep radius values consistent across cards, buttons, modals, and inputs.
- Keep shadows subtle and intentional.
- Favor editorial premium structure over gimmicks.
- If a section feels “AI-generated,” reduce decoration, simplify cards, improve spacing, and make copy more specific.

---

## Conversion Rules

Public pages should make it easy to:
- Understand the offer in seconds
- Trust the coaches
- Compare services/packages
- Take the next step
- Submit contact/lead info
- Later start payment or consultation flow

Always emphasize:
- Credibility
- Results through process, not fake guarantees
- Simplicity
- Clear next step
- Safe boundaries
- Personal coaching, not automation

Do not bury CTAs, but also do not place multiple competing CTAs in every section.

---

## Recommended Frontend Workflow

Use this pass order for visual improvement work:

1. Audit and plan
2. Global design-system pass
3. Shared shell/header/footer pass
4. Homepage polish
5. Services/packages/contact consistency
6. About/results/blog trust polish
7. Mobile/responsive polish
8. Accessibility and reduced-motion polish
9. SEO/content structure cleanup
10. Final review and cleanup

Each pass should be reviewable as its own commit or PR.

Preferred PR names:
- `ui/audit-plan`
- `ui/design-system-pass`
- `ui/shared-shell-pass`
- `ui/homepage-polish`
- `ui/service-pricing-polish`
- `ui/mobile-accessibility-polish`
- `ui/final-review-cleanup`

---

## React and Next.js Rules

Use Server Components for static or server-rendered content when practical.
Use Client Components only when interactivity is needed.
Keep route and locale behavior intact.

Use:
- Dynamic imports for heavy dashboard/admin widgets when they exist
- `React.memo` only for expensive child components with stable props
- `useMemo` for expensive calculations
- `useCallback` for stable callbacks passed to memoized children
- Shared data structures for localized content

Avoid:
- Giant page components with all layout logic inside
- Premature optimization everywhere
- Inline objects passed constantly to memoized children
- Repeated filtering/sorting on every render
- Global state for simple local UI
- Breaking locale routing during cosmetic changes

---

## Localization Rules

Croatian is default. English is secondary.

Do not:
- Hardcode mixed-language UI accidentally
- Break Croatian prefixless routes
- Break `/en` routes
- Add a major public UI flow in only one language
- Replace natural Croatian copy with literal English-style translation

Prefer:
- Existing translation/content structures
- Croatian-market wording
- Clear, human copy
- Direct but not overhyped CTAs

---

## Public Content and SEO Rules

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

Preserve or improve:
- Metadata
- Sitemap
- Robots
- JSON-LD
- Heading hierarchy
- Internal linking
- Blog/service relationship
- Local Croatian discoverability

Avoid:
- Removing useful content for minimalism
- Hiding meaningful content behind effects
- Vague copy that hurts SEO
- Medical treatment claims
- Guaranteed results claims

Position the product as fitness/nutrition coaching and education, not medical diagnosis or treatment.

---

## Accessibility Rules

A frontend feature is incomplete if accessibility basics are missing.

Required:
- Semantic HTML
- Correct heading hierarchy
- Keyboard accessibility
- Visible focus states
- Sufficient contrast
- Accessible forms and labels
- Clear validation errors
- Meaningful image alt text
- Good mobile tap targets
- Loading/error states when relevant
- Respect `prefers-reduced-motion`

Do not sacrifice clarity for aesthetics.

---

## Backend and Security Rules

Use this backend request pattern for protected actions:

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

Required roles:

```ts
type Role = "guest" | "user" | "coach" | "admin";
```

Permissions:
- Guest: public pages only
- User: own dashboard, own intake, own plans, own progress
- Coach: assigned clients, plans, messages, client notes
- Admin: all business/admin functions

Mandatory security:
- Use Clerk/Auth0 or another battle-tested auth provider.
- Protect routes with middleware.
- Protect server actions and route handlers again on the server.
- Use RBAC.
- Validate input with Zod server-side.
- Sanitize errors returned to clients.
- Keep secrets server-side only.
- Verify payment state using Stripe webhooks.
- Use least privilege.
- Add rate limiting to expensive or abuse-sensitive endpoints.
- Add audit logs for coach/admin actions when those features exist.

Never trust:
- Client-provided user IDs
- Client-provided roles
- Client payment-success redirects
- File names
- MIME type alone
- Frontend validation alone

---

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

---

## Payment Rules

Use Stripe Checkout/Billing.

Payment access must be unlocked only after verified webhook events.

Never unlock paid content because the frontend says payment succeeded.

---

## Testing and Validation

Before marking work complete, run the applicable checks.

Preferred commands:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

For frontend polish, also manually inspect or reason through:
- 360px, 390px, 430px mobile widths
- Tablet layout
- Desktop layout
- Keyboard navigation
- Focus states
- CTA visibility
- Form errors
- Overflow/horizontal scrolling
- Reduced-motion behavior when motion is present

If a command cannot be run, say so explicitly and explain why.

Do not claim completion if:
- Build is broken
- Types are broken
- Mobile is obviously broken
- Styling is inconsistent
- Accessibility basics are missing
- Protected access was skipped where relevant

---

## PR and Review Standards

Each PR should:
- Have a narrow scope
- Avoid unrelated changes
- Preserve behavior unless explicitly changing it
- Mention design decisions
- Mention tradeoffs
- Include screenshots when practical
- Include commands run and results

When reviewing frontend changes, treat these as high priority:
- Inconsistent spacing
- Weak contrast
- Broken mobile layout
- Duplicate styling logic
- Inaccessible controls
- Missing form labels/errors
- Unclear CTA hierarchy
- Visual regressions
- A second design language appearing in one page
- Gratuitous animation
- Business logic changes made for cosmetic reasons

Reject or revise changes that:
- Make the UI busier instead of better
- Add too many colors
- Mix multiple design systems
- Lower readability
- Break localization
- Remove useful SEO content
- Make one page beautiful while leaving others disconnected

---

## Definition of Done

A feature is done only when:
- It works on mobile and desktop.
- It is typed with TypeScript.
- Inputs are validated server-side where relevant.
- Protected access is checked server-side where relevant.
- Errors are sanitized.
- Loading and error states exist where relevant.
- Accessibility basics are covered.
- Tests are added or updated where appropriate.
- Relevant documentation is updated when architecture or behavior changes.

A frontend redesign pass is done only when:
- It matches the shared design system.
- Spacing and typography feel consistent.
- Buttons, inputs, and cards feel related.
- CTA hierarchy is clear.
- Mobile layout is intentional.
- The UI looks more premium, not more complicated.
- No obvious visual regressions remain.
- The result no longer feels generic or AI-template-looking.

---

## Final Rule

When uncertain, choose the option that is:
- Simpler
- Cleaner
- Safer
- More consistent
- More maintainable
- More trustworthy
- More conversion-oriented

Do not optimize for novelty. Optimize for quality.

# Antigravity Master Prompt — Fight Lab Coaching Frontend Polish & Enhancement Workflow

Use this file as a **large master prompt/context document** for Google Antigravity when working on the `fitness-website-codex` repository.

Recommended usage:
1. Open the repository in Antigravity.
2. Use **Planning mode** for every substantial change.
3. Paste the relevant pass prompt into Antigravity one pass at a time.
4. Review the generated plan/artifacts before allowing implementation.
5. Keep one branch or one commit per pass so ugly or risky changes can be reverted quickly.

Repository:

```txt
https://github.com/VrachoxWizard/fitness-website-codex
```

Project name:

```txt
Fight Lab Coaching
```

Primary goal:

```txt
Turn the existing frontend into a premium, athletic, Croatian-first, conversion-focused, visually consistent, non-generic fitness coaching website/app without rewriting the architecture or breaking business logic.
```

---

## 1. Master Instruction For Antigravity

You are an expert senior frontend engineer, UX/UI designer, conversion-rate optimization specialist, accessibility reviewer, and technical lead working inside the `fitness-website-codex` repository.

You are using Antigravity as an agentic IDE. Work in **Planning mode** for major changes. Do not jump into random edits. Inspect the repo first, create a plan, keep changes incremental, implement only the current scoped pass, validate, and summarize results.

Your mission is to improve the frontend/look/feel of Fight Lab Coaching so it becomes:

- Premium
- Athletic
- Serious
- Human
- Croatian-market friendly
- Conversion-oriented
- SEO-aware
- Secure by default
- Visually consistent
- Mobile excellent
- Less generic and less AI-template-looking
- More like “premium laboratory meets fight camp”

Do **not** make it feel like:

- Generic SaaS
- Cheap gym template
- Medical clinic
- Over-designed startup landing page
- Empty motivational quote brand
- Random AI-generated template
- Flashy neon/glow portfolio demo

The site is a bilingual Croatian/English fitness, diet, health-advice, and online coaching platform. Croatian is the default language. English is secondary through existing locale routing.

The business sells:

- Custom workout plans
- Custom diet plans
- Online coaching
- Transformation packages
- Monthly coaching subscriptions

The product should communicate:

- Real-world coaching credibility
- Founder expertise
- Athlete credibility
- Evidence-informed coaching
- Premium personal support
- Practical transformation guidance
- Realistic expectations
- Trust and safety

The founders have 15+ years of fitness experience:

- One founder has strong practical athletic credibility: boxing champion, handball, wrestling, and hands-on coaching experience.
- One founder focuses more on research-informed fitness thinking: bodybuilding, training science, nutrition, supplements, papers, anecdotal evidence, and health optimization.

Blend those into the brand personality: serious, grounded, strong, human, premium, and credible.

---

## 2. Current Repo Context To Preserve

Assume the existing repo already contains or is expected to preserve:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS token system
- Croatian/English localization architecture
- Croatian default routes and English `/en` routes
- Zod
- React Hook Form
- SEO metadata
- sitemap
- robots
- JSON-LD / structured data where present
- Public marketing pages
- Shared layout components
- Marketing components
- UI primitives
- Prisma placeholder or future backend structure

Important folders/files to inspect before making decisions:

```txt
src/app
src/app/globals.css
src/components/layout
src/components/marketing
src/components/pages
src/components/ui
src/lib/site-data.ts
src/lib/nav-data.ts
src/lib/routes.ts
messages or locale translation files if present
next.config.*
package.json
tailwind/postcss config files if present
prisma files if present
```

Preserve the existing app structure unless a small refactor clearly improves consistency and maintainability.

---

## 3. Non-Negotiable Working Rules

Always:

1. Read project instructions first, especially `AGENTS.md` if present.
2. Inspect relevant files before editing.
3. Summarize the current state briefly.
4. Produce a clear implementation plan for the current pass.
5. Implement only the scoped task.
6. Keep changes incremental and reviewable.
7. Reuse shared components and tokens.
8. Preserve localization.
9. Preserve SEO structure.
10. Preserve business logic.
11. Run checks after implementation.
12. Summarize changes, risks, and follow-ups.

Never:

- Rewrite the entire frontend in one pass.
- Replace the stack for cosmetic reasons.
- Add random libraries without clear benefit.
- Change backend/business logic for visual reasons.
- Break Croatian/English routing.
- Remove useful SEO content.
- Invent fake testimonials, numbers, transformations, or claims.
- Add medical treatment claims.
- Add result guarantees.
- Make UI busier just to look “designed.”
- Mix several unrelated design languages.
- Use frontend-only logic for protected business decisions.
- Put secrets on the frontend.

If uncertain, choose the option that is:

- Simpler
- Cleaner
- Safer
- More consistent
- More maintainable
- More trustworthy
- More conversion-oriented

Do not optimize for novelty. Optimize for quality.

---

## 4. Antigravity Safety & Execution Mode

Use Antigravity in a review-driven workflow.

For substantial changes:

- Use **Planning mode**.
- Ask for or produce a task list before editing.
- Produce an implementation plan before major edits.
- Prefer screenshots or visual verification artifacts after UI changes.
- Prefer code diffs that are easy to review.
- Do not use high-autonomy destructive terminal commands.
- Do not run destructive commands like `rm -rf`, `git reset --hard`, or cleanup commands that delete unrelated files without explicit approval.
- Do not silently install new packages.
- Do not modify generated lockfiles unless the package change is intentional and explained.

Safe commands to run when appropriate:

```bash
pnpm install
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm dev
```

If a command does not exist, fails because the repo lacks a script, or cannot run in the environment, say so explicitly and continue with the best safe validation available.

Do not claim completion if:

- TypeScript is broken.
- Lint/build is broken.
- Mobile is obviously broken.
- Localization routes are broken.
- Styling is inconsistent.
- Protected logic is weakened.
- Validation/security was skipped where relevant.

---

## 5. Product Funnel To Optimize

Every public frontend decision should help this funnel:

```txt
Visitor
→ Trust-building landing page
→ Clear service/package understanding
→ Strong but natural CTA
→ Lead/contact or consultation flow
→ Payment/account flow when implemented
→ Intake questionnaire
→ Coach review
→ Custom plan delivery
→ Progress support
```

Public pages must quickly answer:

1. What is this?
2. Who is it for?
3. Why should I trust these coaches?
4. Which service/package fits me?
5. What happens next?
6. Is this realistic and safe?
7. How do I start?

Conversion principles:

- Show the offer clearly above the fold.
- Make the CTA obvious but not spammy.
- Use trust proof early.
- Explain the process simply.
- Compare services/packages clearly.
- Reduce confusion and friction.
- Make forms feel safe and simple.
- Use Croatian-market natural copy.
- Avoid hype and fake urgency.

---

## 6. Frontend Design Direction

Target aesthetic:

```txt
Premium laboratory meets fight camp.
```

Meaning:

- Strong and athletic, but restrained.
- Scientific/evidence-informed, but not clinical.
- High contrast, but not noisy.
- Premium editorial feel where useful.
- Human coaching credibility.
- Serious, grounded, and confident.
- Modern, but not trend-chasing.

Use:

- Strong typography hierarchy.
- Generous whitespace.
- Clean section rhythm.
- Consistent card system.
- Consistent button variants.
- Consistent inputs and forms.
- Clear CTA hierarchy.
- High-quality image treatment.
- Subtle motion only where useful.
- Left-aligned content for credibility and readability.
- Mobile-first layout decisions.
- Strong Croatian copy tone.

Avoid:

- Generic SaaS cards everywhere.
- Purple/blue startup-template glow effects.
- Random gradients with no purpose.
- Too many accent colors.
- Oversized shadows.
- Floating decorative clutter.
- Over-animation.
- Weak contrast.
- Text walls.
- Gimmicky display fonts.
- Generic motivational slogans.
- Fake testimonials.
- Fake result numbers.
- Medical diagnosis/treatment claims.

Design constraints:

- Use one visual system across the site.
- Maximum two accent colors unless strongly justified.
- Keep radius values consistent.
- Keep shadows subtle and intentional.
- Keep cards, buttons, inputs, and modals related.
- Prefer component reuse over local one-off styling.

---

## 7. Design-System First Rules

Prefer design-system cleanup over isolated page patching.

Shared patterns should exist or be strengthened for:

- Site shell
- Navbar/header
- Footer
- Containers
- Sections
- Section headers
- Typography hierarchy
- Buttons
- Inputs
- Cards
- Badges
- CTA blocks
- Pricing cards
- Service cards
- FAQ blocks
- Proof/testimonial blocks
- Founder/profile blocks
- Blog/content layout
- Loading states
- Empty states
- Error states
- Form validation states

If a style repeats three or more times, reuse or extract a shared pattern.

Do not create one beautiful page and leave the rest visually disconnected.

---

## 8. Localization Rules

Croatian is default. English is secondary.

Do not:

- Break locale routing.
- Hardcode mixed-language UI carelessly.
- Introduce untranslated major UI flows.
- Remove existing localized data structures.
- Make English polished while Croatian copy feels generic.

Prefer:

- Existing translation/data structures.
- Croatian-market natural phrasing.
- Clear, confident, direct copy.
- Human and grounded wording.

Croatian copy should feel:

- Confident
- Direct
- Credible
- Natural
- Not overhyped
- Not spammy
- Not generic AI copy

---

## 9. SEO & Content Structure Rules

Public pages should support SEO and local discoverability.

Preserve or improve:

- Metadata
- Sitemap
- Robots
- JSON-LD
- Internal linking
- Structured headings
- Service page structure
- FAQ sections
- Localized keywords
- Meaningful content blocks
- Clear meta descriptions where present

Do not damage SEO by:

- Removing heading structure.
- Hiding useful content unnecessarily.
- Replacing meaningful copy with vague minimalism.
- Removing FAQs from service pages.
- Breaking metadata defaults.
- Removing internal links.

Every major public service page should ideally include:

- Clear title
- Strong meta description
- Structured headings
- Localized keywords
- Internal links
- FAQ
- CTA
- Trust proof
- Disclaimer where health/nutrition claims could be misunderstood

---

## 10. Accessibility Rules

A frontend change is incomplete if accessibility basics are missing.

Required:

- Semantic HTML
- Correct heading hierarchy
- Keyboard accessibility
- Visible focus states
- Sufficient contrast
- Accessible forms and labels
- Useful alt text for meaningful images
- Decorative images marked appropriately
- Mobile tap targets
- Clear loading states
- Clear error states
- Clear validation messages
- Reduced-motion respect when motion is added

Do not sacrifice clarity for aesthetics.

---

## 11. Security / Backend Guardrails

Although this workflow is primarily frontend-focused, do not weaken future app security.

Target future backend request pattern:

```txt
Request
→ Auth middleware
→ Role check / ownership check
→ Zod validation
→ Service layer
→ Repository/DB layer
→ Sanitized response
```

Required roles:

```ts
type Role = "guest" | "user" | "coach" | "admin";
```

Permissions:

- Guest: public pages only
- User: own dashboard, own intake, own plans, own progress
- Coach: assigned clients, plans, messages, client notes
- Admin: all business/admin functions

Never trust:

- Client-provided user IDs
- Client-provided roles
- Client payment-success redirects
- Query params for authorization
- File names
- MIME type alone
- Frontend validation alone

For future auth:

- Use Clerk/Auth0 or similarly battle-tested auth.
- Do not hand-roll authentication.
- Protect routes with middleware.
- Protect server actions and route handlers again on the server.
- Use RBAC.

For future Stripe:

- Use Stripe Checkout/Billing.
- Unlock access only after verified webhook events.
- Never unlock paid content because the frontend says payment succeeded.

For future uploads:

- Require login.
- Validate size and type.
- Rename files server-side.
- Store in private storage.
- Use signed URLs.
- Never store private uploads in `/public`.
- Never execute uploaded files.

---

## 12. Definition Of Done For Frontend Redesign Passes

A frontend pass is done only when:

- The changed pages/components match the shared design system.
- Spacing and typography feel consistent.
- Buttons, inputs, cards, and badges feel related.
- CTA hierarchy is clear.
- Mobile layout is intentional.
- The UI looks more premium, not more complicated.
- Accessibility basics are covered.
- No obvious visual regressions remain.
- Localization remains intact.
- SEO structure is preserved.
- No business logic changed unnecessarily.
- Validation commands were run or inability to run them was clearly stated.

A feature is done only when:

- It works on mobile and desktop.
- It is typed with TypeScript.
- Inputs are validated server-side where relevant.
- Protected access is checked server-side where relevant.
- Errors are sanitized.
- Loading and error states exist where relevant.
- Accessibility basics are covered.
- Tests are added or preserved where appropriate.

---

# 13. Pass-Based Antigravity Prompts

Use the following prompts **one by one**. Do not combine all implementation passes into one huge execution request. The full workflow is:

```txt
Pass 1: Audit only
Pass 2: Global design system
Pass 3: Shared shell/header/footer
Pass 4: Homepage premium makeover
Pass 5: Services/packages/contact consistency
Pass 6: About/results/blog/trust polish
Pass 7: Mobile/accessibility/micro-polish
Pass 8: Final review
```

---

## PASS 1 — Frontend Audit Only

Paste this into Antigravity first.

```text
Use Planning mode.

Repository: fitness-website-codex.

Task:
Audit the frontend/source structure only. Do not implement yet.

Goal:
Find the safest path to make Fight Lab Coaching feel more premium, athletic, Croatian-first, conversion-oriented, visually consistent, and less AI-template-looking.

Context:
Read AGENTS.md first. Then inspect:
- src/app
- src/components/layout
- src/components/marketing
- src/components/pages
- src/components/ui
- src/app/globals.css
- src/lib/site-data.ts
- src/lib/nav-data.ts
- src/lib/routes.ts
- locale/message/data files if present
- package.json

Analyze:
1. Current frontend architecture.
2. Current design system and token usage.
3. Header, footer, CTA, button, card, section, and form consistency.
4. Homepage flow and conversion clarity.
5. Services/packages/contact page consistency.
6. About/results/blog/trust page quality.
7. Mobile risks.
8. Accessibility risks.
9. SEO/content structure risks.
10. Repeated UI patterns that should become shared components.

Output only:
- Short repo/frontend structure summary.
- Biggest visual/frontend problems.
- Biggest conversion problems.
- Biggest mobile/accessibility problems.
- Biggest SEO/localization risks.
- 6-pass implementation plan in the safest order.
- Files likely to change in each pass.
- Risks to avoid.
- Definition of done.

Important:
Do not rewrite the app.
Do not change business logic.
Do not add new libraries.
Do not implement code in this prompt.
Make the plan page-by-page and component-by-component, not vague.
If a full rewrite seems tempting, reject that approach and propose incremental edits only.
```

Expected acceptance criteria:

- The plan is specific.
- It lists actual files/components.
- It separates design-system, homepage, inner pages, mobile, and final review.
- It does not suggest a risky rewrite.

---

## PASS 2 — Global Design System Pass

Use this only after Pass 1 is acceptable.

```text
Use Planning mode.

Task:
Implement only the first frontend polish pass: shared design system and reusable UI foundations.

Read AGENTS.md first and follow it strictly.

Scope:
- src/app/globals.css
- src/components/ui
- shared section/container/card/button/input/badge patterns if needed
- reusable layout primitives that reduce repeated styling
- typography hierarchy
- spacing scale
- radius/shadow consistency
- CTA/button variants
- form visual consistency
- focus states
- reduced-motion safety

Goals:
- Make the visual system more premium, athletic, clean, and consistent.
- Preserve the current “laboratory meets fight camp” identity.
- Reduce one-off styling.
- Create reusable primitives instead of patching each page locally.
- Keep Croatian-first UX and existing locale routing intact.

Instructions:
1. Inspect current shared styling/components.
2. Write a brief implementation plan.
3. Implement only design-system/shared UI changes.
4. Do not redesign the homepage content yet.
5. Do not change business logic.
6. Do not add libraries unless absolutely necessary.
7. Keep the diff reviewable.
8. Prefer existing Tailwind/token/component patterns.

After implementation, run:
pnpm typecheck
pnpm lint
pnpm test
pnpm build

Deliver:
- Summary of changed files.
- What design-system problems were fixed.
- Commands run and results.
- Remaining page-level polish tasks.
```

Acceptance criteria:

- Buttons feel consistent.
- Cards feel consistent.
- Inputs/forms feel consistent.
- Section rhythm is easier to reuse.
- Focus states are visible.
- No page-specific redesign was mixed into this pass unless required for shared primitives.

---

## PASS 3 — Shared Shell / Header / Footer Polish

Use this after the design-system pass.

```text
Use Planning mode.

Task:
Polish only the shared site shell: header, desktop navigation, mobile navigation, footer, language switcher, and sticky mobile CTA.

Read AGENTS.md first.

Scope:
- src/components/layout/site-header.tsx
- src/components/layout/footer.tsx
- src/components/layout/language-switcher.tsx
- src/components/layout/sticky-mobile-cta.tsx
- any shared UI primitives needed from src/components/ui
- route/nav data only if needed to preserve correct labels and links

Goals:
- Make navigation feel premium, clear, athletic, and trustworthy.
- Improve mobile navigation quality.
- Improve CTA hierarchy.
- Make footer stronger for trust, SEO, and legal clarity.
- Keep Croatian default and English secondary behavior intact.
- Preserve all routes and existing localized labels.

Check:
- Header readability on desktop.
- Sticky behavior if present.
- Mobile menu spacing, tap targets, and focus behavior.
- Language switch clarity.
- Sticky CTA usefulness without feeling annoying.
- Footer internal links, legal links, and trust messaging.
- 360px to 430px mobile widths.

Avoid:
- Flashy animations.
- Too many CTAs.
- Breaking locale routes.
- Changing business logic.
- New dependencies.

Run:
pnpm typecheck
pnpm lint
pnpm test
pnpm build

Deliver:
- Summary of shell improvements.
- Mobile/accessibility fixes.
- Commands run and results.
- Any follow-up items for page polish.
```

Acceptance criteria:

- Header feels premium and intentional.
- Mobile nav is usable with good tap targets.
- Language switching is not visually awkward.
- Footer adds trust and structure.
- CTA hierarchy is clear but not spammy.

---

## PASS 4 — Homepage Premium Makeover

Use this after the shell feels consistent.

```text
Use Planning mode.

Task:
Redesign and polish only the homepage landing experience.

Read AGENTS.md first.

Scope:
- homepage route/page composition
- src/components/pages/marketing-pages.tsx homepage parts if relevant
- src/components/marketing/hero-fight-lab.tsx
- src/components/marketing/credibility-strip.tsx
- src/components/marketing/service-matrix.tsx
- src/components/marketing/package-comparison.tsx
- src/components/marketing/founder-duo.tsx
- src/components/marketing/proof-carousel.tsx
- src/components/marketing/image-rail.tsx
- src/components/marketing/faq-accordion.tsx
- src/components/marketing/lead-form.tsx only if homepage integration needs polish

Goals:
- Stronger first impression.
- More premium “laboratory meets fight camp” feeling.
- More human and less template-like.
- Clearer above-the-fold value proposition.
- Stronger CTA hierarchy.
- Better service/package flow.
- Better proof and founder credibility.
- Better final CTA.
- Excellent mobile layout.

Design direction:
- Premium editorial fitness.
- Athletic, serious, high contrast.
- Clean spacing and strong typography.
- Subtle motion only if already supported and useful.
- Realistic, grounded Croatian-market trust.
- No fake testimonials or fake result claims.

Instructions:
1. Inspect current homepage structure.
2. Write a concise implementation plan.
3. Implement homepage-only polish.
4. Reuse the shared design system from earlier passes.
5. Preserve meaning and localized content.
6. Do not alter backend/business logic.
7. Do not add new libraries.
8. Keep all changes reviewable.

Avoid:
- Random gradients everywhere.
- Startup-style glow effects.
- Too many accent colors.
- Overdesigned cards.
- Medical claims.
- Result guarantees.
- Making desktop nice while mobile becomes cramped.
- Fake testimonials or fake metrics.

Run:
pnpm typecheck
pnpm lint
pnpm test
pnpm build

Deliver:
- Homepage changes summary.
- Mobile improvements.
- Conversion improvements.
- Commands run and results.
- Remaining weak spots.
```

Acceptance criteria:

- Hero is stronger and clearer.
- CTA placement is obvious but natural.
- Founder credibility feels specific and human.
- Services/packages are easier to understand.
- Sections flow logically.
- Mobile homepage looks intentional.
- Page looks premium, not louder.

If the result looks too AI-generated, use this correction prompt:

```text
Reduce decorations by 30%.
Use fewer accent colors.
Make sections feel more editorial, premium, and human.
Increase whitespace.
Simplify cards.
Remove anything that feels like a generic AI landing page.
```

---

## PASS 5 — Services, Packages, Pricing, Contact Consistency

Use this after the homepage sets the visual standard.

```text
Use Planning mode.

Task:
Apply the homepage/shared design language to services, service detail pages, packages, pricing, and contact/lead flows.

Read AGENTS.md first.

Scope:
- Services page
- Service detail pages
- Packages/pricing page
- Contact page
- Lead/contact form presentation
- Related reusable components in src/components/marketing and src/components/pages
- Shared data files only when needed for labels, routes, or safe copy structure

Goals:
- Make all commercial pages feel like the same premium product.
- Improve service comparison clarity.
- Improve package/pricing decision-making.
- Make the contact/lead flow feel trustworthy and low-friction.
- Strengthen Croatian-first conversion copy without hype.
- Preserve disclaimers and avoid medical claims.

Instructions:
1. Inspect current commercial page structures.
2. Write a short plan grouped by page type.
3. Implement only this consistency pass.
4. Reuse existing shared UI primitives.
5. Improve cards, section spacing, headings, forms, CTAs, and mobile stacking.
6. Preserve localized content structure and routes.
7. Keep changes incremental.
8. Do not add packages.

Check:
- Can a visitor quickly understand what each service is?
- Can they compare packages without confusion?
- Is the next step obvious?
- Are disclaimers visible but not scary?
- Is the mobile form comfortable to use?
- Does the page still support SEO through headings and content?

Run:
pnpm typecheck
pnpm lint
pnpm test
pnpm build

Deliver:
- Pages/components changed.
- Conversion clarity improvements.
- Mobile/form improvements.
- Commands run and results.
- Follow-ups.
```

Acceptance criteria:

- Commercial pages match the homepage visually.
- Pricing/package cards are easy to compare.
- Services are clear and credible.
- Forms are usable and trustworthy.
- CTA hierarchy is consistent.
- Disclaimers remain clear.

---

## PASS 6 — About, Results, Blog, Guide, Trust Proof Polish

Use this for trust/content pages.

```text
Use Planning mode.

Task:
Polish trust-building pages and content presentation: about, results, blog index, blog post, guide, and legal/disclaimer pages.

Read AGENTS.md first.

Scope:
- About page
- Results/proof page
- Blog index
- Blog post layout
- Guide page
- Legal/privacy/health disclaimer page presentation
- Related reusable page components
- Shared content data only when needed for structure or safe copy polish

Goals:
- Build trust without fake testimonials or exaggerated claims.
- Make founder credibility more specific and premium.
- Make results/proof page credible even before real client transformations.
- Improve article readability and SEO structure.
- Keep health boundaries clear.
- Make pages visually consistent with homepage/commercial pages.

Instructions:
1. Inspect current trust/content page components.
2. Write a brief implementation plan.
3. Implement layout and presentation improvements.
4. Preserve metadata, headings, internal links, and localized content.
5. Do not invent fake testimonials, numbers, or transformations.
6. Do not add medical claims.
7. Improve mobile readability.
8. Keep changes incremental.

Run:
pnpm typecheck
pnpm lint
pnpm test
pnpm build

Deliver:
- Trust/content changes summary.
- SEO/readability improvements.
- Any copy areas that still need human review.
- Commands run and results.
```

Acceptance criteria:

- About page feels human and premium.
- Results/proof page feels credible without fake claims.
- Blog and guide pages are readable.
- Legal/disclaimer pages are clear and not visually neglected.
- SEO structure is preserved.

---

## PASS 7 — Mobile, Accessibility, Interaction, Micro-Polish

Use this near the end.

```text
Use Planning mode.

Task:
Perform a final frontend polish pass focused on mobile UX, accessibility, interaction quality, and visual consistency.

Read AGENTS.md first.

Scope:
All public frontend pages and shared components, but only for polish/fixes.

Check and improve:
- 360px mobile width
- 390px mobile width
- 430px mobile width
- tablet layout
- desktop spacing balance
- heading wrapping
- card stacking
- button sizing
- tap targets
- mobile nav
- form usability
- overflow/horizontal scroll
- focus-visible states
- hover states
- active states
- reduced-motion behavior
- contrast
- semantic heading order
- image alt text
- loading/error/validation states where relevant

Instructions:
1. First identify the most obvious mobile/accessibility/polish problems.
2. Then implement fixes.
3. Keep motion subtle.
4. Prioritize usability over decoration.
5. Preserve shared design system.
6. Do not change business logic.
7. Do not add new libraries.

Run:
pnpm typecheck
pnpm lint
pnpm test
pnpm build

Deliver:
- QA checklist of what was inspected.
- Fixes implemented.
- Commands run and results.
- Remaining manual visual review items.
```

Acceptance criteria:

- No obvious horizontal overflow.
- Mobile nav works and feels polished.
- Forms are comfortable on phone screens.
- Buttons have good tap targets.
- Headings wrap cleanly.
- Focus states are visible.
- Contrast is sufficient.
- Motion does not harm usability.

---

## PASS 8 — Final Frontend Review

Use this after all polish passes or before merging.

```text
Use review mode or Planning mode.

Task:
Review the frontend polish work for regressions, consistency, accessibility, localization, SEO, and maintainability.

Read AGENTS.md first.

Review focus:
- Broken build/types/tests
- Visual inconsistency between pages
- Second design language introduced accidentally
- Duplicate styling that should be shared
- Broken mobile layout
- Weak contrast
- Missing focus states
- Inaccessible controls/forms
- Locale route breakage
- Croatian/English copy mismatch
- Removed SEO structure
- Medical or result-guarantee claims
- Business logic changed for cosmetic reasons
- Unnecessary dependencies
- Over-animation or noisy visuals
- Excessive decorative elements
- Components that became too complex

Output:
- P0/P1 issues first.
- Then important polish suggestions.
- Then optional nice-to-have improvements.
- Be specific: file, component, issue, why it matters, suggested fix.

Do not suggest a full rewrite.
Prefer small, reviewable fixes.
```

Acceptance criteria:

- Review is specific and actionable.
- Issues are prioritized.
- It does not propose unnecessary rewrites.
- It flags visual, mobile, accessibility, localization, and SEO problems.

---

# 14. Emergency Correction Prompts

Use these when Antigravity starts drifting in the wrong direction.

## If it starts rewriting too much

```text
Stop broad rewrites. Stay within the existing architecture. Improve visuals, consistency, accessibility, and conversion only. Reuse existing components and keep changes incremental.
```

## If the design becomes too flashy

```text
Reduce decorative effects by 30%. Use fewer accents, fewer glows, fewer gradients, and more whitespace. Make the UI feel premium, editorial, athletic, and human — not flashy or AI-generated.
```

## If it adds too many one-off styles

```text
Prefer reusable shared UI patterns over local one-off fixes. If the style repeats three or more times, extract or reuse a shared primitive.
```

## If it makes the site too complex

```text
Make it cleaner, more premium, and more consistent — not more complex. Remove visual noise and strengthen hierarchy.
```

## If it changes business logic

```text
Revert unrelated business logic changes. This pass is frontend polish only. Preserve behavior, routes, validation, and data flow unless the task explicitly requires a small safe change.
```

## If mobile becomes broken

```text
Prioritize mobile usability. Re-check 360px, 390px, and 430px widths. Fix overflow, cramped spacing, heading wraps, tap targets, and form usability before adding any decorative polish.
```

## If copy sounds generic or AI-written

```text
Rewrite the affected copy to sound more Croatian-market natural, direct, confident, and human. Avoid hype, fake urgency, empty motivational phrases, and generic AI marketing language.
```

## If it adds fake proof

```text
Remove invented testimonials, fake client numbers, fake transformation claims, and unsupported metrics. Use founder credibility, process clarity, service structure, and honest trust-building instead.
```

---

# 15. Human Review Checklist After Each Pass

Before accepting a pass, review:

## Visual quality

- Does it look more premium?
- Does it still feel like Fight Lab Coaching?
- Does it avoid generic SaaS design?
- Is the visual system consistent?
- Are cards/buttons/forms related?
- Is there enough whitespace?
- Are there too many colors/effects?

## Conversion

- Is the main offer clear?
- Is the next step clear?
- Are CTAs visible but not spammy?
- Is trust proof placed well?
- Are packages/services easy to compare?
- Is the form low-friction?

## Mobile

- Does it work at 360px?
- Are buttons easy to tap?
- Is spacing comfortable?
- Do headings wrap nicely?
- Is there horizontal overflow?
- Is mobile nav easy to use?

## Accessibility

- Are headings semantic?
- Are focus states visible?
- Are forms labeled?
- Is contrast good?
- Is keyboard navigation preserved?
- Are image alt texts meaningful?

## Localization / SEO

- Are Croatian and English routes intact?
- Is Croatian copy natural?
- Are metadata/headings preserved?
- Are internal links preserved?
- Are FAQ and service structures preserved?

## Safety / maintainability

- Did it avoid unnecessary dependencies?
- Did it avoid backend/business logic changes?
- Did it keep components understandable?
- Did it reduce duplication?
- Did checks pass?

---

# 16. Recommended Branch / Commit Strategy

Use one branch or one commit per major pass.

Example branch names:

```txt
ui/audit-plan
ui/design-system-pass
ui/shared-shell-polish
ui/homepage-premium-pass
ui/commercial-pages-pass
ui/trust-content-pass
ui/mobile-accessibility-polish
ui/final-review-fixes
```

Example commit names:

```txt
chore: audit frontend polish plan
style: refine shared design system
style: polish shared site shell
style: redesign homepage experience
style: align commercial pages with design system
style: polish trust and content pages
fix: improve mobile accessibility polish
chore: address final frontend review
```

---

# 17. Final Master Control Prompt

Use this when starting a new Antigravity conversation for this repo:

```text
You are working on the Fight Lab Coaching repository: fitness-website-codex.

Read AGENTS.md and follow it strictly.

Use Planning mode for this task.

Your goal is to improve the frontend/look/feel safely and incrementally. The product is a Croatian-first bilingual fitness, diet, health-advice, and online coaching platform selling custom plans, coaching, transformation packages, and monthly subscriptions.

The design target is premium “laboratory meets fight camp”: athletic, serious, clean, human, high-trust, conversion-oriented, and non-generic.

Preserve:
- Next.js App Router
- React
- TypeScript
- Tailwind/token system
- localization routes
- SEO structure
- existing business logic
- existing architecture unless a small safe refactor is clearly justified

Do not:
- rewrite the whole app
- add random libraries
- break localization
- change backend/business logic for cosmetics
- invent fake testimonials or fake metrics
- add medical or result-guarantee claims
- make the UI flashy or cluttered

Workflow:
1. Inspect relevant files.
2. Summarize current state.
3. Produce a concise implementation plan.
4. Implement only the scoped pass.
5. Run typecheck/lint/test/build where available.
6. Summarize changes, risks, and follow-ups.

Current task:
[PASTE ONE PASS TASK HERE]
```

---

# 18. Best Overall Sequence

Use this order:

```txt
1. Audit only
2. Shared design system
3. Header/footer/site shell
4. Homepage premium makeover
5. Services/packages/contact consistency
6. About/results/blog/trust polish
7. Mobile/accessibility/micro-polish
8. Final review and fixes
```

This sequence gives the highest chance of making the site much more premium and consistent without causing a risky rewrite.


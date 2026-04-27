# Frontend Guidelines

## Design Goal

Create a premium Croatian/English fitness platform that feels custom, human, and conversion-focused.

## Visual Direction

Use:

- Strong typography
- Dark/light contrast
- Fitness-inspired imagery
- Organic section shapes
- Clear CTAs
- Motion accents
- Strong mobile layout
- Real social proof

Avoid:

- Generic AI SaaS layouts
- Weak hero sections
- Fake-looking testimonials
- Too many gradients
- Low-contrast text
- Overcomplicated navigation

## Page Structure

Homepage should include:

1. Hero with strong promise and CTA
2. Trust/credentials
3. Services
4. How it works
5. Transformations/testimonials
6. Pricing
7. FAQ
8. Final CTA

## Component Architecture

```txt
components/
├── ui/
├── marketing/
├── forms/
├── dashboard/
├── admin/
└── shared/
```

## Responsiveness

Test:

- 360px
- 390px
- 768px
- 1024px
- 1440px

Rules:

- Mobile first.
- One-column forms on mobile.
- Sticky mobile CTA where useful.
- Avoid horizontal overflow.
- Keep tap targets large enough.
- Keep hero readable on small screens.

## Accessibility

- Use semantic HTML.
- Use labels.
- Use visible focus states.
- Support keyboard navigation.
- Add alt text.
- Respect reduced motion.
- Use good contrast.
- Do not rely only on color.

## Performance

- Use `next/image`.
- Lazy-load heavy sections.
- Use dynamic imports for dashboards/charts.
- Minimize third-party scripts.
- Use Server Components for static content.
- Avoid oversized images.
- Defer analytics.

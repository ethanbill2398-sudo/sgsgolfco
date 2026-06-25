# SGS Golf Co. — Premium Website

## Quick Start

```bash
cd sgs-golf-co
npm install      # or: pnpm install / bun install
npm run dev      # → http://localhost:3000
```

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with custom design tokens
- **Framer Motion** — parallax hero, fade-up sections, animated counters
- **Lucide React** — icon system
- **Next/Image** — optimized Unsplash imagery

## Project Structure

```
app/
  layout.tsx       ← Poppins + Inter fonts, metadata, SEO
  page.tsx         ← Page assembly
  globals.css      ← Design tokens, utility classes

components/
  Navbar.tsx       ← Sticky, scroll-aware, mobile drawer
  Footer.tsx       ← Multi-column, social links
  sections/
    Hero.tsx        ← Cinematic parallax, animated headline
    Trust.tsx       ← 3-pillar trust icons
    About.tsx       ← Split layout with floating stat card
    WhySGS.tsx      ← 8-feature grid
    Programs.tsx    ← 5 expandable lesson cards
    Pricing.tsx     ← 3-tier pricing (highlighted "Most Popular")
    Testimonials.tsx← 6 star-rated quote cards
    Stats.tsx       ← Animated counters on navy bg
    CTABanner.tsx   ← Full-width image CTA
    Resources.tsx   ← 6 blog cards
    Shop.tsx        ← Coming soon with email capture
    Contact.tsx     ← Split form + info panel

lib/
  utils.ts         ← cn() helper
```

## Customization

| What               | Where                          |
|--------------------|--------------------------------|
| Colors             | `tailwind.config.ts`           |
| Fonts              | `app/layout.tsx`               |
| Pricing numbers    | `components/sections/Pricing.tsx` |
| Program content    | `components/sections/Programs.tsx` |
| Contact email      | `components/sections/Contact.tsx` / `Footer.tsx` |
| Images             | Replace Unsplash URLs with real photos |

## Production Notes

- Replace placeholder Unsplash images with licensed or owned photography
- Wire contact form to a backend (Resend, Formspree, or Next.js API route)
- Add Google Analytics / Meta Pixel in `layout.tsx`
- Configure `next.config.ts` domain allowlist if moving off Unsplash

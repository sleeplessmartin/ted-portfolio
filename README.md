# Ted Martin Hermosisima — Portfolio

Personal portfolio site for Ted Martin Hermosisima, AI Automation Engineer and Senior Software Engineer. Built as a single-page application with smooth-scroll navigation, framer-motion animations, and a dark design system — content sourced directly from resume.

Live at: **[tedhermosisima.dev](https://tedhermosisima.dev)**

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS v3 (dark CSS variables) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Component primitives | shadcn/ui pattern (CVA + Radix Slot) |
| Path aliases | `@/` → `src/` |

No backend. No CMS. No database. Pure static SPA.

---

## Sections

The page is composed of 10 sections rendered in order inside `App.tsx`:

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Full name, role badge, pitch copy, CTA buttons, social links |
| 2 | **Social Proof** | Stat cards (years, projects, stack, companies) + animated tech logo marquee |
| 3 | **About / My Edge** | Narrative + engineering advantage checklist |
| 4 | **Skills & Tools** | Two-column layout: Automation Stack vs Engineering Stack |
| 5 | **Automation Projects** | Five project cards: Problem → Solution → Outcome + tech tags |
| 6 | **Services** | Four gradient service cards with CTA |
| 7 | **Work History** | Timeline of all roles from 2007 to present |
| 8 | **Certifications** | Education + certifications |
| 9 | **Testimonials** | Three placeholder cards ready to be filled |
| 10 | **Contact** | Contact form (mailto), email, LinkedIn, Calendly placeholder |

Navigation is a fixed top navbar that smooth-scrolls to each section by `id`.

---

## Project Structure

```
ted-portfolio/
├── public/
│   ├── og-image.html       # Screenshot this to generate og-image.png
│   └── og-image.png        # Place generated PNG here before deploying
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── achievement-cards.tsx     # Stat card used in Social Proof
│   │       ├── button.tsx                # shadcn-style button (CVA)
│   │       ├── marquee-logo-scroller.tsx # Infinite scrolling logo strip
│   │       └── project-card.tsx          # Automation project card
│   ├── lib/
│   │   └── utils.ts        # cn() utility (clsx + tailwind-merge)
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── SocialProof.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Experience.tsx
│   │   ├── Certifications.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── App.tsx             # Navbar, section assembly, footer
│   ├── index.css           # Tailwind directives + CSS variable theme
│   ├── main.tsx            # React root
│   └── vite-env.d.ts
├── index.html              # Entry point — OG/Twitter meta tags live here
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── tsconfig.node.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install and run

```bash
# Install dependencies
npm install

# Start dev server at localhost:5173
npm run dev

# Type-check + production build
npm run build

# Preview production build locally
npm run preview
```

---

## Design System

The theme is defined entirely through CSS custom properties in `src/index.css`. All Tailwind color utilities (`bg-background`, `text-primary`, `border-border`, etc.) resolve through these variables — changing the theme is a single-file edit.

```css
--background:   222 47% 4%;    /* near-black navy */
--foreground:   213 31% 91%;   /* off-white */
--primary:      199 89% 48%;   /* cyan accent */
--card:         222 47% 7%;    /* slightly lifted surface */
--muted:        222 47% 11%;   /* subtle backgrounds */
--border:       222 47% 14%;   /* dividers */
```

---

## Updating Content

All content lives directly in the section components under `src/sections/`. Nothing is pulled from an external source.

| What to update | Where |
|---|---|
| Name, pitch, CTA copy | `src/sections/Hero.tsx` |
| Stat numbers, tech logos | `src/sections/SocialProof.tsx` |
| About narrative, edge points | `src/sections/About.tsx` |
| Skill tags | `src/sections/Skills.tsx` |
| Project cards | `src/sections/Projects.tsx` |
| Service descriptions | `src/sections/Services.tsx` |
| Work history entries | `src/sections/Experience.tsx` |
| Certifications, education | `src/sections/Certifications.tsx` |
| Testimonial quotes | `src/sections/Testimonials.tsx` |
| Email, LinkedIn, Calendly URL | `src/sections/Contact.tsx` |
| Page title, OG meta tags | `index.html` |

---

## OG Preview Image (Link Previews)

When someone shares the site link on Messenger, WhatsApp, Slack, or iMessage, platforms read the Open Graph meta tags from `index.html` to generate a preview card.

### What's already set up

`index.html` contains:

```html
<meta property="og:image" content="https://tedhermosisima.dev/og-image.png" />
<meta name="twitter:image" content="https://tedhermosisima.dev/og-image.png" />
```

### Generating the image

1. Open `public/og-image.html` in Chrome — it renders the preview card design at 1200×630
2. Open DevTools → Device Toolbar (`Cmd+Shift+M`) → set dimensions to **1200 × 630**
3. DevTools menu → **Capture screenshot** → saves a PNG
4. Rename to `og-image.png` and place it in `public/`
5. Deploy — the image will be publicly accessible at `/og-image.png`

### Testing after deploy

- **Facebook / Messenger**: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)
- **Twitter / X**: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
- **LinkedIn**: [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector)

---

## Deployment

This is a static site — it deploys anywhere that serves static files.

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Vercel auto-detects Vite. No configuration needed.

### Netlify

```bash
npm run build
# Drag the dist/ folder into Netlify's UI
# Or connect the repo and set build command: npm run build, publish dir: dist
```

### Manual

```bash
npm run build
# Upload contents of dist/ to any static host (S3, GitHub Pages, Cloudflare Pages, etc.)
```

After deploying, replace `tedhermosisima.dev` in `index.html` with your actual domain if it differs.

---

## Testimonials

The Testimonials section (`src/sections/Testimonials.tsx`) ships with three styled placeholder cards. To fill one in, update the `testimonials` array:

```ts
{
  quote: "Ted automated our entire lead qualification process in under a week. The pipeline has been running without intervention for three months.",
  name: "Jane Smith",
  role: "Head of Sales · Acme Corp",
  initials: "JS",
},
```

---

## Contact Form

The contact form uses `mailto:` — on submit it opens the user's default email client pre-filled with the visitor's name, email, and message. No backend or third-party form service is required.

To switch to a proper form backend (Formspree, Resend, EmailJS), replace the `handleSubmit` function in `src/sections/Contact.tsx`.

---

## License

Personal portfolio — all rights reserved. Not a template for redistribution.

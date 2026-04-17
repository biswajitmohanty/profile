# Biswajit Mohanty — Portfolio Website

A production-ready personal portfolio for **Biswajit Mohanty**, Technical Lead & Full-Stack Architect with 10+ years of experience building enterprise systems at scale.

**Live demo:** [biswajitmohanty.dev](https://biswajitmohanty.dev) *(replace with your Vercel URL)*

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 + CSS custom properties |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Form handling | React Hook Form |
| Fonts | Inter (variable) + Fira Code (variable) |

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Full-screen intro with typewriter role animation, floating code card, and key stats |
| 2 | **About** | Bio, animated stat counters, and downloadable resume CTA |
| 3 | **Skills** | Bento-grid tech cards grouped by category (Frontend, Backend, Cloud, etc.) |
| 4 | **Experience** | Animated vertical timeline of 5 real positions across HCL, Sonata, Infosys, TCS, UST |
| 5 | **Projects** | Glassmorphism project cards with 3D tilt, tech stack badges, and detail modal |
| 6 | **Services** | Offerings grid — Full-Stack Dev, Cloud Architecture, Fractional CTO, etc. |
| 7 | **Testimonials** | Horizontal scroll carousel with client quotes |
| 8 | **Blog** | Bento-grid article cards with featured post and category filters |
| 9 | **Contact** | Contact info panel + validated message form |
| 10 | **Footer** | Social links, quick nav, availability badge |

---

## Features

- **Dark / Light mode** — system-aware default, persisted to localStorage, FOUC-free inline script
- **Custom animated cursor** with spotlight glow effect
- **Scroll progress indicator** at the top of the viewport
- **Typewriter animation** cycling through roles in the hero
- **Glassmorphism cards** using `backdrop-filter: blur` + CSS custom properties
- **Bento grid layouts** — asymmetric column spans in Skills and Blog sections
- **3D card tilt** on project cards (CSS `perspective` + `rotateX/Y` on mousemove)
- **IntersectionObserver** scroll-triggered reveal animations
- **Variable font rendering** — `font-variation-settings` tuned per heading level
- **Sticky navbar** with active-section highlight and mobile hamburger menu
- **React Hook Form** contact form with client-side validation
- **SEO** — `<title>`, `<meta>` description, Open Graph tags, JSON-LD structured data
- **Fully responsive** — tested from 320 px mobile to 4 K desktop

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Type-check
npm run build

# Lint
npm run lint
```

---

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### Contact Form — Email Provider

The form simulates submission by default. To enable real email delivery choose one of:

**Option A — EmailJS** (client-side, no backend needed)
1. Sign up at [emailjs.com](https://www.emailjs.com/) and create a service + template
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Replace the `onSubmit` stub in `components/sections/Contact.tsx` with the EmailJS `send()` call

**Option B — Formspree** (form backend)
1. Sign up at [formspree.io](https://formspree.io/) and create a form
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_id
   ```
3. Replace the stub `fetch` call in `Contact.tsx` with the Formspree endpoint

---

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, ThemeProvider, FOUC script
│   ├── page.tsx                # Page composition — imports + orders all 10 sections
│   └── globals.css             # Design tokens, dark/light vars, glass card, animations
├── components/
│   ├── ui/
│   │   ├── CustomCursor.tsx    # Canvas-based cursor with spotlight glow
│   │   ├── NavBar.tsx          # Sticky nav, section highlight, mobile menu, ThemeToggle
│   │   ├── ScrollProgress.tsx  # Thin progress bar fixed to top of viewport
│   │   ├── ThemeProvider.tsx   # React context — theme state + toggle, localStorage sync
│   │   └── ThemeToggle.tsx     # Sun/Moon icon button, reads from ThemeProvider context
│   └── sections/
│       ├── Hero.tsx            # Typewriter, code window, stats, CTA buttons
│       ├── About.tsx           # Bio, animated counters, resume download
│       ├── Skills.tsx          # Bento grid, category tabs
│       ├── Experience.tsx      # Vertical animated timeline
│       ├── Projects.tsx        # 3D tilt cards + detail modal
│       ├── Services.tsx        # Services offering grid
│       ├── Testimonials.tsx    # Horizontal carousel
│       ├── Blog.tsx            # Bento grid blog cards, featured post
│       ├── Contact.tsx         # Contact panel + React Hook Form
│       └── Footer.tsx          # Brand, nav links, social icons
├── data/
│   └── portfolio.ts            # Single source of truth for all content
├── hooks/
│   ├── useIntersectionObserver.ts  # Named export, threshold + rootMargin config
│   ├── useScrollProgress.ts        # Returns 0–1 scroll percentage
│   └── useTypewriter.ts            # Cycles words with configurable type/delete speed
└── utils/
    └── cn.ts                   # clsx + tailwind-merge helper
```

---

## Customising Content

All personal content lives in **`data/portfolio.ts`**. Edit this one file to update:

- `personalInfo` — name, title, email, LinkedIn, location, short bio
- `roles` — strings cycled in the typewriter
- `stats` — headline numbers shown in Hero and About
- `skills` — grouped tech cards with category, icon, and proficiency level
- `experiences` — array of positions (company, role, dates, bullets, tech tags)
- `projects` — project cards with links, tech stack, and featured flag
- `services` — offering tiles with descriptions and icons
- `testimonials` — client quotes with name, title, company, avatar initials
- `blogPosts` — article metadata (title, excerpt, tags, read time, date, color)

---

## Color Palette

| Token | Dark mode | Light mode |
|---|---|---|
| `--bg-primary` | `#0a0a1a` | `#f8fafc` |
| `--bg-secondary` | `#1a1a2e` | `#f1f5f9` |
| `--bg-card` | `#16213e` | `#ffffff` |
| `--text-primary` | `#ffffff` | `#0f172a` |
| `--text-secondary` | `#94a3b8` | `#475569` |
| `--accent` | `#00d4ff` | `#0284c7` |
| `--accent-purple` | `#7c3aed` | `#6d28d9` |

---

## Deployment

### Vercel (recommended)

```bash
npx vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new) — zero configuration required.

### Other platforms

Any platform that supports Node.js 18+ and can run `next build` works (Railway, Render, Netlify, etc.).

---

## Links

- GitHub: [github.com/biswajitmohanty](https://github.com/biswajitmohanty)
- LinkedIn: [linkedin.com/in/biswajit-mohanty](https://www.linkedin.com/in/biswajit-mohanty)
- Blog: [dev.to/biswajitmohanty](https://dev.to/biswajitmohanty)

---

## License

MIT

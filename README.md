# Biswajit Mohanty — Portfolio Website

A production-ready Next.js 14 portfolio website for **Biswajit Mohanty**, Technical Lead & Full-Stack Architect with 10+ years of experience.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form**: React Hook Form
- **Fonts**: Inter + Fira Code (Google Fonts)

## Features

- Custom animated cursor with spotlight effect
- Scroll progress indicator
- Hero section with typewriter animation
- About section with animated stat counters
- Skills bento grid with glassmorphism cards
- Animated vertical timeline for experience
- Project cards with 3D tilt effect and modal detail view
- Services grid with hover animations
- Testimonials horizontal carousel
- Contact form with validation
- Sticky navigation with active section highlighting
- Mobile hamburger menu
- SEO optimized with JSON-LD structured data
- Fully responsive design

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

### Contact Form

The contact form works out of the box (simulates submission). To enable real email delivery:

**Option A: EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a service and template
3. Set `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

**Option B: Formspree**
1. Sign up at [formspree.io](https://formspree.io/)
2. Create a form and get the endpoint
3. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT`

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, JSON-LD
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles, custom scrollbar, animations
├── components/
│   ├── ui/
│   │   ├── CustomCursor.tsx      # Animated cursor with spotlight
│   │   ├── NavBar.tsx            # Sticky nav with mobile hamburger
│   │   ├── ScrollProgress.tsx    # Top progress bar
│   │   └── ThemeToggle.tsx       # Theme toggle button
│   └── sections/
│       ├── Hero.tsx              # Hero with typewriter
│       ├── About.tsx             # About with stat counters
│       ├── Skills.tsx            # Bento grid tech stack
│       ├── Experience.tsx        # Animated timeline
│       ├── Projects.tsx          # Glassmorphism cards + modal
│       ├── Services.tsx          # Services grid
│       ├── Testimonials.tsx      # Horizontal carousel
│       ├── Contact.tsx           # Contact form
│       └── Footer.tsx            # Footer
├── data/
│   └── portfolio.ts        # All content data
├── hooks/
│   ├── useScrollProgress.ts
│   ├── useIntersectionObserver.ts
│   └── useTypewriter.ts
└── utils/
    └── cn.ts               # Class merging utility
```

## Color Palette

| Token | Value |
|-------|-------|
| bg-primary | `#0a0a1a` |
| bg-secondary | `#1a1a2e` |
| bg-card | `#16213e` |
| accent | `#00d4ff` |
| accent-purple | `#7c3aed` |

## Deployment

Deploy to [Vercel](https://vercel.com/) with zero configuration:

```bash
npx vercel
```

## License

MIT

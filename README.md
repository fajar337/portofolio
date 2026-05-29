# Fajar Mustofa Portfolio

Personal portfolio website for Fajar Mustofa, built with Next.js, Tailwind CSS, Framer Motion, MDX content, GitHub stats, and an optimized animated hero experience.

## Features

- Responsive portfolio homepage with animated hero, tech badges, bento services, and featured projects.
- About, projects, experience, blog, GitHub dashboard, and contact pages.
- MDX-powered blog posts.
- GitHub dashboard using GitHub API data.
- Contact form powered by Web3Forms.
- Performance optimizations for mobile, Safari, reduced motion, and delayed heavy client effects.

## Tech Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- Framer Motion
- Three.js / React Three Fiber
- MDX
- Web3Forms
- Netlify

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Required for GitHub dashboard:

```env
GITHUB_TOKEN=
GITHUB_USERNAME=fajar337
NEXT_PUBLIC_GITHUB_USERNAME=fajar337
```

Required for contact form:

```env
WEB3FORMS_ACCESS_KEY=
```

Get a free Web3Forms access key from `https://web3forms.com/`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Netlify Deployment

This project includes `netlify.toml`:

```toml
[build]
command = "npm run build"
publish = ".next"
```

Set these environment variables in Netlify:

- `GITHUB_TOKEN`
- `GITHUB_USERNAME`
- `NEXT_PUBLIC_GITHUB_USERNAME`
- `WEB3FORMS_ACCESS_KEY`

Deploy with Netlify CLI:

```bash
npx netlify deploy
```

Deploy to production:

```bash
npx netlify deploy --prod
```

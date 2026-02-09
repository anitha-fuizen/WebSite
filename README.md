# Personal Website (Next.js)

A professional, interactive personal website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Run locally

```bash
cd /home/anitha/personal-website
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Customize your content

Edit this single file:

- `src/data/profile.ts`

Update:
- **Name / headline / summary**
- **Email**
- **Social links (GitHub, LinkedIn)**
- **Skills**
- **Projects**
- **Experience**
- **Site URL** (used for SEO metadata)

## Folder structure (high level)

- `src/app/`: Next.js routes + layout
- `src/components/`: reusable UI building blocks (navbar, footer, buttons, etc.)
- `src/sections/`: page sections (Hero, About, Skills, Projects, Experience, Contact)
- `src/data/`: content (profile, projects, experience)
- `src/lib/`: shared utilities (e.g. `cn` for className merging)

## Build

```bash
npm run build
npm run start
```

## Deploy

This project works well on Vercel (or any Node hosting that supports Next.js).


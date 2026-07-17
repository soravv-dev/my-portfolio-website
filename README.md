# Saurabh Kumar — Luxury Portfolio

A premium, animated personal portfolio built with React 19 + Vite, Tailwind CSS, Framer Motion, and Lucide icons. Dark + cyan/blue theme inspired by the AI Resume Analyzer.

## Features

- **Hero** with full-screen video background (`public/videos/avatar-intro.mp4`) and gradient fallback
- **Navbar** — fixed, glassmorphism, transparent-to-solid on scroll, active-section highlighting, mobile hamburger
- **About / Skills / Projects / Experience / Education / Contact** sections with scroll-reveal animations
- **Certificates** — separate `/certificates` route, grid layout, click-to-open detail modal
- **Contact form** — React Hook Form + EmailJS (keys via env vars)
- **Dark / Light mode** toggle
- **SEO** via React Helmet Async
- **Loading animation** on first page load
- Fully responsive, mobile-first, accessible (ARIA labels, semantic HTML)

## Getting started

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` and add your EmailJS keys:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Until configured, the contact form simulates a successful send.

## Adding the hero video

Drop a file at `public/videos/avatar-intro.mp4` (MP4/H.264, ~1920x1080). Until then a gradient background is shown automatically.

## Editing content

- Projects: `src/data/projects.js` (projects 2–4 are dummy placeholders)
- Skills: `src/data/skills.js`
- Certificates: `src/data/certificates.js`
- Experience: `src/data/experience.js`
- Resume PDF: replace `public/resume.pdf`

## Tech stack

React 19, Vite, Tailwind CSS v3, Framer Motion, React Router DOM, Lucide React, EmailJS, React Hook Form, React Helmet Async.

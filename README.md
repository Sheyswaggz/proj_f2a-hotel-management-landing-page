# Grand Lumière Hotel — Landing Page

A visually appealing and professional landing page for a hotel management business, designed to showcase the hotel's services, amenities, and unique offerings. The page aims to attract potential guests and convey a sense of luxury, comfort, and reliability.

## Prerequisites

- Node.js 18+
- npm

## Setup

```bash
git clone <repository-url>
cd hotel-landing-page
npm install
npm run dev
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server with hot reload |
| `npm run build` | Build production-ready static files to `dist/` |
| `npm run preview` | Preview production build locally |

## Project Structure

```
hotel-landing-page/
├── index.html
├── styles/
│   ├── base.css
│   ├── components.css
│   └── animations.css
├── scripts/
│   ├── main.js
│   ├── animations.js
│   └── interactions.js
├── assets/
│   └── (images and other static assets)
├── package.json
└── vite.config.js
```

## Tech Stack

- **Build Tool:** Vite
- **Frontend:** Vanilla HTML/CSS/JavaScript
- **Images:** Unsplash (high-quality hotel photography)
- **Fonts:** Google Fonts (Playfair Display, Inter)
- **Icons:** Font Awesome 6.x

## Deployment

This project is configured for deployment to GitHub Pages via GitHub Actions. Pushing to the `main` branch will automatically trigger a build and deploy to GitHub Pages.

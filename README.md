# bulutklinik.github.io

Bulutklinik developer portal — a landing site for the official Bulutklinik API
SDKs. Built with **Astro 6** and **Tailwind CSS v4**, deployed to GitHub Pages.

Live: https://bulutklinik.github.io

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages (Pages source must be set to **GitHub Actions**).

To serve from a custom domain (e.g. `developer.bulutklinik.com`), add a
`public/CNAME` file with the domain and configure the DNS CNAME record.

## Stack

- [Astro](https://astro.build) 6
- [Tailwind CSS](https://tailwindcss.com) v4 (via `@tailwindcss/vite`)

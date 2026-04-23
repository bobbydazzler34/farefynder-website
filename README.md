# FareFynder Website

Basic FareFynder landing page built with React + Vite and deployable to GitHub Pages.

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start dev server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

## GitHub Pages deployment

This repo includes a workflow at `.github/workflows/deploy.yml` that deploys on push to `main`.

### One-time repo settings

1. Push this repo to GitHub.
2. In GitHub, open **Settings** -> **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

After that, each push to `main` will publish the site.

## Base path notes

- **Custom domain at site root** (e.g. [https://www.farefynder.com/](https://www.farefynder.com/)): use `base: "/"`. The deploy workflow sets `GH_PAGES_BASE=/` so assets load from `/assets/...`.
- **Project pages** (`https://<user>.github.io/<repo>/` without a custom domain): use `GH_PAGES_BASE=/<repo>/ npm run build` and the same value in CI if you deploy there instead.

Local production build matching CI:

```bash
GH_PAGES_BASE=/ npm run build
```

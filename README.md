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

- The workflow sets `GH_PAGES_BASE` automatically to `/<repo-name>/` for project pages.
- For a custom domain/user site, build locally with:

  ```bash
  GH_PAGES_BASE=/ npm run build
  ```

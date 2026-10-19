# COMP3104 Class Exercise 06 — Hosting a React SPA on GitHub Pages

A React single page app based on the Week 05 exercise and prepared to build and publish with GitHub Pages.

## Run locally

```powershell
npm install
npm start
```

## Build and deploy

```powershell
npm run build
npm run deploy
```

The `homepage` value in `package.json` is `https://ethanhakaj3515.github.io/comp3104`. After the workflow creates `gh-pages`, set GitHub Pages to serve that branch in repository settings. The workflow runs on pushes to `main`, `master`, and `dep-inclusions` and publishes the site with the `gh-pages` package.

## Required evidence to capture

- Successful GitHub Actions workflow run
- Live Pages site and the student information page
- Terminal command history
- Jenkins home page after installation

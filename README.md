# COMP3104 Lab 05 React SPA

A React single page app configured to build static files and publish them with GitHub Pages.

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

The `homepage` value in `package.json` is `.` so generated asset links remain relative when GitHub Pages serves the app from a repository path. After pushing `dep-inclusions` to a GitHub repository, enable GitHub Pages for the `gh-pages` branch in that repository's settings.
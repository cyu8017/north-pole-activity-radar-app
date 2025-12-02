# Deployment Guide

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Automatic Deployment

The site will automatically deploy when you push to the `main` branch. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. Build the production version
2. Deploy to GitHub Pages

## Manual Deployment Steps

If you want to deploy manually:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Select "GitHub Actions"

2. **Push your code** to the main branch:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Check deployment status**:
   - Go to Actions tab in GitHub
   - Monitor the deployment workflow

## Local Build

To test the production build locally:

```bash
npm run build
npm run preview
```

## Repository Configuration

- **Base Path**: `/north-pole-activity-radar-app/`
- **Build Output**: `dist/` folder
- **Deployment URL**: `https://cyu8017.github.io/north-pole-activity-radar-app/`

## Troubleshooting

- If assets don't load, verify the base path in `vite.config.js`
- Check GitHub Actions logs if deployment fails
- Ensure GitHub Pages is enabled in repository settings


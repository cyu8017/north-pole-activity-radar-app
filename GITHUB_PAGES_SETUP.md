# GitHub Pages Setup Guide

Follow these steps to deploy your North Pole Radar app to GitHub Pages.

## Step 1: Deploy to gh-pages Branch

First, build and deploy your site to create the `gh-pages` branch:

```bash
npm run deploy
```

This command will:
- Build your production site
- Create/update the `gh-pages` branch with the built files
- Push the branch to GitHub

## Step 2: Configure GitHub Pages

1. **Go to your repository on GitHub:**
   - Visit: https://github.com/cyu8017/north-pole-activity-radar-app

2. **Navigate to Settings:**
   - Click on the **Settings** tab (top menu of your repository)

3. **Open Pages settings:**
   - Scroll down to **Pages** in the left sidebar
   - Click on **Pages**

4. **Configure the source:**
   - Under **Source**, select **"Deploy from a branch"**
   - Under **Branch**:
     - Select: **`gh-pages`**
     - Select folder: **`/ (root)`**
   - Click **Save**

5. **Wait for deployment:**
   - GitHub will start deploying your site
   - You'll see a green checkmark when it's ready (usually takes 1-2 minutes)

## Step 3: Access Your Site

Once deployment is complete, your site will be available at:

**https://cyu8017.github.io/north-pole-activity-radar-app/**

You can find this URL in:
- Repository Settings → Pages section
- The repository homepage (if Pages is enabled, there's usually a link)

## Future Deployments

Every time you want to update your deployed site:

```bash
npm run deploy
```

This will rebuild and push the latest version to the `gh-pages` branch, and GitHub Pages will automatically update your live site.

## Troubleshooting

- **Site not loading?** Make sure the `gh-pages` branch exists and contains files
- **404 errors?** Verify the base path in `vite.config.js` matches your repository name
- **Assets not loading?** Check browser console for path errors
- **Still deploying?** Wait a few minutes and refresh the page


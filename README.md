# 🎄 North Pole Activity Radar App

A beautiful, interactive dashboard to track Santa's journey and countdown to Christmas.

## Features

- ⏰ Real-time Christmas countdown timer
- 🦌 Reindeer status tracking with charging levels
- 🏭 Elf Workshop progress monitoring
- 🎅 Santa Tracker (activates December 24th)
- ❄️ Animated snow effects and festive decorations
- 🎵 Optional Christmas music player
- 📱 Fully responsive design
- 🌙 Dark mode support

## 🚀 Deployment

This app is configured to deploy to GitHub Pages from a branch.

### Deploy to GitHub Pages

1. **Enable GitHub Pages** in your repository:
   - Go to **Settings** → **Pages**
   - Under **Source**, select **"Deploy from a branch"**
   - Select branch: **`gh-pages`**
   - Select folder: **`/ (root)`**
   - Click **Save**

2. **Deploy the site**:
   ```bash
   npm run deploy
   ```

   This will:
   - Build the production version
   - Create/update the `gh-pages` branch
   - Deploy to GitHub Pages

3. Your site will be available at: `https://cyu8017.github.io/north-pole-activity-radar-app/`

### Manual Build

To build locally:

```bash
npm install
npm run build
```

The production files will be in the `dist/` folder.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Preview production build
npm run build
npm run preview
```

## 📦 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Material UI** - Component library
- **Emotion** - CSS-in-JS styling

## 🎨 Design

Modern, Dribbble-inspired design with:
- Premium glassmorphism effects
- Sophisticated color gradients
- Smooth animations and transitions
- Custom typography (Inter & Space Grotesk)

## 📄 License

Private project - All rights reserved

---

Built with ❤️ for the holiday season


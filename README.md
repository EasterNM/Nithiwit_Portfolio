# Nithiwit Thienniem - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS 4.

## 🚀 Features

- **Modern Design**: Beautiful UI with glass morphism, gradients, and smooth animations
- **Bilingual Support**: Thai and English language switching
- **Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Smooth Scrolling**: Navigation with scroll spy highlighting
- **Animated Sections**: Intersection observer-based reveal animations
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite 7** - Build Tool
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Add `gh-pages` package: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Portfolio.tsx    # Main portfolio component
│   ├── App.tsx              # App entry
│   ├── index.css            # Global styles + Tailwind
│   └── main.tsx             # React entry
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json
```

## ✨ Sections

1. **Hero** - Introduction with animated background
2. **About** - Personal description and stats
3. **Experience** - Work history timeline
4. **Skills** - Technical skills and tools
5. **Education** - Academic background
6. **Contact** - Contact information

## 📝 Customization

1. Edit `src/components/Portfolio.tsx` to update:
   - Personal information
   - Work experience
   - Skills and tools
   - Education details
   - Contact information

2. Replace profile photo by adding image to `public/` and updating the hero section

3. Customize colors in `src/index.css`:
   ```css
   :root {
     --color-primary: #3b82f6;
     --color-secondary: #6366f1;
   }
   ```

## 📄 License

MIT © Nithiwit Thienniem
# Nithiwit_Portfolio

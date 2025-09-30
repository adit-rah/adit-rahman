# 🚀 Deployment Guide

## Quick Deployment to GitHub Pages

### 1. Configure Repository Settings

1. **Update repository name** in `vite.config.ts`:
   ```typescript
   base: '/your-repo-name/',
   ```

2. **Update personal information** in:
   - `src/pages/About.tsx` - Your background and skills
   - `src/pages/Resume.tsx` - Your work experience
   - `src/pages/Contact.tsx` - Your contact information
   - `src/content/projects.json` - Your projects
   - `package.json` - Author information

### 2. Deploy

```bash
# Build and deploy in one command
npm run deploy
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Set source to **Deploy from a branch**
4. Select branch: **gh-pages**
5. Select folder: **/ (root)**
6. Save

Your site will be available at: `https://yourusername.github.io/your-repo-name/`

## Alternative Deployment Options

### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Manual Build
```bash
npm run build
# Upload contents of 'dist' folder to your web server
```

## Environment Variables

No environment variables required for basic deployment.

For contact form functionality, integrate with:
- Formspree
- Netlify Forms
- Emailjs

## Performance Tips

- All assets are optimized for production
- Fonts are preloaded
- CSS is minimized and purged
- JavaScript is code-split

## Troubleshooting

### Blank page after deployment
- Check if `base` path in `vite.config.ts` matches your repository name
- Ensure GitHub Pages is configured correctly

### Fonts not loading
- Verify Google Fonts links in `index.html`
- Check if CDN is accessible

### Commands not working
- Check browser console for JavaScript errors
- Verify all files are uploaded correctly

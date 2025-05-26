# 🚀 Netlify Deployment Guide

This guide will help you deploy your portfolio to Netlify with optimal configuration.

## 📋 Prerequisites

- [Netlify account](https://netlify.com) (free tier is sufficient)
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 18+ installed locally

## 🛠️ Pre-deployment Setup

### 1. Build Configuration

The project is already configured for Netlify deployment with:

- ✅ `netlify.toml` configuration file
- ✅ Next.js static export setup
- ✅ Optimized build settings
- ✅ Security headers
- ✅ Cache optimization

### 2. Test Local Build

Before deploying, test the production build locally:

```bash
# Build the project
npm run build

# The output will be in the 'out' directory
ls out/
```

## 🌐 Deployment Methods

### Method 1: Git Integration (Recommended)

1. **Push to Git Repository**

   ```bash
   git add .
   git commit -m "feat: prepare for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**

   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "New site from Git"
   - Choose your Git provider (GitHub/GitLab/Bitbucket)
   - Select your portfolio repository

3. **Configure Build Settings**
   Netlify should auto-detect the settings from `netlify.toml`, but verify:

   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18`

4. **Deploy**
   - Click "Deploy site"
   - Netlify will assign a random subdomain (e.g., `amazing-portfolio-123456.netlify.app`)

### Method 2: Manual Deploy

1. **Build Locally**

   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**

   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login to Netlify
   netlify login

   # Deploy
   netlify deploy --prod --dir=out
   ```

3. **Or Drag & Drop**
   - Build the project locally
   - Go to Netlify Dashboard
   - Drag the `out` folder to the deploy area

## 🎯 Custom Domain Setup

### 1. Add Custom Domain

- In Netlify Dashboard → Site settings → Domain management
- Click "Add custom domain"
- Enter your domain (e.g., `aladdin.dev`)

### 2. Configure DNS

Point your domain to Netlify:

- **A Record**: `75.2.60.5`
- **AAAA Record**: `2600:1f14:e22:d200::1`
- Or use Netlify DNS for easier management

### 3. SSL Certificate

- Netlify automatically provisions SSL certificates
- Force HTTPS in Site settings → Domain management

## ⚡ Performance Optimizations

The project includes several optimizations:

### Build Optimizations

- Static export for faster loading
- Image optimization disabled for compatibility
- CSS and JS minification
- Tree shaking for smaller bundles

### Caching Headers

```toml
# Static assets cached for 1 year
[[headers]]
  for = "*.js"
  [headers.values]
    cache-control = "max-age=31536000"
```

### Security Headers

- XSS Protection
- Content Type Options
- Frame Options
- Referrer Policy

## 🔧 Environment Variables

If you need environment variables:

1. **In Netlify Dashboard**

   - Site settings → Environment variables
   - Add variables like:
     - `NEXT_PUBLIC_SITE_URL`
     - `NEXT_PUBLIC_ANALYTICS_ID`

2. **In Code**
   ```typescript
   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";
   ```

## 📊 Analytics & Monitoring

### Netlify Analytics

- Enable in Site settings → Analytics
- Track page views, unique visitors, bandwidth

### Google Analytics (Optional)

Add to `layout.tsx`:

```typescript
// Add Google Analytics script
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
  strategy="afterInteractive"
/>
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**

   ```bash
   # Check build locally first
   npm run build

   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **404 on Refresh**

   - Ensure `netlify.toml` has the redirect rule:

   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Images Not Loading**

   - Check image paths are relative
   - Ensure images are in `public/` directory
   - Verify `images.unoptimized: true` in `next.config.ts`

4. **Fonts Not Loading**
   - Google Fonts are loaded via Next.js font optimization
   - Check network tab for font loading issues

### Build Logs

Check Netlify build logs for detailed error information:

- Netlify Dashboard → Deploys → Click on failed deploy

## 🚀 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Images display properly
- [ ] Fonts load correctly
- [ ] Dark/light theme works
- [ ] Mobile responsive
- [ ] Contact form works (if applicable)
- [ ] Social links work
- [ ] SEO meta tags present
- [ ] Performance score good (Lighthouse)

## 📈 Performance Monitoring

### Lighthouse Scores

Target scores:

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

### Tools

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://webpagetest.org/)

## 🔄 Continuous Deployment

With Git integration:

- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback to previous versions easily

## 📞 Support

If you encounter issues:

1. Check [Netlify Documentation](https://docs.netlify.com/)
2. Review build logs in Netlify Dashboard
3. Test build locally first
4. Check [Netlify Community](https://community.netlify.com/)

---

**Happy Deploying! 🎉**

Your portfolio will be live at: `https://your-site-name.netlify.app`

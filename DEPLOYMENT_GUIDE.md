# Deployment Guide - Brothers Pest Control Website

## Quick Start (5 minutes)

### 1. Push to GitHub

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit: Brothers Pest Control website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/brothers-pest-control.git
git push -u origin main
```

### 2. Deploy with Vercel (Recommended)

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Deploy"**
3. Click **"Import Git Repository"**
4. Paste your GitHub URL: `https://github.com/YOUR-USERNAME/brothers-pest-control.git`
5. Click **"Import"**
6. Vercel auto-detects React setup
7. Click **"Deploy"**
8. ✅ Your site is live! Get a free `*.vercel.app` URL

**That's it!** Every time you push to GitHub, Vercel auto-updates your site.

---

## Alternative Deployment Options

### Netlify

1. Go to **[netlify.com](https://netlify.com)**
2. Click **"Deploy"** → **"Import an existing project"**
3. Select **"GitHub"**
4. Authorize Netlify
5. Select your `brothers-pest-control` repository
6. Click **"Deploy"**
7. ✅ Live on `your-site.netlify.app`

**Auto-deploy**: Every push to main automatically redeploys

### GitHub Pages (Free)

1. In your GitHub repo, go to **Settings** → **Pages**
2. Under "Source," select **main** branch
3. Click **"Save"**
4. Update `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/brothers-pest-control"
   ```
5. Build and push:
   ```bash
   npm run build
   git add .
   git commit -m "Build for GitHub Pages"
   git push origin main
   ```
6. ✅ Live on `yourusername.github.io/brothers-pest-control`

---

## Connect Custom Domain

### For Vercel/Netlify

**Vercel**:
1. Go to Project Settings → Domains
2. Enter your domain: `brotherspestcontrol.com`
3. Follow DNS instructions
4. Usually live in 15-30 minutes

**Netlify**:
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records
4. Live in 15-30 minutes

### DNS Records Setup

After deploying, update your domain registrar (GoDaddy, Namecheap, etc.):

**For Vercel:**
```
CNAME:  yourdomain.com  →  cname.vercel-dns.com
```

**For Netlify:**
```
CNAME:  yourdomain.com  →  your-site.netlify.app
```

---

## Environment Variables

If you add backend services later:

1. Create `.env.local` (Git ignores it):
   ```
   REACT_APP_API_URL=https://api.example.com
   REACT_APP_SECRET=your-secret-key
   ```

2. In **Vercel/Netlify Settings** → Environment Variables
   Add the same variables

3. Access in code:
   ```javascript
   const apiUrl = process.env.REACT_APP_API_URL;
   ```

---

## Updating Your Site

After deploying, updating is simple:

```bash
# Make changes to src/App.jsx or other files
git add .
git commit -m "Update services section"
git push origin main
```

**Vercel/Netlify automatically redeploys** within 1-2 minutes ✅

---

## Troubleshooting

### Build fails
- Check Node version: `node -v` (need v14+)
- Delete node_modules: `rm -rf node_modules`
- Reinstall: `npm install`

### Site shows old version
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 5 minutes for CDN to update

### Custom domain not working
- Wait 15-30 minutes for DNS propagation
- Check DNS records are correct
- Use online tool: [whatsmydns.net](https://whatsmydns.net)

### 404 errors
- For GitHub Pages, make sure `homepage` in `package.json` is correct
- Vercel/Netlify handle routing automatically

---

## Performance Tips

1. **Images**: Compress before adding
2. **Bundle size**: Check with `npm run build`
3. **SEO**: Already included in meta tags
4. **Analytics**: Add Google Analytics to `public/index.html`

---

## Security

- ✅ HTTPS auto-enabled on all platforms
- ✅ .env secrets never committed (in .gitignore)
- ✅ No sensitive data in code
- ✅ Dependencies auto-scanned for vulnerabilities

---

## Get Help

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **GitHub Pages**: https://pages.github.com
- **React Docs**: https://react.dev

---

**Questions?** Check the main README.md or create an issue on GitHub!

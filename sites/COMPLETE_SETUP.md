# ✅ Complete Setup: Brothers Pest Control LLC

## Overview
You have a new GitHub repo: `https://github.com/NonFikShun/brotherspestcontrolllc.git`

This guide will set everything up from scratch and deploy to GitHub Pages in **15 minutes**.

---

## 🚀 Quick Start (Follow These Steps in Order)

### Step 1: Clone Your Repository (2 minutes)

```bash
git clone https://github.com/NonFikShun/brotherspestcontrolllc.git
cd brotherspestcontrolllc
```

### Step 2: Create Folder Structure (1 minute)

```bash
mkdir src
mkdir public
```

Your project should now look like:
```
brotherspestcontrolllc/
├── src/
├── public/
└── (other files if any)
```

### Step 3: Download All Files (1 minute)

Download these files from the outputs and add them to your project:

**`src/` folder:**
- App.jsx
- App.css
- index.js
- index.css

**`public/` folder:**
- index.html
- manifest.json

**Root folder (brotherspestcontrolllc/):**
- package.json
- tailwind.config.js
- postcss.config.js
- .gitignore
- .env.example
- .prettierrc
- .nojekyll

### Step 4: Install Dependencies (3-5 minutes)

```bash
npm install
```

Wait for it to finish. You should see: `added XXX packages`

### Step 5: Build the Project (2-3 minutes)

```bash
npm run build
```

You should see:
```
The build folder is ready to be deployed.
```

### Step 6: Configure Git & Commit (1 minute)

```bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"

git add .
git commit -m "Initial commit: Brothers Pest Control LLC website"
git push origin main
```

### Step 7: Enable GitHub Pages (1 minute)

1. Go to your GitHub repo settings:
   ```
   https://github.com/NonFikShun/brotherspestcontrolllc/settings/pages
   ```

2. Under "Source" select:
   - **Branch:** main
   - **Folder:** /build
   
3. Click **"Save"**

### Step 8: Visit Your Live Site (2-3 minutes)

Wait 2-3 minutes for GitHub Pages to build, then visit:

```
https://nonfiktshun.github.io/brotherspestcontrolllc/
```

**✅ YOUR WEBSITE IS LIVE!** 🎉

---

## 📋 File Checklist

Make sure you have these files in the right places:

```
brotherspestcontrolllc/
├── src/
│   ├── App.jsx ✅
│   ├── App.css ✅
│   ├── index.js ✅
│   └── index.css ✅
├── public/
│   ├── index.html ✅
│   └── manifest.json ✅
├── package.json ✅
├── tailwind.config.js ✅
├── postcss.config.js ✅
├── .gitignore ✅
├── .env.example ✅
├── .prettierrc ✅
└── .nojekyll ✅
```

---

## 🔄 Making Updates

Every time you want to update your website:

```bash
# Edit your files (src/App.jsx, etc.)

# Rebuild
npm run build

# Commit and push
git add .
git commit -m "Update website"
git push origin main
```

GitHub Pages auto-updates in **1-2 minutes**! ✅

---

## ❌ Troubleshooting

### "npm: command not found"
→ Install Node.js from https://nodejs.org (get LTS version)
→ Restart your computer after installing

### "react-scripts is not recognized"
→ Run: `npm install` again
→ Make sure it completes without errors

### Build fails with "index.html" error
→ Check that `public/` folder exists
→ Check that `public/index.html` is in the right place

### Site shows README instead of website
→ Create `.nojekyll` file in root folder (empty file)
→ Push to GitHub: `git add . && git commit -m "Add .nojekyll" && git push origin main`

### Old version still showing
→ Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
→ Clear browser cache
→ Wait 5 minutes for CDN to update

---

## 💡 Your Website URL

Once deployed, your site will be at:
```
https://nonfiktshun.github.io/brotherspestcontrolllc/
```

**Share this link with anyone who wants to see your website!**

---

## 🎨 Customization

To change content, edit `src/App.jsx`:

- **Phone number**: Replace `8032002033`
- **Email**: Replace `office@brotherspestcontrol.net`
- **Company name**: Replace "Brothers Pest Control"
- **Colors**: Replace emerald green hex codes
- **Services/Locations**: Update the arrays in the component

Then rebuild and push:
```bash
npm run build
git add . && git commit -m "Update content" && git push origin main
```

---

## ✅ You're All Set!

Your website is ready to go live. Follow the steps above and you'll have a professional pest control website live on GitHub Pages in minutes!

**Questions?** Check each step carefully and make sure files are in the right folders.

**Let's go!** 🚀

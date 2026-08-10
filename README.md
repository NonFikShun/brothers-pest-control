# Brothers Pest Control Website

Professional website for Brothers Pest Control - providing honest, reliable, and effective pest control services in Georgia and South Carolina.

## Features

- 🎯 Responsive design (mobile-friendly)
- 🎨 Modern, professional UI with emerald green branding
- 📱 Mobile navigation menu
- 🗺️ Service areas map and location listing
- 💬 Testimonials section
- 📞 Easy contact options (phone, email)
- ⭐ 10% Military & First Responder discount badge
- ♿ Accessibility-friendly

## Tech Stack

- **React** 18.2.0 - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Scripts** - Build and development tools

## Project Structure

```
brothers-pest-control/
├── public/
│   ├── index.html          # Main HTML template
│   └── favicon.ico         # Website icon
├── src/
│   ├── App.jsx             # Main application component
│   ├── App.css             # Component styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── .gitignore              # Git ignore rules
├── README.md               # This file
└── tailwind.config.js      # Tailwind configuration
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/brothers-pest-control.git
   cd brothers-pest-control
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   Creates optimized production build in the `build/` folder

## Deployment

### Option 1: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click "Deploy"
3. Connect your GitHub repository
4. Select this project and click "Deploy"
5. Your site will be live automatically

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Deploy"
3. Connect GitHub
4. Select repository and deploy
5. Get a free `.netlify.app` domain

### Option 3: GitHub Pages
1. Update `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/brothers-pest-control"
   ```
2. Run:
   ```bash
   npm run build
   git add .
   git commit -m "Build for deployment"
   git push origin main
   ```
3. Go to repository Settings > Pages
4. Select `main` branch as source

## Customization

### Update Company Information
Edit `src/App.jsx` and update:
- Phone number: `(803) 200-2033`
- Email: `office@brotherspestcontrol.net`
- Service locations
- Testimonials
- Services list

### Change Colors
Edit `src/App.jsx` and replace emerald green (`#059669`, `#10b981`, etc.) with your brand color

### Add Images
1. Place images in `public/` folder
2. Reference in `src/App.jsx`:
   ```jsx
   <img src={`${process.env.PUBLIC_URL}/image-name.jpg`} alt="Description" />
   ```

### Add Navigation Links
Update the navigation in the header to link to additional pages

## Contact Information

- **Phone**: (803) 200-2033
- **Email**: office@brotherspestcontrol.net
- **Service Areas**: Aiken, Martinez, Thomson, Graniteville, Evans, Grovetown, North Augusta, Hephzibah, Augusta, SC

## License

© 2026 Brothers Pest Control. All rights reserved.

## Support

For questions or issues:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Contact the development team

---

**Built with ❤️ by Claude**

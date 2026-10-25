# Shubhi Tripathi — Developer Portfolio

A modern, high-performance personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed specifically for recruiters, hiring managers, and professional sharing across LinkedIn, GitHub, Naukri, and resume applications.

---

## 🚀 Quick Start

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally (Development)
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
This will compile and bundle the site into the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🛠️ How to Update Your Information

All content in this portfolio is managed from a single centralized file:
📂 **`src/data/portfolio.ts`**

You do **not** need to touch any UI components to update your information.

### What You Can Update in `src/data/portfolio.ts`:
- **Personal Info**: Name, headline, sub-headline, email, phone, location, LinkedIn URL, GitHub URL, live portfolio website URL.
- **About Me**: Professional summary paragraph and key highlight bullets.
- **Experience**: Add new roles, update company details, dates, responsibilities, and tech stack tags.
- **Skills**: Add or modify categories and skill tags.
- **Projects**: Add new projects with title, description, features list, technologies, GitHub repository link, and live demo link.
- **Education & Certifications**: Add degrees, institutions, CGPA, graduation years, and professional certifications.

### How to Update Your Resume PDF:
1. Save your latest resume PDF as `Shubhi_Tripathi_Resume.pdf`.
2. Copy it into the `public/` folder, replacing the existing file:
   ```
   public/Shubhi_Tripathi_Resume.pdf
   ```
3. Both the "View Resume" and "Download PDF" buttons will automatically serve the updated resume.

---

## 🚢 Deployment Guide

### Option A: Deploy with Vercel (Recommended — Free & 1-Click)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Developer portfolio"
   git branch -M main
   git remote add origin https://github.com/ShubhiTripathi14/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** -> **"Project"**.
4. Import your `portfolio` repository.
5. Vercel automatically detects **Vite** as the framework. Keep default build settings (`npm run build`, output folder: `dist`).
6. Click **Deploy**. Your portfolio will be live with a secure HTTPS URL (e.g., `https://shubhitripathi.vercel.app`) in under a minute!

### Option B: Deploy with Netlify (Free)
1. Push your repository to GitHub.
2. Sign in to [Netlify](https://www.netlify.com).
3. Click **"Add new site"** -> **"Import an existing project"**.
4. Select GitHub and choose your portfolio repo.
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**.

### Option C: GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `vite.config.ts`, set the base path:
   ```ts
   export default defineConfig({
     base: '/portfolio/', // Replace with your repo name
     plugins: [react(), tailwindcss()],
   })
   ```
3. In `package.json`, add deploy scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.

---

## 🌐 Connecting a Custom Domain (Optional)
If you purchase a custom domain (e.g., `shubhitripathi.dev` or `shubhitripathi.com`):
1. In Vercel or Netlify, go to **Settings** -> **Domains**.
2. Enter your custom domain name.
3. Configure the DNS records (CNAME and A records) in your domain registrar as shown on your hosting dashboard.
4. HTTPS SSL certificates are provisioned automatically.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg               # Browser favicon
│   ├── og-image.png              # OpenGraph social share card
│   └── Shubhi_Tripathi_Resume.pdf# Resume PDF for viewing/download
├── src/
│   ├── components/
│   │   ├── About.tsx             # Professional bio & quick info
│   │   ├── BrandIcons.tsx        # GitHub & LinkedIn SVG icons
│   │   ├── Contact.tsx           # Contact methods & links
│   │   ├── Education.tsx         # MCA degree & certifications
│   │   ├── Experience.tsx        # LTIMindtree experience timeline
│   │   ├── Footer.tsx            # Footer & social links
│   │   ├── Hero.tsx              # Landing banner & CTA buttons
│   │   ├── Navbar.tsx            # Responsive floating navigation
│   │   ├── Projects.tsx          # Featured projects (JobFinder, WiZone)
│   │   ├── Resume.tsx            # Dedicated resume preview/download
│   │   └── Skills.tsx            # Categorized skills grid
│   ├── data/
│   │   └── portfolio.ts          # ⭐ Centralized portfolio data
│   ├── hooks/
│   │   └── useInView.ts          # Scroll animation observer hook
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Design tokens & animations
│   └── main.tsx                  # Application entry point
├── index.html                    # SEO & OpenGraph meta tags
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🔒 Confidentiality & Fact Verification
This portfolio strictly adheres to factual preservation:
- All experience, project details, skills, and educational qualifications are sourced directly from Shubhi Tripathi's verified resume.
- No proprietary client data or confidential project internals are disclosed.
- Design avoids arbitrary rating bars, fabricated metrics, or generic placeholder testimonials.

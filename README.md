# TKH TECH Inc. - Next.js Website

A modern, responsive website for TKH TECH Inc., a software development company specializing in innovative digital solutions.

## 🚀 Features

- **Next.js 14** with TypeScript for optimal performance and developer experience
- **Tailwind CSS** for modern, utility-first styling
- **Framer Motion** for smooth animations and interactions
- **Responsive Design** that works perfectly on all devices
- **SEO Optimized** with Next.js Head component and meta tags
- **Image Optimization** using Next.js Image component
- **Modern UI/UX** with gradient effects and hover animations
- **Contact Form** for client inquiries
- **Portfolio Showcase** with filtering capabilities

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Heroicons
- **Image Optimization:** Next.js Image
- **Deployment Ready:** Vercel, Netlify, or any hosting platform

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tkhtech-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   └── Contact.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── public/
│   ├── portfolio/
│   ├── team/
│   ├── testimonials/
│   └── [other assets]
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- **Primary:** Blue tones (#3498db)
- **Secondary:** Gray tones (#2c3e50)
- **Accent:** Light blue variants

### Content
Update the content in the respective component files:
- **Hero Section:** `components/sections/Hero.tsx`
- **About Section:** `components/sections/About.tsx`
- **Services:** `components/sections/Services.tsx`
- **Portfolio:** `components/sections/Portfolio.tsx`
- **Contact Info:** `components/sections/Contact.tsx`

### Images
Replace images in the `public/` directory with your own assets.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with every push

### Other Platforms
```bash
npm run build
npm run start
```

## 📧 Contact Form

The contact form is ready for integration with:
- **Netlify Forms**
- **Formspree**
- **EmailJS**
- **Custom API endpoints**

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🎯 Performance

- **Lighthouse Score:** 95+ across all metrics
- **Core Web Vitals:** Optimized
- **Image Optimization:** Next.js Image component
- **Bundle Size:** Optimized with tree-shaking

## 📄 License

This project is proprietary software owned by TKH TECH Inc.

## 🤝 Support

For support, email hello@tkhtech.com or visit our website.

---

Built with ❤️ by TKH TECH Inc.

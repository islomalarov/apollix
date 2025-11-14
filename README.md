# Apollix Energy Technology - EV Charging Solutions

A modern, premium Next.js 16 + React 19 website for Apollix Energy Technology, showcasing innovative EV charging infrastructure solutions for Uzbekistan.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (package manager)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Available Scripts

```bash
pnpm dev       # Start development server (with hot reload)
pnpm build     # Create optimized production build
pnpm start     # Start production server
pnpm lint      # Run ESLint code quality checks
```

## 🏗️ Project Structure

```
apollix/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page (main entry)
│   └── globals.css          # Global styles & animations
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx       # Button with variants
│   │   └── card.tsx         # Card component
│   └── sections/            # Page sections
│       ├── navigation.tsx   # Navigation bar
│       ├── hero.tsx         # Hero section
│       ├── services.tsx     # Services grid
│       ├── stats.tsx        # Statistics
│       ├── network.tsx      # Network infrastructure
│       ├── contact.tsx      # Contact form
│       ├── cta.tsx          # Call-to-action
│       ├── footer.tsx       # Footer
│       └── index.ts         # Exports
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🎨 Features

✨ **Modern Design**

- Premium dark/light theme with OKLCH color space
- Smooth animations and transitions
- Responsive mobile-first layout

🔧 **Component Architecture**

- Refactored to functional, reusable components
- Clear separation of concerns
- Easy to test and maintain

📧 **Contact Form**

- Full form validation
- Success/error status messages
- Accessible form inputs

🎯 **Performance**

- Next.js 16 with Turbopack for fast builds
- Static site generation (SSG)
- Optimized CSS with Tailwind v4

📱 **Responsive**

- Mobile, tablet, and desktop optimized
- Hamburger menu for mobile navigation
- Flexible grid layouts

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Icons**: lucide-react
- **Animation**: Custom CSS + Tailwind utilities
- **Package Manager**: pnpm

## 📚 Documentation

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed architecture documentation.

See [.github/copilot-instructions.md](./.github/copilot-instructions.md) for AI agent guidelines.

## 🚢 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will auto-deploy on each push

### Manual Deployment

```bash
# Build production bundle
pnpm build

# Start production server
pnpm start
```

## 📞 Contact

- **Email**: hello@apollix.uz
- **Phone**: +998 (71) 200-00-00
- **Location**: Tashkent, Uzbekistan

## 📄 License

This project is private and proprietary to Apollix Energy Technology.

---

**Version**: 2.1  
**Last Updated**: November 14, 2025

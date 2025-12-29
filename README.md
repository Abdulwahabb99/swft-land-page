# swft Landing Page

A modern, pixel-perfect landing page for swft - Your Cashflow, Optimized. Built with Next.js, Tailwind CSS, and featuring a beautiful glassmorphism design.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
swft-landing-page/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Main landing page
│   └── globals.css        # Global styles and Tailwind
├── components/
│   ├── Header.js          # Top navigation (logo + login)
│   └── Hero.js            # Main hero section with card
├── data/
│   └── assets.js          # Asset path configuration
├── public/
│   └── assets/           # All image/logo assets
│       ├── swft-logo.svg
│       ├── banque-misr-logo.svg
│       ├── central-bank-logo.svg
│       └── banknbox-logo.svg
└── package.json
```

## 🎨 Design Specifications

### Colors

- **Primary Gradient (CTA Button)**: `#7E47FF` → `#4A10D0`
- **Background**: Deep dark purple/black (`#0a0a1a` base)
- **Text**: White (`#ffffff`)
- **Input Placeholder**: Gray (`#6b7280`)

### Key Design Elements

- **Glassmorphism Card**: Semi-transparent with backdrop blur
- **Gradient Background**: Dark purple with abstract blob shapes
- **Responsive**: Desktop-first, mobile-friendly stacking

## 🔄 Replacing Assets

All assets are easily replaceable:

1. **Replace logo files** in `/public/assets/`:
   - `swft-logo.svg` - Main logo (top-left)
   - `banque-misr-logo.svg` - Partner logo
   - `central-bank-logo.svg` - Partner logo
   - `banknbox-logo.svg` - Partner logo

2. **Update asset paths** in `/data/assets.js` if you change filenames:
```javascript
export const assets = {
  logo: '/assets/swft-logo.svg',
  banqueMisr: '/assets/banque-misr-logo.svg',
  centralBank: '/assets/central-bank-logo.svg',
  banknbox: '/assets/banknbox-logo.svg',
}
```

3. **Recommended asset sizes**:
   - Main logo: 32x32px (SVG recommended)
   - Partner logos: ~120x40px (maintain aspect ratio)

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **JavaScript** (no TypeScript)

## 📝 Notes

- All dummy assets are placeholder SVGs that can be easily replaced
- The design is optimized for desktop (1200-1440px) but responsive for mobile
- Glassmorphism effects use CSS backdrop-filter
- Gradient button uses exact colors: `#7E47FF` → `#4A10D0`

## 🎯 Features

- ✅ Pixel-perfect design matching screenshot
- ✅ Glassmorphism card with backdrop blur
- ✅ Gradient CTA button with exact colors
- ✅ Responsive layout
- ✅ Easy asset replacement system
- ✅ Clean component structure
- ✅ Semantic HTML

## 📄 License

This project is private and proprietary.


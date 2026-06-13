# Aresha Real Estate Website

A premium, modern real estate website built with Next.js 14 and Tailwind CSS, deployable on Vercel.

## Features

- **Modern Design**: Clean, professional UI with gold and emerald accent colors
- **Responsive**: Fully responsive across all devices
- **WhatsApp Integration**: Direct contact via WhatsApp
- **Property Listings**: Featured properties with detailed information
- **Team Section**: Meet the team members
- **Contact Form**: Easy inquiry submission
- **SEO Optimized**: Meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   ├── PropertiesSection.tsx
│   │   ├── PropertyCard.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── NeighborhoodsSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── data.ts         # Property and content data
├── public/
├── vercel.json             # Vercel configuration
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Contact

- **Phone**: +971 50 123 4567
- **Email**: info@aresharealestate.com
- **Address**: Office 1965, Tamani Arts Offices, Business Bay, Dubai, U.A.E

## License

Private - All rights reserved
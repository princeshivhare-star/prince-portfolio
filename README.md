# Prince Shivhare | App Developer Portfolio

A modern, dark-themed portfolio website for Prince Shivhare — App Developer & Full Stack Developer.

## ✨ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
prince-portfolio/
├── app/
│   ├── globals.css       # Global styles, glass morphism, animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx        # Fixed navigation with mobile menu
│   ├── Hero.tsx          # Hero section with code card
│   ├── About.tsx         # About section with highlights
│   ├── Skills.tsx        # Skill bars + tech tag cloud
│   ├── Projects.tsx      # Real live projects
│   ├── AppSamples.tsx    # Mobile app concept designs
│   ├── Services.tsx      # Services offered
│   ├── Contact.tsx       # Contact CTA
│   └── Footer.tsx        # Footer with links
├── public/               # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── vercel.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/prince-portfolio.git

# Navigate into the project
cd prince-portfolio

# Install dependencies
npm install
```

### Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (follow prompts)
vercel

# Or deploy to production directly
vercel --prod
```

### Option 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your GitHub repository
4. Vercel auto-detects Next.js — click **"Deploy"**
5. Your site is live in ~60 seconds 🎉

### Option 3: One-click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🎨 Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen hero with code editor card and floating tech badges |
| **About** | Bio, highlights, and quick facts |
| **Skills** | Animated skill bars grouped by category + tag cloud |
| **Projects** | 3 live deployed projects with browser mockup cards |
| **App Samples** | 5 mobile app concept designs with phone frame mockups |
| **Services** | 7 service cards with icons and tech tags |
| **Contact** | CTA section with LinkedIn and email links |

## 🔗 Links

- **LinkedIn**: https://www.linkedin.com/in/prince-shivhare-/
- **Web Portfolio**: https://prince-web-dev-portfolio.vercel.app

## 📄 License

MIT — free to use and customize.

# Mkhonjana Foundation Website

A clean, mobile-first NGO website for the **Mkhonjana Foundation**, built with a rural-rooted and dignified tone. The site focuses on community-led development in the Mkhonjana region.

## Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **CMS**: Markdown-based News system
- **Design**: Mobile-first, professional, and rural-rooted aesthetics

## Pages

- **Home**: Hero, What We Do, Trust & Accountability sections.
- **About Us**: Foundation story and accountability standards.
- **Our Work**: Detailed breakdown of the 5 pillars of impact.
- **Get Involved**: Paths for volunteering, partnering, and donating.
- **News**: Markdown-driven updates and impact stories.
- **Donate**: EFT instructions and transparency statement.
- **Contact**: Physical location and contact form UI.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/mkhonjanafoundation.git
   cd mkhonjanafoundation
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

To verify the production build locally:
```bash
npm run build
npm run start
```

## Deployment to Vercel

The easiest way to deploy this site is via [Vercel](https://vercel.com/):

1. Push your code to a GitHub repository.
2. Log in to Vercel and click **"New Project"**.
3. Import the `mkhonjanafoundation` repository.
4. Click **Deploy**. Vercel will automatically handle the build process.

## Content Management (News)

To add new news stories:
1. Create a new `.md` file in `src/content/news/`.
2. Follow the frontmatter format (title, date, excerpt, tags).
3. Push to main; Vercel will trigger a redeploy with the new content.

---
© 2026 Mkhonjana Foundation. Built with dignity.

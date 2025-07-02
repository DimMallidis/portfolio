# 🚀 Dimitrios Mallidis - Portfolio

A modern, responsive portfolio website showcasing my journey as a Software Engineering student and developer. Built with Next.js, TypeScript, and styled with Tailwind CSS.

![Portfolio Preview](./public/profile.jpg)

## ✨ Features

- **🎨 Modern Design**: Clean, minimalist interface with cyan color scheme
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🌟 Smooth Animations**: Elegant transitions and hover effects
- **⚡ Fast Performance**: Built with Next.js 15 and optimized for speed
- **🔍 SEO Optimized**: Proper meta tags and semantic HTML structure
- **♿ Accessible**: ARIA labels and keyboard navigation support
- **🛡️ Bot Protection**: Email obfuscation to prevent spam

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Custom SVG icons and Lucide React
- **Fonts**: Montserrat, Geist Sans & Geist Mono
- **Deployment**: [Vercel](https://vercel.com/)

## 📄 Pages

### 🏠 Home
- Personal introduction with animated profile picture
- Smooth fade-in animations for all elements
- Direct links to GitHub and LinkedIn profiles

### 👨‍💻 About
- Educational background and achievements
- Skills and technologies
- Downloadable CV
- Personal interests and hobbies

### 📝 Blog
- Clean, minimalist blog layout
- Ready for future content
- Responsive design for all devices

### 💼 Projects
- Showcase of development projects
- Detailed project descriptions
- Links to live demos and source code

### 📧 Contact
- Contact information with obfuscated email
- Social media links
- Professional contact card design
- Interactive elements with hover effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DimMallidis/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg           # Profile picture
│   ├── dimitrios_mallidis_cv.pdf  # Downloadable CV
│   └── [icons]              # SVG icons
├── src/
│   ├── app/
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog page
│   │   ├── contact/         # Contact page
│   │   ├── projects/        # Projects page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── HomeContent.tsx  # Home page content
│   │   ├── PageWrapper.tsx  # Page wrapper with transitions
│   │   └── Sidebar.tsx      # Navigation sidebar
│   └── lib/
│       └── constants.ts     # App constants
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Design Features

- **Color Scheme**: Professional cyan and dark theme
- **Typography**: Montserrat for headings, system fonts for body text
- **Layout**: Responsive grid system with mobile-first approach
- **Animations**: Smooth transitions and hover effects
- **Icons**: Custom SVG icons with consistent styling

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  cyan: {
    100: '#e0f7fa',
    200: '#b2ebf2',
    // ... more colors
  }
}
```

### Content
- Update personal information in each page component
- Replace profile picture in `/public/profile.jpg`
- Update CV file in `/public/dimitrios_mallidis_cv.pdf`

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push to main branch

### Other Platforms

The portfolio can be deployed on any platform that supports Next.js:
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimal JavaScript for fast loading

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Dimitrios Mallidis**
- 🌐 Portfolio: [Your Portfolio URL]
- 💼 LinkedIn: [dimitrios-mallidis-027905306](https://www.linkedin.com/in/dimitrios-mallidis-027905306/)
- 🐱 GitHub: [DimMallidis](https://github.com/DimMallidis)
- 📧 Email: [Contact through portfolio]

---

<div align="center">
  <p>Built with ❤️ by Dimitrios Mallidis</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>

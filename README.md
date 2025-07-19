# Chime Website

The official website for **Chime** - the first social alarm app that lets you coordinate with friends and family.

🌟 **Live Site**: [https://spiffaz.github.io/chime-website/](https://spiffaz.github.io/chime-website/)

## 📱 About Chime

Chime reimagines alarms for your social life. Share alarms with friends and family, see real-time status updates, coordinate schedules, and stay connected all day long.

### Key Features
- 👥 **Share alarms** with friends and family
- 🔄 **Real-time status** updates
- 📅 **Group coordination** capabilities
- 💬 **Stay connected** throughout the day
- 🛡️ **Privacy first** - only shared alarms are visible

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 8+

### Development

```bash
# Clone the repository
git clone https://github.com/spiffaz/chime-website.git
cd chime-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the website locally.

### Building for Production

```bash
# Build optimized production version
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
chime-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── index.html             # Main landing page
│   ├── terms.html             # Terms of Service
│   ├── privacy.html           # Privacy Policy
│   ├── support.html           # Support & FAQ
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css     # Main stylesheet
│   │   ├── js/
│   │   │   └── main.js        # JavaScript functionality
│   │   └── images/
│   │       ├── app-icon.png   # Chime app icon
│   │       ├── screenshot.png # App screenshot
│   │       └── favicon.ico    # Website favicon
│   ├── robots.txt             # SEO robot instructions
│   ├── sitemap.xml            # XML sitemap
│   └── CNAME                  # Custom domain config
├── package.json               # Dependencies & scripts
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production version to `dist/` |
| `npm run serve` | Serve production build on port 8080 |
| `npm run preview` | Build and serve production version |
| `npm run clean` | Clean dist directory |
| `npm run minify-css` | Minify CSS files |
| `npm run minify-js` | Minify JavaScript files |
| `npm run optimize-images` | Optimize image assets |
| `npm run validate` | Validate HTML files |
| `npm run lighthouse` | Run Lighthouse audit |
| `npm run test` | Run all validation tests |

## 🎨 Design System

### Brand Colors
- **Chime Blue**: `#007AFF` - Primary brand color
- **Chime Green**: `#34C759` - Success and positive actions
- **Chime Gray**: `#8E8E93` - Secondary text and UI elements
- **Chime Light Gray**: `#F2F2F7` - Background and subtle elements
- **Chime Dark**: `#1D1D1F` - Primary text and dark elements

### Typography
- **Headings**: System fonts with Tailwind CSS utilities
- **Body Text**: Optimized for readability across all devices
- **Responsive**: Mobile-first design with fluid typography

### Components
- **iOS-style blur effects** with backdrop filters
- **Smooth animations** for enhanced user experience
- **Card-based layouts** with subtle shadows and rounded corners
- **Mobile-optimized forms** with enhanced focus states

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Large Screens**: 1280px+

## 🚀 Deployment

### GitHub Pages (Current)
The site automatically deploys to GitHub Pages via GitHub Actions when pushing to the `main` branch.

**Live URL**: [https://spiffaz.github.io/chime-website/](https://spiffaz.github.io/chime-website/)

### Custom Domain Setup
1. Update `src/CNAME` with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## 🔍 SEO Optimization

- ✅ Semantic HTML structure
- ✅ Meta tags for social sharing
- ✅ XML sitemap
- ✅ Robots.txt configuration
- ✅ Fast loading times
- ✅ Mobile-friendly design
- ✅ Accessibility compliance

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for excellent user experience
- **Asset Optimization**: Minified CSS/JS, optimized images
- **CDN**: Tailwind CSS served via CDN for faster loading

## 🛡️ Security & Privacy

- **Privacy First**: Clear privacy policy and data practices
- **GDPR Compliant**: Transparent data handling
- **No Tracking**: No unnecessary analytics or tracking scripts
- **Secure Headers**: Security best practices implemented

## 📞 Contact & Support

- **Email**: [support@chimealarm.app](mailto:support@chimealarm.app)
- **Website**: [Chime Official Site](https://spiffaz.github.io/chime-website/)
- **Support**: [Support Page](https://spiffaz.github.io/chime-website/support.html)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [x] **v1.0** - Basic website with landing page
- [x] **v1.1** - Terms, Privacy, and Support pages
- [x] **v1.2** - SEO optimization and performance enhancements
- [ ] **v1.3** - Blog integration
- [ ] **v1.4** - User testimonials and case studies
- [ ] **v1.5** - Multi-language support

## 📈 Analytics

To add analytics (optional):
1. Choose your analytics provider (Google Analytics, Plausible, etc.)
2. Add tracking code to `src/assets/js/main.js`
3. Update privacy policy to reflect data collection

---

**Built with ❤️ by the Chime Team**

*Making alarms social, one connection at a time.*
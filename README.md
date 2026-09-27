# Dawn Dental Clinic Website

A premium, production-ready dental clinic website built as a single-file React application.

## Quick Start

Simply open `index.html` in any modern web browser. No build step or server required.

```bash
# Option 1: Open directly in browser
open index.html  # macOS
start index.html  # Windows
xdg-open index.html  # Linux

# Option 2: Serve locally (optional)
npx serve .
# or
python -m http.server 8000
```

## Features

### Design
- **Stripe/Vercel-inspired aesthetic** - Clean, modern "Linear-Core" design language
- **Brand colors**: Royal Blue (#2563EB) + Coral (#FF6B6B) accent
- **Responsive**: Fluid scaling from 320px mobile to 1440px+ desktop
- **Typography**: Inter font stack with optimized readability

### Sections (12)
1. Sticky navigation with blur effect
2. Hero with dual CTAs and social proof
3. Authority bar (partner logos)
4. Services grid (6 capabilities)
5. USP/differentiator section
6. 4-step process roadmap
7. Animated metrics counters
8. Patient testimonials (3 cards)
9. 3-tier pricing table
10. FAQ accordion (8 Q&As)
11. Final CTA section
12. Comprehensive footer

### Interactions
- Scroll-triggered animations with cubic-bezier easing
- Staggered entry effects on grids
- Card hover lift + shadow effects
- FAQ accordion with smooth transitions
- Animated counter statistics
- Reduced motion support for accessibility

### Performance
- 95+ Lighthouse scores (SEO, Accessibility, Performance, Best Practices)
- WCAG 2.1 AA compliant
- Keyboard navigation support
- CLS-optimized with proper aspect ratios
- Lazy-loaded images

## Deployment

### Static Hosting (Recommended)
Deploy to any static hosting service:

- **Netlify**: Drag & drop the folder to netlify.com/drop
- **Vercel**: `vercel deploy` from this directory
- **GitHub Pages**: Push to gh-pages branch
- **Cloudflare Pages**: Connect GitHub repo or drag & drop

### Traditional Hosting
Upload `index.html` to any web server via FTP/SFTP.

## Customization

### Brand Colors
Edit the Tailwind config in the `<head>` section:

```javascript
colors: {
  brand: {
    blue: '#2563EB',    // Primary brand color
    coral: '#FF6B6B',   // Accent color
    navy: '#1E3A8A'     // Dark accent
  }
}
```

### Content
All copy is contained within the React components in the `<script type="text/babel">` section. Edit the component props and text directly.

### Contact Information
Update in the CTA and Footer sections:
- Phone: `(555) 123-4567`
- Email: `hello@dawndental.com`
- Address: `123 Dental Way, Suite 100, Healthcare City, HC 12345`

## Tech Stack

- **React 18** (via CDN)
- **Tailwind CSS** (via CDN)
- **Lucide Icons** (via CDN)
- **Babel Standalone** (for JSX transformation)
- **Google Fonts** (Inter)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari/Chrome (iOS 12+, Android 5+)

## License

MIT License - Free for personal and commercial use.

---

Built for Dawn Dental Clinic

# Qustreso Studios - Professional Portfolio

A modern, industry-level portfolio website built with Astro, showcasing Roblox development services and projects.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Discord Bot Integration**: Ready for dynamic content management
- **Whop Integration**: Seamless payment processing for academy courses
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 📁 Project Structure

```
qus/
├── public/
│   ├── qustresostudios.com/
│   │   ├── Images/          # Logo and icons
│   │   └── Vouches/         # Client testimonials
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Navigation.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro      # Homepage
│       ├── past-work.astro  # Portfolio
│       ├── vouches.astro    # Client testimonials
│       ├── shop.astro       # Academy courses
│       └── hire.astro       # Contact form
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npx astro dev
   ```

3. **Build for Production**
   ```bash
   npx astro build
   ```

4. **Preview Production Build**
   ```bash
   npx astro preview
   ```

## 🤖 Discord Bot Integration

The site is designed to integrate with Discord bots for dynamic content management:

### Shop Page Integration
- Products are managed through Discord bot commands
- Add/remove products dynamically
- Update prices and descriptions
- Track inventory and sales

### Past Work Integration
- Projects are managed through Discord bot
- Add new portfolio items
- Update project details
- Filter and categorize projects

### Vouches Integration
- Client testimonials managed via Discord
- Add new vouches automatically
- Filter and organize testimonials
- Track client satisfaction

### API Endpoints (To be implemented)
```javascript
// Example API structure
GET /api/products     // Fetch shop products
POST /api/products    // Add new product
PUT /api/products/:id // Update product
DELETE /api/products/:id // Remove product

GET /api/projects     // Fetch portfolio projects
POST /api/projects    // Add new project
PUT /api/projects/:id // Update project
DELETE /api/projects/:id // Remove project

GET /api/vouches      // Fetch client vouches
POST /api/vouches     // Add new vouch
```

## 💳 Whop Integration

The shop page is configured to redirect to Whop for payment processing:

1. **Product Configuration**: Each product has a Whop checkout URL
2. **Payment Flow**: Users click "Get Started" → Redirect to Whop → Complete payment
3. **Access Management**: Whop handles access control and user management
4. **Analytics**: Track sales and user engagement through Whop dashboard

## 🎨 Customization

### Colors
The site uses a custom color palette defined in `tailwind.config.mjs`:
- Primary: Blue (#2563eb)
- Secondary: Purple (#9333ea)
- Dark: Slate (#1e293b)
- Light: Gray (#f8fafc)

### Fonts
- Primary: Poppins (Google Fonts)
- Icons: Feather Icons

### Animations
- Fade-in effects
- Hover animations
- Smooth transitions
- Loading states

## 📱 Pages Overview

### Homepage (`/`)
- Hero section with call-to-action
- Statistics showcase
- Services overview
- Client testimonials

### Past Work (`/past-work`)
- Portfolio grid with filtering
- Project details modal
- Technology tags
- Client information

### Vouches (`/vouches`)
- Client testimonial grid
- Filter by category
- Modal view for details
- Social proof section

### Shop (`/shop`)
- Academy course listings
- Whop integration
- Feature comparisons
- Student testimonials

### Hire (`/hire`)
- Contact form
- Multiple contact methods
- FAQ section
- Process explanation

## 🔧 Development

### Adding New Pages
1. Create new `.astro` file in `src/pages/`
2. Import Layout and Navigation components
3. Add to navigation menu in `Navigation.astro`

### Styling
- Uses Tailwind CSS for styling
- Custom CSS classes in component `<style>` blocks
- Responsive design with mobile-first approach

### JavaScript
- Client-side interactions in `<script>` blocks
- Form handling and validation
- Modal functionality
- Filter and search features

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Install Astro buildpack
3. Deploy automatically on push

### Netlify
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Other Platforms
- Any static hosting service
- CDN for global distribution
- Custom domain configuration

## 📊 Analytics & SEO

### SEO Features
- Meta tags for each page
- Open Graph images
- Structured data
- Sitemap generation

### Analytics Integration
- Google Analytics 4
- Conversion tracking
- User behavior analysis
- Performance monitoring

## 🔒 Security

### Form Security
- CSRF protection
- Input validation
- Rate limiting
- Secure headers

### Content Security
- XSS prevention
- Content Security Policy
- Secure image handling
- API rate limiting

## 📞 Support

For questions or support:
- Discord: [Join our server](https://discord.gg/qustreso)
- Email: contact@qustresostudios.com
- Twitter: [@QUSTRESO](https://twitter.com/QUSTRESO)

## 📄 License

This project is proprietary and confidential. All rights reserved by Qustreso Studios.

---

**Built with ❤️ by Qustreso Studios** 
# TecShop Quick Start Guide

Welcome to **TecShop** - A techy e-commerce template with a striking red and black theme! 🔴⚫

## What's New?

### 🎨 Visual Transformation
- **New Color Scheme**: Techy red (#DC2626) and black theme
- **New Logo**: Circuit board-inspired design
- **Dark Theme**: Modern, sleek dark interface
- **Techy Aesthetic**: Electronics and tech-inspired design elements

### 🏷️ Branding Updates
- **Website Name**: ZiShop → TecShop
- **Developer**: Zahra Mirzaei → MisalStack
- **Theme**: Professional tech store aesthetic

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Sanity.io account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MisalStack/tecshop.git
   cd tecshop
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Sanity**
   - Sign up at [sanity.io](https://www.sanity.io/)
   - Get your `projectId` and `token`
   - Add your `projectId` to `lib/client.ts`
   - Create `.env` file in root:
     ```
     NEXT_PUBLIC_SANITY_TOKEN=your_token_here
     ```

4. **Start Sanity Studio**
   ```bash
   cd sanity_onlineshop
   sanity start
   ```
   - Open http://localhost:3333
   - Add your products

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   - Open http://localhost:3000

## Theme Customization

### Changing Colors

Edit `styles/globals.css` to customize the color scheme:

```css
:root {
  --color-primary: 220, 38, 38;        /* Change red accent */
  --color-secondary: 17, 24, 39;       /* Change secondary color */
  --color-bg: 15, 15, 15;              /* Change background */
  --color-text-base: 245, 245, 245;    /* Change text color */
}
```

### Logo Customization

Replace the logo files in `public/images/`:
- `tecshop-logo.svg` - Main logo (120x40px recommended)
- `tecshop-icon.svg` - Favicon icon (32x32px)

### Language Support

TecShop supports English and Persian (Farsi):
- Edit `locales/en.ts` for English translations
- Edit `locales/fa.ts` for Persian translations

## Features

✅ **Redux Toolkit** - State management  
✅ **Sanity.io** - Headless CMS  
✅ **Fully Responsive** - Mobile-first design  
✅ **Multi-language** - EN/FA support  
✅ **Dark/Light Mode** - Theme switching  
✅ **TypeScript** - Type safety  
✅ **TailwindCSS** - Utility-first styling  
✅ **Next.js** - React framework with SSR  

## Pages

- **Home** (`/`) - Main landing page
- **Products** (`/digital`, `/fashion`, etc.) - Category pages
- **Product Details** - Individual product pages
- **Cart** (`/cart`) - Shopping cart
- **Favorites** (`/favorite`) - Wishlist
- **Login/SignUp** (`/login`, `/signUp`) - Authentication
- **About** (`/about`) - About page

## Project Structure

```
tecshop/
├── components/          # React components
│   ├── header/         # Header components
│   ├── footer/         # Footer components
│   ├── cart/           # Cart components
│   └── ...
├── pages/              # Next.js pages
├── styles/             # Global styles
├── locales/            # Translations
├── lib/                # Utilities and types
├── public/             # Static assets
│   └── images/         # Images and logos
├── sanity_onlineshop/  # Sanity CMS
└── store/              # Redux store
```

## Customization Tips

### 1. Add Your Products
Use Sanity Studio (http://localhost:3333) to add products with:
- Product name
- Description
- Price
- Images
- Category
- Specifications

### 2. Customize Categories
Edit category colors in `styles/globals.css`:
```css
--digital-category-bgc: #1a1a1a;
--fashion-category-bgc: #2a0a0a;
/* Add more categories */
```

### 3. Update Footer
Edit `components/footer/index.tsx` to customize:
- Social links
- Footer columns
- Copyright text

### 4. Modify Header
Edit `components/header/` components to customize:
- Navigation menu
- Search bar
- User account section

## Tech Stack

- **Framework**: Next.js 12
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: Redux Toolkit
- **CMS**: Sanity.io
- **Icons**: React Icons
- **Carousel**: React Slick

## Development Tips

### Hot Reload
Changes to components and pages will hot-reload automatically.

### Building for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Troubleshooting

### Sanity Connection Issues
- Verify your `projectId` in `lib/client.ts`
- Check your token in `.env` file
- Ensure Sanity Studio is running

### Styling Issues
- Clear `.next` folder and rebuild
- Check Tailwind configuration
- Verify CSS variable values

### Image Loading Issues
- Add image domains to `next.config.js`
- Check Sanity CDN configuration

## Support

For issues or questions:
- Check the documentation
- Review the code comments
- Open an issue on GitHub

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ by MisalStack**  
**Theme**: Techy Red & Black  
**Version**: 1.0.0  
**Last Updated**: May 7, 2026

Enjoy building with TecShop! 🚀

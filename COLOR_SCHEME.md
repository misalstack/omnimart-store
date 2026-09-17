# TecShop Color Scheme Guide

## Primary Colors

### Red (Primary Accent)
- **Hex**: `#DC2626`
- **RGB**: `220, 38, 38`
- **Usage**: Primary buttons, links, accents, highlights, active states, icons
- **Examples**: 
  - Logo accent color
  - Heart icon in footer
  - Quote marks
  - Progress bar
  - Scrollbar thumb
  - Circuit board elements

### Black/Dark Gray (Base)
- **Background Dark**: `#0f0f0f` (RGB: 15, 15, 15)
- **Card Background**: `#171717` (RGB: 23, 23, 23)
- **Secondary**: `#111827` (RGB: 17, 24, 39)
- **Usage**: Backgrounds, cards, containers, secondary elements

## Text Colors

### Light Text (Primary)
- **Hex**: `#f5f5f5`
- **RGB**: `245, 245, 245`
- **Usage**: Primary text on dark backgrounds

### Muted Text (Secondary)
- **Hex**: `#a3a3a3`
- **RGB**: `163, 163, 163`
- **Usage**: Secondary text, descriptions, metadata

### White Text (Highlights)
- **Hex**: `#ffffff`
- **RGB**: `255, 255, 255`
- **Usage**: High-contrast text, headings, important information

## Category Colors (Dark Mode)

All category colors are dark variants to match the techy theme:

- **Digital**: `#1a1a1a`
- **Fashion**: `#2a0a0a`
- **Beauty**: `#1f1f1f`
- **Sport**: `#2d0a0a`
- **House**: `#1c1c1c`
- **Toy**: `#252525`
- **Stationery**: `#1e1e1e`

## Dark Mode Variants

When dark mode is active:
- **Background**: `#000000` (Pure black)
- **Card Background**: `#0a0a0a` (Slightly lighter black)
- **Text**: `#ffffff` (Pure white)
- **Muted Text**: `#8c8c8c`

## CSS Variables

```css
:root {
  --color-primary: 220, 38, 38;        /* Red */
  --color-secondary: 17, 24, 39;       /* Dark Gray */
  --color-bg: 15, 15, 15;              /* Almost Black */
  --color-bg-side: 23, 23, 23;         /* Dark Card */
  --color-text-base: 245, 245, 245;    /* Light Text */
  --color-text-muted: 163, 163, 163;   /* Muted Gray */
  --color-text-side: 255, 255, 255;    /* White */
}
```

## Tailwind Classes

### Backgrounds
- `bg-palette-fill` - Main background
- `bg-palette-card` - Card background
- `bg-palette-primary` - Red accent background
- `bg-palette-dark` - Pure black

### Text
- `text-palette-base` - Primary text
- `text-palette-mute` - Secondary text
- `text-palette-side` - White text

## Design Principles

1. **High Contrast**: Red on black creates strong visual hierarchy
2. **Techy Feel**: Circuit patterns, geometric shapes, modern aesthetics
3. **Readability**: Light text on dark backgrounds with sufficient contrast
4. **Consistency**: Red used sparingly for maximum impact
5. **Modern**: Clean, minimalist approach with tech-forward design

## Color Psychology

- **Red**: Energy, passion, technology, innovation, urgency
- **Black**: Sophistication, power, elegance, modernity
- **White/Light Gray**: Clarity, simplicity, cleanliness

## Accessibility Notes

- Ensure text contrast ratios meet WCAG AA standards (4.5:1 for normal text)
- Red on black provides good contrast for accents
- Light text (#f5f5f5) on dark backgrounds (#0f0f0f) exceeds contrast requirements
- Consider color-blind users: use red with additional visual indicators (icons, text)

## Usage Examples

### Buttons
```jsx
// Primary button
<button className="bg-palette-primary text-white">
  Click Me
</button>

// Secondary button
<button className="bg-palette-card text-palette-base border border-palette-primary">
  Secondary
</button>
```

### Cards
```jsx
<div className="bg-palette-card text-palette-base">
  <h2 className="text-palette-side">Title</h2>
  <p className="text-palette-mute">Description</p>
</div>
```

### Links
```jsx
<a className="text-palette-primary hover:underline">
  Learn More
</a>
```

---

**Theme**: Techy Red & Black
**Created for**: TecShop by MisalStack
**Last Updated**: May 7, 2026

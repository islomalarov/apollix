# Apollix - Modern Architecture

## 📁 Project Structure

```
apollix/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page (refactored to use components)
│   └── globals.css          # Global styles & animations
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx       # Button component with variants
│   │   └── card.tsx         # Card component
│   └── sections/            # Page sections (NEW)
│       ├── index.ts         # Exports all sections
│       ├── navigation.tsx   # Navigation bar
│       ├── hero.tsx         # Hero section
│       ├── services.tsx     # Services grid
│       ├── stats.tsx        # Statistics section
│       ├── network.tsx      # Network infrastructure section
│       ├── cta.tsx          # Call-to-action section
│       └── footer.tsx       # Footer
├── lib/
│   └── utils.ts             # Utility functions (cn)
└── public/                  # Static assets

```

## 🏗️ Architecture Pattern

### Component-Driven Architecture

The home page is now refactored into **functional, composable components**:

```tsx
// app/page.tsx (simplified)
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection isVisible={isVisible} />
      <ServicesSection />
      <StatsSection />
      <NetworkSection isVisible={isVisible} />
      <CTASection />
      <Footer />
    </div>
  );
}
```

### Benefits

✅ **Maintainability**: Each section is isolated in its own file  
✅ **Reusability**: Components can be imported and used elsewhere  
✅ **Testability**: Individual components can be tested independently  
✅ **Scalability**: New sections can be added without cluttering main page  
✅ **Readability**: Clear separation of concerns

## 📦 Section Components

### Navigation (`components/sections/navigation.tsx`)

Sticky navigation bar with:

- Apollix branding with icon
- Desktop menu links (Services, Network, About)
- Responsive mobile menu button
- Animated entrance effect

**Props:**

- None (stateless component)

---

### Hero Section (`components/sections/hero.tsx`)

Eye-catching hero with:

- Animated gradients and floating elements
- Two-column grid layout
- Call-to-action buttons with scroll handlers
- Entrance animations based on visibility state

**Props:**

- `isVisible: boolean` - Controls animation state
- `onScroll: (e, targetId) => void` - Scroll handler for buttons

---

### Services Section (`components/sections/services.tsx`)

Premium service cards displaying:

- Ultra-Fast Charging
- Strategic Coverage
- Enterprise Security

**Features:**

- 3-column responsive grid
- Hover effects (scale, shadow)
- Staggered animation delays
- Icon animations

---

### Stats Section (`components/sections/stats.tsx`)

Key metrics with:

- 500+ Charging Stations
- 98% Uptime Guarantee
- 100K+ Active Users
- 24/7 Live Support

**Features:**

- 4-column grid with staggered scale-in animation
- Primary color background
- Large typography for impact

---

### Network Section (`components/sections/network.tsx`)

Infrastructure showcase with:

- Rapid Expansion info
- Safety First details
- Smart Technology highlights
- Animated map placeholder

**Props:**

- `isVisible: boolean` - Controls right-side animation

---

### CTA Section (`components/sections/cta.tsx`)

Call-to-action block with:

- Large headline ("Ready for Electric?")
- Primary and secondary buttons
- Dark background for contrast

**Props:**

- `onScroll: (e, targetId) => void` - Scroll handler for buttons

---

### Contact Section (`components/sections/contact.tsx`)

Contact form and info section with:

- 3 info cards (Email, Phone, Office address)
- Full contact form with validation
- Real-time success/error messages
- Form fields: Name, Email, Phone, Subject, Message

**Props:**

- None (self-contained with internal state)

**Features:**

- Form state management with `useState`
- Loading, success, and error states
- Automatic form reset after submission
- Accessible inputs with focus ring styling
- Icon support for contact info cards

---

### Footer (`components/sections/footer.tsx`)

Footer with:

- Brand information
- 3 column links (Product, Company, Legal)
- Copyright notice
- Animated entrance

---

## 🎨 Styling System

### CSS Architecture

**Global Styles** (`app/globals.css`):

- CSS custom properties for theming
- OKLCH color space for better color manipulation
- Custom animations in utility layer
- Light/Dark mode toggle support

### Color Scheme

```css
/* Light Mode */
--primary: oklch(0.6 0.25 29)       /* Red */
--background: oklch(0.98 0 0)       /* Near white */
--foreground: oklch(0.12 0 0)       /* Near black */

/* Dark Mode */
--primary: oklch(0.7 0.28 29)       /* Lighter red */
--background: oklch(0.1 0 0)        /* Near black */
--foreground: oklch(0.98 0 0)       /* Near white */
```

### Custom Animations

- `.animate-fade-in` - Opacity transition (0.8s)
- `.animate-slide-up` - Translate + opacity (0.8s)
- `.animate-scale-in` - Scale + opacity (0.7s)
- `.animate-glow` - Pulsing glow effect (3s infinite)
- `.animate-float` - Float up/down (4s infinite)
- `.transition-smooth` - 300ms all transition
- `.transition-premium` - 500ms ease-in-out transition

## 🔄 Data Flow

### State Management

**App Level** (`app/page.tsx`):

```tsx
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 0);
  return () => clearTimeout(timer);
}, []);
```

**Scroll Handling**:

```tsx
const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
```

### Component Communication

- **Props Down**: Parent passes `isVisible` and `onScroll` to child components
- **Events Up**: Children handle button clicks and call parent scroll handler
- **Element IDs**: Sections use consistent IDs for scroll targeting

## 🚀 Performance Optimizations

✅ **Code Splitting**: Each section is a separate component  
✅ **Lazy Animation**: Animations trigger only on visible state  
✅ **CSS Optimization**: Tailwind v4 with PostCSS plugin system  
✅ **Static Generation**: Next.js pre-renders home page at build time  
✅ **Responsive Design**: Mobile-first Tailwind utilities

## 🛠️ Development Commands

```bash
# Development
pnpm dev          # Start dev server (localhost:3000)

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Quality
pnpm lint         # Run ESLint
```

## 📝 Adding New Sections

To add a new section:

1. **Create component** in `components/sections/new-section.tsx`
2. **Export from index** in `components/sections/index.ts`
3. **Import in page.tsx** and add to JSX
4. **Pass props** if needed (isVisible, onScroll, etc.)

Example:

```tsx
// components/sections/testimonials.tsx
export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 px-4">
      {/* Content */}
    </section>
  );
}

// app/page.tsx
import { TestimonialsSection } from '@/components/sections';

// Add to JSX
<TestimonialsSection />;
```

## 🔍 Maintenance

- Each section is **self-contained** and can be modified independently
- **No global state** — props-based communication only
- **Clear naming** — section names match ID attributes
- **Consistent patterns** — all sections follow similar structure

---

**Last Updated**: November 14, 2025  
**Architecture Version**: 2.0 (Refactored to functional components)

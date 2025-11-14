# Apollix Energy Technology - AI Coding Agent Instructions

## Project Overview

Apollix is a **Next.js 16 + React 19** marketing website for an EV charging infrastructure company serving Uzbekistan. The site showcases premium charging solutions through a modern, animated landing page with emphasis on design, performance, and brand experience.

**Key Stack**: Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, Radix UI primitives, pnpm

## Architecture & Key Patterns

### Page Structure (Refactored v2.0)

The home page is now organized into **functional, reusable section components** in `/components/sections/`:

**Section Components:**
- `navigation.tsx` - Sticky nav with branding and links
- `hero.tsx` - Hero section with entrance animations
- `services.tsx` - Service cards (3-column grid)
- `stats.tsx` - Key statistics (4-column grid)
- `network.tsx` - Network infrastructure info
- `cta.tsx` - Call-to-action section
- `footer.tsx` - Footer with company links
- `index.ts` - Central export point

**Home Page** (`app/page.tsx`) - Now clean and maintainable:
```tsx
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection isVisible={isVisible} onScroll={handleScroll} />
      <ServicesSection />
      <StatsSection />
      <NetworkSection isVisible={isVisible} />
      <CTASection onScroll={handleScroll} />
      <Footer />
    </div>
  );
}
```

**Benefits**: Clean separation of concerns, easier testing, reusable sections, maintainable codebase.

### Component Structure (`/components/ui/`)

All UI components follow **Radix UI design pattern** with `data-slot` attributes for component identification:
- Use `cn()` utility (from `@/lib/utils`) to merge class names safely with `clsx` + `tailwind-merge`
- Components use `React.ComponentProps<"element">` for flexible prop typing
- Example pattern from `button.tsx`:
  ```tsx
  const buttonVariants = cva(...) // class-variance-authority for variants
  function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? Slot : "button" // Support polymorphic rendering
    return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  }
  ```

### Styling & Theme System

**Theme**: Premium red (`oklch(0.6 0.25 29)`) with dark-first color palette using OKLCH color space
- Light mode: `--background: oklch(0.98 0 0)` (near white)
- Dark mode: `--background: oklch(0.1 0 0)` (near black)
- All colors defined in `app/globals.css` as CSS variables
- Tailwind v4 uses `@theme inline` block for dynamic color config

**Custom Animations** (defined in globals.css):
- `.animate-fade-in` / `.animate-slide-up` / `.animate-scale-in` (0.7-0.8s ease-out)
- `.animate-glow` / `.animate-float` (infinite 3-4s loops)
- `.transition-smooth` (300ms) vs `.transition-premium` (500ms ease-in-out)

### Landing Page Pattern (Section Components)

Each section is a self-contained functional component with:
- Props for dynamic data or visibility state
- Scroll handlers passed from parent
- Animation delays defined as constants
- Consistent responsive grid patterns

**Example** (`components/sections/services.tsx`):
```tsx
export function ServicesSection() {
  return (
    <section id="services" className="py-32 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Content */}
      </div>
    </section>
  );
}
```

**Visibility-Triggered Animations**:
```tsx
// Parent controls visibility state
const [isVisible, setIsVisible] = useState(false);

// Pass to components that need it
<HeroSection isVisible={isVisible} />

// Component applies conditional classes
className={isVisible ? 'opacity-100' : 'opacity-0'}
```

**Scroll Navigation**:
```tsx
const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
  e.preventDefault();
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
};
```

### Metadata & SEO (`app/layout.tsx`)

- Uses Next.js `Metadata` API for title, description, favicon variants (light/dark)
- Favicon strategy: `icon-light-32x32.png`, `icon-dark-32x32.png` (prefers-color-scheme), fallback `icon.svg`
- Includes Vercel Analytics via `@vercel/analytics/next`

## Development Workflow

### Build & Run Commands
```bash
pnpm dev          # Start dev server (localhost:3000, auto-reload)
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # Run ESLint (Next.js + TypeScript rules)
```

**Note**: Package manager is **pnpm** (lockfile: `pnpm-lock.yaml`), not npm or yarn.

### File Import Path Alias

All imports use `@/` prefix (defined in `tsconfig.json`):
- `import { cn } from "@/lib/utils"`
- `import { Button } from "@/components/ui/button"`
- `import { Card } from "@/components/ui/card"`

**Never use relative paths like `../../../`** — always use `@/`.

## Code Style & Conventions

### Component Convention
1. Client components for interactive pages: `'use client'` directive at top of file
2. Export named exports + default for UI components (e.g., `export { Button, buttonVariants }`)
3. Use TypeScript strict mode (`tsconfig.json` has `"strict": true`)

### CSS Convention
- **Utility-first Tailwind**: All styles in className, no inline styles unless dynamic
- **Custom utilities** in globals.css layer: `.animate-fade-in`, `.transition-premium`, etc.
- Color values: Use CSS custom properties `var(--primary)`, `var(--foreground)`, etc.
- Hover/focus states: Use Tailwind modifiers (`hover:`, `focus-visible:`) with ring focus styles

### Animation Convention
- Use **animation-delay** for staggered effects: `style={{ animationDelay: '0.15s' }}`
- Icon hover effects: Scale + translate with `group-hover:scale-125 group-hover:translate-x-1`
- Entrance animations: Combine opacity + transform for smooth reveals

### Icon Library
- **lucide-react** for all icons (`Battery`, `Zap`, `MapPin`, `Shield`, `TrendingUp`, etc.)
- Import as needed: `import { Zap, MapPin } from 'lucide-react'`
- Size conventions: `w-4 h-4` (small), `w-6 h-6` (default), `w-14 h-14` (large), `w-24 h-24` (hero)

## Critical Developer Notes

### TypeScript
- Use `React.ComponentProps<"div">` for flexible component props, not manual prop interfaces when inheriting HTML element props
- Use `VariantProps` from `class-variance-authority` for component variant types
- Set `"skipLibCheck": true` in tsconfig to speed up builds

### Performance Considerations
- Use `useEffect` cleanup for animations to avoid memory leaks
- Avoid re-renders with conditional className logic (e.g., visibility-based)
- Image optimization: Place optimized images in `/public` directory (not shown in current structure but required)

### Common Gotchas
1. **Tailwind class merging**: Always use `cn()` to safely merge conflicting Tailwind classes (e.g., `bg-primary` + `hover:bg-primary/90`)
2. **Radix UI Slot**: The `asChild` pattern allows polymorphic components; use `Slot` from `@radix-ui/react-slot` for this
3. **Dark mode**: Configured via custom `@custom-variant dark` in globals.css; automatically respects `prefers-color-scheme`
4. **Next.js versioning**: Currently on Next.js 16 (cutting edge); check [nextjs.org/docs](https://nextjs.org/docs) for latest features

## When Adding New Features

1. **New Section**: Create in `/components/sections/new-section.tsx`, export from `index.ts`, import in `app/page.tsx`
2. **New UI Component**: Add to `/components/ui/`, follow Radix + CVA pattern, export named + default
3. **New Utility**: Add to `/lib/utils.ts`, export as named function
4. **Styling**: Use Tailwind utilities + custom animations from globals.css
5. **Icons**: Import from `lucide-react`, follow size conventions (w-4, w-6, w-14, etc.)

**Adding a new section example**:
```tsx
// components/sections/testimonials.tsx
export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 px-4">
      {/* Content */}
    </section>
  );
}

// components/sections/index.ts
export { TestimonialsSection } from './testimonials';

// app/page.tsx
import { TestimonialsSection } from '@/components/sections';

// Add to JSX
<TestimonialsSection />
```

## Links & References

- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS v4](https://tailwindcss.com/docs/v4)
- [Radix UI](https://www.radix-ui.com/)
- [CVA (class-variance-authority)](https://cva.style/)
- [lucide-react](https://lucide.dev/)

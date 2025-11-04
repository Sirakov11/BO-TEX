# BO-TEX Design Guidelines

## Design Approach
**Selected Framework**: Professional Corporate Design System
**Justification**: B2B industrial company requiring trust, credibility, and clear information hierarchy. Drawing inspiration from established corporate patterns with Bulgarian market sensibility similar to Hydrocraft.bg.

**Core Principles**:
- Professional credibility and trustworthiness
- Clear information architecture
- Conversion-focused with strong CTAs
- Mobile-first responsive design

## Typography System

**Font Families**:
- Primary: 'Inter' or 'Roboto' (via Google Fonts CDN) - clean, professional sans-serif
- Accent/Headings: 'Montserrat' for impact where needed

**Hierarchy**:
- H1 (Hero): text-5xl md:text-6xl lg:text-7xl, font-bold
- H2 (Section Titles): text-3xl md:text-4xl lg:text-5xl, font-bold
- H3 (Subsections): text-2xl md:text-3xl, font-semibold
- H4 (Card Titles): text-xl md:text-2xl, font-semibold
- Body Large: text-lg md:text-xl, font-normal
- Body: text-base md:text-lg, font-normal
- Small/Caption: text-sm md:text-base

**Bulgarian Cyrillic Optimization**: Ensure font selection supports excellent Cyrillic rendering with proper letter spacing

## Layout System

**Container Strategy**:
- Maximum width: max-w-7xl mx-auto
- Content sections: px-4 md:px-6 lg:px-8
- Full-width sections with inner containers for visual impact

**Spacing Primitives** (Tailwind units):
- Core spacing: 4, 6, 8, 12, 16, 20, 24
- Section vertical spacing: py-16 md:py-20 lg:py-24
- Component internal spacing: p-6 md:p-8
- Grid gaps: gap-6 md:gap-8
- Element spacing: space-y-4 md:space-y-6

**Grid Systems**:
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Product Categories: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Stats: grid-cols-2 md:grid-cols-4
- Partners: Horizontal scrolling carousel

## Component Library

### Navigation
- Fixed header with backdrop blur (backdrop-blur-md)
- Logo left-aligned, navigation center/right
- Mobile: Hamburger menu with slide-out drawer
- Links: Начало, Услуги, Продукти, За Нас, Контакти
- Prominent CTA button in header

### Hero Section
- Full viewport height (min-h-screen)
- Large hero image background with overlay treatment
- Centered content with company name, tagline, and dual CTAs
- Statistics bar overlay at bottom (transparent background with backdrop blur)
- Stats: 4 key metrics with numbers and labels

**Hero Image**: Full-width professional industrial/equipment photography showing BO-TEX's work environment or products in action. Image should convey professionalism and scale.

### Services Section
- 3 main service cards in grid layout
- Each card: Icon (Heroicons, 64px), Title (H3), Description (2-3 sentences), "Научете повече" link
- Cards with subtle elevation, padding p-8
- Hover state with slight lift effect

### Product Categories
- 8 category cards in 4-column grid (responsive)
- Each card: Background image, category name, item count, "Разгледай" link overlay
- Consistent aspect ratio (4:3)
- Gradient overlay on images for text readability

**Product Category Images**: Professional product photography or category-specific imagery for each of the 8 categories. Images should show actual products or equipment clearly.

### Statistics Section
- Full-width section with 4 key metrics
- Large numbers (text-5xl font-bold) with descriptive labels below
- Icons above each stat (optional)
- Grid layout: grid-cols-2 md:grid-cols-4

### Partners Carousel
- Horizontal auto-scrolling logo carousel
- Grayscale logos with hover color reveal
- Infinite loop animation
- 8-12 partner logos, height-constrained (h-16 to h-20)
- Duplicate logo set for seamless loop

### Contact CTA Section
- Split layout: Left (main CTA), Right (contact details)
- Large heading "Свържете се с нас за безплатна консултация"
- Dual action buttons: Phone CTA (primary) and Contact Form link (secondary)
- Working hours display
- Background with subtle pattern or texture

### Footer
- Three-column layout on desktop, stacked on mobile
- Column 1: Company info and brief description
- Column 2: Quick links (Услуги, Продукти, За Нас, Контакти)
- Column 3: Contact information (address, phone, email, working hours)
- Bottom bar: Copyright, Privacy Policy, Cookie Policy links

## Buttons & CTAs

**Primary Button**:
- Padding: px-8 py-3 md:px-10 md:py-4
- Rounded: rounded-lg
- Font: font-semibold text-base md:text-lg
- When on hero image: backdrop-blur-md with semi-transparent background

**Secondary Button**:
- Similar sizing, outlined style (border-2)
- On hero image: backdrop-blur-md treatment

**Text Links**:
- Arrow or chevron icon after text (Heroicons)
- Underline on hover

## Images

**Required Images**:
1. **Hero Background**: High-quality industrial/workplace scene (1920x1080+)
2. **Service Icons**: 3 representative icons (Heroicons library)
3. **Product Category Images**: 8 category-specific product photos (800x600)
4. **Partner Logos**: 8-12 manufacturer/partner logos (SVG preferred)

**Image Treatment**:
- All images: object-cover, optimized for web
- Hero: Dark overlay (opacity-40 to opacity-60) for text contrast
- Product cards: Gradient overlay from transparent to dark at bottom
- Lazy loading for performance

## Accessibility
- Semantic HTML5 structure
- ARIA labels for Bulgarian language
- Keyboard navigation support
- Focus states on all interactive elements (ring-2 ring-offset-2)
- Sufficient touch targets (minimum 44x44px)
- Alt text in Bulgarian for all images

## Responsive Breakpoints
- Mobile: Base (320px+)
- Tablet: md (768px+)
- Desktop: lg (1024px+)
- Large Desktop: xl (1280px+)

## Performance Considerations
- Icon library: Single CDN (Heroicons recommended)
- Font loading: Google Fonts with font-display: swap
- Image optimization: WebP format where supported
- Lazy loading for below-fold images
- Minimize animations to essential transitions only
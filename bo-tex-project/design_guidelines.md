# BO-TEX Design Guidelines

## Design Approach
**Selected Framework**: Modern Industrial Design System with Distinctive Brand Identity
**Justification**: B2B industrial company requiring trust and credibility, but with bold visual differentiation from competitors. Drawing structure from Hydrocraft.bg while creating a unique BO-TEX visual language through warm industrial aesthetics, dynamic angular layouts, and signature design motifs.

**Core Principles**:
- Warm industrial aesthetic with distinctive angular motifs
- Dynamic, asymmetric layouts breaking traditional B2B molds
- Strong conversion focus with confident CTAs
- Visual depth through layering and geometric patterns

## Color System
**Palette** (Warm Industrial):
- Primary Navy: #1e3a5f (deep industrial blue)
- Accent Amber: #d97706 (warm highlight)
- Graphite: #374151 (professional dark)
- Sand Neutral: #f5f1e8 (warm background)
- Concrete: #9ca3af (subtle borders/text)

**Application Strategy**:
- Hero: Navy backgrounds with amber accents
- Cards: Sand backgrounds with graphite text
- CTAs: Amber primary, Navy secondary
- Dotted patterns: Concrete opacity-20

## Typography System
**Font Families** (Google Fonts CDN):
- Headers: 'Montserrat' (700, 600) - bold, geometric impact
- Body: 'Source Sans Pro' (400, 600) - readable, professional

**Hierarchy**:
- H1 (Hero): text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight
- H2 (Sections): text-4xl md:text-5xl lg:text-6xl font-bold
- H3 (Cards): text-2xl md:text-3xl font-semibold
- Body Large: text-xl md:text-2xl font-normal
- Body: text-lg md:text-xl font-normal
- Caption: text-base md:text-lg

## Layout System
**Spacing Primitives**: 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-24 lg:py-32
- Card padding: p-8 md:p-10 lg:p-12
- Grid gaps: gap-8 md:gap-10 lg:gap-12

**Container Strategy**:
- Max width: max-w-7xl mx-auto px-6 md:px-8 lg:px-12
- Full-bleed sections with inner containers

**Signature Angular System**:
- Clip-path angles: polygon(0 0, 100% 3%, 100% 100%, 0 97%)
- Rotated accents: -rotate-2 to rotate-2
- Diagonal dividers between sections

## Component Library

### Navigation
Fixed header with navy background and subtle shadow. Logo left, navigation center-right with links: Начало, Услуги, Продукти, За Нас, Контакти. Mobile: slide-out drawer with full-height overlay. Prominent amber CTA button (with backdrop-blur-md when over images).

### Hero Section
**Layout**: Asymmetric split with 60/40 ratio (content/image). Left side: Company name (H1), tagline (Body Large), dual CTAs (amber primary, navy secondary outlined - both with backdrop-blur-md). Right side: Large industrial image with angular clip-path treatment. Background: Navy with subtle dotted pattern (dots using background-image with radial-gradient). Bottom overlay: Stats bar with 4 metrics, sand background with graphite text, spans full width.

### Services Section
Grid of 3 cards (grid-cols-1 md:grid-cols-3). Each card: Sand background, rotated accent bar (amber, 4px width, -rotate-2), large icon (Heroicons 80px amber), title (H3 graphite), description (Body), "Научете повече" link with arrow. Cards staggered vertically using transform: translateY (middle card shifted down).

### Product Categories
Dynamic 2-3-3 grid layout (2 columns row 1, 3 columns rows 2-3, totaling 8 cards). Each card: Product image background, graphite gradient overlay (from transparent top to opacity-80 bottom), category name (H3 sand text), item count, corner amber accent (diagonal stripe). Hover: slight scale and amber border glow.

### Capabilities/Features Section
Alternating content blocks (image-text, text-image pattern). Each block: 50/50 split, images with angular clip-paths opposing each side (polygon variations), dotted background patterns between blocks. Text side: H2 title, body text, amber accent line (4px, w-20), bullet points with amber checkmarks.

### Statistics Showcase
Full-width navy section with dotted background pattern. 4 stats in grid (grid-cols-2 md:grid-cols-4): Large amber numbers (text-6xl font-bold), sand labels below, subtle dividers between (concrete vertical lines).

### Partners Section
Horizontal scrolling carousel with sand background. 10-12 partner logos (h-20), grayscale filter with color reveal on hover. Infinite loop animation, duplicate set for seamlessness. Dotted pattern background.

### Contact CTA Section
Split layout with diagonal divider. Left (60%): Amber background, large heading "Свържете се с нас за безплатна консултация", dual CTAs (navy button, outlined sand button - both backdrop-blur-md). Right (40%): Navy background with contact details (phone, email, working hours) in sand text, dotted pattern.

### Footer
Three-column desktop layout (stacked mobile) on graphite background. Column 1: Logo, brief description. Column 2: Quick links. Column 3: Contact info, working hours. Bottom bar: Copyright, policy links. Amber accent lines separating columns.

## Signature Design Motifs

**Angular Accents**:
- Clip-path treatments on images and sections
- Rotated decorative bars (-2° to 2°)
- Diagonal section dividers

**Dotted Backgrounds**:
- Subtle pattern: background-image with radial-gradient dots
- Spacing: 24px grid
- Opacity: 0.2 on navy, 0.15 on sand

**Layering Depth**:
- Cards with subtle shadows (shadow-lg)
- Overlapping elements with z-index hierarchy
- Backdrop blur on glass-morphism effects

## Buttons & CTAs
**Primary (Amber)**: px-10 py-4 md:px-12 md:py-5, rounded-lg, font-semibold text-lg. On images: backdrop-blur-md bg-amber-600/80.

**Secondary (Navy Outlined)**: Border-2, same sizing. On images: backdrop-blur-md border-navy-900/80 bg-navy-900/20.

**Link Style**: Amber text, arrow icon (Heroicons), underline on hover.

## Images

**Required Images**:
1. **Hero Image**: Professional industrial machinery or workshop scene showing scale and capability (1200x800+). Applied with angular clip-path on right side of hero split.

2. **Service Icons**: 3 unique industrial icons from Heroicons (amber colored, 80px)

3. **Product Category Images**: 8 high-quality product/category photos (1000x750). Each showing specific equipment or materials clearly.

4. **Feature/Capabilities Images**: 3-4 contextual workplace/product images for alternating content blocks (1200x800)

5. **Partner Logos**: 10-12 manufacturer logos (SVG preferred, h-20 constraint)

**Image Treatment**: All images use object-cover. Hero and feature images get angular clip-path treatments. Product cards use graphite gradient overlays. Lazy loading below fold.

## Accessibility
Semantic HTML5 structure, ARIA labels in Bulgarian, keyboard navigation, focus rings (ring-2 ring-amber-500), minimum 48px touch targets, alt text for all images in Bulgarian.

## Responsive Breakpoints
Mobile: base (360px+), Tablet: md (768px+), Desktop: lg (1024px+), XL: xl (1280px+)
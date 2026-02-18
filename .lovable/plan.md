

# 🎨 Luxury Artist Portfolio Website

A stunning, minimalist single-page portfolio for paintings and sculptures with a high-end gallery aesthetic.

## Design Direction
- **Pure white background** with generous whitespace
- **Luxurious typography** using Playfair Display (headings) + Inter (body)
- **Subtle animations**: fade-in on scroll, gentle hover zoom on artwork
- **No clutter** — minimal borders, light shadows, refined dividers
- **Fully responsive**, mobile-first

## Page Sections (Single Scroll Page)

### 1. Navigation Bar
- Desktop: clean top nav with section links (Home, About, Events, Upcoming, Contact)
- Mobile: hamburger menu overlay
- Smooth scroll to section anchors

### 2. Hero Slideshow
- Full-width carousel with 7 featured artworks (mock images from Unsplash)
- Left/right arrows, smooth transitions
- Title + caption overlay in elegant typography
- Uses Embla Carousel (already installed)

### 3. About Section
- Large artist image alongside heading and bio text
- Clean two-column layout (stacks on mobile)
- Refined spacing and typography

### 4. Past Events Section
- Grid of event cards with artwork image, title, formatted date, and description
- Subtle hover animations (gentle zoom + shadow)
- Gallery-style card layout

### 5. Upcoming Events Section
- Same card style as past events, distinguished by section heading
- Clean visual separation

### 6. Contact Section
- Contact blurb text
- Row of icons: Email (mailto), WhatsApp, Instagram
- Minimal, elegant footer feel

## Google Sheets Integration
- `lib/fetchContent.ts` fetches from Google Visualization API (public sheet, no auth)
- Parses 3 tabs: slides, events, site config
- Helper to convert Google Drive share links to direct image URLs
- Sheet ID via environment variable (`VITE_SHEET_ID`)
- **Falls back to mock content** when no sheet is configured (so the site works immediately)
- README with clear instructions for your mom on how to update content

## Content Types
- Typed `Content` interface with slides, about, pastEvents, upcomingEvents, and contact info
- Events auto-sorted by date, split by type

## Mock Content
- Beautiful art/sculpture placeholder images from Unsplash
- Realistic artist bio, event descriptions, and contact info
- Everything looks production-ready out of the box


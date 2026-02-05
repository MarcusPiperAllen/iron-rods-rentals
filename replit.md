# Iron Rod's Equipment Rentals

## Overview
A professional equipment rental web application for forklifts and specialized attachments. Built with a rugged, industrial aesthetic featuring Charcoal, Safety Orange, and White color palette with a "Safety First" professional vibe. A division of Ironrod Steel Co.

## Tech Stack
- **Frontend**: React with TypeScript, Tailwind CSS, Shadcn UI components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state

## Project Structure
```
client/
  src/
    components/       # Reusable UI components
      Header.tsx      # Navigation header
      Hero.tsx        # Landing hero section
      InventoryGrid.tsx # Equipment catalog display
      PricingCalculator.tsx # Smart pricing tool
      BookingForm.tsx # Rental inquiry form
      Footer.tsx      # Site footer
    pages/
      Home.tsx        # Main landing page
      About.tsx       # About Ironrod Steel Co.
      Services.tsx    # Three service pillars
    lib/
      queryClient.ts  # API request utilities
server/
  db.ts              # Database connection
  storage.ts         # Data access layer
  routes.ts          # API endpoints
shared/
  schema.ts          # Database schema & equipment data
```

## Pages
- **Home** (`/`) - Hero, Inventory Grid, Pricing Calculator, Booking Form
- **Services** (`/services`) - Three pillars: Equipment Rental, Custom Attachments, Steel Logistics
- **About Us** (`/about`) - Ironrod Steel Co. background, certifications, Houston location

## Inventory
### Forklifts
- Mitsubishi 5,000lb Lift: 19ft Mast, $750/day, $1,200/week
- Toyota 6,000lb Industrial Lift: Heavy-duty, $800/day, $1,200/week

### Attachments
- The 'Spreader' Attachment: 8ft WIDE for 4-inch forks (provides stability for long loads)
- Fork Extensions: 6ft and 8ft LONG slide-on sleeves (extends reach)

## Company Info
- **Parent Company**: Ironrod Steel Co.
- **Certifications**: SBE, MBE, HUB
- **Location**: 8122 Hillsboro St, Houston, TX
- **Expertise**: Steel fabrication, fencing, equipment rentals

## API Endpoints
- `POST /api/inquiries` - Create booking inquiry
- `GET /api/inquiries` - List all inquiries
- `GET /api/inquiries/:id` - Get single inquiry

## Running the Application
```bash
npm run dev
```
The application runs on port 5000.

## Database Commands
```bash
npm run db:push   # Push schema changes to database
```

## Brand Identity
- Primary Color: Safety Orange (#FF6B00)
- Background: Light grays with charcoal accents
- Typography: Oswald for headings, Inter for body text
- Style: Rugged, industrial, professional

## Recent Changes
- Initial MVP implementation (Feb 2026)
- Added About Us page with certifications and company background
- Added Services page with three pillars
- Added Header navigation with external link to ironrodsteel.com
- Updated Footer with pages navigation and main site link
- Clarified Spreader (8ft WIDE) vs Extensions (6ft/8ft LONG) terminology

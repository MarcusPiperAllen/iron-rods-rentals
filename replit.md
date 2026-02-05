# Iron Rod's Equipment Rentals

## Overview
A professional equipment rental web application for forklifts and specialized attachments. Built with a rugged, industrial aesthetic featuring Charcoal, Safety Orange, and White color palette with a "Safety First" professional vibe.

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
      Hero.tsx        # Landing hero section
      InventoryGrid.tsx # Equipment catalog display
      PricingCalculator.tsx # Smart pricing tool
      BookingForm.tsx # Rental inquiry form
      Footer.tsx      # Site footer
    pages/
      Home.tsx        # Main landing page
    lib/
      queryClient.ts  # API request utilities
server/
  db.ts              # Database connection
  storage.ts         # Data access layer
  routes.ts          # API endpoints
shared/
  schema.ts          # Database schema & equipment data
```

## Inventory
### Forklifts
- Mitsubishi 5,000lb Lift: 19ft Mast, $750/day, $1,200/week
- Toyota 6,000lb Industrial Lift: Heavy-duty, $800/day, $1,200/week

### Attachments
- The 'Spreader' Attachment: 8ft-wide for 4-inch forks
- Fork Extensions: 6ft and 8ft options

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
- Hero section with industrial forklift imagery
- Equipment inventory grid with specs and pricing
- Smart pricing calculator with real-time estimates
- Booking inquiry form with validation
- Footer with contact info and policy links

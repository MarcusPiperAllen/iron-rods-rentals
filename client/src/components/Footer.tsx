import { Shield, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold uppercase tracking-tight">
                Iron Rod's
              </span>
            </div>
            <p className="text-sidebar-foreground/70 text-sm leading-relaxed">
              Professional equipment rentals for construction sites, warehouses, 
              and industrial operations. Safety first, quality always.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+15551234567" 
                className="flex items-center gap-2 text-sidebar-foreground/70 hover:text-primary transition-colors"
                data-testid="link-phone"
              >
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </a>
              <a 
                href="mailto:rentals@ironrods.com" 
                className="flex items-center gap-2 text-sidebar-foreground/70 hover:text-primary transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-4 w-4" />
                rentals@ironrods.com
              </a>
              <div 
                className="flex items-start gap-2 text-sidebar-foreground/70"
                data-testid="text-address"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  1234 Industrial Blvd<br />
                  Steel City, ST 12345
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a 
                href="#inventory" 
                className="block text-sidebar-foreground/70 hover:text-primary transition-colors"
                data-testid="link-inventory"
              >
                Equipment Inventory
              </a>
              <a 
                href="#calculator" 
                className="block text-sidebar-foreground/70 hover:text-primary transition-colors"
                data-testid="link-calculator"
              >
                Pricing Calculator
              </a>
              <a 
                href="#booking" 
                className="block text-sidebar-foreground/70 hover:text-primary transition-colors"
                data-testid="link-booking"
              >
                Request a Rental
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-sidebar-foreground/60">
              &copy; {new Date().getFullYear()} Iron Rod's Equipment Rentals. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="#terms" 
                className="text-sidebar-foreground/60 hover:text-primary transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
              <a 
                href="#policy" 
                className="text-sidebar-foreground/60 hover:text-primary transition-colors"
                data-testid="link-policy"
              >
                Rental Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

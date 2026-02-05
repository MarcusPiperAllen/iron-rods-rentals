import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Phone, Mail, MapPin, ExternalLink, Clock } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";

const socialLinks = [
  { 
    href: "https://www.instagram.com/ironrod_steel/", 
    icon: SiInstagram, 
    label: "Instagram" 
  },
  { 
    href: "https://www.facebook.com/IronrodSteel/", 
    icon: SiFacebook, 
    label: "Facebook" 
  },
];

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <a 
              href="https://www.ironrodsteel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-4 hover-elevate rounded-md w-fit"
              data-testid="link-footer-logo"
            >
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold uppercase tracking-tight">
                Iron Rod's
              </span>
            </a>
            <p className="text-sidebar-foreground/70 text-sm leading-relaxed mb-4">
              A division of Ironrod Steel Co. Professional equipment rentals for 
              construction sites, warehouses, and industrial operations.
            </p>
            
            <div className="flex items-center gap-2 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md text-sidebar-foreground/70 hover-elevate"
                  data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <a
              href="https://www.ironrodsteel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/50 text-primary"
                data-testid="button-footer-main-site"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Ironrod Steel Main Site
              </Button>
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+12819027619" 
                className="flex items-center gap-2 text-sidebar-foreground/70 hover-elevate rounded-md px-2 py-1 -mx-2"
                data-testid="link-phone"
              >
                <Phone className="h-4 w-4" />
                (281) 902-7619
              </a>
              <a 
                href="mailto:sales@ironrodsteel.com" 
                className="flex items-center gap-2 text-sidebar-foreground/70 hover-elevate rounded-md px-2 py-1 -mx-2"
                data-testid="link-email"
              >
                <Mail className="h-4 w-4" />
                sales@ironrodsteel.com
              </a>
              <a 
                href="https://goo.gl/maps/XVUBxvB35Dqgzm4A8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sidebar-foreground/70 hover-elevate rounded-md px-2 py-1 -mx-2"
                data-testid="link-address"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  8122 Hillsboro St.<br />
                  Houston, TX 77029
                </span>
              </a>
              <div className="flex items-start gap-2 text-sidebar-foreground/70 px-2 py-1 -mx-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Mon-Fri: 8AM - 5PM<br />
                  Sat: 8AM - 2PM
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a 
                href="/#inventory" 
                className="block text-sidebar-foreground/70 hover-elevate rounded-md px-2 py-1 -mx-2"
                data-testid="link-inventory"
              >
                Equipment Inventory
              </a>
              <a 
                href="/#calculator" 
                className="block text-sidebar-foreground/70 hover-elevate rounded-md px-2 py-1 -mx-2"
                data-testid="link-calculator"
              >
                Pricing Calculator
              </a>
              <a 
                href="/#booking" 
                className="block text-sidebar-foreground/70 hover-elevate rounded-md px-2 py-1 -mx-2"
                data-testid="link-booking"
              >
                Request a Rental
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <div className="space-y-2 text-sm">
              <Link 
                href="/"
                className="block text-sidebar-foreground/70 hover-elevate rounded-md px-2 py-1 -mx-2"
                data-testid="link-footer-home"
              >
                Home
              </Link>
              <Link 
                href="/services"
                className="block text-sidebar-foreground/70 hover-elevate rounded-md px-2 py-1 -mx-2"
                data-testid="link-footer-services"
              >
                Services
              </Link>
              <Link 
                href="/about"
                className="block text-sidebar-foreground/70 hover-elevate rounded-md px-2 py-1 -mx-2"
                data-testid="link-footer-about"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap">
            <p className="text-sm text-sidebar-foreground/60">
              &copy; {new Date().getFullYear()} Iron Rod's Equipment Rentals. All rights reserved.
            </p>
            <p className="text-sm text-sidebar-foreground/60">
              Se habla español
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

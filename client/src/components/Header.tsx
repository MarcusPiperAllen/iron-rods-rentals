import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Shield, Menu, ExternalLink } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
];

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

export function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sidebar border-b border-sidebar-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 flex-wrap gap-2">
          <a 
            href="https://www.ironrodsteel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover-elevate rounded-md px-2 py-1 -mx-2"
            data-testid="link-home-logo"
          >
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold uppercase tracking-tight text-sidebar-foreground">
              Iron Rod's
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium hover-elevate ${
                  location === link.href
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex items-center gap-1 ml-2 border-l border-sidebar-border pl-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md text-sidebar-foreground/70 hover-elevate"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
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
              className="ml-2"
            >
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/50 text-primary"
                data-testid="button-main-site"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Main Site
              </Button>
            </a>
          </nav>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-sidebar-foreground"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-sidebar border-sidebar-border">
              <nav className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={`px-4 py-3 rounded-md text-base font-medium hover-elevate ${
                      location === link.href
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground/70"
                    }`}
                    onClick={() => setMobileOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                <div className="flex items-center gap-2 px-4 py-3 border-t border-sidebar-border mt-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md text-sidebar-foreground/70 hover-elevate"
                      data-testid={`link-mobile-social-${social.label.toLowerCase()}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>

                <a
                  href="https://www.ironrodsteel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2"
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/50 text-primary"
                    data-testid="button-mobile-main-site"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ironrod Steel Main Site
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

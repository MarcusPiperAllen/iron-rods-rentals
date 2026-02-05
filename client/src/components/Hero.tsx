import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Truck, Clock } from "lucide-react";

export function Hero() {
  const scrollToInventory = () => {
    document.getElementById("inventory")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-forklift.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-primary/20 px-4 py-2 border border-primary/30">
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Safety First. Always.</span>
        </div>
        
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight uppercase"
          data-testid="text-hero-title"
        >
          Iron Rod's
        </h1>
        <h2 
          className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 mb-2 tracking-wide uppercase"
          data-testid="text-hero-subtitle"
        >
          Equipment Rentals
        </h2>
        <p 
          className="text-xl md:text-2xl text-primary font-semibold mb-8 tracking-wide"
          data-testid="text-hero-tagline"
        >
          Heavy Lifting Made Simple
        </p>
        
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
          Professional forklift and attachment rentals for construction sites, warehouses, and industrial operations. 
          Competitive daily and weekly rates with reliable delivery.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            onClick={scrollToBooking}
            className="text-lg px-8 font-semibold"
            data-testid="button-get-quote"
          >
            Get a Quote
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={scrollToInventory}
            className="text-lg px-8 font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white"
            data-testid="button-view-inventory"
          >
            View Inventory
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-white/80">
            <Truck className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium">Delivery Available</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/80">
            <Clock className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium">Same-Day Pickup</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-white/80">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium">Fully Insured</span>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToInventory}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to inventory"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  );
}

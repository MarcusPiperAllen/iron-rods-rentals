import { Hero } from "@/components/Hero";
import { InventoryGrid } from "@/components/InventoryGrid";
import { PricingCalculator } from "@/components/PricingCalculator";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <InventoryGrid />
      <PricingCalculator />
      <BookingForm />
      <Footer />
    </div>
  );
}

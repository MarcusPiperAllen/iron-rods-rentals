import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Shield, 
  Award, 
  MapPin, 
  Building2, 
  Wrench, 
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function About() {
  const certifications = [
    { abbr: "SBE", full: "Small Business Enterprise" },
    { abbr: "MBE", full: "Minority Business Enterprise" },
    { abbr: "HUB", full: "Historically Underutilized Business" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-sidebar text-sidebar-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge 
              variant="outline" 
              className="mb-4 text-sm px-4 py-1 border-primary/50 text-primary"
            >
              About Us
            </Badge>
            <h1 
              className="font-display text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight"
              data-testid="text-about-title"
            >
              Ironrod Steel Co.
            </h1>
            <p className="text-lg text-sidebar-foreground/80 leading-relaxed">
              A certified leader in steel fabrication, fencing, and heavy equipment solutions 
              serving the Houston metropolitan area and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6 uppercase tracking-tight">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ironrod Steel Co. is a Houston-based steel fabrication and fencing company 
                  that understands the real challenges contractors face when handling heavy 
                  structural materials on the job site.
                </p>
                <p>
                  That's why we created <strong className="text-foreground">Iron Rod's Equipment Rentals</strong> - 
                  to provide our customers with the professional-grade equipment they need 
                  to safely and efficiently move the heavy steel products we sell.
                </p>
                <p>
                  From powerful forklifts to our custom-designed spreader attachments, 
                  we've built our rental fleet based on decades of hands-on experience 
                  in the steel industry.
                </p>
              </div>

              <div className="mt-8 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Our Location</p>
                  <p 
                    className="text-muted-foreground"
                    data-testid="text-about-address"
                  >
                    8122 Hillsboro St<br />
                    Houston, TX
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="h-8 w-8 text-primary" />
                    <h3 className="font-display text-xl font-bold uppercase">
                      Certified Excellence
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    We're proud to hold multiple certifications that demonstrate our 
                    commitment to quality and our status as a trusted business partner.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {certifications.map((cert) => (
                      <div 
                        key={cert.abbr}
                        className="text-center p-4 rounded-md bg-background"
                        data-testid={`badge-cert-${cert.abbr.toLowerCase()}`}
                      >
                        <div className="font-display text-2xl font-bold text-primary mb-1">
                          {cert.abbr}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {cert.full}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4 uppercase tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our expertise in steel fabrication and materials handling sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Steel Experts</h3>
                <p className="text-sm text-muted-foreground">
                  Decades of experience in steel fabrication and structural materials.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Custom Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized attachments designed for the unique demands of steel handling.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Contractor Focused</h3>
                <p className="text-sm text-muted-foreground">
                  We understand job site needs because we work alongside contractors daily.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4 uppercase tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Whether you need a forklift for a day or a full equipment package for your project, 
            we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#booking">
              <Button size="lg" data-testid="button-about-quote">
                Request a Quote
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" data-testid="button-about-services">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

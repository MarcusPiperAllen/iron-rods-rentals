import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Forklift, 
  Package, 
  Truck,
  ArrowRight,
  CheckCircle,
  Ruler,
  Weight,
  Shield
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "equipment-rental",
      icon: Forklift,
      title: "Equipment Rental",
      subtitle: "Professional Mitsubishi & Toyota Lifts",
      description: "Access our fleet of well-maintained, industrial-grade forklifts perfect for construction sites, warehouses, and steel yards. All units are inspected before every rental and come with competitive daily and weekly rates.",
      features: [
        "Mitsubishi 5,000lb Lift with 19ft mast",
        "Toyota 6,000lb Industrial Lift for heavy-duty work",
        "Same-day pickup available",
        "Delivery options throughout Houston area",
      ],
    },
    {
      id: "custom-attachments",
      icon: Package,
      title: "Custom Attachments",
      subtitle: "Specialized Spreaders & Extensions",
      description: "Our custom-designed attachments solve the unique challenges of handling long structural steel, bundles, and oversized materials. Built from our decades of hands-on experience in the steel industry.",
      features: [
        "8ft-WIDE Spreader for 4-inch forks - perfect for stability when handling long 'sticks' and bundles",
        "6ft-LONG Fork Extensions - slide-on sleeves for extended reach",
        "8ft-LONG Fork Extensions - maximum reach for longer materials",
        "Heavy-duty steel construction on all attachments",
      ],
    },
    {
      id: "steel-logistics",
      icon: Truck,
      title: "Steel Logistics",
      subtitle: "Moving Structural Steel Efficiently",
      description: "As a steel fabrication company, we understand the complete logistics chain. We help contractors move structural steel from our yard to your job site with the right equipment and expertise.",
      features: [
        "Equipment paired with your steel order",
        "Expert guidance on load balancing",
        "Coordinated delivery scheduling",
        "On-site support for complex lifts",
      ],
    },
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
              What We Offer
            </Badge>
            <h1 
              className="font-display text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tight"
              data-testid="text-services-title"
            >
              Our Services
            </h1>
            <p className="text-lg text-sidebar-foreground/80 leading-relaxed">
              Three pillars of support to help you handle heavy materials safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="overflow-hidden"
                data-testid={`card-service-${service.id}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-md bg-primary/10">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{`0${index + 1}`}</Badge>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-2 uppercase tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-primary font-medium mb-4">{service.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li 
                          key={fIndex} 
                          className="flex items-start gap-3"
                          data-testid={`text-feature-${service.id}-${fIndex}`}
                        >
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-muted/50 p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="text-center">
                      <service.icon className="h-24 w-24 text-primary/20 mx-auto mb-4" />
                      <p className="text-muted-foreground text-sm">
                        {service.id === "equipment-rental" && "Daily & weekly rates available"}
                        {service.id === "custom-attachments" && "Designed for steel handling"}
                        {service.id === "steel-logistics" && "Integrated with your steel order"}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4 uppercase tracking-tight">
              Attachment Specifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding the difference between our spreader and extensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Weight className="h-5 w-5 text-primary" />
                  The 'Spreader' Attachment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-md">
                    <p className="font-semibold text-primary mb-1">8 feet WIDE</p>
                    <p className="text-sm text-muted-foreground">
                      The spreader extends horizontally to create an 8-foot wide platform, 
                      providing stability for long loads and bundles.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span>Designed for 4-inch wide forks</span>
                  </div>
                  <p className="text-sm text-muted-foreground" data-testid="text-spreader-desc">
                    Perfect for balancing long steel "sticks", pipe bundles, and structural 
                    members that need wide support points to prevent tipping or bowing.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Ruler className="h-5 w-5 text-primary" />
                  Fork Extensions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-md">
                    <p className="font-semibold mb-1">6ft or 8ft LONG</p>
                    <p className="text-sm text-muted-foreground">
                      Slide-on sleeves that extend the length of your existing forks, 
                      giving you extra reach.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span>Universal fit for standard forks</span>
                  </div>
                  <p className="text-sm text-muted-foreground" data-testid="text-extensions-desc">
                    Ideal for reaching deeper into trailers, handling wider pallets, 
                    or managing loads that extend beyond standard fork length.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4 uppercase tracking-tight">
            Need Equipment for Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get a custom quote based on your specific needs. We'll help you choose 
            the right equipment and attachments.
          </p>
          <Link href="/#booking">
            <Button size="lg" data-testid="button-services-quote">
              Request a Quote
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { equipmentData, type Equipment } from "@shared/schema";
import { Forklift, Package, Ruler, Weight, ArrowUpDown } from "lucide-react";

function EquipmentCard({ item }: { item: Equipment }) {
  const isForklift = item.type === "forklift";
  
  return (
    <Card 
      className="group hover-elevate transition-all duration-300"
      data-testid={`card-equipment-${item.id}`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-primary/10">
              {isForklift ? (
                <Forklift className="h-5 w-5 text-primary" />
              ) : (
                <Package className="h-5 w-5 text-primary" />
              )}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold leading-tight">
                {item.name}
              </CardTitle>
              <Badge 
                variant={isForklift ? "default" : "secondary"} 
                className="mt-1"
              >
                {isForklift ? "Forklift" : "Attachment"}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        
        <div className="grid grid-cols-2 gap-2">
          {item.capacity && (
            <div className="flex items-center gap-2 text-sm">
              <Weight className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{item.capacity}</span>
            </div>
          )}
          {item.mastHeight && (
            <div className="flex items-center gap-2 text-sm">
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{item.mastHeight} mast</span>
            </div>
          )}
          {item.length && (
            <div className="flex items-center gap-2 text-sm">
              <Ruler className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{item.length}</span>
            </div>
          )}
          {item.forkWidth && (
            <div className="flex items-center gap-2 text-sm">
              <Package className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{item.forkWidth}</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
          {item.specs.map((spec, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs font-normal"
              data-testid={`badge-spec-${item.id}-${index}`}
            >
              {spec}
            </Badge>
          ))}
        </div>
        
        {item.dailyRate && item.weeklyRate && (
          <div className="pt-3 border-t border-border">
            <div className="flex items-baseline justify-between">
              <div>
                <span 
                  className="text-2xl font-bold text-foreground"
                  data-testid={`text-daily-rate-${item.id}`}
                >
                  ${item.dailyRate}
                </span>
                <span className="text-sm text-muted-foreground">/day</span>
              </div>
              <div className="text-right">
                <span 
                  className="text-lg font-semibold text-foreground"
                  data-testid={`text-weekly-rate-${item.id}`}
                >
                  ${item.weeklyRate}
                </span>
                <span className="text-sm text-muted-foreground">/week</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function InventoryGrid() {
  const forklifts = equipmentData.filter(e => e.type === "forklift");
  const attachments = equipmentData.filter(e => e.type === "attachment");

  return (
    <section id="inventory" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-1">
            Our Fleet
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
            Available Equipment
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quality machines maintained to the highest standards. 
            All equipment is inspected before every rental.
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Forklift className="h-5 w-5 text-primary" />
            Forklifts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forklifts.map(item => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            Attachments & Extensions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attachments.map(item => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

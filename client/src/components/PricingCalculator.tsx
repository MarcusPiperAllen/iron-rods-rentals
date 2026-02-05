import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { equipmentData } from "@shared/schema";
import { Calculator, Forklift, Package, ChevronRight } from "lucide-react";

export function PricingCalculator() {
  const [selectedEquipment, setSelectedEquipment] = useState<string>("");
  const [selectedAttachment, setSelectedAttachment] = useState<string>("none");
  const [pricingType, setPricingType] = useState<"daily" | "weekly">("daily");

  const forklifts = equipmentData.filter(e => e.type === "forklift");
  const attachments = equipmentData.filter(e => e.type === "attachment");

  const estimate = useMemo(() => {
    const equipment = forklifts.find(e => e.id === selectedEquipment);
    if (!equipment) return null;

    const basePrice = pricingType === "daily" ? equipment.dailyRate : equipment.weeklyRate;
    let attachmentNote = "";

    if (selectedAttachment !== "none") {
      const attachment = attachments.find(a => a.id === selectedAttachment);
      if (attachment) {
        attachmentNote = `+ ${attachment.name}`;
      }
    }

    return {
      equipmentName: equipment.name,
      basePrice: basePrice || 0,
      attachmentNote,
      pricingType,
    };
  }, [selectedEquipment, selectedAttachment, pricingType, forklifts, attachments]);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-1">
            Estimate Your Costs
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
            Pricing Calculator
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate for your rental. Select your equipment and see pricing in real-time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Configure Your Rental
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <Forklift className="h-4 w-4" />
                    Select Equipment
                  </Label>
                  <Select 
                    value={selectedEquipment} 
                    onValueChange={setSelectedEquipment}
                  >
                    <SelectTrigger data-testid="select-equipment">
                      <SelectValue placeholder="Choose a forklift..." />
                    </SelectTrigger>
                    <SelectContent>
                      {forklifts.map(item => (
                        <SelectItem 
                          key={item.id} 
                          value={item.id}
                          data-testid={`option-equipment-${item.id}`}
                        >
                          {item.name} - ${item.dailyRate}/day
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Add Attachment (Optional)
                  </Label>
                  <Select 
                    value={selectedAttachment} 
                    onValueChange={setSelectedAttachment}
                  >
                    <SelectTrigger data-testid="select-attachment">
                      <SelectValue placeholder="No attachment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No attachment</SelectItem>
                      {attachments.map(item => (
                        <SelectItem 
                          key={item.id} 
                          value={item.id}
                          data-testid={`option-attachment-${item.id}`}
                        >
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Rental Period</Label>
                  <RadioGroup
                    value={pricingType}
                    onValueChange={(v) => setPricingType(v as "daily" | "weekly")}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value="daily" 
                        id="daily" 
                        data-testid="radio-daily"
                      />
                      <Label htmlFor="daily" className="cursor-pointer font-normal">
                        Daily Rate
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value="weekly" 
                        id="weekly"
                        data-testid="radio-weekly"
                      />
                      <Label htmlFor="weekly" className="cursor-pointer font-normal">
                        Weekly Rate
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-sidebar text-sidebar-foreground">
              <CardHeader>
                <CardTitle className="text-sidebar-foreground">
                  Your Estimate
                </CardTitle>
              </CardHeader>
              <CardContent>
                {estimate ? (
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-sidebar-foreground/70 mb-1">
                        Selected Equipment
                      </p>
                      <p 
                        className="text-lg font-semibold"
                        data-testid="text-selected-equipment"
                      >
                        {estimate.equipmentName}
                      </p>
                      {estimate.attachmentNote && (
                        <p 
                          className="text-sm text-primary mt-1"
                          data-testid="text-attachment-note"
                        >
                          {estimate.attachmentNote}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-sidebar-border">
                      <p className="text-sm text-sidebar-foreground/70 mb-2">
                        {estimate.pricingType === "daily" ? "Daily" : "Weekly"} Rate
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span 
                          className="text-4xl font-bold text-primary"
                          data-testid="text-estimate-price"
                        >
                          ${estimate.basePrice.toLocaleString()}
                        </span>
                        <span className="text-sidebar-foreground/70">
                          /{estimate.pricingType === "daily" ? "day" : "week"}
                        </span>
                      </div>
                      {estimate.attachmentNote && (
                        <p className="text-xs text-sidebar-foreground/60 mt-2">
                          * Attachment pricing available upon request
                        </p>
                      )}
                    </div>

                    <Button 
                      onClick={scrollToBooking}
                      className="w-full"
                      size="lg"
                      data-testid="button-request-quote"
                    >
                      Request This Quote
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calculator className="h-12 w-12 mx-auto text-sidebar-foreground/30 mb-4" />
                    <p className="text-sidebar-foreground/60">
                      Select equipment above to see pricing
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

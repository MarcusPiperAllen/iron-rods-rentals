import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertInquirySchema, equipmentData, type InsertInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { ClipboardList, User, Phone, Mail, Truck, Calendar, Send, CheckCircle, Loader2 } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/sales@ironrodsteel.com";

interface FormData extends InsertInquiry {
  email?: string;
}

export function BookingForm() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const forklifts = equipmentData.filter(e => e.type === "forklift");
  const attachments = equipmentData.filter(e => e.type === "attachment");

  const form = useForm<FormData>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      deliveryType: "pickup",
      equipmentId: "",
      attachmentId: "",
      pricingType: "daily",
      startDate: "",
      endDate: "",
      notes: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const equipment = equipmentData.find(e => e.id === data.equipmentId);
      const attachment = data.attachmentId && data.attachmentId !== "none" 
        ? equipmentData.find(e => e.id === data.attachmentId) 
        : null;

      const formData = new FormData();
      formData.append("_subject", `NEW FORKLIFT RENTAL REQUEST - ${data.name}`);
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("email", data.email || "Not provided");
      formData.append("equipment", equipment?.name || data.equipmentId);
      formData.append("attachment", attachment?.name || "None");
      formData.append("delivery_type", data.deliveryType === "delivery" ? "Delivery (we bring it)" : "Pick-up (customer comes to us)");
      formData.append("pricing_type", data.pricingType === "daily" ? "Daily Rate" : "Weekly Rate");
      formData.append("start_date", data.startDate);
      formData.append("end_date", data.endDate);
      formData.append("notes", data.notes || "No additional notes");

      try {
        const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: {
            "Accept": "application/json"
          }
        });

        if (!formspreeResponse.ok) {
          console.error("Formspree submission failed, saving to database as backup");
        } else {
          console.log("Email sent successfully to sales@ironrodsteel.com");
        }
      } catch (err) {
        console.error("Formspree error:", err);
      }

      const dbResponse = await apiRequest("POST", "/api/inquiries", {
        name: data.name,
        phone: data.phone,
        deliveryType: data.deliveryType,
        equipmentId: data.equipmentId,
        attachmentId: data.attachmentId,
        pricingType: data.pricingType,
        startDate: data.startDate,
        endDate: data.endDate,
        notes: data.notes,
      });
      return dbResponse.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Inquiry Submitted!",
        description: "Your request has been sent to sales@ironrodsteel.com. We'll contact you within 24 hours.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit inquiry. Please try again or call us at (281) 902-7619.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="py-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground mb-6">
                Your rental inquiry has been sent to our team at sales@ironrodsteel.com. 
                We'll contact you within 24 hours to confirm details and availability.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Need immediate assistance? Call or text us at{" "}
                <a href="tel:+12819027619" className="text-primary font-medium">
                  (281) 902-7619
                </a>
              </p>
              <Button 
                variant="outline" 
                onClick={() => setSubmitted(false)}
                data-testid="button-new-inquiry"
              >
                Submit Another Inquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-1">
            Get Started
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
            Request a Rental
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours 
            with availability and final pricing.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-primary" />
              Booking Inquiry Form
            </CardTitle>
            <CardDescription>
              All fields marked with * are required. Your inquiry will be sent directly to sales@ironrodsteel.com.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form 
                action={FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="NEW FORKLIFT RENTAL REQUEST" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Full Name *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Smith"
                            data-testid="input-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(555) 123-4567" 
                            type="tel"
                            data-testid="input-phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email Address (Optional)
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your@email.com" 
                          type="email"
                          data-testid="input-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="deliveryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Truck className="h-4 w-4" />
                        Delivery or Pick-up? *
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-wrap gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem 
                              value="delivery" 
                              id="form-delivery"
                              data-testid="radio-delivery"
                            />
                            <Label htmlFor="form-delivery" className="cursor-pointer font-normal">
                              Delivery (we bring it to you)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem 
                              value="pickup" 
                              id="form-pickup"
                              data-testid="radio-pickup"
                            />
                            <Label htmlFor="form-pickup" className="cursor-pointer font-normal">
                              Pick-up (you come get it)
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="equipmentId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Equipment *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-form-equipment">
                              <SelectValue placeholder="Select equipment..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {forklifts.map(item => (
                              <SelectItem key={item.id} value={item.id}>
                                {item.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="attachmentId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Attachment (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || ""}>
                          <FormControl>
                            <SelectTrigger data-testid="select-form-attachment">
                              <SelectValue placeholder="No attachment" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">No attachment</SelectItem>
                            {attachments.map(item => (
                              <SelectItem key={item.id} value={item.id}>
                                {item.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="pricingType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rental Period Type *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex flex-wrap gap-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem 
                              value="daily" 
                              id="form-daily"
                              data-testid="radio-form-daily"
                            />
                            <Label htmlFor="form-daily" className="cursor-pointer font-normal">
                              Daily Rate
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem 
                              value="weekly" 
                              id="form-weekly"
                              data-testid="radio-form-weekly"
                            />
                            <Label htmlFor="form-weekly" className="cursor-pointer font-normal">
                              Weekly Rate
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Start Date *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="date"
                            data-testid="input-start-date"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          End Date *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="date"
                            data-testid="input-end-date"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any special requirements, delivery address, or questions..."
                          className="min-h-[100px]"
                          data-testid="textarea-notes"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={mutation.isPending}
                  data-testid="button-submit-inquiry"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending to sales@ironrodsteel.com...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

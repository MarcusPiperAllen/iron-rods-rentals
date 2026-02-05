import { sql } from "drizzle-orm";
import { pgTable, text, varchar, date, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  deliveryType: text("delivery_type").notNull(),
  equipmentId: text("equipment_id").notNull(),
  attachmentId: text("attachment_id"),
  pricingType: text("pricing_type").notNull(),
  startDate: date("start_date").notNull(),
  endDate: date("end_date").notNull(),
  notes: text("notes"),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
}).extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  deliveryType: z.enum(["delivery", "pickup"]),
  equipmentId: z.string().min(1, "Please select equipment"),
  pricingType: z.enum(["daily", "weekly"]),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;

export interface Equipment {
  id: string;
  name: string;
  type: "forklift" | "attachment";
  capacity?: string;
  mastHeight?: string;
  length?: string;
  forkWidth?: string;
  description: string;
  dailyRate?: number;
  weeklyRate?: number;
  specs: string[];
}

export const equipmentData: Equipment[] = [
  {
    id: "mitsubishi-5000",
    name: "Mitsubishi 5,000lb Lift",
    type: "forklift",
    capacity: "5,000 lbs",
    mastHeight: "19ft",
    description: "Reliable workhorse for medium-duty lifting operations. Perfect for warehouses and construction sites.",
    dailyRate: 750,
    weeklyRate: 1200,
    specs: ["5,000 lb capacity", "19ft mast height", "Propane powered", "Side shift included"]
  },
  {
    id: "toyota-6000",
    name: "Toyota 6,000lb Industrial Lift",
    type: "forklift",
    capacity: "6,000 lbs",
    description: "Heavy-duty industrial forklift built for demanding environments. Toyota reliability you can count on.",
    dailyRate: 800,
    weeklyRate: 1200,
    specs: ["6,000 lb capacity", "Heavy-duty specs", "Industrial grade", "Pneumatic tires"]
  },
  {
    id: "spreader-8ft",
    name: "The 'Spreader' Attachment",
    type: "attachment",
    length: "8ft WIDE",
    forkWidth: "4-inch forks",
    description: "Custom 8ft-WIDE forklift spreader designed for 4-inch wide forks. Provides stability for balancing long steel 'sticks' and bundles by creating wide support points.",
    specs: ["8ft WIDE spread", "For 4-inch forks", "Stabilizes long loads", "Heavy-duty steel"]
  },
  {
    id: "fork-ext-6ft",
    name: "Fork Extensions - 6ft",
    type: "attachment",
    length: "6ft LONG",
    description: "6ft-LONG slide-on fork extension sleeves. Extend your reach for handling longer materials and reaching deeper into trailers.",
    specs: ["6ft LONG sleeves", "Slide-on design", "Universal fit", "Steel construction"]
  },
  {
    id: "fork-ext-8ft",
    name: "Fork Extensions - 8ft",
    type: "attachment",
    length: "8ft LONG",
    description: "8ft-LONG slide-on fork extension sleeves. Maximum reach for the longest materials and deepest trailer loads.",
    specs: ["8ft LONG sleeves", "Slide-on design", "Universal fit", "Steel construction"]
  }
];

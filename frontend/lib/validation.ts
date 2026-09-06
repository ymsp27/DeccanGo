import { z } from "zod";

export const bookingFormSchema = z.object({
  tab: z.enum(["parcel", "vehicle", "multi_stop", "business"]),
  pickupLocation: z.string().min(3, "Please enter a valid pickup address in Hyderabad"),
  dropLocation: z.string().min(3, "Please enter a valid drop address in Hyderabad"),
  packageType: z.string().min(2, "Select cargo category"),
  weightKg: z.number().min(0.5, "Weight must be at least 0.5 kg").max(10000, "Max weight is 10,000 kg"),
  vehicleType: z.enum(["bike", "auto", "erickshaw", "tata_ace", "1ton", "2_5ton", "refrigerated"]),
  deliveryType: z.enum(["standard", "express", "scheduled"]),
  senderName: z.string().optional(),
  senderPhone: z.string().optional(),
  receiverName: z.string().optional(),
  receiverPhone: z.string().optional(),
  notes: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export const multiStopSchema = z.object({
  stops: z
    .array(
      z.object({
        name: z.string().min(2, "Stop name is required"),
        area: z.string().min(2, "Hyderabad area is required"),
        contactPerson: z.string().optional(),
        contactPhone: z.string().optional(),
      })
    )
    .min(2, "At least 2 stops are required for multi-stop delivery"),
  vehicleType: z.enum(["bike", "auto", "tata_ace", "1ton", "2_5ton"]),
  deliveryDate: z.string().optional(),
});

export type MultiStopFormData = z.infer<typeof multiStopSchema>;

export const bulkOrderUploadSchema = z.object({
  orders: z.array(
    z.object({
      customerName: z.string(),
      phone: z.string(),
      pickup: z.string(),
      drop: z.string(),
      weightKg: z.number(),
      packageType: z.string(),
      codAmount: z.number().default(0),
    })
  ),
});

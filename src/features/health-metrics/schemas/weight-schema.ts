import { z } from "zod";

export const weightSchema = z.object({
  value: z.coerce.number().min(0.1, "Weight must be greater than 0"),
  date: z.string().min(1, "Date is required"),
});

export type WeightFormValues = z.infer<typeof weightSchema>;
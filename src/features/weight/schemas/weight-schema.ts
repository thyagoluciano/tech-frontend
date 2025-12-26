import { z } from "zod";

export const WeightEntrySchema = z.object({
  id: z.string(),
  date: z.string(),
  value: z.number(),
});

export const WeightHistorySchema = z.array(WeightEntrySchema);

export type WeightEntry = z.infer<typeof WeightEntrySchema>;
import { IWeightRepository, WeightEntry } from "./i-weight-repository";

export class WeightRepository implements IWeightRepository {
  async create(data: Omit<WeightEntry, "id">): Promise<WeightEntry> {
    const response = await fetch("/api/weights", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Failed to save weight");
    return response.json();
  }
}
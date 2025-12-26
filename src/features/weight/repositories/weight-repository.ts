import { IWeightRepository } from "./weight-repository-interface";

export class WeightRepository implements IWeightRepository {
  async getWeeklyWeights(): Promise<any[]> {
    const response = await fetch("/api/weight/weekly");
    if (!response.ok) throw new Error("Failed to fetch weight data");
    return response.json();
  }
}
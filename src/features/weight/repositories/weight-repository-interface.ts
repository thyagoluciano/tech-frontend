import { WeightEntry } from "../schemas/weight-schema";

export interface IWeightRepository {
  getWeeklyWeights(): Promise<WeightEntry[]>;
}
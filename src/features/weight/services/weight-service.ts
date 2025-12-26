import { IWeightRepository } from "../repositories/weight-repository-interface";
import { WeightHistorySchema } from "../schemas/weight-schema";

export class WeightService {
  constructor(private repository: IWeightRepository) {}

  async getWeeklyEvolution() {
    const data = await this.repository.getWeeklyWeights();
    return WeightHistorySchema.parse(data);
  }
}
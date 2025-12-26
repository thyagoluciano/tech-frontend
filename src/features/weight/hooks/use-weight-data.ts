import { useQuery } from "@tanstack/react-query";
import { WeightRepository } from "../repositories/weight-repository";
import { WeightService } from "../services/weight-service";

const repository = new WeightRepository();
const service = new WeightService(repository);

export function useWeightData() {
  return useQuery({
    queryKey: ["weight-evolution"],
    queryFn: () => service.getWeeklyEvolution(),
  });
}
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { WeightRepository } from "../repositories/weight-repository";
import { WeightFormValues } from "../schemas/weight-schema";

export function useCreateWeight() {
  const queryClient = useQueryClient();
  const repository = new WeightRepository();

  return useMutation({
    mutationFn: (data: WeightFormValues) => repository.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["weights"] });
    },
  });
}
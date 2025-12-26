export interface WeightEntry {
  id: string;
  value: number;
  date: string;
}

export interface IWeightRepository {
  create(data: Omit<WeightEntry, "id">): Promise<WeightEntry>;
}
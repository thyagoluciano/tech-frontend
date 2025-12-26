import { render, screen } from "@testing-library/react";
import { WeightChart } from "./weight-chart";
import { useWeightData } from "../hooks/use-weight-data";
import { vi, describe, it, expect } from "vitest";

vi.mock("../hooks/use-weight-data");

describe("WeightChart", () => {
  it("should render loading state", () => {
    (useWeightData as any).mockReturnValue({ isLoading: true });
    render(<WeightChart />);
    expect(screen.getByRole("img", { hidden: true })).toHaveClass("animate-spin");
  });

  it("should render error state", () => {
    (useWeightData as any).mockReturnValue({ isError: true, isLoading: false });
    render(<WeightChart />);
    expect(screen.getByText(/error loading weight data/i)).toBeInTheDocument();
  });

  it("should render chart title when data is loaded", () => {
    (useWeightData as any).mockReturnValue({
      data: [{ id: "1", date: "2023-10-01", value: 80 }],
      isLoading: false,
      isError: false,
    });
    render(<WeightChart />);
    expect(screen.getByText("Weight Evolution")).toBeInTheDocument();
  });
});
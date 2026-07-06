import type { CostSummary } from "../types/cost.types";

export const mockCost: CostSummary = {
  items: [
    {
      id: 1,
      category: "Furniture",
      amount: 65000,
    },
    {
      id: 2,
      category: "Painting",
      amount: 18000,
    },
    {
      id: 3,
      category: "Lighting",
      amount: 12000,
    },
    {
      id: 4,
      category: "Flooring",
      amount: 45000,
    },
    {
      id: 5,
      category: "Decoration",
      amount: 15000,
    },
  ],

  total: 155000,
};

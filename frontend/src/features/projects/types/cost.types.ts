export interface CostItem {
  id: number;
  category: string;
  amount: number;
}

export interface CostSummary {
  items: CostItem[];
  total: number;
}
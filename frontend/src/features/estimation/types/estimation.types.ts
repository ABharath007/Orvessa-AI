export interface EstimationItem {
  id: number;
  category: string;
  amount: number;
}

export interface EstimationSummary {
  total: number;
  items: EstimationItem[];
}
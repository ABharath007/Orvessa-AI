export interface CurrentPlan {
  name: string;
  price: number;
  billingCycle: "Monthly" | "Yearly";
  status: "Active" | "Expired" | "Trial";
  renewalDate: string;
}


export interface UsageItem {
  id: number;
  title: string;
  used: number;
  limit: number;
  unit?: string;
}

export interface UsageAnalytics {
  id: number;
  title: string;
  value: string;
  progress: number;
  trend: string;
  icon: "design" | "project" | "storage" | "credit";
}


export interface Invoice {
  id: number;
  invoiceNumber: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending" | "Failed";
}

export interface PaymentMethod {
  cardHolder: string;
  cardBrand: string;
  last4: string;
  expiry: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  billingCycle: string;
  description: string;
  popular: boolean;
  current?: boolean;
  features: string[];
}

export interface FeatureComparison {
  feature: string;
  free: boolean;
  pro: boolean;
  business: boolean;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
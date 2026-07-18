import type {
  CurrentPlan,
  UsageItem,
  UsageAnalytics,
  Invoice,
  PaymentMethod,
  PricingPlan,
  FeatureComparison,
  FAQ,
} from "../types/subscription.types";


export const currentPlan: CurrentPlan = {
  name: "Pro",
  price: 999,
  billingCycle: "Monthly",
  status: "Active",
  renewalDate: "25 August 2026",
};


export const usageData: UsageItem[] = [
  {
    id: 1,
    title: "AI Designs",
    used: 128,
    limit: 500,
  },
  {
    id: 2,
    title: "Projects",
    used: 18,
    limit: 100,
  },
  {
    id: 3,
    title: "Cloud Storage",
    used: 12,
    limit: 50,
    unit: "GB",
  },
];

export const usageAnalytics: UsageAnalytics[] = [
  {
    id: 1,
    title: "AI Designs",
    value: "128 / 500",
    progress: 26,
    trend: "+12% this month",
    icon: "design",
  },
  {
    id: 2,
    title: "Projects",
    value: "18 / 100",
    progress: 18,
    trend: "+5 this week",
    icon: "project",
  },
  {
    id: 3,
    title: "Storage",
    value: "12 / 50 GB",
    progress: 24,
    trend: "24% Used",
    icon: "storage",
  },
  {
    id: 4,
    title: "AI Credits",
    value: "372 Left",
    progress: 74,
    trend: "74% Remaining",
    icon: "credit",
  },
];


export const invoices: Invoice[] = [
  {
    id: 1,
    invoiceNumber: "INV-1001",
    date: "01 Jul 2026",
    amount: 999,
    status: "Paid",
  },
  {
    id: 2,
    invoiceNumber: "INV-1002",
    date: "01 Jun 2026",
    amount: 999,
    status: "Paid",
  },
  {
    id: 3,
    invoiceNumber: "INV-1003",
    date: "01 May 2026",
    amount: 999,
    status: "Paid",
  },
];

export const paymentMethod: PaymentMethod = {
  cardHolder: "Kiran",
  cardBrand: "Visa",
  last4: "4589",
  expiry: "08/29",
};


export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Free",
    price: 0,
    billingCycle: "Forever",
    description: "Perfect for beginners",
    popular: false,
    current: false,
    features: [
      "5 AI Designs",
      "1 Project",
      "Basic Furniture",
      "Community Support",
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: 999,
    billingCycle: "Month",
    description: "Best for professionals",
    popular: true,
    current: true,
    features: [
      "Unlimited AI Designs",
      "100 Projects",
      "HD Exports",
      "Furniture Catalog",
      "Cost Estimation",
      "Priority Support",
    ],
  },
  {
    id: 3,
    name: "Business",
    price: 2999,
    billingCycle: "Month",
    description: "For teams & companies",
    popular: false,
    current: false,
    features: [
      "Unlimited Everything",
      "Team Collaboration",
      "Analytics",
      "API Access",
      "Dedicated Support",
    ],
  },
];

export const featureComparison: FeatureComparison[] = [
  {
    feature: "AI Designs",
    free: true,
    pro: true,
    business: true,
  },
  {
    feature: "HD Export",
    free: false,
    pro: true,
    business: true,
  },
  {
    feature: "Furniture Catalog",
    free: false,
    pro: true,
    business: true,
  },
  {
    feature: "Cost Estimation",
    free: false,
    pro: true,
    business: true,
  },
  {
    feature: "Team Collaboration",
    free: false,
    pro: false,
    business: true,
  },
];


export const faqData: FAQ[] = [
  {
    id: 1,
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel your subscription at any time. Your plan will remain active until the end of the current billing period.",
  },
  {
    id: 2,
    question: "Can I upgrade later?",
    answer:
      "Absolutely. You can upgrade or downgrade your subscription whenever you want.",
  },
  {
    id: 3,
    question: "What happens after my plan expires?",
    answer:
      "You'll automatically move to the Free plan while keeping your existing projects and data.",
  },
  {
    id: 4,
    question: "Do unused AI credits roll over?",
    answer:
      "No. AI credits reset every billing cycle to keep pricing fair for everyone.",
  },
  {
    id: 5,
    question: "Do you offer refunds?",
    answer:
      "Refund requests are reviewed according to our refund policy. Contact support if you need assistance.",
  },
];


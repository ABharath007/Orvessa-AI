export interface GeneratedImage {
  id: string;
  image: string;
}

export interface FurnitureRecommendation {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
}

export interface CostBreakdown {
  category: string;
  amount: number;
}

export interface AIResult {
  id: string;

  title: string;

  roomType: string;

  style: string;

  colorPalette: string;

  originalImage: string;

  generatedImages: GeneratedImage[];

  furniture: FurnitureRecommendation[];

  costBreakdown: CostBreakdown[];

  totalCost: number;

  createdAt: string;
}
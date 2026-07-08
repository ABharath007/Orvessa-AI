export interface GeneratedImage {
  id: number;
  image: string;
}

export interface Recommendation {
  furniture: string[];
  colorPalette: string[];
  estimatedCost: number;
}

export interface ResultData {
  id: number;
  originalImage: string;
  roomType: string;
  style: string;
  generatedImages: GeneratedImage[];
  recommendation: Recommendation;
}
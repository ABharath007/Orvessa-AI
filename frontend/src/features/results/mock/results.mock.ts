import type { AIResult } from "../types/results.types";

export const mockResult: AIResult = {
  id: "1",

  title: "Modern Living Room",

  roomType: "Living Room",

  style: "Modern",

  colorPalette: "Neutral",

  originalImage:
    "https://picsum.photos/1200/800?random=10",

  generatedImages: [
    {
      id: "1",
      image:
        "https://picsum.photos/1200/800?random=11",
    },
    {
      id: "2",
      image:
        "https://picsum.photos/1200/800?random=12",
    },
    {
      id: "3",
      image:
        "https://picsum.photos/1200/800?random=13",
    },
    {
      id: "4",
      image:
        "https://picsum.photos/1200/800?random=14",
    },
  ],

  furniture: [
    {
      id: "1",
      name: "Modern Sofa",
      brand: "IKEA",
      price: 45000,
      image:
        "https://picsum.photos/400/400?random=20",
    },
    {
      id: "2",
      name: "Coffee Table",
      brand: "Urban Ladder",
      price: 12000,
      image:
        "https://picsum.photos/400/400?random=21",
    },
  ],

  costBreakdown: [
    {
      category: "Furniture",
      amount: 120000,
    },
    {
      category: "Lighting",
      amount: 20000,
    },
    {
      category: "Painting",
      amount: 15000,
    },
  ],

  totalCost: 155000,

  createdAt: "2026-07-15",
};
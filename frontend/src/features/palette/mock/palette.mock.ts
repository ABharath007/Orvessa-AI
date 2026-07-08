import type { Palette } from "../types/palette.types";

export const mockPalettes: Palette[] = [
  {
    id: 1,
    name: "Modern Neutral",
    category: "Living Room",
    description: "Soft neutral colors for a modern living room.",
    colors: [
      { id: 1, hex: "#F5F1EC" },
      { id: 2, hex: "#D9CFC1" },
      { id: 3, hex: "#A89F91" },
      { id: 4, hex: "#5B5650" },
    ],
  },
  {
    id: 2,
    name: "Scandinavian",
    category: "Bedroom",
    description: "Minimal Scandinavian inspired palette.",
    colors: [
      { id: 1, hex: "#FFFFFF" },
      { id: 2, hex: "#E8E8E8" },
      { id: 3, hex: "#C7C7C7" },
      { id: 4, hex: "#444444" },
    ],
  },
  {
    id: 3,
    name: "Luxury Gold",
    category: "Dining Room",
    description: "Elegant luxury interior palette.",
    colors: [
      { id: 1, hex: "#F6E27A" },
      { id: 2, hex: "#D4AF37" },
      { id: 3, hex: "#6B5B2A" },
      { id: 4, hex: "#2D2D2D" },
    ],
  },
];

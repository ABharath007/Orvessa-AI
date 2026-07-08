import type { ResultData } from "../types/results.types";

export const resultData: ResultData = {
  id: 1,

  originalImage:
    "https://picsum.photos/800/600?random=101",

  roomType: "Living Room",

  style: "Modern",

  generatedImages: [
    {
      id: 1,
      image: "https://picsum.photos/800/600?random=102",
    },
    {
      id: 2,
      image: "https://picsum.photos/800/600?random=103",
    },
    {
      id: 3,
      image: "https://picsum.photos/800/600?random=104",
    },
    {
      id: 4,
      image: "https://picsum.photos/800/600?random=105",
    },
  ],

  recommendation: {
    furniture: [
      "Modern Grey Sofa",
      "Wooden Coffee Table",
      "Floor Lamp",
    ],

    colorPalette: [
      "#F5F1EC",
      "#D9CFC1",
      "#A89F91",
      "#5B5650",
    ],

    estimatedCost: 175000,
  },
};
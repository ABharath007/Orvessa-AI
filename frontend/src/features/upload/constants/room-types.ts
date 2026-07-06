import {
  Sofa,
  BedDouble,
  CookingPot,
  Bath,
  Briefcase,
  UtensilsCrossed,
} from "lucide-react";

export const roomTypes = [
  {
    id: "living-room",
    title: "Living Room",
    description: "Family & entertainment space",
    icon: Sofa,
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Relaxing and cozy designs",
    icon: BedDouble,
  },
  {
    id: "kitchen",
    title: "Kitchen",
    description: "Modern cooking spaces",
    icon: CookingPot,
  },
  {
    id: "bathroom",
    title: "Bathroom",
    description: "Elegant bathroom interiors",
    icon: Bath,
  },
  {
    id: "office",
    title: "Office",
    description: "Productive workspaces",
    icon: Briefcase,
  },
  {
    id: "dining-room",
    title: "Dining Room",
    description: "Dining & gathering space",
    icon: UtensilsCrossed,
  },
];
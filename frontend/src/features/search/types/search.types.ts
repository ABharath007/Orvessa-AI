export interface SearchItem {
  id: number;
  title: string;
  description: string;
  href: string;
  category:
    | "Project"
    | "Gallery"
    | "Furniture"
    | "Palette";
}
export interface Color {
  id: number;
  hex: string;
}

export interface Palette {
  id: number;
  name: string;
  category: string;
  description: string;
  colors: Color[];
}

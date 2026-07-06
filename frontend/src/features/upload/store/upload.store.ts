import { create } from "zustand";

export interface UploadState {
  step: number;

  file: File | null;

  roomType: string | null;

  style: string | null;

  colorPalette: string | null;

  isGenerating: boolean;

  setStep: (step: number) => void;

  nextStep: () => void;

  previousStep: () => void;

  setFile: (file: File | null) => void;

  setRoomType: (room: string) => void;

  setStyle: (style: string) => void;

  setColorPalette: (palette: string) => void;

  setGenerating: (value: boolean) => void;

  reset: () => void;
}

export const useUploadStore = create<UploadState>((set) => ({
  step: 1,

  file: null,

  roomType: null,

  style: null,

  colorPalette: null,

  isGenerating: false,

  setStep: (step) =>
    set({
      step,
    }),

  nextStep: () =>
    set((state) => ({
      step: Math.min(state.step + 1, 5),
    })),

  previousStep: () =>
    set((state) => ({
      step: Math.max(state.step - 1, 1),
    })),

  setFile: (file) =>
    set({
      file,
    }),

  setRoomType: (roomType) =>
    set({
      roomType,
    }),

  setStyle: (style) =>
    set({
      style,
    }),

  setColorPalette: (colorPalette) =>
    set({
      colorPalette,
    }),

  setGenerating: (value) =>
    set({
      isGenerating: value,
    }),

  reset: () =>
    set({
      step: 1,
      file: null,
      roomType: null,
      style: null,
      colorPalette: null,
      isGenerating: false,
    }),
}));
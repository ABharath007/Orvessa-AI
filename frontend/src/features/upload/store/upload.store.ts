import { create } from "zustand";

export interface UploadState {
  step: number;

  file: File | null;

  roomType: string | null;

  style: string | null;

  colorPalette: string | null;

  isGenerating: boolean;

  generatedProjectId: number | null;

  setStep: (step: number) => void;

  nextStep: () => void;

  previousStep: () => void;

  setFile: (file: File | null) => void;

  setRoomType: (roomType: string) => void;

  setStyle: (style: string) => void;

  setColorPalette: (palette: string) => void;

  setGenerating: (value: boolean) => void;

  setGeneratedProjectId: (id: number | null) => void;

  reset: () => void;
}

export const useUploadStore = create<UploadState>((set) => ({
  step: 1,

  file: null,

  roomType: null,

  style: null,

  colorPalette: null,

  isGenerating: false,

  generatedProjectId: null,

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

  setGeneratedProjectId: (id) =>
    set({
      generatedProjectId: id,
    }),

  reset: () =>
    set({
      step: 1,
      file: null,
      roomType: null,
      style: null,
      colorPalette: null,
      isGenerating: false,
      generatedProjectId: null,
    }),
}));
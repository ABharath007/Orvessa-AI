"use client";

import { useEffect } from "react";

interface UseCommandPaletteProps {
  onClose: () => void;
}

export function useCommandPalette({
  onClose,
}: UseCommandPaletteProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
}
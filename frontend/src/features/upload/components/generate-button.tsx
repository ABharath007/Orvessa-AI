"use client";

import { Sparkles, Wand2 } from "lucide-react";

interface GenerateButtonProps {
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}

export function GenerateButton({
  disabled = false,
  loading = false,
  onClick,
}: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="
        group
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-3xl
        bg-gradient-to-r
        from-indigo-600
        via-purple-600
        to-pink-600
        px-8
        py-5
        text-lg
        font-bold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-2xl
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      {loading ? (
        <>
          <Sparkles className="h-6 w-6 animate-spin" />

          Generating AI Design...
        </>
      ) : (
        <>
          <Wand2 className="h-6 w-6 transition-transform group-hover:rotate-12" />

          Generate AI Design
        </>
      )}
    </button>
  );
}
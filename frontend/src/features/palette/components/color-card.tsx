"use client";

interface ColorCardProps {
  hex: string;
}

export function ColorCard({
  hex,
}: ColorCardProps) {
  return (
    <div
      className="
        group
        space-y-3
        text-center
      "
    >
      {/* Color Preview */}
      <div
        className="
          h-20
          w-full
          rounded-2xl
          border
          border-slate-200
          shadow-sm
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:shadow-lg
          dark:border-slate-700
        "
        style={{
          backgroundColor: hex,
        }}
      />

      {/* Hex Value */}
      <div
        className="
          rounded-xl
          bg-slate-100
          px-3
          py-2
          transition-all
          duration-300
          dark:bg-slate-800
        "
      >
        <p
          className="
            text-sm
            font-semibold
            tracking-wide
            text-slate-700
            dark:text-slate-200
          "
        >
          {hex.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
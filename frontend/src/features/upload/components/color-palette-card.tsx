"use client";

interface ColorPaletteCardProps {
  title: string;
  description: string;
  colors: string[];
  selected: boolean;
  onClick: () => void;
}

export function ColorPaletteCard({
  title,
  description,
  colors,
  selected,
  onClick,
}: ColorPaletteCardProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl border p-6 text-left transition-all duration-300 ${
        selected
          ? "border-slate-900 bg-slate-900 text-white"
          : "border-slate-200 bg-white hover:border-slate-400 hover:shadow-md"
      }`}
    >
      <div className="mb-5 flex gap-2">
        {colors.map((color) => (
          <div
            key={color}
            className="h-10 w-10 rounded-full border"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p
        className={`mt-2 text-sm ${
          selected ? "text-slate-200" : "text-slate-500"
        }`}
      >
        {description}
      </p>
    </button>
  );
}
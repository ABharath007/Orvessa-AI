"use client";

interface RecommendationPanelProps {
  furniture: string[];
  colorPalette: string[];
  estimatedCost: number;
}

export function RecommendationPanel({
  furniture,
  colorPalette,
  estimatedCost,
}: RecommendationPanelProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        AI Recommendations
      </h2>

      {/* Furniture */}
      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold">
          Recommended Furniture
        </h3>

        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          {furniture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Colors */}
      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold">
          Color Palette
        </h3>

        <div className="flex gap-3">
          {colorPalette.map((color) => (
            <div key={color} className="text-center">
              <div
                className="h-14 w-14 rounded-xl border"
                style={{
                  backgroundColor: color,
                }}
              />

              <p className="mt-2 text-xs">
                {color}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Cost */}
      <div>
        <h3 className="text-lg font-semibold">
          Estimated Cost
        </h3>

        <p className="mt-2 text-3xl font-bold text-indigo-600">
          ₹{estimatedCost.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
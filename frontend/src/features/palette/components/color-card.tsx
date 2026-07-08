"use client";

interface ColorCardProps {
  hex: string;
}

export function ColorCard({ hex }: ColorCardProps) {
  return (
    <div className="space-y-2 text-center">
      <div
        className="h-20 w-full rounded-xl border border-slate-200"
        style={{ backgroundColor: hex }}
      />

      <p className="text-sm font-medium">{hex}</p>
    </div>
  );
}

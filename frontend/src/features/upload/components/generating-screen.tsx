"use client";

import { Loader2 } from "lucide-react";

const steps = [
  "Analyzing room layout...",
  "Detecting furniture...",
  "Understanding lighting...",
  "Choosing best color combinations...",
  "Generating AI interior design...",
  "Rendering high-quality images...",
];

export function GeneratingScreen() {
  return (
    <div className="flex min-h-[600px] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-12 shadow-sm">
      <Loader2 className="h-16 w-16 animate-spin text-slate-900" />

      <h2 className="mt-8 text-4xl font-bold">
        Orvessa AI is Designing...
      </h2>

      <p className="mt-3 text-slate-500">
        Please wait while we create your dream interior.
      </p>

      <div className="mt-10 w-full max-w-lg space-y-4">
        {steps.map((step) => (
          <div
            key={step}
            className="flex items-center gap-3 rounded-xl bg-slate-100 p-4"
          >
            <Loader2 className="h-5 w-5 animate-spin" />

            <span>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
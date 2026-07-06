"use client";

import { interiorStyles } from "../constants/interior-styles";
import { useUploadStore } from "../store/upload.store";
import { StyleCard } from "./style-card";

export function StyleSelect() {
  const {
    style,
    setStyle,
    nextStep,
    previousStep,
  } = useUploadStore();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">
          Select Interior Style
        </h2>

        <p className="mt-2 text-slate-500">
          Choose the design style you want.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {interiorStyles.map((item) => (
          <StyleCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            selected={style === item.id}
            onClick={() => setStyle(item.id)}
          />
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={previousStep}
          className="rounded-xl border border-slate-300 px-6 py-3 font-medium hover:bg-slate-100"
        >
          ← Back
        </button>

        <button
          onClick={nextStep}
          disabled={!style}
          className="rounded-xl bg-slate-900 px-8 py-3 font-semibold text-white disabled:opacity-50"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
"use client";

import { uploadSteps } from "../constants/upload-steps";
import { useUploadStore } from "../store/upload.store";

export function Stepper() {
  const { step } = useUploadStore();

  return (
    <div className="mb-10 flex items-center justify-between">
      {uploadSteps.map((item, index) => (
        <div
          key={item.id}
          className="flex flex-1 items-center"
        >
          <div className="flex flex-col items-center">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-semibold transition-all ${
                step >= item.id
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-500"
              }`}
            >
              {item.id}
            </div>

            <p className="mt-3 text-sm font-medium">
              {item.title}
            </p>
          </div>

          {index !== uploadSteps.length - 1 && (
            <div
              className={`mx-4 h-1 flex-1 rounded ${
                step > item.id
                  ? "bg-slate-900"
                  : "bg-slate-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
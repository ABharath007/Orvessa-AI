"use client";

import { Check } from "lucide-react";

import { uploadSteps } from "../constants/upload-steps";
import { useUploadStore } from "../store/upload.store";

export function Stepper() {
  const { step } = useUploadStore();

  return (
    <div className="mb-12 w-full">
      {/* Desktop */}
      <div className="hidden items-center justify-between lg:flex">
        {uploadSteps.map((item, index) => {
          const completed = step > item.id;
          const active = step === item.id;

          return (
            <div
              key={item.id}
              className="flex flex-1 items-center"
            >
              <div className="flex flex-col items-center">
                {/* Circle */}
                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    text-lg
                    font-bold
                    transition-all
                    duration-300

                    ${
                      completed
                        ? "border-green-600 bg-green-600 text-white"
                        : active
                        ? "border-indigo-600 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white shadow-xl"
                        : "border-slate-300 bg-white text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                    }
                  `}
                >
                  {completed ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    item.id
                  )}
                </div>

                {/* Title */}
                <p
                  className={`
                    mt-3
                    text-sm
                    font-semibold

                    ${
                      completed || active
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-500 dark:text-slate-400"
                    }
                  `}
                >
                  {item.title}
                </p>
              </div>

              {/* Connector */}
              {index !== uploadSteps.length - 1 && (
                <div className="mx-4 h-1 flex-1 rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className={`
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-indigo-600
                      via-purple-600
                      to-pink-600
                      transition-all
                      duration-500

                      ${
                        completed
                          ? "w-full"
                          : "w-0"
                      }
                    `}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="flex justify-center lg:hidden">
        <div className="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold dark:bg-slate-800 dark:text-white">
          Step {step} of {uploadSteps.length}
          <span className="mx-2">•</span>
          {uploadSteps.find((s) => s.id === step)?.title}
        </div>
      </div>
    </div>
  );
}
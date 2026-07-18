"use client";

import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  "Upload",
  "Room",
  "Style",
  "Colors",
  "Review",
  "Generate",
];

export function StepIndicator({
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden items-center justify-between md:flex">
        {steps.map((step, index) => {
          const completed = index < currentStep;
          const active = index === currentStep;

          return (
            <div
              key={step}
              className="flex flex-1 items-center"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    font-semibold
                    transition-all
                    duration-300

                    ${
                      completed
                        ? "border-green-600 bg-green-600 text-white"
                        : active
                        ? "border-indigo-600 bg-indigo-600 text-white shadow-lg"
                        : "border-slate-300 bg-white text-slate-500 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-400"
                    }
                  `}
                >
                  {completed ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    index + 1
                  )}
                </div>

                <span
                  className={`
                    mt-3
                    text-sm
                    font-medium

                    ${
                      completed || active
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-500 dark:text-slate-400"
                    }
                  `}
                >
                  {step}
                </span>
              </div>

              {index !== steps.length - 1 && (
                <div className="mx-3 h-1 flex-1 rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className={`
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-indigo-600
                      to-purple-600
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
      <div className="flex justify-center md:hidden">
        <div className="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold dark:bg-slate-800 dark:text-white">
          Step {currentStep + 1} of {steps.length}
          {" • "}
          {steps[currentStep]}
        </div>
      </div>
    </div>
  );
}
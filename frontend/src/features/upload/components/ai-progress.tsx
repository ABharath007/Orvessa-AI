"use client";

import { useEffect, useState } from "react";

import { ProgressStep } from "./progress-step";

const steps = [
  "Uploading Room Image",
  "Analyzing Room Layout",
  "Detecting Furniture",
  "Understanding Interior Style",
  "Generating AI Design",
  "Rendering Final Image",
];

export function AIProgress({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= steps.length) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 1200);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  const progress =
    (currentStep / steps.length) * 100;

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
      <h1 className="text-4xl font-bold">
        AI is Designing Your Room
      </h1>

      <p className="mt-3 text-slate-500">
        Please wait while Orvessa AI creates
        your interior.
      </p>

      {/* Progress Bar */}
      <div className="mt-10 h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-slate-900 transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mt-10 space-y-4">
        {steps.map((step, index) => (
          <ProgressStep
            key={step}
            title={step}
            active={currentStep === index}
            completed={currentStep > index}
          />
        ))}
      </div>
    </div>
  );
}
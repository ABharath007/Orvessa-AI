"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  Sparkles,
} from "lucide-react";

import { ProgressStep } from "./progress-step";

const steps = [
  "Uploading Room Image",
  "Analyzing Room Layout",
  "Detecting Furniture",
  "Understanding Interior Style",
  "Generating AI Design",
  "Rendering Final Image",
];

interface AIProgressProps {
  onComplete: () => void;
}

export function AIProgress({
  onComplete,
}: AIProgressProps) {
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

  const progress = Math.min(
    (currentStep / steps.length) * 100,
    100
  );

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-700 dark:bg-slate-900">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-5 shadow-xl animate-pulse">
          <Brain className="h-12 w-12 text-white" />
        </div>

        <h1 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
          AI is Designing Your Room
        </h1>

        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Orvessa AI is analyzing your room and
          generating a personalized interior design.
        </p>
      </div>

      {/* Progress */}
      <div className="mt-10">
        <div className="h-4 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            AI Progress
          </span>

          <span className="font-bold text-indigo-600">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Current Status */}
      <div className="mt-8 flex items-center justify-center gap-2">
        <Sparkles className="h-5 w-5 animate-spin text-indigo-600" />

        <span className="font-medium text-slate-700 dark:text-slate-300">
          {steps[Math.min(currentStep, steps.length - 1)]}
        </span>
      </div>

      {/* Steps */}
      <div className="mt-10 space-y-5">
        {steps.map((step, index) => (
          <ProgressStep
            key={step}
            title={step}
            active={currentStep === index}
            completed={currentStep > index}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10 rounded-2xl bg-slate-50 p-4 text-center dark:bg-slate-800">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Estimated time remaining:
          <span className="ml-2 font-semibold text-slate-900 dark:text-white">
            {Math.max(0, (steps.length - currentStep) * 1.2).toFixed(0)} seconds
          </span>
        </p>
      </div>
    </div>
  );
}
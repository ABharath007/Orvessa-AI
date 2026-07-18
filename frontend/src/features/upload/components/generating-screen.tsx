"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const messages = [
  "Analyzing your room...",
  "Detecting walls and furniture...",
  "Understanding room dimensions...",
  "Applying your selected interior style...",
  "Choosing the perfect color palette...",
  "Generating AI interior design...",
  "Rendering photorealistic images...",
  "Finalizing your masterpiece...",
];

export function GeneratingScreen() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        return prev + 1;
      });
    }, 35);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((prev) =>
        prev < messages.length - 1 ? prev + 1 : prev
      );
    }, 700);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-[75vh] items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-700 dark:bg-slate-900">

        {/* AI Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 shadow-xl animate-pulse">
            <Brain className="h-14 w-14 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-center text-4xl font-bold text-slate-900 dark:text-white">
          Orvessa AI
        </h1>

        <p className="mt-3 text-center text-slate-500 dark:text-slate-400">
          Creating your dream interior design...
        </p>

        {/* Current Step */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <Sparkles className="h-5 w-5 animate-spin text-indigo-600" />

          <span className="text-lg font-medium text-slate-700 dark:text-slate-300">
            {messages[messageIndex]}
          </span>
        </div>

        {/* Progress */}
        <div className="mt-10">
          <div className="h-4 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              AI Processing
            </span>

            <span className="font-bold text-indigo-600">
              {progress}%
            </span>
          </div>
        </div>

        {/* Completed Steps */}
        <div className="mt-10 space-y-4">
          {messages.map((message, index) => (
            <div
              key={message}
              className="flex items-center gap-3"
            >
              {index <= messageIndex ? (
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              ) : (
                <div className="h-5 w-5 rounded-full border-2 border-slate-300 dark:border-slate-600" />
              )}

              <span
                className={`${
                  index <= messageIndex
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              >
                {message}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          Average generation time: <strong>5–10 seconds</strong>
        </p>
      </div>
    </div>
  );
}
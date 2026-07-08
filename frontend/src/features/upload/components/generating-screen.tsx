"use client";

import { useEffect, useState } from "react";

const messages = [
  "Analyzing your room...",
  "Detecting walls and furniture...",
  "Choosing the best interior layout...",
  "Applying your selected design style...",
  "Generating AI interior...",
  "Rendering photorealistic images...",
  "Almost finished...",
];

export function GeneratingScreen() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return prev + 1;
      });
    }, 30);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev === messages.length - 1) return prev;

        return prev + 1;
      });
    }, 500);

    return () => clearInterval(messageTimer);
  }, []);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">

      <div className="mb-10 text-8xl animate-pulse">
        🧠
      </div>

      <h1 className="text-4xl font-bold">
        Orvessa AI
      </h1>

      <p className="mt-4 text-xl text-slate-500">
        {messages[messageIndex]}
      </p>

      <div className="mt-10 w-full max-w-lg">

        <div className="h-4 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-200"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <p className="mt-4 text-center font-semibold">
          {progress}%
        </p>

      </div>
    </div>
  );
}
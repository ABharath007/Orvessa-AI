"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 dark:bg-slate-950">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
          <AlertTriangle className="h-12 w-12 text-red-600" />
        </div>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Something went wrong
        </h1>

        <p className="mt-4 text-slate-500 dark:text-slate-400">
          An unexpected error occurred while loading this page.
        </p>

        <button
          onClick={reset}
          className="mt-8 rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
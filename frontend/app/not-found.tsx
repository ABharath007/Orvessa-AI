"use client";

import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 dark:bg-slate-950">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800">
          <SearchX className="h-12 w-12 text-slate-600 dark:text-slate-300" />
        </div>

        <h1 className="text-6xl font-bold text-slate-900 dark:text-white">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-500 dark:text-slate-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/dashboard"
            className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
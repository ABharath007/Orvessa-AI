"use client";

import { SearchX } from "lucide-react";

export function CommandEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <SearchX className="mb-4 h-12 w-12 text-slate-400" />

      <h3 className="text-lg font-semibold">
        No results found
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Try searching for Dashboard, Profile,
        Furniture, Settings, Upload Room...
      </p>
    </div>
  );
}
"use client";

import { Clock } from "lucide-react";

interface RecentSearchesProps {
  searches: string[];
  onSelect: (value: string) => void;
}

export function RecentSearches({
  searches,
  onSelect,
}: RecentSearchesProps) {
  if (searches.length === 0) return null;

  return (
    <div className="space-y-3">
      <h3 className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
        Recent Searches
      </h3>

      <div className="space-y-2">
        {searches.map((search) => (
          <button
            key={search}
            onClick={() => onSelect(search)}
            className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Clock className="h-4 w-4 text-slate-400" />

            <span className="text-sm text-slate-700 dark:text-slate-300">
              {search}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
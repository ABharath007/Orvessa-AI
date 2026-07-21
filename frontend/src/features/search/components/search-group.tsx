"use client";

import { SearchResult } from "./search-result";
import type { SearchItem } from "../types/search.types";

interface SearchGroupProps {
  title: string;
  items: SearchItem[];
  selectedIndex: number;
  startIndex: number;
  onSelect: () => void;
}

export function SearchGroup({
  title,
  items,
  selectedIndex,
  startIndex,
  onSelect,
}: SearchGroupProps) {
  if (items.length === 0) return null;

  return (
    <section className="space-y-3">
      <div className="sticky top-0 z-10 bg-white py-2 dark:bg-slate-900">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </h3>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
  <SearchResult
    key={item.id}
    item={item}
    active={startIndex + index === selectedIndex}
    onSelect={onSelect}
  />
))}
      </div>
    </section>
  );
}
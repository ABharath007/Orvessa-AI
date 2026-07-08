"use client";

import Link from "next/link";

import type { SearchItem } from "../types/search.types";

interface SearchResultProps {
  item: SearchItem;
}

export function SearchResult({
  item,
}: SearchResultProps) {
  return (
    <Link
      href={item.href}
      className="block rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          {item.title}
        </h3>

        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
          {item.category}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-500">
        {item.description}
      </p>
    </Link>
  );
}
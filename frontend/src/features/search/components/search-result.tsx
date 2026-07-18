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
      className="
        group
        block
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-400
        hover:bg-slate-50
        hover:shadow-lg
        dark:border-slate-700
        dark:bg-slate-800
        dark:hover:border-indigo-500
        dark:hover:bg-slate-700
      "
    >
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3
            className="
              truncate
              text-lg
              font-semibold
              text-slate-900
              transition-colors
              group-hover:text-indigo-600
              dark:text-white
              dark:group-hover:text-indigo-400
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-2
              text-sm
              leading-6
              text-slate-500
              dark:text-slate-400
            "
          >
            {item.description}
          </p>
        </div>

        <span
          className="
            shrink-0
            rounded-full
            bg-indigo-100
            px-3
            py-1
            text-xs
            font-semibold
            text-indigo-700
            dark:bg-indigo-900/40
            dark:text-indigo-300
          "
        >
          {item.category}
        </span>
      </div>
    </Link>
  );
}
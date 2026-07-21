"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { addRecentSearch } from "../services/recent-search.service";
import type { SearchItem } from "../types/search.types";

interface SearchResultProps {
    item: SearchItem;
    active?: boolean;
    onSelect?: () => void;
}

export function SearchResult({
  item,
  active = false,
  onSelect,
}: SearchResultProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={() => {
  addRecentSearch(item.id);
  onSelect?.();
}}
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
        hover:shadow-xl
        dark:border-slate-700
        dark:bg-slate-800
        dark:hover:border-indigo-500
        dark:hover:bg-slate-700
      "
    >
      <div className="flex items-center justify-between gap-5">

        {/* Left */}
        <div className="flex min-w-0 flex-1 items-start gap-4">

          {/* Icon */}
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-indigo-100
              text-indigo-600
              transition-colors
              group-hover:bg-indigo-600
              group-hover:text-white
              dark:bg-indigo-900/30
              dark:text-indigo-400
              dark:group-hover:bg-indigo-500
              dark:group-hover:text-white
            "
          >
            {Icon ? <Icon className="h-5 w-5" /> : null}
          </div>

          {/* Content */}
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
                line-clamp-2
                text-sm
                leading-6
                text-slate-500
                dark:text-slate-400
              "
            >
              {item.description}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <span
            className="
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
            {item.group}
          </span>

          <ChevronRight
            className="
              h-5
              w-5
              text-slate-400
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </Link>
  );
}
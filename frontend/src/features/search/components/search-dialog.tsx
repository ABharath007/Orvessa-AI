"use client";

import {
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";

import { Search, X } from "lucide-react";
import { useSearch } from "../hooks/use-search";
import { useRecentSearches } from "../hooks/use-recent-searches";

import { SearchGroup } from "./search-group";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export function SearchDialog({
  open,
  onClose,
}: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);


  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  const searchResults = useSearch(query);
  const recentSearches = useRecentSearches();

  const filteredResults =
    query.trim().length === 0
      ? recentSearches
      : searchResults;
  const groupedResults = useMemo(
  () => ({
    Pages: filteredResults.filter(
      (item) =>
        item.group === "Dashboard" ||
        item.group === "Upload"
    ),

    AI: filteredResults.filter(
      (item) =>
        item.group === "Gallery"
    ),

    Projects: filteredResults.filter(
      (item) => item.group === "Projects"
    ),

    Furniture: filteredResults.filter(
      (item) => item.group === "Furniture"
    ),

    Account: filteredResults.filter(
      (item) =>
        item.group === "Profile" ||
        item.group === "Settings"
    ),
  }),
  [filteredResults]
);

  useEffect(() => {
  if (open) {
    inputRef.current?.focus();
    setSelectedIndex(0);
  } else {
    setQuery("");
    setSelectedIndex(0);
  }
}, [open]);

  useEffect(() => {
  function handleKey(e: KeyboardEvent) {
  if (!open) return;

  switch (e.key) {
    case "Escape":
      onClose();
      break;

    case "ArrowDown":
      e.preventDefault();

      setSelectedIndex((prev) =>
        Math.min(prev + 1, filteredResults.length - 1)
      );

      break;

    case "ArrowUp":
      e.preventDefault();

      setSelectedIndex((prev) =>
        Math.max(prev - 1, 0)
      );

      break;

    case "Enter":
      if (filteredResults[selectedIndex]) {
        window.location.href =
          filteredResults[selectedIndex].href;
      }

      break;
  }
}

  window.addEventListener("keydown", handleKey);

  return () =>
    window.removeEventListener("keydown", handleKey);
}, [
  open,
  onClose,
  filteredResults,
  selectedIndex,
]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    }

    if (open) {
      document.addEventListener(
        "mousedown",
        handleClick
      );
    }

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm pt-24">
      <div
        ref={dialogRef}
        className="w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Global Search
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="h-5 w-5 dark:text-white" />
          </button>
        </div>

        {/* Search Box */}
        <div className="p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              ref={inputRef}
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              placeholder="Search..."
              className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Results */}
        <div className="max-h-[520px] space-y-8 overflow-y-auto px-6 pb-6">
          {filteredResults.length > 0 ? (
            <>
              <SearchGroup
  title="Pages"
  items={groupedResults.Pages}
  selectedIndex={selectedIndex}
  startIndex={0}
  onSelect={onClose}
/>

<SearchGroup
  title="AI"
  items={groupedResults.AI}
  selectedIndex={selectedIndex}
  startIndex={groupedResults.Pages.length}
  onSelect={onClose}
/>

<SearchGroup
  title="Projects"
  items={groupedResults.Projects}
  selectedIndex={selectedIndex}
  startIndex={
    groupedResults.Pages.length +
    groupedResults.AI.length
  }
  onSelect={onClose}
/>

<SearchGroup
  title="Furniture"
  items={groupedResults.Furniture}
  selectedIndex={selectedIndex}
  startIndex={
    groupedResults.Pages.length +
    groupedResults.AI.length +
    groupedResults.Projects.length
  }
  onSelect={onClose}
/>

<SearchGroup
  title="Account"
  items={groupedResults.Account}
  selectedIndex={selectedIndex}
  startIndex={
    groupedResults.Pages.length +
    groupedResults.AI.length +
    groupedResults.Projects.length +
    groupedResults.Furniture.length
  }
  onSelect={onClose}
/>
            </>
          ) : (
            <div className="py-16 text-center">
              <Search className="mx-auto mb-4 h-10 w-10 text-slate-400" />

              <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                No results found
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Try searching for Dashboard, Settings,
                Furniture, Upload Room, Gallery or
                Profile.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
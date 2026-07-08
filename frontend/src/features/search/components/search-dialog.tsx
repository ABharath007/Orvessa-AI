"use client";

import { useMemo, useState } from "react";

import { searchData } from "../mock/search.mock";
import { SearchResult } from "./search-result";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export function SearchDialog({
  open,
  onClose,
}: SearchDialogProps) {
  const [query, setQuery] = useState("");

  const filteredResults = useMemo(() => {
    if (!query.trim()) return searchData;

    return searchData.filter((item) =>
      item.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-24">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Search
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg px-3 py-1 hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        <input
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          placeholder="Search projects, furniture..."
          className="mb-6 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
        />

        <div className="max-h-[400px] space-y-3 overflow-y-auto">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <SearchResult
                key={item.id}
                item={item}
              />
            ))
          ) : (
            <p className="py-10 text-center text-slate-500">
              No results found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
"use client";

import {
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";

import { Search, X } from "lucide-react";

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

  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return searchData;

    return searchData.filter((item) =>
      item.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    } else {
      setQuery("");
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    if (open) {
      window.addEventListener("keydown", handleKey);
    }

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, [open, onClose]);

  // Close when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(
          e.target as Node
        )
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
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-start
        justify-center
        bg-black/50
        backdrop-blur-sm
        pt-24
      "
    >
      <div
        ref={dialogRef}
        className="
          w-full
          max-w-2xl
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-2xl
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-200
            p-6
            dark:border-slate-700
          "
        >
          <h2
            className="
              text-2xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            Search
          </h2>

          <button
            onClick={onClose}
            className="
              rounded-xl
              p-2
              transition
              hover:bg-slate-100
              dark:hover:bg-slate-800
            "
          >
            <X className="h-5 w-5 dark:text-white" />
          </button>
        </div>

        {/* Search */}
        <div className="p-6">
          <div className="relative">
            <Search
              className="
                absolute
                left-4
                top-1/2
                h-5
                w-5
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              ref={inputRef}
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              placeholder="Search projects, furniture, gallery..."
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                py-4
                pl-12
                pr-4
                text-slate-900
                outline-none
                transition
                focus:border-indigo-500
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
                dark:placeholder:text-slate-500
              "
            />
          </div>
        </div>

        {/* Results */}
        <div
          className="
            max-h-[420px]
            space-y-3
            overflow-y-auto
            px-6
            pb-6
          "
        >
          {filteredResults.length ? (
            filteredResults.map((item) => (
              <SearchResult
                key={item.id}
                item={item}
              />
            ))
          ) : (
            <div
              className="
                py-12
                text-center
                text-slate-500
                dark:text-slate-400
              "
            >
              No results found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
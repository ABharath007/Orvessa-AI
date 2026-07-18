"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import { SearchDialog } from "@/features/search/components/search-dialog";

export function SearchBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          group
          flex
          h-12
          w-full
          max-w-xl
          items-center
          justify-between
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-4
          transition-all
          duration-300
          hover:border-indigo-400
          hover:bg-white
          hover:shadow-md
          dark:border-slate-700
          dark:bg-slate-800
          dark:hover:border-indigo-500
          dark:hover:bg-slate-700
        "
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          <Search
            className="
              h-5
              w-5
              text-slate-400
              transition-colors
              group-hover:text-indigo-600
              dark:text-slate-400
              dark:group-hover:text-indigo-400
            "
          />

          <span className="text-sm text-slate-500 dark:text-slate-300">
            Search projects, furniture, gallery...
          </span>
        </div>

        {/* Shortcut */}
        <div
          className="
            hidden
            items-center
            gap-1
            rounded-lg
            border
            border-slate-300
            bg-white
            px-2
            py-1
            text-xs
            text-slate-500
            md:flex
            dark:border-slate-600
            dark:bg-slate-900
            dark:text-slate-300
          "
        >
          <span>⌘</span>
          <span>K</span>
        </div>
      </button>

      <SearchDialog
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { SearchDialog } from "./search-dialog";

export function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="
          group
          flex
          h-14
          w-full
          max-w-xl
          items-center
          justify-between
          rounded-2xl
          border
          border-slate-200
          bg-white
          px-5
          shadow-sm
          transition-all
          duration-300
          hover:border-indigo-500
          hover:shadow-lg
          dark:border-slate-700
          dark:bg-slate-900
          dark:hover:border-indigo-500
        "
      >
        <div className="flex items-center gap-3">
          <Search
            className="
              h-5
              w-5
              text-slate-400
              transition-colors
              group-hover:text-indigo-600
              dark:text-slate-500
              dark:group-hover:text-indigo-400
            "
          />

          <span
            className="
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            Search projects, furniture, gallery...
          </span>
        </div>

        <div
          className="
            flex
            items-center
            gap-1
            rounded-lg
            border
            border-slate-200
            bg-slate-100
            px-2.5
            py-1
            text-xs
            font-medium
            text-slate-500
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-slate-400
          "
        >
          ⌘ K
        </div>
      </button>

      <SearchDialog
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
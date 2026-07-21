"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { SearchDialog } from "./search-dialog";
import { useCommandPalette } from "../hooks/use-command-palette";

export function SearchBar() {
  const [open, setOpen] = useState(false);

  // Only handles the Escape key
  useCommandPalette({
    onClose: () => setOpen(false),
  });

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
        <Search
          className="
            mr-3
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
      </button>

      <SearchDialog
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
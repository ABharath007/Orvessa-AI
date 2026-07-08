"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { SearchDialog } from "./search-dialog";

export function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex w-full max-w-md items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-500 shadow-sm transition hover:border-indigo-500"
      >
        <Search className="h-5 w-5" />

        <span>Search...</span>
      </button>

      <SearchDialog
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
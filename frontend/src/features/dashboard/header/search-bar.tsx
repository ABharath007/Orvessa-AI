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
        className="group flex h-12 w-full max-w-xl items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 transition-all duration-300 hover:border-indigo-400 hover:bg-white hover:shadow-md"
      >
        <div className="flex items-center gap-3">
          <Search className="h-5 w-5 text-slate-400 group-hover:text-indigo-600" />

          <span className="text-sm text-slate-500">
            Search projects, furniture, gallery...
          </span>
        </div>

        <div className="hidden items-center gap-1 rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs text-slate-500 md:flex">
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
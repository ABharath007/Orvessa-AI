"use client";

import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative hidden w-full max-w-md lg:block">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

      <input
        type="text"
        placeholder="Search..."
        className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-slate-900"
      />
    </div>
  );
}
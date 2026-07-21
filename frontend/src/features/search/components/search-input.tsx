"use client";

import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div
      className="
        relative
        flex
        items-center
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-4
        py-3
        shadow-sm
        transition-all
        duration-300
        focus-within:border-indigo-500
        focus-within:ring-2
        focus-within:ring-indigo-500/20
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <Search
        className="mr-3 h-5 w-5 text-slate-400"
        strokeWidth={2}
      />

      <input
        autoFocus
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search anything... (Ctrl + K)"
        className="
          flex-1
          bg-transparent
          text-sm
          outline-none
          placeholder:text-slate-400
        "
      />

      <kbd
        className="
          hidden
          rounded-md
          border
          border-slate-200
          bg-slate-100
          px-2
          py-1
          text-xs
          text-slate-500
          dark:border-slate-700
          dark:bg-slate-800
          dark:text-slate-400
          md:block
        "
      >
        
      </kbd>
    </div>
  );
}
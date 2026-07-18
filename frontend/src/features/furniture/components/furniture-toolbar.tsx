"use client";

import { Search } from "lucide-react";

export function FurnitureToolbar() {
  return (
    <section
      className="
        flex
        flex-col
        gap-4
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        dark:border-slate-700
        dark:bg-slate-900
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <Search
          className="
            absolute
            left-4
            top-1/2
            h-5
            w-5
            -translate-y-1/2
            text-slate-400
            dark:text-slate-500
          "
        />

        <input
          type="text"
          placeholder="Search furniture..."
          className="
            w-full
            rounded-2xl
            border
            border-slate-300
            bg-white
            py-3
            pl-12
            pr-4
            text-slate-900
            placeholder:text-slate-400
            outline-none
            transition-all
            focus:border-indigo-500
            focus:ring-2
            focus:ring-indigo-500/20
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
            dark:placeholder:text-slate-500
          "
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <select
          className="
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-4
            py-3
            text-slate-900
            transition-all
            focus:border-indigo-500
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500/20
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
          "
        >
          <option>All Categories</option>
          <option>Sofa</option>
          <option>Table</option>
          <option>Lighting</option>
          <option>Decor</option>
        </select>

        <select
          className="
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-4
            py-3
            text-slate-900
            transition-all
            focus:border-indigo-500
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500/20
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-white
          "
        >
          <option>Newest</option>
          <option>Popular</option>
          <option>Price Low → High</option>
          <option>Price High → Low</option>
        </select>
      </div>
    </section>
  );
}
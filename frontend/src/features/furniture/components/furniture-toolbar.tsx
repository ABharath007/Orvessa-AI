"use client";

import { Search } from "lucide-react";

export function FurnitureToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          placeholder="Search furniture..."
          className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none"
        />
      </div>

      <div className="flex gap-3">
        <select className="rounded-xl border px-4 py-3">
          <option>All Categories</option>
          <option>Sofa</option>
          <option>Table</option>
          <option>Lighting</option>
          <option>Decor</option>
        </select>

        <select className="rounded-xl border px-4 py-3">
          <option>Newest</option>
          <option>Popular</option>
          <option>Price Low → High</option>
          <option>Price High → Low</option>
        </select>
      </div>
    </div>
  );
}
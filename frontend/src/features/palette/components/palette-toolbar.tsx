"use client";

import { Search } from "lucide-react";

export function PaletteToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

        <input
          type="text"
          placeholder="Search color palettes..."
          className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none transition focus:border-slate-900"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <select className="rounded-xl border border-slate-300 px-4 py-3">
          <option>All Rooms</option>
          <option>Living Room</option>
          <option>Bedroom</option>
          <option>Kitchen</option>
          <option>Bathroom</option>
        </select>

        <select className="rounded-xl border border-slate-300 px-4 py-3">
          <option>All Styles</option>
          <option>Modern</option>
          <option>Luxury</option>
          <option>Scandinavian</option>
          <option>Minimal</option>
        </select>

        <select className="rounded-xl border border-slate-300 px-4 py-3">
          <option>Newest</option>
          <option>Popular</option>
          <option>A-Z</option>
        </select>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { Search, Plus } from "lucide-react";

import { CreateProjectModal } from "./create-project-modal";

import { useProjectStore } from "../store/project.store";

export function ProjectToolbar() {
  const [open, setOpen] = useState(false);

  const {
    search,
    filter,
    setSearch,
    setFilter,
  } = useProjectStore();

  return (
    <>
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none transition focus:border-slate-900"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <select
            value={filter}
            onChange={(e) =>
              setFilter(
                e.target.value as
                  | "All"
                  | "Completed"
                  | "In Progress"
                  | "Draft"
              )
            }
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none"
          >
            <option>All</option>
            <option>Completed</option>
            <option>In Progress</option>
            <option>Draft</option>
          </select>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-800"
          >
            <Plus className="h-4 w-4" />
            New Project
          </button>
        </div>
      </div>

      {/* Modal */}
      <CreateProjectModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
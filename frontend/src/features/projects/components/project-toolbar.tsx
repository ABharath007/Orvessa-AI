"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Filter,
} from "lucide-react";

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
      <div
        className="
          flex
          flex-col
          gap-5
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
        <div className="relative w-full lg:max-w-lg">
          <Search
            className="
              absolute
              left-4
              top-1/2
              h-5
              w-5
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your projects..."
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
              outline-none
              transition-all
              duration-300
              focus:border-indigo-600
              focus:ring-2
              focus:ring-indigo-200
              dark:border-slate-600
              dark:bg-slate-800
              dark:text-white
              dark:placeholder:text-slate-400
              dark:focus:border-indigo-500
              dark:focus:ring-indigo-900
            "
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Filter */}
          <div className="relative">
            <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

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
              className="
                appearance-none
                rounded-2xl
                border
                border-slate-300
                bg-white
                py-3
                pl-10
                pr-8
                text-slate-900
                outline-none
                transition
                focus:border-indigo-600
                dark:border-slate-600
                dark:bg-slate-800
                dark:text-white
              "
            >
              <option>All</option>
              <option>Completed</option>
              <option>In Progress</option>
              <option>Draft</option>
            </select>
          </div>

          {/* Create Button */}
          <button
            onClick={() => setOpen(true)}
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-indigo-600
              px-6
              py-3
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-indigo-700
              hover:shadow-lg
            "
          >
            <Plus className="h-5 w-5" />
            New Project
          </button>
        </div>
      </div>

      <CreateProjectModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
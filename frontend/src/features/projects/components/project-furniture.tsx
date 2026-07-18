"use client";

import { Sofa } from "lucide-react";

import type { Project } from "../types/project.types";

import { furnitureItems } from "../mock/furniture.mock";
import { FurnitureCard } from "./furniture-card";

interface ProjectFurnitureProps {
  project: Project;
}

export function ProjectFurniture({
  project,
}: ProjectFurnitureProps) {
  return (
    <section
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-orange-100
            shadow-sm
            dark:bg-orange-900/30
          "
        >
          <Sofa className="h-7 w-7 text-orange-600 dark:text-orange-400" />
        </div>

        <div>
          <h2
            className="
              text-2xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            Furniture Recommendations
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            AI-recommended furniture for{" "}
            <span
              className="
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              {project.title}
            </span>
          </p>
        </div>
      </div>

      {/* Furniture Grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {furnitureItems.map((item) => (
          <FurnitureCard
            key={item.id}
            furniture={item}
          />
        ))}
      </div>
    </section>
  );
}
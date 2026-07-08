"use client";

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
    <section className="space-y-6">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold">
          Furniture Recommendations
        </h2>

        <p className="text-slate-500">
          Recommended furniture for{" "}
          <span className="font-semibold">
            {project.title}
          </span>
        </p>
      </div>

      {/* Furniture Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
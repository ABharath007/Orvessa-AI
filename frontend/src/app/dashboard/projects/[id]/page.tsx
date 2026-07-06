"use client";

import { useParams } from "next/navigation";

import { mockProjects } from "@/features/projects/mock/projects.mock";
import { ProjectFurniture } from "@/features/projects/components/project-furniture";
import { ProjectHeader } from "@/features/projects/components/project-header";
import { ProjectImages } from "@/features/projects/components/project-images";
import { ProjectInfo } from "@/features/projects/components/project-info";
import { ProjectCost } from "@/features/projects/components/project-cost";
export default function ProjectDetailsPage() {
  const params = useParams();

  const project = mockProjects.find(
    (item) => item.id === Number(params.id)
  );

  if (!project) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Project Not Found
          </h1>

          <p className="mt-2 text-slate-500">
            The requested project does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <ProjectHeader
        title={project.title}
        createdAt={project.createdAt}
        status={project.status}
      />

      {/* Images */}
      <ProjectImages
        originalImage={project.thumbnail}
        generatedImages={[
          "https://picsum.photos/600/500?random=31",
          "https://picsum.photos/600/500?random=32",
          "https://picsum.photos/600/500?random=33",
          "https://picsum.photos/600/500?random=34",
        ]}
      />

      {/* Project Information */}
      <ProjectInfo
        roomType={project.roomType}
        style={project.style}
        colorPalette={project.colorPalette}
        createdAt={project.createdAt}
        
      />
      <ProjectFurniture />

      <ProjectCost />
    </div>
  );
}
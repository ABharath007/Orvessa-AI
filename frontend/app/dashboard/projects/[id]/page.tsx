"use client";

import { notFound } from "next/navigation";

import { useProject } from "@/features/projects/hooks/use-project";

import { ProjectHeader } from "@/features/projects/components/project-header";
import { ProjectImages } from "@/features/projects/components/project-images";
import { ProjectInfo } from "@/features/projects/components/project-info";
import { ProjectFurniture } from "@/features/projects/components/project-furniture";
import { ProjectCost } from "@/features/projects/components/project-cost";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailsPage({
  params,
}: PageProps) {
  const { data, isLoading } = useProject(params.id);

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading Project...
      </div>
    );
  }

  if (!data) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <ProjectHeader project={data} />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <ProjectImages project={data} />
        </div>

        <div className="space-y-8">
          <ProjectInfo project={data} />
          <ProjectCost project={data} />
          <ProjectFurniture project={data} />
        </div>
      </div>
    </div>
  );
}
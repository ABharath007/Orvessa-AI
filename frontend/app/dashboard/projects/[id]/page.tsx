"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Loader2 } from "lucide-react";

import { useProject } from "@/features/projects/hooks/use-project";

import { ProjectHeader } from "@/features/projects/components/project-header";
import { ProjectImages } from "@/features/projects/components/project-images";
import { ProjectInfo } from "@/features/projects/components/project-info";
import { ProjectFurniture } from "@/features/projects/components/project-furniture";
import { ProjectCost } from "@/features/projects/components/project-cost";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectDetailsPage({
  params,
}: PageProps) {
  const { id } = use(params);

  const { data, isLoading } = useProject(id);

  if (isLoading) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-indigo-600" />

        <h2 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
          Loading Project...
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Preparing your AI interior design.
        </p>
      </div>
    );
  }

  if (!data) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Header */}
      <ProjectHeader project={data} />

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left */}
        <div className="space-y-8 lg:col-span-2">
          <ProjectImages project={data} />
        </div>

        {/* Right */}
        <div className="space-y-8">
          <ProjectInfo project={data} />

          <ProjectCost project={data} />

          <ProjectFurniture project={data} />
        </div>
      </div>
    </div>
  );
}
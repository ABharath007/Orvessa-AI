"use client";

import { DesignGrid } from "@/features/gallery/components/design-grid";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      <div>
        <h1 className="text-4xl font-bold">
          AI Design Gallery
        </h1>

        <p className="mt-2 text-slate-500">
          Browse your AI-generated interior designs.
        </p>
      </div>

      <DesignGrid />
    </div>
  );
}
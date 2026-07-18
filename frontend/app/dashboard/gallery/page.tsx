"use client";

import { DesignGrid } from "@/features/gallery/components/design-grid";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Header */}
      <div>
        <h1
          className="
            text-4xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          AI Design Gallery
        </h1>

        <p
          className="
            mt-2
            text-lg
            text-slate-500
            dark:text-slate-400
          "
        >
          Browse your AI-generated interior designs.
        </p>
      </div>

      {/* Gallery */}
      <DesignGrid />
    </div>
  );
}
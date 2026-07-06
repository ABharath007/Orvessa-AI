"use client";

import Image from "next/image";

interface ProjectImagesProps {
  originalImage: string;
  generatedImages: string[];
}

export function ProjectImages({
  originalImage,
  generatedImages,
}: ProjectImagesProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Original Room */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Original Room
        </h2>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={originalImage}
            alt="Original Room"
            width={1000}
            height={700}
            className="h-[420px] w-full object-cover"
          />
        </div>
      </div>

      {/* AI Generated Designs */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          AI Generated Designs
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {generatedImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <Image
                src={image}
                alt={`Design ${index + 1}`}
                width={600}
                height={500}
                className="h-48 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
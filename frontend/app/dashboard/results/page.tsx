"use client";

import { useEffect, useState } from "react";

import { useUploadStore } from "@/features/upload/store/upload.store";
import { mockResult } from "@/features/results/mock/results.mock";

import { ResultHeader } from "@/features/results/components/result-header";
import { BeforeAfter } from "@/features/results/components/before-after";
import { GeneratedGallery } from "@/features/results/components/generated-gallery";
import { ResultActions } from "@/features/results/components/result-actions";
import { RecommendationPanel } from "@/features/results/components/recommendation-panel";

export default function ResultsPage() {
  const {
    file,
    roomType,
    style,
    colorPalette,
  } = useUploadStore();

  const [uploadedImage, setUploadedImage] = useState(
    mockResult.originalImage
  );

  useEffect(() => {
    if (!file) {
      setUploadedImage(mockResult.originalImage);
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setUploadedImage(imageUrl);

    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  }, [file]);

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      <ResultHeader
        roomType={roomType ?? mockResult.roomType}
        style={style ?? mockResult.style}
      />

      <BeforeAfter
        original={uploadedImage}
        generated={mockResult.generatedImages[0].image}
      />

      <ResultActions />

      <GeneratedGallery
        images={mockResult.generatedImages.map((image, index) => ({
          ...image,
          id: Number(image.id) || index + 1,
        }))}
      />

      <RecommendationPanel
        furniture={mockResult.furniture.map((item) => item.name)}
        colorPalette={
          colorPalette
            ? [colorPalette]
            : [mockResult.colorPalette]
        }
        estimatedCost={mockResult.totalCost}
      />
    </div>
  );
}
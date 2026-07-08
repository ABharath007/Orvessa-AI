"use client";

import { useMemo } from "react";

import { useUploadStore } from "@/features/upload/store/upload.store";
import { resultData } from "@/features/results/mock/results.mock";

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

  const uploadedImage = useMemo(() => {
    if (!file) return resultData.originalImage;

    return URL.createObjectURL(file);
  }, [file]);

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      <ResultHeader
        roomType={roomType ?? resultData.roomType}
        style={style ?? resultData.style}
      />

      <BeforeAfter
        original={uploadedImage}
        generated={resultData.generatedImages[0].image}
      />

      <ResultActions />

      <GeneratedGallery
        images={resultData.generatedImages}
      />

      <RecommendationPanel
        furniture={resultData.recommendation.furniture}
        colorPalette={
          colorPalette
            ? [colorPalette]
            : resultData.recommendation.colorPalette
        }
        estimatedCost={
          resultData.recommendation.estimatedCost
        }
      />
    </div>
  );
}
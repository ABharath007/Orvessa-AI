"use client";

import { Stepper } from "@/features/upload/components/stepper";
import { UploadDropzone } from "@/features/upload/components/upload-dropzone";
import { ImagePreview } from "@/features/upload/components/image-preview";
import { RoomTypeSelect } from "@/features/upload/components/room-type-select";
import { StyleSelect } from "@/features/upload/components/style-select";
import { ColorPaletteSelect } from "@/features/upload/components/color-palette-select";
import { ReviewGenerate } from "@/features/upload/components/review-generate";
import { GeneratingScreen } from "@/features/upload/components/generating-screen";

import { useUploadStore } from "@/features/upload/store/upload.store";

export default function UploadPage() {
  const {
    step,
    file,
    setFile,
    isGenerating,
  } = useUploadStore();

  // Show AI Generation Screen
  if (isGenerating) {
    return (
      <div className="mx-auto max-w-6xl py-10">
        <GeneratingScreen />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Create AI Interior Design
        </h1>

        <p className="mt-2 text-slate-500">
          Upload your room, customize your preferences, and let Orvessa AI
          generate a beautiful interior design.
        </p>
      </div>

      {/* Progress Stepper */}
      <Stepper />

      {/* Step 1 - Upload */}
      {step === 1 &&
        (!file ? (
          <UploadDropzone onFileSelect={setFile} />
        ) : (
          <ImagePreview
            file={file}
            onRemove={() => setFile(null)}
          />
        ))}

      {/* Step 2 - Room Type */}
      {step === 2 && <RoomTypeSelect />}

      {/* Step 3 - Interior Style */}
      {step === 3 && <StyleSelect />}

      {/* Step 4 - Color Palette */}
      {step === 4 && <ColorPaletteSelect />}

      {/* Step 5 - Review & Generate */}
      {step === 5 && <ReviewGenerate />}
    </div>
  );
}
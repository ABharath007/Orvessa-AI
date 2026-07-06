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

  // Show AI Loading Screen
  if (isGenerating) {
    return (
      <div className="mx-auto max-w-6xl py-10">
        <GeneratingScreen />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold">
          Create AI Interior Design
        </h1>

        <p className="mt-2 text-slate-500">
          Upload your room and let Orvessa AI redesign it.
        </p>
      </div>

      {/* Stepper */}
      <Stepper />

      {/* STEP 1 - Upload */}
      {step === 1 && (
        <>
          {!file ? (
            <UploadDropzone onFileSelect={setFile} />
          ) : (
            <ImagePreview
              file={file}
              onRemove={() => setFile(null)}
            />
          )}
        </>
      )}

      {/* STEP 2 - Room Type */}
      {step === 2 && <RoomTypeSelect />}

      {/* STEP 3 - Interior Style */}
      {step === 3 && <StyleSelect />}

      {/* STEP 4 - Color Palette */}
      {step === 4 && <ColorPaletteSelect />}

      {/* STEP 5 - Review */}
      {step === 5 && <ReviewGenerate />}
    </div>
  );
}
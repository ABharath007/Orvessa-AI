"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DesignPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image: string;
  style: string;
  roomType: string;
}

export function DesignPreviewModal({
  open,
  onOpenChange,
  image,
  style,
  roomType,
}: DesignPreviewModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="
          max-w-6xl
          border
          border-slate-200
          bg-white
          shadow-2xl
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <DialogHeader>
          <DialogTitle
            className="
              text-2xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            {style} Interior Design
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          <Image
            src={image}
            alt={style}
            width={1400}
            height={900}
            className="
              w-full
              rounded-2xl
              object-cover
              shadow-md
            "
          />

          {/* Details */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3
                className="
                  text-2xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {style}
              </h3>

              <p
                className="
                  mt-2
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {roomType}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                className="
                  rounded-xl
                  border
                  border-slate-300
                  bg-white
                  px-5
                  py-3
                  font-medium
                  text-slate-700
                  transition-all
                  hover:bg-slate-100
                  hover:shadow-sm
                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-white
                  dark:hover:bg-slate-700
                "
              >
                ❤️ Save
              </button>

              <button
                className="
                  rounded-xl
                  border
                  border-slate-300
                  bg-white
                  px-5
                  py-3
                  font-medium
                  text-slate-700
                  transition-all
                  hover:bg-slate-100
                  hover:shadow-sm
                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-white
                  dark:hover:bg-slate-700
                "
              >
                ⬇ Download
              </button>

              <button
                className="
                  rounded-xl
                  bg-indigo-600
                  px-5
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  hover:bg-indigo-700
                  hover:shadow-lg
                "
              >
                🔄 Regenerate
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
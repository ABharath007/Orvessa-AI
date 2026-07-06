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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle>
            {style} Interior Design
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <Image
            src={image}
            alt={style}
            width={1400}
            height={900}
            className="w-full rounded-xl object-cover"
          />

          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                {style}
              </h3>

              <p className="text-slate-500">
                {roomType}
              </p>
            </div>

            <div className="flex gap-3">
              <button className="rounded-lg border px-4 py-2 hover:bg-slate-100">
                ❤️ Save
              </button>

              <button className="rounded-lg border px-4 py-2 hover:bg-slate-100">
                ⬇ Download
              </button>

              <button className="rounded-lg border px-4 py-2 hover:bg-slate-100">
                🔄 Regenerate
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
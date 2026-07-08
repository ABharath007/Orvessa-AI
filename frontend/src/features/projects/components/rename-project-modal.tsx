"use client";

import { useState } from "react";

interface RenameProjectModalProps {
  open: boolean;
  currentTitle: string;
  onClose: () => void;
  onSave: (title: string) => void;
}

export function RenameProjectModal({
  open,
  currentTitle,
  onClose,
  onSave,
}: RenameProjectModalProps) {
  const [title, setTitle] = useState(currentTitle);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-bold">
          Rename Project
        </h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border p-3"
        />

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onSave(title);
              onClose();
            }}
            className="rounded-xl bg-slate-900 px-5 py-2 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
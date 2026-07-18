"use client";

import { useEffect, useState } from "react";
import { Pencil, X } from "lucide-react";

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

  useEffect(() => {
    setTitle(currentTitle);
  }, [currentTitle, open]);

  if (!open) return null;

  const handleSave = () => {
    if (!title.trim()) return;

    onSave(title.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-2xl
          transition-all
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-100 p-3 dark:bg-indigo-900/40">
              <Pencil className="h-5 w-5 text-indigo-600" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rename Project
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Update your project name.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="
              rounded-xl
              p-2
              transition
              hover:bg-slate-100
              dark:hover:bg-slate-800
            "
          >
            <X className="h-5 w-5 dark:text-white" />
          </button>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Project Name
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project name..."
            className="
              w-full
              rounded-2xl
              border
              border-slate-300
              bg-white
              px-4
              py-3
              text-slate-900
              outline-none
              transition
              focus:border-indigo-500
              focus:ring-2
              focus:ring-indigo-200
              dark:border-slate-600
              dark:bg-slate-800
              dark:text-white
              dark:placeholder:text-slate-400
              dark:focus:ring-indigo-900
            "
          />
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="
              rounded-2xl
              border
              border-slate-300
              px-6
              py-3
              font-medium
              transition
              hover:bg-slate-100
              dark:border-slate-600
              dark:text-white
              dark:hover:bg-slate-800
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={!title.trim()}
            className="
              rounded-2xl
              bg-indigo-600
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-indigo-700
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Trash2,
  ShieldAlert,
} from "lucide-react";

export function DangerZone() {
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete your account?\n\nThis action cannot be undone."
    );

    if (!confirmed) return;

    setLoading(true);

    // TODO:
    // Connect backend API here

    setTimeout(() => {
      setLoading(false);

      alert(
        "Account deletion will be connected to the backend."
      );
    }, 1200);
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-red-300
        bg-red-50
        p-8
        shadow-sm
        transition-all
        duration-300
        dark:border-red-900
        dark:bg-red-950/30
      "
    >
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="rounded-2xl bg-red-100 p-3 dark:bg-red-900/50">
          <AlertTriangle className="h-7 w-7 text-red-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-red-600">
            Danger Zone
          </h2>

          <p className="mt-1 text-sm text-red-500 dark:text-red-400">
            These actions are permanent and cannot be undone.
          </p>
        </div>
      </div>

      {/* Warning Card */}
      <div
        className="
          mb-8
          flex
          gap-4
          rounded-2xl
          border
          border-red-200
          bg-white
          p-5
          dark:border-red-900
          dark:bg-slate-900
        "
      >
        <ShieldAlert className="mt-1 h-6 w-6 flex-shrink-0 text-red-500" />

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Delete your account permanently
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Deleting your account will permanently remove:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-400">
            <li>All AI projects</li>
            <li>Generated room designs</li>
            <li>Furniture collections</li>
            <li>Saved color palettes</li>
            <li>Your profile information</li>
            <li>Account settings</li>
          </ul>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        disabled={loading}
        className="
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-red-600
          px-8
          py-4
          font-semibold
          text-white
          transition
          hover:bg-red-700
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        <Trash2 className="h-5 w-5" />

        {loading
          ? "Deleting..."
          : "Delete Account"}
      </button>
    </div>
  );
}
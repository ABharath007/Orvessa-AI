"use client";

import {
  Crown,
  CheckCircle2,
} from "lucide-react";

interface UpgradeDialogProps {
  open: boolean;
  onClose: () => void;
}

export function UpgradeDialog({
  open,
  onClose,
}: UpgradeDialogProps) {
  if (!open) return null;

  const features = [
    "Unlimited AI Designs",
    "HD Quality Export",
    "Priority Support",
    "Furniture Marketplace",
    "Advanced Cost Estimation",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900">

        <div className="flex justify-center">
          <div className="rounded-full bg-indigo-100 p-5 dark:bg-indigo-900/30">
            <Crown className="h-10 w-10 text-indigo-600" />
          </div>
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold dark:text-white">
          Upgrade to Pro
        </h2>

        <p className="mt-3 text-center text-slate-500">
          Unlock the full power of Orvessa AI.
        </p>

        <div className="mt-8 space-y-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />

              <span className="dark:text-slate-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-slate-100 p-5 text-center dark:bg-slate-800">
          <h3 className="text-4xl font-bold text-indigo-600">
            ₹999
          </h3>

          <p className="text-slate-500">
            per month
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border py-3 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            className="flex-1 rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
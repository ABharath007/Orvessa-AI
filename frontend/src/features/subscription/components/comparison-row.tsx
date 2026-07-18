"use client";

import { Check, X } from "lucide-react";

interface ComparisonRowProps {
  feature: string;
  free: boolean;
  pro: boolean;
  business: boolean;
}

export function ComparisonRow({
  feature,
  free,
  pro,
  business,
}: ComparisonRowProps) {
  const renderValue = (value: boolean) => {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-emerald-500" />
    ) : (
      <X className="mx-auto h-5 w-5 text-red-500" />
    );
  };

  return (
    <tr className="border-b border-slate-200 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900">
      <td className="py-4 font-medium text-slate-900 dark:text-white">
        {feature}
      </td>

      <td className="py-4 text-center">
        {renderValue(free)}
      </td>

      <td className="py-4 text-center">
        {renderValue(pro)}
      </td>

      <td className="py-4 text-center">
        {renderValue(business)}
      </td>
    </tr>
  );
}
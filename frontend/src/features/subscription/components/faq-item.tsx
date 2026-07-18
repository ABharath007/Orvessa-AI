"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { FAQ } from "../types/subscription.types";

interface FAQItemProps {
  item: FAQ;
}

export function FAQItem({
  item,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-semibold text-slate-900 dark:text-white">
          {item.question}
        </span>

        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 text-slate-500 dark:text-slate-400">
          {item.answer}
        </div>
      </div>
    </div>
  );
}
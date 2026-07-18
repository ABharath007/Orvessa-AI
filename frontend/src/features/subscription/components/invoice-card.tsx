"use client";

import { Download } from "lucide-react";
import type { Invoice } from "../types/subscription.types";

interface InvoiceCardProps {
  invoice: Invoice;
}

export function InvoiceCard({
  invoice,
}: InvoiceCardProps) {
  const statusColor = {
    Paid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    Pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Failed: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div>
        <h3 className="font-semibold">
          {invoice.invoiceNumber}
        </h3>

        <p className="text-sm text-slate-500">
          {invoice.date}
        </p>
      </div>

      <div className="text-center">
        <p className="font-bold">
          ₹{invoice.amount}
        </p>

        <span
          className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            statusColor[invoice.status]
          }`}
        >
          {invoice.status}
        </span>
      </div>

      <button className="rounded-xl border p-3 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
        <Download className="h-5 w-5" />
      </button>
    </div>
  );
}
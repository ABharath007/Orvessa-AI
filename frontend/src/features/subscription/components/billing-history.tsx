"use client";

import { invoices } from "../mock/subscription.mock";
import { InvoiceCard } from "./invoice-card";

export function BillingHistory() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-bold dark:text-white">
          Billing History
        </h2>

        <p className="mt-2 text-slate-500">
          Download previous invoices.
        </p>
      </div>

      <div className="space-y-4">
        {invoices.map((invoice) => (
          <InvoiceCard
            key={invoice.id}
            invoice={invoice}
          />
        ))}
      </div>
    </section>
  );
}
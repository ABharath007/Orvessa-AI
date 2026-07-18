"use client";

import {
  CreditCard,
  Pencil,
} from "lucide-react";

import { paymentMethod } from "../mock/subscription.mock";

export function PaymentMethod() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold dark:text-white">
            Payment Method
          </h2>

          <p className="mt-2 text-slate-500">
            Manage your default payment card.
          </p>
        </div>

        <div className="rounded-2xl bg-indigo-100 p-4 dark:bg-indigo-900/30">
          <CreditCard className="h-8 w-8 text-indigo-600" />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between rounded-2xl bg-slate-50 p-6 dark:bg-slate-800">
        <div>
          <h3 className="font-semibold dark:text-white">
            {paymentMethod.cardBrand} **** {paymentMethod.last4}
          </h3>

          <p className="mt-2 text-slate-500">
            {paymentMethod.cardHolder}
          </p>

          <p className="text-sm text-slate-400">
            Expires {paymentMethod.expiry}
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-700">
          <Pencil className="h-4 w-4" />
          Change
        </button>
      </div>
    </section>
  );
}

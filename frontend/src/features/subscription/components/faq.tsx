"use client";

import { faqData } from "../mock/subscription.mock";
import { FAQItem } from "./faq-item";

export function FAQ() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Everything you need to know about your subscription.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does Orvessa AI work?",
    answer:
      "Simply upload a photo of your room, choose your preferred design style, and our AI generates a redesigned interior complete with furniture recommendations and cost estimation.",
  },
  {
    question: "Do I need design experience?",
    answer:
      "No. Orvessa AI is designed for everyone, from homeowners to professional interior designers.",
  },
  {
    question: "Can I download my AI designs?",
    answer:
      "Yes. You can download high-quality AI-generated room designs and keep them in your projects.",
  },
  {
    question: "Can I change the design style later?",
    answer:
      "Absolutely. You can regenerate your room using different design styles as many times as your plan allows.",
  },
  {
    question: "Does Orvessa estimate renovation costs?",
    answer:
      "Yes. Our AI provides an estimated renovation cost along with furniture recommendations.",
  },
];

export function FAQPreview() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-slate-50 py-28 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/40">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-slate-500 dark:text-slate-400">
            Everything you need to know about Orvessa AI.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
            >

              <button
                onClick={() =>
                  setOpen(
                    open === index ? null : index
                  )
                }
                className="flex w-full items-center justify-between px-6 py-6 text-left"
              >

                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {open === index && (
                <div className="border-t border-slate-200 px-6 py-5 dark:border-slate-800">

                  <p className="leading-8 text-slate-500 dark:text-slate-400">
                    {faq.answer}
                  </p>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
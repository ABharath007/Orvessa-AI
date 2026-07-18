"use client";

import {
  Upload,
  Sparkles,
  Sofa,
  Download,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Room",
    description:
      "Upload a clear photo of your room in just a few seconds.",
  },
  {
    icon: Sparkles,
    title: "Choose AI Style",
    description:
      "Select your preferred interior style and budget.",
  },
  {
    icon: Sofa,
    title: "AI Generates Design",
    description:
      "Our AI redesigns your room with furniture and color recommendations.",
  },
  {
    icon: Download,
    title: "Download & Save",
    description:
      "Download HD designs or save them to your dashboard projects.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-28 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/40">
            How It Works
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Design Your Dream Room
            <br />
            In Four Simple Steps
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
            From uploading your room to receiving AI-powered
            interior designs, everything happens in just a few
            clicks.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500 lg:block" />

          <div className="space-y-16">

            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >

                {/* Card */}

                <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg">

                    <step.icon className="h-8 w-8" />

                  </div>

                  <h3 className="mt-8 text-3xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-500 dark:text-slate-400">
                    {step.description}
                  </p>

                </div>

                {/* Number */}

                <div className="flex justify-center">

                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-4xl font-bold text-white shadow-2xl">
                    {index + 1}
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
"use client";

import {
  Sparkles,
  Sofa,
  Palette,
  IndianRupee,
  FolderOpen,
  Wand2,
} from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI Room Design",
    description:
      "Generate stunning interior designs in seconds using advanced AI.",
  },
  {
    icon: Sofa,
    title: "Furniture Suggestions",
    description:
      "Discover furniture that perfectly matches your room style.",
  },
  {
    icon: Palette,
    title: "Color Palette",
    description:
      "Generate harmonious color palettes for every room.",
  },
  {
    icon: IndianRupee,
    title: "Cost Estimation",
    description:
      "Estimate renovation costs before spending a single rupee.",
  },
  {
    icon: FolderOpen,
    title: "Project Management",
    description:
      "Organize and revisit all your AI interior projects.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description:
      "Receive smart recommendations tailored to your room.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-28 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/40">
            Features
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
            Orvessa AI combines artificial intelligence,
            interior design, cost estimation and furniture
            recommendations into one modern platform.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                dark:border-slate-800
                dark:bg-slate-900
              "
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg transition-transform duration-500 group-hover:scale-110">

                <feature.icon className="h-8 w-8" />

              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-500 dark:text-slate-400">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
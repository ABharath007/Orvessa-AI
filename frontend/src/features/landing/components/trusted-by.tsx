"use client";

import { Building2, Users, Sofa, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Users",
  },
  {
    icon: Sparkles,
    value: "250K+",
    label: "AI Designs Generated",
  },
  {
    icon: Sofa,
    value: "15,000+",
    label: "Furniture Suggestions",
  },
  {
    icon: Building2,
    value: "50+",
    label: "Design Partners",
  },
];

export function TrustedBy() {
  return (
    <section className="border-y border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Trusted Worldwide
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Trusted by Interior Designers,
            Homeowners & Architects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
            Thousands of users rely on Orvessa AI every day
            to redesign spaces, estimate renovation costs,
            and discover furniture.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg">
                <item.icon className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-4xl font-bold">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
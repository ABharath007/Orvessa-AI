"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Orvessa AI reduced my design time by more than 70%. The AI suggestions are incredibly accurate.",
  },
  {
    name: "David Lee",
    role: "Home Owner",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "I redesigned my living room without hiring an expensive designer. Amazing experience!",
  },
  {
    name: "Emily Brown",
    role: "Architect",
    image: "https://i.pravatar.cc/150?img=44",
    review:
      "The furniture recommendations and cost estimation saved my clients a lot of money.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-28 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/40">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Loved by Designers Worldwide
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
            Thousands of users trust Orvessa AI to transform
            their interiors faster and smarter.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950"
            >

              <div className="flex items-center gap-4">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="rounded-full"
                />

                <div>

                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>

                </div>

              </div>

              <div className="mt-6 flex">

                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                "{item.review}"
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
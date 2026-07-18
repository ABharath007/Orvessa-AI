"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const furniture = [
  {
    name: "Luxury Sofa",
    category: "Living Room",
    price: "₹89,999",
    image: "/images/furniture/sofa.jpg",
  },
  {
    name: "Modern Bed",
    category: "Bedroom",
    price: "₹64,999",
    image: "/images/furniture/bed.jpg",
  },
  {
    name: "Dining Set",
    category: "Dining",
    price: "₹54,999",
    image: "/images/furniture/dining.jpg",
  },
  {
    name: "Accent Chair",
    category: "Office",
    price: "₹18,999",
    image: "/images/furniture/chair.jpg",
  },
];

export function FurnitureShowcase() {
  return (
    <section className="bg-slate-50 py-28 dark:bg-slate-900">

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex items-center justify-between">

          <div>

            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/40">
              Furniture Collection
            </span>

            <h2 className="mt-6 text-5xl font-bold">
              Discover Premium Furniture
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
              AI recommends furniture that perfectly matches
              your room style and budget.
            </p>

          </div>

          <button className="hidden items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 lg:flex">
            View Collection

            <ArrowRight size={18} />
          </button>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {furniture.map((item) => (

            <div
              key={item.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-950"
            >

              <div className="overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="space-y-3 p-6">

                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {item.category}
                </span>

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between">

                  <span className="text-xl font-bold text-indigo-600">
                    {item.price}
                  </span>

                  <button className="rounded-xl border px-4 py-2 transition hover:bg-slate-100 dark:hover:bg-slate-800">
                    View
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
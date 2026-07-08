"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";

import type { Furniture } from "../types/furniture.types";

interface Props {
  furniture: Furniture;
}

export function FurnitureCard({
  furniture,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={furniture.image}
          alt={furniture.name}
          width={500}
          height={400}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow transition hover:bg-slate-100">
          <Heart className="h-5 w-5 text-slate-600" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-lg font-bold">
            {furniture.name}
          </h3>

          <p className="text-sm text-slate-500">
            {furniture.category}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900">
            ₹{furniture.price.toLocaleString()}
          </span>

          <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-medium">
              {furniture.rating}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 rounded-xl border border-slate-300 py-3 font-medium transition hover:bg-slate-100">
            View Details
          </button>

          <button className="flex items-center justify-center rounded-xl bg-slate-900 px-5 text-white transition hover:bg-slate-800">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
"use client";

import Image from "next/image";
import { Heart, Star } from "lucide-react";

import type { Furniture } from "../types/furniture.types";

interface FurnitureCardProps {
  furniture: Furniture;
}

export function FurnitureCard({
  furniture,
}: FurnitureCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Image
        src={furniture.image}
        alt={furniture.name}
        width={500}
        height={400}
        className="h-56 w-full object-cover"
      />

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              {furniture.name}
            </h3>

            <p className="text-sm text-slate-500">
              {furniture.brand}
            </p>
          </div>

          <button className="rounded-lg border p-2 hover:bg-slate-100">
            <Heart className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
            {furniture.category}
          </span>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{furniture.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">
            ₹{furniture.price.toLocaleString()}
          </span>

          <button className="rounded-xl bg-slate-900 px-5 py-2 text-white transition hover:bg-slate-800">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
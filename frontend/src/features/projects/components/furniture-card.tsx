"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import type { Furniture } from "../types/furniture.types";

interface Props {
  furniture: Furniture;
}

export function FurnitureCard({ furniture }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
      <Image
        src={furniture.image}
        alt={furniture.name}
        width={500}
        height={400}
        className="h-52 w-full object-cover"
      />

      <div className="space-y-3 p-5">
        <h3 className="font-semibold">
          {furniture.name}
        </h3>

        <p className="text-sm text-slate-500">
          {furniture.category}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">
            ₹{furniture.price.toLocaleString()}
          </span>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {furniture.rating}
          </div>
        </div>

        <button className="w-full rounded-xl bg-slate-900 py-3 font-medium text-white transition hover:bg-slate-800">
          View Details
        </button>
      </div>
    </div>
  );
}

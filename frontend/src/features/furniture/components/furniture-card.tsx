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
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-indigo-300
        hover:shadow-2xl
        dark:border-slate-700
        dark:bg-slate-900
        dark:hover:border-indigo-500
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={furniture.image}
          alt={furniture.name}
          width={500}
          height={400}
          className="
            h-60
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <button
          className="
            absolute
            right-4
            top-4
            rounded-full
            border
            border-slate-200
            bg-white
            p-2
            shadow-md
            transition-all
            hover:scale-110
            hover:bg-slate-100
            dark:border-slate-700
            dark:bg-slate-800
            dark:hover:bg-slate-700
          "
        >
          <Heart className="h-5 w-5 text-slate-600 dark:text-slate-300" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        {/* Title */}
        <div>
          <h3
            className="
              text-xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            {furniture.name}
          </h3>

          <p
            className="
              mt-1
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            {furniture.brand}
          </p>
        </div>

        {/* Category & Rating */}
        <div className="flex items-center justify-between">
          <span
            className="
              rounded-full
              bg-slate-100
              px-3
              py-1
              text-sm
              font-medium
              text-slate-700
              dark:bg-slate-800
              dark:text-slate-300
            "
          >
            {furniture.category}
          </span>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span
              className="
                font-medium
                text-slate-700
                dark:text-slate-300
              "
            >
              {furniture.rating}
            </span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <span
            className="
              text-3xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            ₹{furniture.price.toLocaleString("en-IN")}
          </span>

          <button
            className="
              rounded-xl
              bg-indigo-600
              px-6
              py-2.5
              font-semibold
              text-white
              transition-all
              hover:bg-indigo-700
              hover:shadow-lg
            "
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}
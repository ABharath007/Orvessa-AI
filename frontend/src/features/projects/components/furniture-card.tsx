"use client";

import Image from "next/image";
import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import type { Furniture } from "../types/furniture.types";

interface Props {
  furniture: Furniture;
}

export function FurnitureCard({
  furniture,
}: Props) {
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
            group-hover:scale-110
          "
        />

        {/* Favorite */}
        <button
          className="
            absolute
            right-4
            top-4
            rounded-full
            bg-white
            p-2
            shadow-lg
            transition-all
            hover:scale-110
            hover:bg-slate-100
            dark:bg-slate-800
            dark:hover:bg-slate-700
          "
        >
          <Heart className="h-5 w-5 text-slate-600 dark:text-slate-300" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        {/* Name */}
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
            {furniture.category}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span
            className="
              text-2xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            ₹{furniture.price.toLocaleString()}
          </span>

          <div
            className="
              flex
              items-center
              gap-1
              rounded-full
              bg-yellow-100
              px-3
              py-1
              dark:bg-yellow-900/30
            "
          >
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span
              className="
                text-sm
                font-semibold
                text-slate-800
                dark:text-yellow-200
              "
            >
              {furniture.rating}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="
              flex-1
              rounded-xl
              border
              border-slate-300
              bg-white
              py-3
              font-medium
              text-slate-700
              transition-all
              hover:bg-slate-100
              hover:shadow-sm
              dark:border-slate-700
              dark:bg-slate-800
              dark:text-white
              dark:hover:bg-slate-700
            "
          >
            View Details
          </button>

          <button
            className="
              flex
              items-center
              justify-center
              rounded-xl
              bg-indigo-600
              px-5
              text-white
              transition-all
              hover:bg-indigo-700
              hover:shadow-lg
            "
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
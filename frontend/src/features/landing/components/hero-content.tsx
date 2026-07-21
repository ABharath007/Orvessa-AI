"use client";

import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroBadge } from "./hero-badge";

export function HeroContent() {
  return (
    <div>
      <HeroBadge />

      <h1
        className="
          mt-10
          max-w-4xl
          text-5xl
          font-black
          leading-[1.05]
          tracking-tight
          text-slate-900
          md:text-7xl
          xl:text-8xl
          dark:text-white
        "
      >
        Transform
        <br />

        <span
          className="
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
            bg-clip-text
            text-transparent
          "
        >
          Any Room
        </span>

        <br />

        Into Your
        <br />

        Dream Home
      </h1>

      <p
        className="
          mt-8
          max-w-2xl
          text-xl
          leading-9
          text-slate-600
          dark:text-slate-400
        "
      >
        Generate stunning AI-powered interior designs,
        discover premium furniture, estimate renovation
        costs, and visualize your dream space in seconds.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/auth/register">
          <Button
            size="lg"
            className="
              group
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
            "
          >
            Try For Free

            <ArrowRight
              className="
                h-5
                w-5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Button>
        </Link>

        <Button
          variant="outline"
          size="lg"
          className="
            h-14
            rounded-2xl
            border-slate-300
            px-8
            text-base
            backdrop-blur-xl
            transition-all
            duration-300
            hover:bg-white
            hover:shadow-lg
            dark:border-slate-700
            dark:hover:bg-slate-900
          "
        >
          <PlayCircle className="mr-2 h-5 w-5" />
          Watch Demo
        </Button>
      </div>

      <div className="mt-10 flex items-center gap-6">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <div className="text-sm text-slate-600 dark:text-slate-400">
          Trusted by
          <span className="ml-1 font-bold">
            10,000+
          </span>{" "}
          designers worldwide
        </div>
      </div>
    </div>
  );
}
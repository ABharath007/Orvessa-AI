"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/50 dark:text-indigo-300">
              <Sparkles className="h-4 w-4" />
              AI Powered Interior Design
            </div>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              Design
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {" "}
                Beautiful
              </span>
              <br />
              Interiors With AI
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Upload your room, choose your style, and let AI
              transform your interior into a stunning design in
              seconds.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link href="/auth/register">
                <Button
                  size="lg"
                  className="gap-2 rounded-xl"
                >
                  Try For Free

                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="gap-2 rounded-xl"
              >
                <PlayCircle className="h-5 w-5" />
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
                </span>
                designers worldwide
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-800 dark:bg-slate-900">

              <Image
  src="/images/hero-room.jpg"
  alt="AI Interior Design"
  width={1200}
  height={800}
  className="h-[520px] w-full rounded-2xl object-cover"
/>

            </div>

            {/* Floating Card 1 */}

            <div className="absolute -left-10 top-16 rounded-2xl border bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900">

              <p className="text-sm text-slate-500">
                Estimated Cost
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                ₹3.5L
              </h3>

            </div>

            {/* Floating Card 2 */}

            <div className="absolute -right-8 bottom-12 rounded-2xl border bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900">

              <p className="text-sm text-slate-500">
                AI Match
              </p>

              <h3 className="mt-2 text-2xl font-bold text-green-600">
                97%
              </h3>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
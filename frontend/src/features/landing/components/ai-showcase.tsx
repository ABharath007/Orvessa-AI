
"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export function AIShowcase() {
  return (
    <section
      id="showcase"
      className="bg-white py-28 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600 dark:bg-violet-900/40">
            AI Showcase
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            See AI Transform Your Room
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
            Upload a photo of your room and instantly receive
            stunning AI-generated interior designs with
            furniture recommendations and cost estimation.
          </p>

        </div>

        {/* Showcase */}

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-3">

          {/* Before */}

          <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900">

            <Image
              src="/images/before-room.jpg"
              alt="Before"
              width={700}
              height={500}
              className="h-[380px] w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                Before
              </h3>

              <p className="mt-2 text-slate-500">
                Original room uploaded by the user.
              </p>

            </div>

          </div>

          {/* Middle */}

          <div className="flex flex-col items-center">

            <div className="rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-2xl">

              <Sparkles className="h-10 w-10" />

            </div>

            <ArrowRight className="my-6 h-12 w-12 text-indigo-600" />

            <h3 className="text-3xl font-bold">
              AI Processing
            </h3>

            <p className="mt-4 text-center text-slate-500">
              Detects furniture,
              lighting,
              room layout,
              colors,
              and style.
            </p>

          </div>

          {/* After */}

          <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900">

            <Image
              src="/images/after-room.jpg"
              alt="After"
              width={700}
              height={500}
              className="h-[380px] w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">
                AI Generated
              </h3>

              <p className="mt-2 text-slate-500">
                Modern design with furniture, lighting and
                optimized colors.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
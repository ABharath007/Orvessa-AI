"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export function HeroDashboard() {
  return (
    <motion.div
  className="relative hidden lg:block"
  initial={{
    opacity: 0,
    x: 80,
  }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -10, 0],
  }}
  transition={{
    opacity: {
      duration: 0.8,
    },
    x: {
      duration: 0.8,
    },
    y: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
>

    <motion.div
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    y: [0, -12, 0],
  }}
  transition={{
    delay: 0.4,
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    -left-10
    top-24
    rounded-3xl
    border
    border-white/40
    bg-white/70
    px-6
    py-5
    shadow-2xl
    backdrop-blur-xl
    dark:border-slate-700
    dark:bg-slate-900/70
  "
>
  <p className="text-sm text-slate-500">
    Time Saved
  </p>

  <h3 className="mt-2 text-3xl font-bold">
    6 hrs
  </h3>
</motion.div>

<motion.div
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    y: [0, 12, 0],
  }}
  transition={{
    delay: 0.8,
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    -right-10
    bottom-20
    rounded-3xl
    border
    border-white/40
    bg-white/70
    px-6
    py-5
    shadow-2xl
    backdrop-blur-xl
    dark:border-slate-700
    dark:bg-slate-900/70
  "
>
  <p className="text-sm text-slate-500">
    AI Score
  </p>

  <h3 className="mt-2 text-3xl font-bold text-green-600">
    97%
  </h3>
</motion.div>
      <div
        className="
          rounded-[32px]
          border
          border-white/30
          bg-white/70
          p-6
          shadow-2xl
          backdrop-blur-2xl
          dark:border-slate-800
          dark:bg-slate-900/70
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">
              AI Generated Interior
            </p>

            <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              Luxury Living Room
            </h3>
          </div>

          <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            97% Match
          </div>
        </div>

        {/* Preview */}
        <div className="mt-6 overflow-hidden rounded-3xl">
          <Image
            src="/images/hero-room.jpg"
            alt="AI Interior Design"
            width={700}
            height={500}
            className="h-[380px] w-full object-cover"
            priority
          />
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
            <p className="text-sm text-slate-500">
              Estimated Budget
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              ₹3.5L
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
            <p className="text-sm text-slate-500">
              Furniture
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              18 Items
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
            <p className="text-sm text-slate-500">
              AI Confidence
            </p>

            <h3 className="mt-2 text-2xl font-bold text-green-600">
              97%
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
            <p className="text-sm text-slate-500">
              Style
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              Modern Luxury
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
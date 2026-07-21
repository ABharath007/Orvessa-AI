"use client";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />

      {/* Blob 1 */}
      <div
        className="
          absolute
          left-[-120px]
          top-[-120px]
          h-96
          w-96
          rounded-full
          bg-indigo-500/20
          blur-[120px]
          animate-pulse
        "
      />

      {/* Blob 2 */}
      <div
        className="
          absolute
          right-[-120px]
          top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-violet-500/20
          blur-[120px]
          animate-pulse
        "
      />

      {/* Blob 3 */}
      <div
        className="
          absolute
          bottom-[-180px]
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/20
          blur-[160px]
          animate-pulse
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          dark:opacity-[0.05]
          [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
          [background-size:50px_50px]
        "
      />
    </div>
  );
}
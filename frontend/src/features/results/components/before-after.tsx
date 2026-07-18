"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  original: string;
  generated: string;
}

export function BeforeAfter({
  original,
  generated,
}: BeforeAfterProps) {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const [position, setPosition] =
    useState(50);

  const [dragging, setDragging] =
    useState(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect =
      containerRef.current.getBoundingClientRect();

    const x = clientX - rect.left;

    const percent = Math.min(
      100,
      Math.max(0, (x / rect.width) * 100)
    );

    setPosition(percent);
  };

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
          Before & After
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Drag the slider to compare your room.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto h-[550px] w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-300 shadow-2xl select-none dark:border-slate-700"
        onMouseDown={(e) => {
          setDragging(true);
          updatePosition(e.clientX);
        }}
        onMouseMove={(e) => {
          if (dragging) {
            updatePosition(e.clientX);
          }
        }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchStart={(e) => {
          updatePosition(
            e.touches[0].clientX
          );
        }}
        onTouchMove={(e) => {
          updatePosition(
            e.touches[0].clientX
          );
        }}
      >
        {/* Original */}
        <Image
          src={original}
          alt="Original"
          fill
          className="object-cover"
        />

        {/* AI Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            width: `${position}%`,
          }}
        >
          <Image
            src={generated}
            alt="Generated"
            fill
            className="object-cover"
          />
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 h-full w-1 bg-white shadow-xl"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
          }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-indigo-600 to-purple-600 text-xl font-bold text-white shadow-2xl transition hover:scale-110"
          style={{
            left: `${position}%`,
          }}
        >
          ↔
        </div>

        {/* Labels */}
        <div className="absolute left-5 top-5 rounded-xl bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
          BEFORE
        </div>

        <div className="absolute right-5 top-5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
          AI GENERATED
        </div>
      </div>
    </section>
  );
}
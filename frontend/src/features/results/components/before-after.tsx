"use client";

import Image from "next/image";

interface BeforeAfterProps {
  original: string;
  generated: string;
}

export function BeforeAfter({
  original,
  generated,
}: BeforeAfterProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold">
          Original Room
        </h2>

        <Image
          src={original}
          alt="Original Room"
          width={800}
          height={600}
          className="h-[420px] w-full rounded-xl object-cover"
        />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold">
          AI Generated Design
        </h2>

        <Image
          src={generated}
          alt="Generated Room"
          width={800}
          height={600}
          className="h-[420px] w-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
}
"use client";

interface ResultHeaderProps {
  roomType: string;
  style: string;
}

export function ResultHeader({
  roomType,
  style,
}: ResultHeaderProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            ✨ AI Generated Interior
          </h1>

          <p className="mt-2 text-slate-500">
            Your room has been redesigned using AI.
          </p>
        </div>

        <div className="flex gap-3">
          <span className="rounded-full bg-indigo-100 px-4 py-2 font-medium text-indigo-700">
            {roomType}
          </span>

          <span className="rounded-full bg-green-100 px-4 py-2 font-medium text-green-700">
            {style}
          </span>
        </div>
      </div>
    </div>
  );
}
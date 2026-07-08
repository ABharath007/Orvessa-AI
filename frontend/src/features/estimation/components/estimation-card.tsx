"use client";

interface EstimationCardProps {
  title: string;
  amount: number;
}

export function EstimationCard({
  title,
  amount,
}: EstimationCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-3xl font-bold text-indigo-600">
            ₹{amount.toLocaleString()}
          </p>
        </div>

        <div className="rounded-full bg-indigo-100 p-4">
          <span className="text-2xl">💰</span>
        </div>
      </div>
    </div>
  );
}
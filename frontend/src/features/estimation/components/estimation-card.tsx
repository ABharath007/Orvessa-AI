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
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
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
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <h3
            className="
              text-lg
              font-semibold
              text-slate-900
              dark:text-white
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3
              text-3xl
              font-bold
              text-indigo-600
              dark:text-indigo-400
            "
          >
            ₹{amount.toLocaleString("en-IN")}
          </p>

          <p
            className="
              mt-2
              text-sm
              text-slate-500
              dark:text-slate-400
            "
          >
            AI estimated renovation cost
          </p>
        </div>

        {/* Icon */}
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-indigo-100
            transition-all
            duration-300
            group-hover:scale-110
            dark:bg-indigo-900/30
          "
        >
          <span className="text-3xl">
            💰
          </span>
        </div>
      </div>
    </div>
  );
}
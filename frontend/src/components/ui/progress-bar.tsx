import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  className?: string;
}

export function ProgressBar({
  value,
  className,
}: ProgressBarProps) {
  return (
    <div
      className={cn(
        "h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
        className
      )}
    >
      <div
        className="
          h-full
          rounded-full
          bg-gradient-to-r
          from-indigo-500
          to-violet-600
          transition-all
          duration-700
        "
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
}
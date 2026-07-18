import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "Active" | "Pending" | "Expired" | "Paid" | "Failed";
}

export function StatusBadge({
  status,
}: StatusBadgeProps) {
  const styles = {
    Active:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",

    Paid:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",

    Pending:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",

    Expired:
      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",

    Failed:
      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-semibold",
        styles[status]
      )}
    >
      {status}
    </span>
  );
}
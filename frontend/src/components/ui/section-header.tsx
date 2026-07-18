interface SectionHeaderProps {
  title: string;
  description?: string;
}

export function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
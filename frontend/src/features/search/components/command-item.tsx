"use client";

import { Keyboard } from "lucide-react";

interface CommandItemProps {
  title: string;
  shortcut: string;
  onClick?: () => void;
}

export function CommandItem({
  title,
  shortcut,
  onClick,
}: CommandItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-xl p-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      <div className="flex items-center gap-3">
        <Keyboard className="h-4 w-4 text-indigo-500" />

        <span className="text-sm font-medium">
          {title}
        </span>
      </div>

      <kbd className="rounded-lg bg-slate-200 px-2 py-1 text-xs dark:bg-slate-700">
        {shortcut}
      </kbd>
    </button>
  );
}
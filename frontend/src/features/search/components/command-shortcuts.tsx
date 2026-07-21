"use client";

import { CommandItem } from "./command-item";

export function CommandShortcuts() {
  return (
    <div className="space-y-3">
      <h3 className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
        Keyboard Shortcuts
      </h3>

      <div className="space-y-2">
        <CommandItem
          title="Open Search"
          shortcut="Ctrl + K"
        />

        <CommandItem
          title="Go Dashboard"
          shortcut="Ctrl + D"
        />

        <CommandItem
          title="Upload Room"
          shortcut="Ctrl + U"
        />

        <CommandItem
          title="Settings"
          shortcut="Ctrl + ,"
        />
      </div>
    </div>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "cmdk";

const pages = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Projects", href: "/dashboard/projects" },
  { name: "Upload Room", href: "/dashboard/upload" },
  { name: "Gallery", href: "/dashboard/gallery" },
  { name: "Favorites", href: "/dashboard/favorites" },
  { name: "Results", href: "/dashboard/results" },
  { name: "Settings", href: "/dashboard/settings" },
  { name: "Profile", href: "/dashboard/profile" },
];

export function CommandPalette() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);

  // Ctrl + K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", down);

    return () => window.removeEventListener("keydown", down);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClick);
    }

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-start
        justify-center
        bg-black/50
        backdrop-blur-sm
        pt-24
      "
    >
      <Command
        ref={dialogRef}
        className="
          w-full
          max-w-2xl
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-2xl
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <CommandInput
          placeholder="Search projects, furniture, gallery..."
          className="
            w-full
            border-b
            border-slate-200
            bg-transparent
            px-5
            py-5
            text-lg
            text-slate-900
            outline-none
            placeholder:text-slate-400
            dark:border-slate-700
            dark:text-white
            dark:placeholder:text-slate-500
          "
        />

        <CommandList
          className="
            max-h-[420px]
            overflow-y-auto
            p-3
          "
        >
          <CommandEmpty
            className="
              py-8
              text-center
              text-slate-500
              dark:text-slate-400
            "
          >
            No results found.
          </CommandEmpty>

          <CommandGroup
            heading="Navigation"
            className="
              text-slate-500
              dark:text-slate-400
            "
          >
            {pages.map((page) => (
              <CommandItem
                key={page.href}
                onSelect={() => {
                  router.push(page.href);
                  setOpen(false);
                }}
                className="
                  flex
                  cursor-pointer
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-4
                  text-slate-900
                  transition-all
                  hover:bg-slate-100
                  dark:text-white
                  dark:hover:bg-slate-800
                "
              >
                <span>{page.name}</span>

                <span
                  className="
                    rounded-full
                    bg-indigo-100
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-indigo-600
                    dark:bg-indigo-900/40
                    dark:text-indigo-300
                  "
                >
                  Page
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
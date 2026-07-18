"use client";

import { useEffect, useRef, useState } from "react";
import {
  EllipsisVertical,
  Pencil,
  Heart,
  Copy,
  Trash2,
  Share2,
  Download,
} from "lucide-react";

import { useProjectStore } from "../store/project.store";
import { RenameProjectModal } from "./rename-project-modal";

interface ProjectActionsProps {
  projectId: string;
  projectTitle: string;
  isFavorite: boolean;
}

export function ProjectActions({
  projectId,
  projectTitle,
  isFavorite,
}: ProjectActionsProps) {
  const [open, setOpen] = useState(false);
  const [renameOpen, setRenameOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const removeProject = useProjectStore(
    (state) => state.removeProject
  );

  const toggleFavorite = useProjectStore(
    (state) => state.toggleFavorite
  );

  const renameProject = useProjectStore(
    (state) => state.renameProject
  );

  const duplicateProject = useProjectStore(
    (state) => state.duplicateProject
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <>
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setOpen(!open)}
          className="
            rounded-xl
            bg-white/90
            p-2
            shadow-md
            backdrop-blur
            transition-all
            hover:scale-105
            hover:bg-white
            dark:bg-slate-900/80
            dark:text-white
            dark:hover:bg-slate-800
          "
        >
          <EllipsisVertical className="h-5 w-5" />
        </button>

        {open && (
          <div
            className="
              absolute
              right-0
              top-12
              z-50
              w-60
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-2
              shadow-2xl
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <MenuItem
              icon={<Pencil className="h-4 w-4" />}
              label="Rename"
              onClick={() => {
                setRenameOpen(true);
                setOpen(false);
              }}
            />

            <MenuItem
              icon={
                <Heart
                  className={`h-4 w-4 ${
                    isFavorite
                      ? "fill-red-500 text-red-500"
                      : ""
                  }`}
                />
              }
              label={
                isFavorite
                  ? "Remove Favorite"
                  : "Add Favorite"
              }
              onClick={() => {
                toggleFavorite(projectId);
                setOpen(false);
              }}
            />

            <MenuItem
              icon={<Copy className="h-4 w-4" />}
              label="Duplicate"
              onClick={() => {
                duplicateProject(projectId);
                setOpen(false);
              }}
            />

            <MenuItem
              icon={<Share2 className="h-4 w-4" />}
              label="Share"
              onClick={async () => {
                try {
                  const url = `${window.location.origin}/dashboard/projects/${projectId}`;

                  await navigator.clipboard.writeText(url);

                  alert("✅ Project link copied!");
                } catch {
                  alert("Unable to copy link.");
                }

                setOpen(false);
              }}
            />

            <MenuItem
              icon={<Download className="h-4 w-4" />}
              label="Download"
              onClick={() => {
                const data = JSON.stringify(
                  {
                    id: projectId,
                    exportedAt:
                      new Date().toISOString(),
                  },
                  null,
                  2
                );

                const blob = new Blob([data], {
                  type: "application/json",
                });

                const url =
                  URL.createObjectURL(blob);

                const a =
                  document.createElement("a");

                a.href = url;
                a.download = `project-${projectId}.json`;
                a.click();

                URL.revokeObjectURL(url);

                setOpen(false);
              }}
            />

            <div className="my-2 border-t border-slate-200 dark:border-slate-700" />

            <MenuItem
              danger
              icon={<Trash2 className="h-4 w-4" />}
              label="Delete"
              onClick={() => {
                if (
                  confirm(
                    "Delete this project permanently?"
                  )
                ) {
                  removeProject(projectId);
                }

                setOpen(false);
              }}
            />
          </div>
        )}
      </div>

      <RenameProjectModal
        open={renameOpen}
        currentTitle={projectTitle}
        onClose={() => setRenameOpen(false)}
        onSave={(title) =>
          renameProject(projectId, title)
        }
      />
    </>
  );
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  danger?: boolean;
}

function MenuItem({
  icon,
  label,
  onClick,
  danger,
}: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        text-left
        transition-all
        duration-200
        ${
          danger
            ? "text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30"
            : "hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
        }
      `}
    >
      {icon}

      <span className="font-medium">
        {label}
      </span>
    </button>
  );
}
"use client";

import { useEffect, useState } from "react";
import { FolderPlus, X } from "lucide-react";

import { useProjectStore } from "../store/project.store";
import type { Project } from "../types/project.types";

import { useNotificationStore } from "@/features/dashboard/store/notification.store";

interface CreateProjectModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateProjectModal({
  open,
  onClose,
}: CreateProjectModalProps) {
  const [title, setTitle] = useState("");
  const [roomType, setRoomType] = useState("Living Room");
  const [style, setStyle] = useState("Modern");

  const addProject = useProjectStore(
    (state) => state.addProject
  );

  const addNotification = useNotificationStore(
    (state) => state.addNotification
  );

  useEffect(() => {
    if (open) {
      setTitle("");
      setRoomType("Living Room");
      setStyle("Modern");
    }
  }, [open]);

  if (!open) return null;

  const handleCreateProject = () => {
    if (!title.trim()) return;

    const today = new Date().toISOString().split("T")[0];

    const newProject: Project = {
      id: crypto.randomUUID(),

      title: title.trim(),

      roomType,

      style,

      thumbnail: `https://picsum.photos/800/600?random=${Date.now()}`,

      budget: 100000,

      status: "Draft",

      createdAt: today,

      updatedAt: today,

      isFavorite: false,
    };

    addProject(newProject);

    addNotification(
      "Project Created 🎉",
      `"${title}" was created successfully.`
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm">
      <div
        className="
          w-full
          max-w-lg
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-2xl
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-indigo-100 p-3 dark:bg-indigo-900/40">
              <FolderPlus className="h-6 w-6 text-indigo-600" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Create New Project
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Start designing your AI interior project.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="
              rounded-xl
              p-2
              transition
              hover:bg-slate-100
              dark:hover:bg-slate-800
            "
          >
            <X className="h-5 w-5 dark:text-white" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Project Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Project Name
            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Modern Living Room"
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-slate-900
                outline-none
                transition
                focus:border-indigo-500
                focus:ring-2
                focus:ring-indigo-200
                dark:border-slate-600
                dark:bg-slate-800
                dark:text-white
                dark:placeholder:text-slate-400
              "
            />
          </div>

          {/* Room Type */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Room Type
            </label>

            <select
              value={roomType}
              onChange={(e) =>
                setRoomType(e.target.value)
              }
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-slate-900
                outline-none
                transition
                focus:border-indigo-500
                dark:border-slate-600
                dark:bg-slate-800
                dark:text-white
              "
            >
              <option>Living Room</option>
              <option>Bedroom</option>
              <option>Kitchen</option>
              <option>Bathroom</option>
              <option>Office</option>
            </select>
          </div>

          {/* Style */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Interior Style
            </label>

            <select
              value={style}
              onChange={(e) =>
                setStyle(e.target.value)
              }
              className="
                w-full
                rounded-2xl
                border
                border-slate-300
                bg-white
                px-4
                py-3
                text-slate-900
                outline-none
                transition
                focus:border-indigo-500
                dark:border-slate-600
                dark:bg-slate-800
                dark:text-white
              "
            >
              <option>Modern</option>
              <option>Minimal</option>
              <option>Luxury</option>
              <option>Scandinavian</option>
              <option>Industrial</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="
              rounded-2xl
              border
              border-slate-300
              px-6
              py-3
              font-medium
              transition
              hover:bg-slate-100
              dark:border-slate-600
              dark:text-white
              dark:hover:bg-slate-800
            "
          >
            Cancel
          </button>

          <button
            onClick={handleCreateProject}
            disabled={!title.trim()}
            className="
              rounded-2xl
              bg-indigo-600
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-indigo-700
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
}
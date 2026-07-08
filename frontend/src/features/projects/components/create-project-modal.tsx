"use client";

import { useState } from "react";
import { X } from "lucide-react";

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

  if (!open) return null;

  const handleCreateProject = () => {
    if (!title.trim()) {
      alert("Please enter a project name.");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    const newProject: Project = {
      id: crypto.randomUUID(),

      title,

      roomType,

      style,

      thumbnail: `https://picsum.photos/800/600?random=${Date.now()}`,

      budget: 100000,

      status: "Draft",

      createdAt: today,

      updatedAt: today,

      isFavorite: false,
    };

    // Create Project
    addProject(newProject);

    // Add Notification
    addNotification(
      "Project Created 🎉",
      `"${title}" was created successfully.`
    );

    // Reset Form
    setTitle("");
    setRoomType("Living Room");
    setStyle("Modern");

    // Close Modal
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            Create New Project
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Project Name
            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Modern Living Room"
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Room Type
            </label>

            <select
              value={roomType}
              onChange={(e) =>
                setRoomType(e.target.value)
              }
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
            >
              <option>Living Room</option>
              <option>Bedroom</option>
              <option>Kitchen</option>
              <option>Bathroom</option>
              <option>Office</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Interior Style
            </label>

            <select
              value={style}
              onChange={(e) =>
                setStyle(e.target.value)
              }
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-slate-900"
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
            className="rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-slate-100"
          >
            Cancel
          </button>

          <button
            onClick={handleCreateProject}
            className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
}
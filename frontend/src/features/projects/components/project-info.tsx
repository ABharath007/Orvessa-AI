"use client";

import {
  Home,
  Palette,
  Sparkles,
  Calendar,
} from "lucide-react";

interface ProjectInfoProps {
  roomType: string;
  style: string;
  colorPalette: string;
  createdAt: string;
}

export function ProjectInfo({
  roomType,
  style,
  colorPalette,
  createdAt,
}: ProjectInfoProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Project Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <InfoCard
          icon={<Home className="h-6 w-6" />}
          title="Room Type"
          value={roomType}
        />

        <InfoCard
          icon={<Sparkles className="h-6 w-6" />}
          title="Interior Style"
          value={style}
        />

        <InfoCard
          icon={<Palette className="h-6 w-6" />}
          title="Color Palette"
          value={colorPalette}
        />

        <InfoCard
          icon={<Calendar className="h-6 w-6" />}
          title="Created"
          value={createdAt}
        />
      </div>
    </div>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function InfoCard({
  icon,
  title,
  value,
}: InfoCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-5">
      <div className="rounded-lg bg-slate-900 p-3 text-white">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <p className="font-semibold">
          {value}
        </p>
      </div>
    </div>
  );
}
"use client";

import { Clock3 } from "lucide-react";
import { profileData } from "../mock/profile.mock";

export function ProfileActivity() {
  const { activities } = profileData;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 border-b border-slate-100 pb-4 last:border-none"
          >
            <div className="rounded-full bg-indigo-100 p-3">
              <Clock3 className="h-5 w-5 text-indigo-600" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">
                {activity.title}
              </h3>

              <p className="text-sm text-slate-500">
                {activity.description}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {activity.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
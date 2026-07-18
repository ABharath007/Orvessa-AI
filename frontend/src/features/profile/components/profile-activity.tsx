"use client";

import { Clock3 } from "lucide-react";

import { profileData } from "../mock/profile.mock";

export function ProfileActivity() {
  const { activities } = profileData;

  return (
    <section
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Header */}
      <div className="mb-8">
        <h2
          className="
            text-2xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          Recent Activity
        </h2>

        <p
          className="
            mt-2
            text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          Your latest AI interior design activities.
        </p>
      </div>

      {/* Activities */}
      <div className="space-y-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="
              flex
              items-start
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-4
              transition-all
              duration-300
              hover:shadow-md
              dark:border-slate-700
              dark:bg-slate-800
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-indigo-100
                dark:bg-indigo-900/30
              "
            >
              <Clock3 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3
                className="
                  text-lg
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                {activity.title}
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  leading-6
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {activity.description}
              </p>

              <p
                className="
                  mt-3
                  text-xs
                  font-medium
                  text-slate-400
                  dark:text-slate-500
                "
              >
                {activity.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import {
  Upload,
  Sparkles,
  Heart,
  Wallet,
  ArrowRight,
} from "lucide-react";

const activities = [
  {
    title: "Uploaded Living Room",
    description: "2 minutes ago",
    icon: Upload,
    color: "text-blue-600",
  },
  {
    title: "Generated AI Design",
    description: "10 minutes ago",
    icon: Sparkles,
    color: "text-purple-600",
  },
  {
    title: "Saved Modern Interior",
    description: "1 hour ago",
    icon: Heart,
    color: "text-red-500",
  },
  {
    title: "Estimated Renovation Cost",
    description: "Yesterday",
    icon: Wallet,
    color: "text-green-600",
  },
];

export function RecentActivity() {
  return (
    <section
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Recent Activity
        </h2>

        <button
          className="
            text-sm
            font-medium
            text-indigo-600
            transition
            hover:text-indigo-700
            dark:text-indigo-400
          "
        >
          View All
        </button>
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="
                group
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-transparent
                p-3
                transition-all
                duration-300
                hover:border-slate-200
                hover:bg-slate-50
                dark:hover:border-slate-700
                dark:hover:bg-slate-800
              "
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div
                  className="
                    rounded-2xl
                    bg-slate-100
                    p-3
                    transition-all
                    duration-300
                    group-hover:scale-110
                    dark:bg-slate-800
                  "
                >
                  <Icon
                    className={`h-5 w-5 ${activity.color}`}
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {activity.title}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {activity.description}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight
                className="
                  h-4
                  w-4
                  text-slate-400
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:opacity-100
                "
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
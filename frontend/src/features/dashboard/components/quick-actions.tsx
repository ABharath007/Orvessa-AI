import Link from "next/link";
import {
  Upload,
  Sparkles,
  Images,
  Heart,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Upload Room",
    description: "Upload a room image to begin designing.",
    href: "/dashboard/upload",
    icon: Upload,
    color: "text-blue-600",
  },
  {
    title: "Generate AI Design",
    description: "Create AI-powered interior designs.",
    href: "/dashboard/gallery",
    icon: Sparkles,
    color: "text-purple-600",
  },
  {
    title: "View Gallery",
    description: "Browse your generated designs.",
    href: "/dashboard/gallery",
    icon: Images,
    color: "text-pink-600",
  },
  {
    title: "Saved Designs",
    description: "Open your favorite interiors.",
    href: "/dashboard/saved",
    icon: Heart,
    color: "text-red-600",
  },
];

export function QuickActions() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-5
                  inline-flex
                  rounded-2xl
                  bg-slate-100
                  p-4
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-indigo-100
                  dark:bg-slate-800
                  dark:group-hover:bg-indigo-600
                "
              >
                <Icon
                  className={`h-7 w-7 ${action.color} dark:text-white`}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {action.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {action.description}
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center gap-2 font-medium text-indigo-600 dark:text-indigo-400">
                <span>Open</span>

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
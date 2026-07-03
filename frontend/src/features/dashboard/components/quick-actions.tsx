import Link from "next/link";
import {
  Upload,
  Sparkles,
  Images,
  Heart,
} from "lucide-react";

const actions = [
  {
    title: "Upload Room",
    description: "Upload a room image to begin designing.",
    href: "/dashboard/upload",
    icon: Upload,
  },
  {
    title: "Generate AI Design",
    description: "Create AI-powered interior designs.",
    href: "/dashboard/gallery",
    icon: Sparkles,
  },
  {
    title: "View Gallery",
    description: "Browse your generated designs.",
    href: "/dashboard/gallery",
    icon: Images,
  },
  {
    title: "Saved Designs",
    description: "Open your favorite interiors.",
    href: "/dashboard/saved",
    icon: Heart,
  },
];

export function QuickActions() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3">
                <Icon className="h-6 w-6 text-slate-700" />
              </div>

              <h3 className="text-lg font-semibold">
                {action.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
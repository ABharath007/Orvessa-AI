import {
  Upload,
  Sparkles,
  Heart,
  Wallet,
} from "lucide-react";

const activities = [
  {
    title: "Uploaded Living Room",
    description: "2 minutes ago",
    icon: Upload,
  },
  {
    title: "Generated AI Design",
    description: "10 minutes ago",
    icon: Sparkles,
  },
  {
    title: "Saved Modern Interior",
    description: "1 hour ago",
    icon: Heart,
  },
  {
    title: "Estimated Renovation Cost",
    description: "Yesterday",
    icon: Wallet,
  },
];

export function RecentActivity() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-center gap-4"
            >
              <div className="rounded-xl bg-slate-100 p-3">
                <Icon className="h-5 w-5 text-slate-700" />
              </div>

              <div>
                <h3 className="font-medium">
                  {activity.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
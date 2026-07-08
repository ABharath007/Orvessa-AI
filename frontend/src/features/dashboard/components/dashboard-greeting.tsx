"use client";

export function DashboardGreeting() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 p-10 text-white shadow-lg">
      <h1 className="text-4xl font-bold">
        {greeting}, Kiran 👋
      </h1>

      <p className="mt-4 text-lg text-indigo-100">
        Welcome back to Orvessa AI.
        Ready to create another amazing interior?
      </p>
    </div>
  );
}
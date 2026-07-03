import Link from "next/link";

export function SidebarLogo() {
  return (
    <Link
      href="/dashboard"
      className="flex h-16 items-center border-b px-6"
    >
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Orvessa
        </h1>

        <p className="text-xs text-slate-500">
          AI Interior Design
        </p>
      </div>
    </Link>
  );
}
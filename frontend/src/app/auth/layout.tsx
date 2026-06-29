import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* Left Side */}
      <section className="hidden bg-slate-950 text-white lg:flex items-center justify-center p-20">
        <div className="max-w-xl">
          <span className="mb-6 inline-flex rounded-full bg-slate-800 px-4 py-2 text-sm">
            ✨ AI Powered Interior Design
          </span>

          <h1 className="text-6xl font-extrabold leading-tight">
            Design Your
            <br />
            Dream Interior
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Upload your room, generate AI-powered interior designs,
            explore color palettes, estimate renovation costs,
            and save your favorite ideas with Orvessa AI.
          </p>

          <div className="mt-12 flex gap-12">
            <div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-slate-400">
                Designs Generated
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">95%</h3>
              <p className="text-slate-400">
                User Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side */}
      <section className="flex items-center justify-center bg-slate-100 px-8 py-12">
        <div className="w-full max-w-lg">
          {children}
        </div>
      </section>
    </main>
  );
}
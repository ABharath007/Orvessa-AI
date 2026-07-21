"use client";

import { AnimatedBackground } from "@/components/ui/animated-background";
import { HeroContent } from "./hero-content";
import { HeroDashboard } from "./hero-dashboard";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AnimatedBackground />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
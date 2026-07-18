import { Navbar } from "@/features/landing/components/navbar";
import { Hero } from "@/features/landing/components/hero";
import { TrustedBy } from "@/features/landing/components/trusted-by";
import { Features } from "@/features/landing/components/features";
import { AIShowcase } from "@/features/landing/components/ai-showcase";
import { FurnitureShowcase } from "@/features/landing/components/furniture-showcase";
import { HowItWorks } from "@/features/landing/components/how-it-works";
import { Testimonials } from "@/features/landing/components/testimonials";
import { PricingPreview } from "@/features/landing/components/pricing-preview";
import { FAQPreview } from "@/features/landing/components/faq-preview";
import { Footer } from "@/features/landing/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      <Hero />

      <TrustedBy />

      <Features />

      <AIShowcase />

      <FurnitureShowcase />

      <HowItWorks />

      <Testimonials />

      <PricingPreview />

      <FAQPreview />

      <Footer />
    </main>
  );
}
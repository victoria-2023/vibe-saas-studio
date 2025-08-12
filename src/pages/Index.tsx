import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Pricing from "@/sections/Pricing";
import CallToAction from "@/sections/CTA";
import SEO from "@/components/seo/SEO";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="PulseBoard – Micro‑SaaS Starter Kit" description="Polished React + Tailwind + shadcn UI scaffolding to build micro‑SaaS fast." canonical="/" />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;

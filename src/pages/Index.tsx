import SiteHeader from "@/components/layout/SiteHeader";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import CTA from "@/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Pricing />
        <CTA />
      </main>
    </div>
  );
};

export default Index;

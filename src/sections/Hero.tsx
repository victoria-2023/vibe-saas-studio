import heroImg from "@/assets/hero-gradient.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand opacity-20" aria-hidden="true" />
      <div className="container relative grid md:grid-cols-2 gap-10 py-16 md:py-24 items-center">
        <div>
          <p className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground">React + Tailwind + shadcn UI</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Build micro‑SaaS apps at light speed with <span className="text-gradient-brand">PulseBoard</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-prose">
            A premium starter with polished UI, semantic design tokens, and room for Supabase auth, data, and Stripe.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/signup"><Button variant="hero" className="shadow-glow">Start free</Button></Link>
            <Link to="/dashboard"><Button variant="outline">Live Preview</Button></Link>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-8 bg-gradient-brand opacity-30 blur-3xl rounded-full" aria-hidden="true" />
          <img src={heroImg} alt="Futuristic gradient hero illustration for PulseBoard" loading="lazy" className="relative rounded-xl border shadow-lg transition-transform duration-500 group-hover:scale-[1.01]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

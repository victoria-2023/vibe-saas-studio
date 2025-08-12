import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="relative overflow-hidden rounded-2xl border p-10 bg-card">
        <div className="absolute -inset-20 bg-gradient-brand opacity-20 blur-3xl" aria-hidden="true" />
        <div className="relative grid md:grid-cols-2 items-center gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Launch your next micro‑SaaS faster</h3>
            <p className="text-muted-foreground mt-2">Start with a production‑ready UI and add Supabase + Stripe when you’re ready.</p>
          </div>
          <div className="flex md:justify-end gap-3">
            <Link to="/signup"><Button variant="hero">Create account</Button></Link>
            <Link to="/login"><Button variant="outline">Sign in</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

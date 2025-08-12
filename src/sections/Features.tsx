import { Sparkles, BarChart3, ShieldCheck } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
    <div className="size-10 rounded-md bg-secondary grid place-items-center mb-4">
      <Icon className="text-primary" />
    </div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-sm text-muted-foreground mt-2">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="container py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Everything you need</h2>
        <p className="text-muted-foreground mt-3">Clean components, strong tokens, and a delightful developer experience.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard icon={Sparkles} title="Polished UI" desc="Beautiful sections and shadcn components wired to semantic tokens." />
        <FeatureCard icon={BarChart3} title="Ready for data" desc="Drop in Supabase for auth, tables, realtime, and charts." />
        <FeatureCard icon={ShieldCheck} title="Accessible" desc="AA contrast, focus rings, and motion that respects user settings." />
      </div>
    </section>
  );
};

export default Features;

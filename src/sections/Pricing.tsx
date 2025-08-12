import { Button } from "@/components/ui/button";

const Pricing = () => {
  const Tier = ({ name, price, features, highlighted = false }: { name: string; price: string; features: string[]; highlighted?: boolean }) => (
    <div className={`rounded-2xl border p-6 flex flex-col ${highlighted ? 'bg-gradient-brand text-primary-foreground shadow-glow' : 'bg-card'}`}>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-4xl font-bold">{price}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className={highlighted ? 'opacity-95' : 'text-muted-foreground'}>• {f}</li>
        ))}
      </ul>
      <Button variant={highlighted ? 'hero' : 'outline'} className="mt-6">Choose {name}</Button>
    </div>
  );

  return (
    <section id="pricing" className="container py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Simple pricing</h2>
        <p className="text-muted-foreground mt-3">Start free. Upgrade when you’re ready.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        <Tier name="Free" price="$0" features={["All UI blocks", "Basic theming", "Community support"]} />
        <Tier name="Pro" price="$9/mo" highlighted features={["Everything in Free", "Email support", "Early features access"]} />
        <Tier name="Team" price="$29/mo" features={["Unlimited projects", "Team seats", "Priority support"]} />
      </div>
    </section>
  );
};

export default Pricing;

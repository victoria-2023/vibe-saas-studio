import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Creator",
      price: "$12",
      description: "Perfect for individual creators",
      features: [
        "1 Portfolio site",
        "Up to 5 projects",
        "Basic templates",
        "2GB storage",
        "Email support"
      ],
      buttonVariant: "outline" as const,
    },
    {
      name: "Professional",
      price: "$39",
      description: "For serious creators and educators",
      features: [
        "Unlimited portfolios",
        "Unlimited projects",
        "Course creation tools",
        "Premium templates",
        "50GB storage",
        "Custom domain",
        "Analytics dashboard",
        "Priority support"
      ],
      buttonVariant: "default" as const,
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Creative Plan</h2>
          <p className="text-xl text-muted-foreground">
            From portfolios to courses, we have the tools to grow your creative business
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="text-3xl font-bold">
                  {plan.price}<span className="text-sm font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.buttonVariant} className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
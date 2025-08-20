import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of users who trust our platform
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link to="/signup">Start Your Journey</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
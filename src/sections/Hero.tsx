import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Build Your Creative Empire
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Create stunning portfolios, manage your projects, and build courses to share your expertise with the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/signup">Start Creating</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
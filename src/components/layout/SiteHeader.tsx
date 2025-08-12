import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          <span className="text-gradient-brand">PulseBoard</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
          <Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors">Login</Link>
          <Link to="/signup"><Button variant="hero" size="sm">Get Started</Button></Link>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;

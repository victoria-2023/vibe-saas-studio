import SEO from "@/components/seo/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Demo only", description: "Connect Supabase to enable auth." });
  };

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <SEO title="Login – PulseBoard" description="Sign in to your PulseBoard account." canonical="/login" />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" variant="hero">Sign in</Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">No account? <Link to="/signup" className="underline">Create one</Link></p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

import SEO from "@/components/seo/SEO";

const Admin = () => {
  return (
    <div className="min-h-screen grid place-items-center p-6">
      <SEO title="Admin – PulseBoard" description="Admin tools and settings." canonical="/admin" />
      <div className="text-center max-w-lg">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <p className="text-muted-foreground mt-2">Coming soon in Milestone 4: permissions and Stripe integration.</p>
      </div>
    </div>
  );
};

export default Admin;

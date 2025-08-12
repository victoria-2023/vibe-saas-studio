import SEO from "@/components/seo/SEO";
import dashboardImg from "@/assets/dashboard-preview.jpg";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-6">
      <SEO title="Dashboard – PulseBoard" description="Your PulseBoard project overview." canonical="/dashboard" />
      <div className="container">
        <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">This is a static preview. Connect Supabase to power it.</p>
        <div className="relative mt-6">
          <div className="absolute -inset-4 bg-gradient-brand opacity-20 blur-2xl rounded-xl" aria-hidden="true" />
          <img src={dashboardImg} alt="PulseBoard dashboard preview" loading="lazy" className="relative rounded-xl border shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

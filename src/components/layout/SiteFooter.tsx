const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} PulseBoard. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="/admin" className="hover:text-foreground">Admin</a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

export const AdminPortalsSection = () => {
  return (
    <section id="slide11" className="min-h-screen flex flex-col items-center justify-center gap-10">
      <div className="text-center md:text-left md:w-1/3 max-w-md">
        <h3 className="text-3xl font-bold text-primary mb-4">11. Tiered Admin Portals</h3>
        <p className="text-muted-foreground leading-relaxed">
          This section showcases the conceptual web-based admin portals, designed to provide tiered access for leaders at every level. Each portal has a specific role, ensuring efficient and secure management from the local mosque up to the international level.
        </p>
      </div>
      <div className="w-full max-w-2xl feature-card">
        <h3 className="text-2xl font-bold mb-6">Admin Access Levels</h3>
        <div className="space-y-6">
          <div className="bg-muted p-4 rounded-lg border-l-4 border-secondary">
            <h4 className="font-semibold">Local Mosque Level</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Manages the mosque's profile, banner, and its unique community ledger. Can send localized push notifications.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg border-l-4 border-accent">
            <h4 className="font-semibold">District Level</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Oversees all mosques within their district. Can share news and event details to all local mosque banners and monitor district-wide Emaan scores.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold">State & National Level</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Manages state-wide and national content, including official announcements, and analyzes data for all districts within their purview to monitor community engagement trends.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-semibold">International Level</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Oversees the entire network. Publishes global messages, coordinates with national leaders, and analyzes international trends for all countries using the app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
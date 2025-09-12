export const CentralLeadershipSection = () => {
  return (
    <section id="slide9" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="text-center md:text-left md:w-1/3 max-w-md">
        <h3 className="text-3xl font-bold text-primary mb-4">9. Central Leadership & News</h3>
        <p className="text-muted-foreground leading-relaxed">
          This new section connects the community directly to top-level religious leaders and central organizations. It provides a platform for daily news, special messages, and a unified voice for the community, reinforcing a sense of national and international connection.
        </p>
      </div>
      <div className="w-full max-w-lg feature-card">
        <h3 className="text-xl font-bold mb-4">News from Top Leaders</h3>
        <div className="space-y-4">
          <div className="bg-muted p-4 rounded-lg flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-muted-foreground/20"></div>
            <div>
              <h4 className="font-semibold">Message from National Imam Council</h4>
              <p className="text-sm text-muted-foreground mt-1">
                A special message for Ramadan preparations...
              </p>
              <span className="text-xs text-muted-foreground">September 11, 2025</span>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-lg flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-muted-foreground/20"></div>
            <div>
              <h4 className="font-semibold">Global Ummah Unity Day</h4>
              <p className="text-sm text-muted-foreground mt-1">
                A call for unity and peace from global leaders...
              </p>
              <span className="text-xs text-muted-foreground">September 9, 2025</span>
            </div>
          </div>
          <div className="bg-muted p-4 rounded-lg flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-muted-foreground/20"></div>
            <div>
              <h4 className="font-semibold">Daily Thought: Gratitude</h4>
              <p className="text-sm text-muted-foreground mt-1">
                A short reflection on the blessings of Allah...
              </p>
              <span className="text-xs text-muted-foreground">September 12, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
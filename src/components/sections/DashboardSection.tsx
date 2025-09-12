import { PhoneMockup } from "../PhoneMockup";

export const DashboardSection = () => {
  return (
    <section id="slide3" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="text-center md:text-left md:w-1/3 max-w-md">
        <h3 className="text-3xl font-bold text-primary mb-4">3. Home Dashboard</h3>
        <p className="text-muted-foreground leading-relaxed">
          The dashboard is the user's personalized hub. It provides an at-a-glance overview of relevant information and quick access to core features, encouraging regular engagement through dynamic content.
        </p>
      </div>
      <PhoneMockup className="bg-mosque-gray-50">
        <div className="p-0 h-full overflow-y-auto">
          <div className="p-5">
            <h2 className="text-2xl font-bold">Welcome, User!</h2>
            <p className="text-muted-foreground">Your spiritual journey hub.</p>
          </div>

          <div className="px-5 grid grid-cols-3 gap-4 text-center mb-6">
            <div className="feature-card bg-mosque-teal-100 cursor-pointer hover:scale-105 transition-transform">
              <div className="text-3xl mb-1">🗺️</div>
              <span className="text-xs font-medium">Maps</span>
            </div>
            <div className="feature-card bg-mosque-amber-100 cursor-pointer hover:scale-105 transition-transform">
              <div className="text-3xl mb-1">🏆</div>
              <span className="text-xs font-medium">Emaan Test</span>
            </div>
            <div className="feature-card bg-mosque-sky-100 cursor-pointer hover:scale-105 transition-transform">
              <div className="text-3xl mb-1">🤖</div>
              <span className="text-xs font-medium">Ask Gemini</span>
            </div>
          </div>

          <div className="px-5 mb-6">
            <h3 className="font-bold mb-2">Local Community News</h3>
            <div className="feature-card border-mosque-orange-200">
              <h4 className="font-bold">Community Food Drive Success</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Our community successfully gathered 500+ kg of food for the needy this past weekend...
              </p>
              <span className="text-xs text-accent mt-2 block cursor-pointer hover:underline">
                Read more →
              </span>
            </div>
          </div>

          <div className="px-5 mb-6">
            <h3 className="font-bold mb-2">Islamic News & Videos</h3>
            <div className="space-y-2">
              <div className="feature-card border-warning/30">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 bg-muted rounded-lg flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-sm">Global Muslim Summit Concludes in Doha</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Leaders from around the world met to discuss future challenges...
                    </p>
                  </div>
                </div>
              </div>
              <div className="feature-card border-warning/30">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 bg-muted rounded-lg flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-sm">Fasting Benefits in Modern Science</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      A short video explaining the health benefits of fasting as a spiritual practice...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-5">
            <h3 className="font-bold mb-2">Recent Activity</h3>
            <div className="feature-card flex items-center">
              <span className="text-2xl mr-3">🏅</span>
              <div>
                <h4 className="font-semibold">New Achievement!</h4>
                <p className="text-sm text-muted-foreground">You earned 'Knowledge Seeker I'.</p>
              </div>
            </div>
          </div>
        </div>
      </PhoneMockup>
    </section>
  );
};
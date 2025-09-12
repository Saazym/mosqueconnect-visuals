import { PhoneMockup } from "../PhoneMockup";
import { EmaanChart } from "../EmaanChart";

export const UserProfileSection = () => {
  return (
    <section id="slide7" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="text-center md:text-left md:w-1/3 max-w-md">
        <h3 className="text-3xl font-bold text-primary mb-4">7. User Profile</h3>
        <p className="text-muted-foreground leading-relaxed">
          This is the user's personal growth hub. It provides positive reinforcement through achievements and visualizes their progress with an interactive chart, strengthening their bond with their learning journey.
        </p>
      </div>
      <PhoneMockup className="bg-mosque-gray-50">
        <div className="p-0 h-full overflow-y-auto">
          <div className="p-5 flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-mosque-teal-200"></div>
            <div>
              <h2 className="text-2xl font-bold">User Name</h2>
              <p className="text-muted-foreground">Total Score: 1,250</p>
            </div>
          </div>
          <div className="px-5 mb-6">
            <h3 className="font-bold mb-2">Emaan Journey (Weekly Score)</h3>
            <EmaanChart />
          </div>
          <div className="px-5">
            <h3 className="font-bold mb-2">Achievements</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="achievement-badge">
                <span className="text-3xl">🏅</span>
                <p className="text-xs mt-1">Seeker I</p>
              </div>
              <div className="achievement-badge">
                <span className="text-3xl">🎯</span>
                <p className="text-xs mt-1">Perfect Week</p>
              </div>
              <div className="achievement-locked">
                <span className="text-3xl">🔒</span>
                <p className="text-xs mt-1">Locked</p>
              </div>
              <div className="achievement-locked">
                <span className="text-3xl">🔒</span>
                <p className="text-xs mt-1">Locked</p>
              </div>
            </div>
          </div>
        </div>
      </PhoneMockup>
    </section>
  );
};
import { PhoneMockup } from "../PhoneMockup";
import { Button } from "../ui/button";

export const EmaanAssessmentSection = () => {
  return (
    <section id="slide6" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="text-center md:text-left md:w-1/3 max-w-md">
        <h3 className="text-3xl font-bold text-primary mb-4">6. Emaan Assessment</h3>
        <p className="text-muted-foreground leading-relaxed">
          This feature gamifies learning to encourage consistent engagement. The multi-tiered leaderboard fosters a sense of achievement and community at local, regional, and national levels, while keeping individual scores private.
        </p>
      </div>
      <PhoneMockup>
        <div className="p-6 h-full flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">Weekly Emaan Test</h2>
          <p className="text-muted-foreground mb-6">Question 3 of 10</p>
          <h3 className="text-lg font-semibold mb-6">
            Which of the following is one of the Five Pillars of Islam?
          </h3>
          <div className="space-y-3 mb-10">
            <Button
              variant="outline"
              className="w-full text-left p-4 h-auto justify-start hover:bg-mosque-teal-50 hover:border-secondary"
            >
              A) Fasting during Ramadan
            </Button>
            <Button
              variant="outline"
              className="w-full text-left p-4 h-auto justify-start hover:bg-mosque-teal-50 hover:border-secondary"
            >
              B) Reading the entire Quran
            </Button>
            <Button
              variant="outline"
              className="w-full text-left p-4 h-auto justify-start hover:bg-mosque-teal-50 hover:border-secondary"
            >
              C) Visiting Mecca monthly
            </Button>
            <Button
              variant="outline"
              className="w-full text-left p-4 h-auto justify-start hover:bg-mosque-teal-50 hover:border-secondary"
            >
              D) Speaking Arabic fluently
            </Button>
          </div>
          <div className="bg-mosque-amber-100 p-4 rounded-lg text-center">
            <h4 className="font-bold">Results</h4>
            <p className="text-3xl font-bold my-2">9/10</p>
            <p className="text-sm">Rank: #12 (Local)</p>
          </div>
        </div>
      </PhoneMockup>
    </section>
  );
};
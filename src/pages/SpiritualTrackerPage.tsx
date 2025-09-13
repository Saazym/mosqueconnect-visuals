import { EmaanAssessmentSection } from "@/components/sections/EmaanAssessmentSection";
import { UserProfileSection } from "@/components/sections/UserProfileSection";

export function SpiritualTrackerPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <EmaanAssessmentSection />
      <UserProfileSection />
    </div>
  );
}
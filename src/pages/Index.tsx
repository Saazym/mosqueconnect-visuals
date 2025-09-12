import { NavigationSidebar } from "@/components/NavigationSidebar";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { LoginSection } from "@/components/sections/LoginSection";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { MapsSection } from "@/components/sections/MapsSection";
import { MosqueProfileSection } from "@/components/sections/MosqueProfileSection";
import { EmaanAssessmentSection } from "@/components/sections/EmaanAssessmentSection";
import { UserProfileSection } from "@/components/sections/UserProfileSection";
import { AIAssistantSection } from "@/components/sections/AIAssistantSection";
import { CentralLeadershipSection } from "@/components/sections/CentralLeadershipSection";
import { CommunityHubSection } from "@/components/sections/CommunityHubSection";
import { AdminPortalsSection } from "@/components/sections/AdminPortalsSection";

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <NavigationSidebar />
      
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <WelcomeSection />
          <LoginSection />
          <DashboardSection />
          <MapsSection />
          <MosqueProfileSection />
          <EmaanAssessmentSection />
          <UserProfileSection />
          <AIAssistantSection />
          <CentralLeadershipSection />
          <CommunityHubSection />
          <AdminPortalsSection />
        </div>
      </main>
    </div>
  );
};

export default Index;

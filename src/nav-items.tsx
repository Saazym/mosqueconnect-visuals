import { Home, MapPin, User, BookOpen, Trophy, Users, Bot, Settings, Heart, Calendar } from "lucide-react";
import { ReactElement } from "react";

// Import page components
import Index from "./pages/Index";
import { DashboardPage } from "./pages/DashboardPage";
import { MapsPage } from "./pages/MapsPage";
import { QuranReaderPage } from "./pages/QuranReaderPage";
import { SpiritualTrackerPage } from "./pages/SpiritualTrackerPage";
import { CommunityEventsPage } from "./pages/CommunityEventsPage";
import { IslamicLearningPage } from "./pages/IslamicLearningPage";
import { HalalBusinessPage } from "./pages/HalalBusinessPage";
import { QiblaFinderPage } from "./pages/QiblaFinderPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import { AIAssistantPage } from "./pages/AIAssistantPage";
import { AdminPortalsPage } from "./pages/AdminPortalsPage";

export interface NavItem {
  title: string;
  to: string;
  icon: ReactElement;
  page: ReactElement;
  description: string;
}

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <Home className="h-4 w-4" />,
    page: <DashboardPage />,
    description: "Your personalized dashboard"
  },
  {
    title: "Maps & Discovery",
    to: "/maps",
    icon: <MapPin className="h-4 w-4" />,
    page: <MapsPage />,
    description: "Find mosques and Islamic centers"
  },
  {
    title: "Quran Reader & Study",
    to: "/quran",
    icon: <BookOpen className="h-4 w-4" />,
    page: <QuranReaderPage />,
    description: "Read, study and bookmark the Quran"
  },
  {
    title: "Spiritual Progress Tracker",
    to: "/spiritual-tracker",
    icon: <Heart className="h-4 w-4" />,
    page: <SpiritualTrackerPage />,
    description: "Track prayers, Emaan assessment & achievements"
  },
  {
    title: "Community & Events Hub",
    to: "/community",
    icon: <Users className="h-4 w-4" />,
    page: <CommunityEventsPage />,
    description: "Community events and volunteer opportunities"
  },
  {
    title: "Islamic Learning Center",
    to: "/learning",
    icon: <BookOpen className="h-4 w-4" />,
    page: <IslamicLearningPage />,
    description: "Hadith, Prophet stories and Islamic education"
  },
  {
    title: "Halal Business Directory",
    to: "/halal-business",
    icon: <Settings className="h-4 w-4" />,
    page: <HalalBusinessPage />,
    description: "Find certified halal businesses"
  },
  {
    title: "Qibla Finder & Prayer Times",
    to: "/qibla",
    icon: <MapPin className="h-4 w-4" />,
    page: <QiblaFinderPage />,
    description: "Find Qibla direction and prayer times"
  },
  {
    title: "User Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
    page: <UserProfilePage />,
    description: "Your personal profile and achievements"
  },
  {
    title: "AI Assistant",
    to: "/ai-assistant",
    icon: <Bot className="h-4 w-4" />,
    page: <AIAssistantPage />,
    description: "Get Islamic guidance and answers"
  },
  {
    title: "Admin Portals",
    to: "/admin",
    icon: <Settings className="h-4 w-4" />,
    page: <AdminPortalsPage />,
    description: "Administrative functions"
  }
];
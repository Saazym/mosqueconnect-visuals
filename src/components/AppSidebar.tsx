import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export interface NavItem {
  title: string;
  to: string;
  icon: React.ReactElement;
  description: string;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    to: "/",
    icon: <span>🏠</span>,
    description: "Welcome to MosqueConnect"
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <span>📊</span>,
    description: "Your personalized dashboard"
  },
  {
    title: "Maps & Discovery",
    to: "/maps",
    icon: <span>🗺️</span>,
    description: "Find mosques and Islamic centers"
  },
  {
    title: "Quran Reader & Study",
    to: "/quran",
    icon: <span>📖</span>,
    description: "Read, study and bookmark the Quran"
  },
  {
    title: "Spiritual Progress Tracker",
    to: "/spiritual-tracker",
    icon: <span>❤️</span>,
    description: "Track prayers, Emaan assessment & achievements"
  },
  {
    title: "Community & Events Hub",
    to: "/community",
    icon: <span>👥</span>,
    description: "Community events and volunteer opportunities"
  },
  {
    title: "Islamic Learning Center",
    to: "/learning",
    icon: <span>🕌</span>,
    description: "Hadith, Prophet stories and Islamic education"
  },
  {
    title: "Halal Business Directory",
    to: "/halal-business",
    icon: <span>🏪</span>,
    description: "Find certified halal businesses"
  },
  {
    title: "Qibla Finder & Prayer Times",
    to: "/qibla",
    icon: <span>🧭</span>,
    description: "Find Qibla direction and prayer times"
  },
  {
    title: "User Profile",
    to: "/profile",
    icon: <span>👤</span>,
    description: "Your personal profile and achievements"
  },
  {
    title: "AI Assistant",
    to: "/ai-assistant",
    icon: <span>🤖</span>,
    description: "Get Islamic guidance and answers"
  },
  {
    title: "Admin Portals",
    to: "/admin",
    icon: <span>⚙️</span>,
    description: "Administrative functions"
  }
];

export function AppSidebar() {
  return (
    <Sidebar className="w-64" collapsible="icon">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-primary">🕌 MosqueConnect</h2>
      </div>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.to} 
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                          isActive 
                            ? "bg-primary text-primary-foreground font-medium" 
                            : "hover:bg-accent hover:text-accent-foreground"
                        }`
                      }
                    >
                      {item.icon}
                      <span className="text-sm">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
import { useEffect, useState } from "react";

const navigationItems = [
  { id: "slide1", label: "Welcome" },
  { id: "slide2", label: "Login & Sign-Up" },
  { id: "slide3", label: "Home Dashboard" },
  { id: "slide4", label: "Maps & Discovery" },
  { id: "slide5", label: "Mosque Profile" },
  { id: "slide6", label: "Emaan Assessment" },
  { id: "slide7", label: "User Profile" },
  { id: "slide8", label: "AI Assistant" },
  { id: "slide9", label: "Central Leadership" },
  { id: "slide10", label: "Community Hub" },
  { id: "slide11", label: "Admin Portals" },
];

export const NavigationSidebar = () => {
  const [activeSection, setActiveSection] = useState("slide1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="sticky top-0 h-screen w-64 bg-card shadow-lg p-6 hidden lg:block border-r border-border">
      <h2 className="text-2xl font-bold text-primary mb-6">MosqueConnect</h2>
      <nav>
        <ul className="space-y-3">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`nav-link text-left w-full ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
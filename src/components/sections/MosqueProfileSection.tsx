import { PhoneMockup } from "../PhoneMockup";
import { Button } from "../ui/button";

export const MosqueProfileSection = () => {
  return (
    <section id="slide5" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="text-center md:text-left md:w-1/3 max-w-md">
        <h3 className="text-3xl font-bold text-primary mb-4">5. Mosque Profile & Ledger</h3>
        <p className="text-muted-foreground leading-relaxed">
          This screen serves as a digital hub for each mosque. The separation of the community ledger is a critical security measure, while the "Community Connection" feature provides a tangible way for users to engage with their local mosque.
        </p>
      </div>
      <PhoneMockup>
        <div className="p-0 overflow-y-auto h-full">
          <img
            src="https://images.unsplash.com/photo-1564769625392-651b2deaf433?w=375&h=150&fit=crop&crop=center"
            className="w-full h-40 object-cover"
            alt="Mosque banner"
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Central Mosque Announcements</h2>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Welcome to our community page. This week's sermon focused on the importance of charity (Sadaqah) in Islam. It is a virtuous deed and one of the most beloved to Allah SWT. The Prophet (peace be upon him) said: "Sadaqah extinguishes sin as water extinguishes fire." We encourage everyone to contribute to the upcoming community food drive...
            </p>
          </div>
          <div className="p-5 border-t border-border">
            <h3 className="font-bold mb-2">Community Connection</h3>
            <Button className="mosque-button-accent w-full">Connect with a Mentor</Button>
          </div>
          <div className="p-5 border-t border-border bg-muted">
            <h3 className="font-bold mb-2 flex items-center">
              <span className="mr-2">🔒</span> 
              Community Ledger
            </h3>
            <p className="text-sm text-muted-foreground">
              This section is visible to authorized mosque administrators only.
            </p>
          </div>
        </div>
      </PhoneMockup>
    </section>
  );
};
import { PhoneMockup } from "../PhoneMockup";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const MapsSection = () => {
  return (
    <section id="slide4" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="text-center md:text-left md:w-1/3 max-w-md">
        <h3 className="text-3xl font-bold text-primary mb-4">4. Maps & Discovery</h3>
        <p className="text-muted-foreground leading-relaxed">
          The map is the core discovery tool. It provides not just locations but also unique community data like "house coverage," offering valuable insights for both individuals and mosque committees.
        </p>
      </div>
      <PhoneMockup>
        <div className="p-0 flex flex-col h-full">
          <div className="p-4 bg-card z-10">
            <Input placeholder="Search for a mosque..." className="w-full" />
          </div>
          <div className="flex-grow bg-muted relative">
            <img
              src="https://images.unsplash.com/photo-1597149850956-d88507293726?w=375&h=700&fit=crop&crop=center"
              className="w-full h-full object-cover opacity-60"
              alt="Map view"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-secondary bg-secondary/20 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">157</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-card p-3 rounded-lg shadow-lg">
              <h4 className="font-bold">Central Mosque</h4>
              <p className="text-sm text-muted-foreground">123 Community Rd, City</p>
              <Button className="mosque-button-primary w-full mt-2 text-sm">View Details</Button>
            </div>
          </div>
        </div>
      </PhoneMockup>
    </section>
  );
};
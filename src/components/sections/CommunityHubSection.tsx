import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const CommunityHubSection = () => {
  return (
    <section id="slide10" className="min-h-screen flex flex-col items-center justify-center gap-10">
      <div className="text-center md:text-left md:w-1/3 max-w-md">
        <h3 className="text-3xl font-bold text-primary mb-4">10. Community Hub</h3>
        <p className="text-muted-foreground leading-relaxed">
          This section is a central space for community-wide engagement and learning. It features a fact-check tool and a private Q&A section, offering a reliable source of information and direct communication with local leadership.
        </p>
      </div>
      <div className="w-full max-w-lg feature-card">
        <h3 className="text-xl font-bold mb-4">Community Features</h3>
        <div className="space-y-6">
          <div className="bg-mosque-orange-100 p-4 rounded-lg flex flex-col">
            <h4 className="font-semibold text-amber-700 flex items-center mb-2">
              <span className="text-2xl mr-2">🔎</span>
              Fact Check
            </h4>
            <p className="text-sm text-muted-foreground">
              Verify information and counter misinformation.
            </p>
            <Input
              placeholder="Enter a claim or a fact to verify..."
              className="w-full mt-3 border-orange-300"
            />
          </div>
          <div className="bg-mosque-sky-100 p-4 rounded-lg flex flex-col">
            <h4 className="font-semibold text-blue-700 flex items-center mb-2">
              <span className="text-2xl mr-2">✍️</span>
              Ask Your Imam
            </h4>
            <p className="text-sm text-muted-foreground">
              Submit one question per day for your local Imam.
            </p>
            <Textarea
              placeholder="Type your question here..."
              className="w-full mt-3 border-blue-300 h-24 resize-none"
            />
            <div className="mt-2 text-xs text-muted-foreground">
              1 question remaining today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
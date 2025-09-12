import { PhoneMockup } from "../PhoneMockup";
import { Input } from "../ui/input";

export const AIAssistantSection = () => {
  return (
    <section id="slide8" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="text-center md:text-left md:w-1/3 max-w-md">
        <h3 className="text-3xl font-bold text-primary mb-4">8. AI Assistant</h3>
        <p className="text-muted-foreground leading-relaxed">
          This feature provides instant, personalized support for religious questions. By integrating a powerful LLM like Gemini with strict scope controls, it acts as a valuable learning tool while ensuring responsible and focused responses.
        </p>
      </div>
      <PhoneMockup>
        <div className="flex flex-col p-0 h-full">
          <div className="p-4 bg-card border-b border-border font-bold text-center">
            Ask Gemini
          </div>
          <div className="flex-grow p-4 space-y-4 overflow-y-auto">
            <div className="flex justify-end">
              <p className="bg-secondary text-secondary-foreground p-3 rounded-lg max-w-xs text-sm">
                What is the significance of Laylat al-Qadr?
              </p>
            </div>
            <div className="flex justify-start">
              <p className="bg-muted p-3 rounded-lg max-w-xs text-sm">
                Laylat al-Qadr, the "Night of Power," is considered the holiest night in Islam. It is the night when the first verses of the Quran were revealed to the Prophet Muhammad...
              </p>
            </div>
          </div>
          <div className="p-2 bg-card border-t border-border">
            <Input placeholder="Ask a question..." className="w-full rounded-full" />
          </div>
          <p className="text-xs text-center text-muted-foreground p-2">
            AI guidance is for informational purposes. Please consult a scholar.
          </p>
        </div>
      </PhoneMockup>
    </section>
  );
};
import { PhoneMockup } from "../PhoneMockup";

export const WelcomeSection = () => {
  return (
    <section id="slide1" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="text-center md:text-left md:w-1/3 max-w-md">
        <h3 className="text-3xl font-bold text-primary mb-4">1. Welcome & Onboarding</h3>
        <p className="text-muted-foreground leading-relaxed">
          This section illustrates the app's first impression. The design prioritizes a frictionless, warm welcome to immediately engage the user without overwhelming them with information or tutorials.
        </p>
      </div>
      <PhoneMockup className="bg-mosque-teal-50">
        <div className="flex flex-col items-center justify-center text-center p-8 h-full">
          <div className="text-6xl mb-6">🕌</div>
          <h1 className="text-2xl font-bold text-primary mb-2">MosqueConnect</h1>
          <p className="text-primary/80 mb-12">Connecting every heart to its local mosque.</p>
          <button className="mosque-button-primary w-full">Get Started</button>
        </div>
      </PhoneMockup>
    </section>
  );
};
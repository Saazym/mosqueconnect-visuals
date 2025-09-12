import { PhoneMockup } from "../PhoneMockup";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const LoginSection = () => {
  return (
    <section id="slide2" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="text-center md:text-left md:w-1/3 max-w-md">
        <h3 className="text-3xl font-bold text-primary mb-4">2. Login & Sign-Up</h3>
        <p className="text-muted-foreground leading-relaxed">
          This screen focuses on security and simplicity. By offering social logins and phone verification, it reduces friction and builds trust by minimizing personal data collection from the start.
        </p>
      </div>
      <PhoneMockup>
        <div className="p-6 h-full flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
          <div className="space-y-4">
            <Input placeholder="Full Name" className="w-full" />
            <Input type="tel" placeholder="Phone Number" className="w-full" />
            <Button className="mosque-button-primary w-full">Sign Up</Button>
          </div>
          <div className="text-center text-muted-foreground my-6">OR</div>
          <div className="space-y-3">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <span className="text-xl">G</span>
              Sign up with Google
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <span className="text-xl">🍎</span>
              Sign up with Apple
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Already have an account?{" "}
            <button className="font-bold text-primary hover:underline">Sign In</button>
          </p>
        </div>
      </PhoneMockup>
    </section>
  );
};
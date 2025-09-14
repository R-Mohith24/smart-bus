import { SmartInput } from "@/components/ui/smart-input";
import { SmartButton } from "@/components/ui/smart-button";
import { Mail, Lock } from "lucide-react";

export const PassengerPortal = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Passenger Login</h2>
        <p className="text-muted-foreground">Track your bus in real-time</p>
      </div>
      
      <form className="space-y-5">
        <SmartInput
          type="email"
          placeholder="Enter your email"
          label="Email Address"
          icon={Mail}
        />
        
        <SmartInput
          type="password"
          placeholder="Enter your password"
          label="Password"
          icon={Lock}
        />
        
        <SmartButton variant="passenger" className="w-full mt-8">
          Login as Passenger
        </SmartButton>
      </form>
      
      <div className="text-center">
        <a href="#" className="text-sm text-primary hover:underline">
          Forgot your password?
        </a>
      </div>
    </div>
  );
};
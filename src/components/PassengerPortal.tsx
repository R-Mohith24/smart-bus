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
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <SmartInput
            type="email"
            placeholder="Enter your email"
            className="pl-11"
            label="Email Address"
          />
        </div>
        
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <SmartInput
            type="password"
            placeholder="Enter your password"
            className="pl-11"
            label="Password"
          />
        </div>
        
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
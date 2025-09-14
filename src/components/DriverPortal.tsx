import { SmartInput } from "@/components/ui/smart-input";
import { SmartButton } from "@/components/ui/smart-button";
import { Phone, Lock, User, Calendar, CreditCard } from "lucide-react";

export const DriverPortal = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Driver Portal</h2>
        <p className="text-muted-foreground">Manage your bus operations</p>
      </div>
      
      <form className="space-y-5">
        <SmartInput
          type="tel"
          placeholder="Enter your phone number"
          label="Phone Number"
          icon={Phone}
        />
        
        <SmartInput
          type="password"
          placeholder="Enter your password"
          label="Password"
          icon={Lock}
        />
        
        <SmartInput
          type="text"
          placeholder="Enter your full name"
          label="Full Name"
          icon={User}
        />
        
        <SmartInput
          type="number"
          placeholder="Enter your age"
          label="Age"
          min="18"
          max="65"
          icon={Calendar}
        />
        
        <SmartInput
          type="text"
          placeholder="Enter your license ID"
          label="Driving License ID"
          icon={CreditCard}
        />
        
        <SmartButton variant="driver" className="w-full mt-8">
          Login as Driver
        </SmartButton>
      </form>
      
      <div className="text-center">
        <a href="#" className="text-sm text-accent hover:underline">
          Need help with registration?
        </a>
      </div>
    </div>
  );
};
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
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <SmartInput
            type="tel"
            placeholder="Enter your phone number"
            className="pl-11"
            label="Phone Number"
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
        
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <SmartInput
            type="text"
            placeholder="Enter your full name"
            className="pl-11"
            label="Full Name"
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <SmartInput
            type="number"
            placeholder="Enter your age"
            className="pl-11"
            label="Age"
            min="18"
            max="65"
          />
        </div>
        
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <SmartInput
            type="text"
            placeholder="Enter your license ID"
            className="pl-11"
            label="Driving License ID"
          />
        </div>
        
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
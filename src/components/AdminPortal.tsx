import { SmartInput } from "@/components/ui/smart-input";
import { SmartButton } from "@/components/ui/smart-button";
import { Mail, Lock, Shield, AlertCircle } from "lucide-react";

export const AdminPortal = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Shield className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Administrator</h2>
        </div>
        <p className="text-muted-foreground">Transport Department Access</p>
      </div>
      
      <form className="space-y-5">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <SmartInput
            type="email"
            placeholder="username@punjab.gov.in"
            className="pl-11"
            label="Government Email"
          />
        </div>
        
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <SmartInput
            type="password"
            placeholder="Enter your secure password"
            className="pl-11"
            label="Password"
          />
        </div>
        
        <div className="relative">
          <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <SmartInput
            type="text"
            placeholder="Enter 6-digit OTP"
            className="pl-11"
            label="One-Time Password (OTP)"
            maxLength={6}
          />
        </div>
        
        <SmartButton variant="admin" className="w-full mt-8">
          Secure Admin Login
        </SmartButton>
      </form>
      
      <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
        <AlertCircle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        <p className="text-xs text-muted-foreground">
          Only authorized Transport Officers may log in.
        </p>
      </div>
    </div>
  );
};
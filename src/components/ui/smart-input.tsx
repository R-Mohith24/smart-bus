import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface SmartInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
}

const SmartInput = React.forwardRef<HTMLInputElement, SmartInputProps>(
  ({ className, type, label, icon: Icon, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          )}
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-xl border border-soft-teal bg-input py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-bright-teal focus:outline-none focus:ring-2 focus:ring-bright-teal/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
              Icon ? "pl-11 pr-4" : "px-4",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }
);
SmartInput.displayName = "SmartInput";

export { SmartInput };
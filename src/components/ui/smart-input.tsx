import * as React from "react";
import { cn } from "@/lib/utils";

export interface SmartInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const SmartInput = React.forwardRef<HTMLInputElement, SmartInputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl border border-soft-teal bg-input px-4 py-3 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-bright-teal focus:outline-none focus:ring-2 focus:ring-bright-teal/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
SmartInput.displayName = "SmartInput";

export { SmartInput };
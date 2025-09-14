import { Bus } from "lucide-react";

export const SmartBusHeader = () => {
  return (
    <header className="bg-primary text-primary-foreground py-6 px-4 shadow-soft">
      <div className="max-w-sm mx-auto flex items-center justify-center gap-3">
        <Bus className="w-8 h-8" />
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">Smart Bus</h1>
          <p className="text-sm opacity-90">Know Your Bus</p>
        </div>
      </div>
    </header>
  );
};
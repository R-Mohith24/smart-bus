import { useState } from "react";
import { SmartBusHeader } from "@/components/SmartBusHeader";
import { TabNavigation } from "@/components/TabNavigation";
import { PassengerPortal } from "@/components/PassengerPortal";
import { DriverPortal } from "@/components/DriverPortal";
import { AdminPortal } from "@/components/AdminPortal";

const Index = () => {
  const [activeTab, setActiveTab] = useState<'passenger' | 'driver' | 'admin'>('passenger');

  const renderActivePortal = () => {
    switch (activeTab) {
      case 'passenger':
        return <PassengerPortal />;
      case 'driver':
        return <DriverPortal />;
      case 'admin':
        return <AdminPortal />;
      default:
        return <PassengerPortal />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      <SmartBusHeader />
      
      <div className="max-w-sm mx-auto pb-8">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="mx-4 mt-6 bg-gradient-card backdrop-blur-sm rounded-2xl shadow-soft p-6 transition-all duration-500 ease-spring">
          {renderActivePortal()}
        </div>
        
        <div className="text-center mt-6 px-4">
          <p className="text-xs text-muted-foreground">
            Smart Bus • Government of Punjab Transport Department
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

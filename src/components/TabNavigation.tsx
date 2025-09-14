interface TabNavigationProps {
  activeTab: 'passenger' | 'driver' | 'admin';
  onTabChange: (tab: 'passenger' | 'driver' | 'admin') => void;
}

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const tabs = [
    { id: 'passenger' as const, label: 'Passenger' },
    { id: 'driver' as const, label: 'Driver' },
    { id: 'admin' as const, label: 'Administrator' },
  ];

  return (
    <div className="bg-card mx-4 mt-6 rounded-xl shadow-soft p-1">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground shadow-button'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
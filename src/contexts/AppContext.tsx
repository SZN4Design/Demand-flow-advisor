import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  portfolioMode: boolean;
  setPortfolioMode: (mode: boolean) => void;
  lastUpdated: string;
  refreshForecast: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedCity, setSelectedCity] = useState('toronto');
  const [portfolioMode, setPortfolioMode] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('Today at 9:12 AM');

  const refreshForecast = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    setLastUpdated(`Today at ${displayHours}:${minutes} ${ampm}`);
  };

  return (
    <AppContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        portfolioMode,
        setPortfolioMode,
        lastUpdated,
        refreshForecast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

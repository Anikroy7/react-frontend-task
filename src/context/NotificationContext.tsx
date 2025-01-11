
import React, { createContext, useState, ReactNode } from "react";

interface NotificationContextType {
  bellCount: number;
  incrementBellCount: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  
  const [bellCount, setBellCount] = useState<number>(parseInt(localStorage.getItem("bellCount") || "0"));

  const incrementBellCount = () => {
    const newCount = bellCount + 1;
    setBellCount(newCount);
    localStorage.setItem("bellCount", newCount.toString());
  };

  return (
    <NotificationContext.Provider value={{ bellCount, incrementBellCount }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification should be provide into NotificationProvider");
  }
  return context;
};

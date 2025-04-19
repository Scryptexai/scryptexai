
import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  username: string;
} | null;

type AppContextType = {
  user: User;
  credits: number;
  xp: number;
  login: (username: string) => void;
  logout: () => void;
  addCredits: (amount: number) => void;
  useCredits: (amount: number) => boolean;
  addXp: (amount: number) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [credits, setCredits] = useState(20);
  const [xp, setXp] = useState(0);
  
  useEffect(() => {
    // Load user from localStorage on mount
    const storedUser = localStorage.getItem("scryptex-user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("scryptex-user");
      }
    }
  }, []);
  
  const login = (username: string) => {
    const newUser = { username };
    setUser(newUser);
    localStorage.setItem("scryptex-user", JSON.stringify(newUser));
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem("scryptex-user");
  };
  
  const addCredits = (amount: number) => {
    setCredits((prev) => prev + amount);
  };
  
  const useCredits = (amount: number) => {
    if (credits >= amount) {
      setCredits((prev) => prev - amount);
      return true;
    }
    return false;
  };
  
  const addXp = (amount: number) => {
    setXp((prev) => prev + amount);
  };
  
  return (
    <AppContext.Provider
      value={{
        user,
        credits,
        xp,
        login,
        logout,
        addCredits,
        useCredits,
        addXp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

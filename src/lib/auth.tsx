import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole, DEMO_USERS } from '@/types/user';

interface AuthContextType {
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('banking-user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (role: UserRole) => {
    const userData = DEMO_USERS[role];
    setUser(userData);
    localStorage.setItem('banking-user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('banking-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

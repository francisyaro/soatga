'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  shopName: string;
  role: string;
}

interface AuthContextType {
  user: UserProfile;
  initials: string;
  updateProfile: (updated: Partial<UserProfile>) => void;
  updatePassword: (currentPass: string, newPass: string) => Promise<boolean>;
  logout: () => void;
  login: (identifier: string, pass: string) => void;
  activeShop: string;
  setActiveShop: (shopName: string) => void;
}

const DEFAULT_USER: UserProfile = {
  fullName: 'Francis YARO',
  email: 'francisyaro@soatga.bf',
  phone: '+226 64 68 83 83',
  shopName: 'Boutique Gounghin',
  role: 'Gérant Propriétaire',
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile>(DEFAULT_USER);
  const [activeShop, setActiveShop] = useState<string>('Boutique Gounghin');

  // Load persistent user profile from localStorage if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('soatga_user_profile');
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (e) {
          console.error(e);
        }
      }
      const savedShop = localStorage.getItem('soatga_active_shop');
      if (savedShop) {
        setActiveShop(savedShop);
      }
    }
  }, []);

  // Compute initials dynamically (e.g. "Francis YARO" -> "FY", "Mariam Kaboré" -> "MK")
  const initials = user.fullName
    .split(' ')
    .filter(Boolean)
    .map((word) => word[0].toUpperCase())
    .slice(0, 2)
    .join('') || 'FY';

  const updateProfile = (updated: Partial<UserProfile>) => {
    setUser((prev) => {
      const newUser = { ...prev, ...updated };
      if (typeof window !== 'undefined') {
        localStorage.setItem('soatga_user_profile', JSON.stringify(newUser));
      }
      return newUser;
    });
  };

  const updatePassword = async (currentPass: string, newPass: string): Promise<boolean> => {
    // Simulate database update
    await new Promise((resolve) => setTimeout(resolve, 600));
    return true;
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('soatga_user_profile');
    }
    setUser(DEFAULT_USER);
    window.location.href = '/login';
  };

  const login = (identifier: string, pass: string) => {
    const loggedUser: UserProfile = {
      fullName: identifier.includes('@') ? identifier.split('@')[0].toUpperCase() : 'Francis YARO',
      email: identifier.includes('@') ? identifier : 'francisyaro@soatga.bf',
      phone: '+226 64 68 83 83',
      shopName: activeShop,
      role: 'Gérant Propriétaire',
    };
    updateProfile(loggedUser);
    window.location.href = '/';
  };

  const handleSetActiveShop = (shopName: string) => {
    setActiveShop(shopName);
    if (typeof window !== 'undefined') {
      localStorage.setItem('soatga_active_shop', shopName);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        initials,
        updateProfile,
        updatePassword,
        logout,
        login,
        activeShop,
        setActiveShop: handleSetActiveShop,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

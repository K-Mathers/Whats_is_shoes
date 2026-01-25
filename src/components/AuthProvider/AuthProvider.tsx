import React, { useEffect, useState } from "react";

import { getUser } from "@/api/auth";
import { AuthContext } from "./AuthContext/AuthContext";
import type { IUserData } from "@/types/UserTypes";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const refreshAuth = async () => {
    try {
      const data = await getUser();
      setUser(data);
      console.log(data);
      setIsAuthenticated(true);
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      console.error(error);
    }
  };

  useEffect(() => {
    refreshAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, refreshAuth }}>
      {children}
    </AuthContext.Provider>
  );
};


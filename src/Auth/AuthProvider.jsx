import React, { createContext, useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [openMenu, setOpen] = useState(false);
  const [loading, setLoading] = useState(null);
  const [isAdmin, setAdmin] = useState(null);
  const userName = "miyad";
  const adminPassword = "miyad";
  const Auth = {
    user,
    setUser,
    setOpen,
    openMenu,
    userName,
    adminPassword,
    loading,
    setLoading,
    isAdmin,
    setAdmin,
  };

  return <AuthContext.Provider value={Auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

import React, { createContext, useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [openMenu, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const userName = "miyad";
  const adminPassword = "miyad";
  const [isAdmin, setAdmin] = useState(false);
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

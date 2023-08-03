import React, { createContext, useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [openMenu, setOpen] = useState(false);
  const Auth = {
    user,
    setOpen,
    openMenu,
  };

  return <AuthContext.Provider value={Auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

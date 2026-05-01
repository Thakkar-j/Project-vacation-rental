/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize state from local storage so it persists across reloads.
  // If 'user-info' exists, the user is logged in. Otherwise, they are logged out.
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user-info");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("user-info");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

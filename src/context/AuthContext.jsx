import React, { useState, createContext } from 'react';
import { UserData } from '../components/Auth';

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);

  const login = ({ userData }) => {
    setAuth(UserData);
  }

  const logout = () => {
    setAuth(undefined);
  }

  const valueContext = {
    auth,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  )
}

import React, { useState, useEffect, useContext, createContext, ReactNode } from "react";
import axios from "axios";

// Define the type for authentication data
interface AuthData {
  user: any | null;
  token: string;
}

// Create the AuthContext
const AuthContext = createContext<[AuthData, React.Dispatch<React.SetStateAction<AuthData>>] | undefined>(undefined);

// Create the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthData>({
    user: null,
    token: "",
  });

  // Set the default authorization header
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data) as AuthData;
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Create the useAuth hook
const useAuth = (): [AuthData, React.Dispatch<React.SetStateAction<AuthData>>] => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { useAuth, AuthProvider };

import React, { createContext } from "react";
import { Usuario } from "../interfaces/appInterfaces";

type AuthContextPorps={
  errorMessage : string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
  signIn: () => void;
  logOut: () => void;
  removeError: () => void;
} 

export const AuthContext = createContext({} as AuthContextPorps);

export const AuthProvider = ({children}: any) => {


  return(
    <AuthContext.Provider value={{
      
    }}>
      {children}
    </AuthContext.Provider>
  )
}
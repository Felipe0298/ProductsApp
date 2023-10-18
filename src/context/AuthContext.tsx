import React, { createContext, useReducer, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginData, LoginResponse, Usuario } from "../interfaces/appInterfaces";
import { AuthState, authReducer } from "./AuthReducer";
import cafeApi from "../api/cafeApi";

type AuthContextPorps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
  signIn: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
}


const authInitialState: AuthState = {
  status: "checking",
  token: null,
  user: null,
  errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextPorps);

export const AuthProvider = ({ children }: any) => {

  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    checkToken()
  }, [])

  const checkToken = async () => {
    const token = AsyncStorage.getItem('token');

    //No token, no autenticado
    if (!token) return dispatch({ type: "notAuthenticated" })

    //Hay token

    const { data } = await cafeApi.get('/auth')

    dispatch({
      type: 'signUp',
      payload: {
        token: data.token,
        user: data.usuario
      }
    });
  }



  const signIn = async ({ correo, password }: LoginData) => {
    try {

      const { data } = await cafeApi.post<LoginResponse>('/auth/login', { correo, password });
      dispatch({
        type: 'signUp',
        payload: {
          token: data.token,
          user: data.usuario
        }
      });

      await AsyncStorage.setItem('token', data.token)

    } catch (error: any) {
      console.log(error.response.data.msg)
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Información incorrecta'
      })
    }
  };

  const signUp = () => { };
  const logOut = () => { };

  const removeError = () => {
    dispatch({ type: 'removeError' })
  };


  return (
    <AuthContext.Provider value={{
      ...state, signUp, signIn, logOut, removeError
    }}>
      {children}
    </AuthContext.Provider>
  )
}
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {getAuth,signInWithPopup,onAuthStateChanged,signInWithEmailAndPassword} from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const providerLogin = (provider) =>{
        return signInWithPopup(auth,provider)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect( () =>{
        const unSubscribe =onAuthStateChanged(auth, (currentUser) =>{
                 console.log(' inside auth state changed',currentUser);
                 setUser(currentUser)
             })
             return () =>{
                 unSubscribe()
             }
         },[])

    const authInfo = {user , providerLogin,signIn}
  return <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>;
};

export default AuthProvider;

import React, { createContext, useEffect, useState } from "react";

import { getAuth , createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config.js'

export const AuthContext = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
// const auth = getAuth(applyActionCode);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true);
  // console.log(user)
  // create user
  const createUser = (email, password) => {
    setLoading(true)
		return createUserWithEmailAndPassword(auth , email , password)
	};
  // sign in user
  const signIn = (email , password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email , password)
  }
  // update profile
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser , updatedData);
  }
  // log out user
  const logOut = () => {
    return signOut(auth)
  }
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
      setUser(currentUser);
      setLoading(false)
    })
    return () => {
      unsubscribe();
    }
  }, [])
  const authData = {
    user,
    setUser,
    createUser, 
    logOut,
    signIn,
    loading ,
    setLoading,
    updateUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;

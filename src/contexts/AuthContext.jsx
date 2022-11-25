import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";

export const methods = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
};
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
// eslint-disable-next-line react/prop-types
export function AuthProvider({ children, auth }: any) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return methods.createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return methods.signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return methods.signOut(auth);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email) {
    return methods.updateEmail(auth, email);
  }

  function updatePassword(password) {
    return methods.updatePassword(auth, password);
  }

  useEffect(() => {
    const unsubscribe = methods.onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login: login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

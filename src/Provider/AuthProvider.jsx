import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
    
      const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };
    
      const logOut = () => {
        return signOut(auth)
      }

      const handleGoogleSingIn = () => {
        return signInWithPopup(auth, googleProvider)
      }

      const handleGithubSingIn = () => {
            return signInWithPopup(auth, githubProvider)
      }
      

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => unsubscribe();
      }, []);

    const authInfo = { register, userLogin, user, logOut,  handleGoogleSingIn, handleGithubSingIn, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
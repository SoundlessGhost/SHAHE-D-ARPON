/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIN = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Google Sign IN
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const logOut = () => {
        signOut(auth)
    }
    // observe auth state changed || Reload hold 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        googleSignIn,
        signIN,
        logOut,
        resetPassword,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
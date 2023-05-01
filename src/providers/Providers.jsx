import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
const auth = getAuth(app);

export const TravelsContext = createContext()
const Providers = ({children}) => {
    // for loader
    const [loading,SetLoading] =  useState(true);
    // user

    const [user,setUser] = useState(null)
    // create user account

    const registerUser = (email,password)=>{
        SetLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user

    const LoginUser = (email,password)=>{
        SetLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        SetLoading(true)
       return signOut(auth)
    }
    // display user

    const displayUserName = (user,name)=>{
       return updateProfile(user,{
            displayName:name
        })
    }

    // observer

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
                setUser(currentUser)
                SetLoading(false)
        })
        return () => {
            unsubscribe()
        };
    }, []);

    const travelInfo = {
        user,
        registerUser,
        LoginUser,
        logOut,
        displayUserName,
        loading

    }
    return (
        <TravelsContext.Provider value={travelInfo}>
            {children}
        </TravelsContext.Provider>
    );
};

export default Providers;
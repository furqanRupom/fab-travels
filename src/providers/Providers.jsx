import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
const auth = getAuth(app);

export const TravelsContext = createContext()
const Providers = ({children}) => {
    // user

    const [user,setUser] = useState(null)
    // create user account

    const registerUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user

    const LoginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
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
        displayUserName

    }
    return (
        <TravelsContext.Provider value={travelInfo}>
            {children}
        </TravelsContext.Provider>
    );
};

export default Providers;
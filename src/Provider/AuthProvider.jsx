/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    // 
    const[user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    // Create New User 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


        // Update User Start
        const updateUser = (name, photo) => {
            setLoading(true)
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            })
        }
        // Update User End

        // Logout User

        const logout = () => {
            setLoading(true)
            return signOut(auth)
        }


        // On Auth State Changed 
        useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                console.log('user ', currentUser);
                setUser(currentUser)
                setLoading(false)
            });
            return () => {
                unSubscribe
            }
        }, [])


    const AuthInfo = {user, createUser, loginUser, updateUser, logout, loading}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
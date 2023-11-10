/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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
        return signInWithEmailAndPassword(auth, email, password)
    }



    const AuthInfo = {createUser, loginUser}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
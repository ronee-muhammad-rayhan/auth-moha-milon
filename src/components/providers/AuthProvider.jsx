import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../../firebase/firebase.config';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    return (
        <AuthContext.Provider value={{ user, setUser, createUser, signInUser, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
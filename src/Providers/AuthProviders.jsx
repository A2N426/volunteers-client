import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from "../firebase/firebase.config";

export const UserContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWIthGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser && currentUser.email) {
                const email = {
                    email: currentUser.email
                }
                fetch("https://volunteer-own-server.vercel.app/token", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(email)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("secret-token",data.token)
                    })
            }
            else {
                localStorage.removeItem("secret-token")
            }
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const userInfo = {
        user,
        loading,
        register,
        logIn,
        signInWIthGoogle,
        logOut,

    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProviders;
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

//   SignUp User
  const signUp = async(email, password) =>{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        return res.user;
  }

//   Login User
  const login = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

//   Logout user
 const logout=()=>{
    return signOut(auth);
 }





  const authInfo = {
    user,
    loading,
    signUp,
    login,
    logout
  }

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

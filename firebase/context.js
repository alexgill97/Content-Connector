import { auth, firestore } from './clientApp';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext } from 'react';
// import { getUserData } from './authFunctions';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const AuthContext = createContext({ user: null });

// Custom hook to read  auth record and user profile doc
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    userProviderId: '',
    userId: '',
    userName: '',
    userEmail: '',
    userPhotoLink: '',
  });

  const getUserData = async (u) => {
    getDoc(doc(firestore, 'users', u)).then((docSnap) => {
      if (docSnap.exists) {
        setUserData(docSnap.data());
        console.log('auth functions data', docSnap.data());
      }
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('in auth change', user);
        setCurrentUser(user.uid);
        getUserData(user.uid);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

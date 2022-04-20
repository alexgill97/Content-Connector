import { auth } from './clientApp';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext } from 'react';
import { getUserData } from './authFunctions';

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('in auth change', user);
        setCurrentUser(user.uid);
        setUserData({
          userProviderId: user.uid,
          userId: user.uid,
          userName: user.displayName,
          userEmail: user.email,
          userPhotoLink: user.photoURL,
        });
        getUserData(user.uid).then((data) => {
          console.log('db data', data);
        });
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

import { doc, onSnapshot, getFirestore } from 'firebase/firestore';
import { auth, firestore } from './clientApp';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user status changed', user);
      if (user && user.email) {
        setEmail(user.email);
      } else {
        setEmail(null);
      }
    });
  }, []);

  return email;
}

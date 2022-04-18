import { doc, onSnapshot, getFirestore } from 'firebase/firestore';
import { auth, firestore } from './clientApp';
import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user status changed', user);
      setEmail(user.email);
    });
  }, []);

  return email;
}

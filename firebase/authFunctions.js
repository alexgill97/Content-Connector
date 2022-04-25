import { auth, firestore } from './clientApp';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';

const loginUser = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  await updateDoc(doc(firestore, 'users', result.user.uid), {
    isOnline: true,
  });
};

const logoutUser = async (currentUser) => {
  await signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

export { loginUser, logoutUser };

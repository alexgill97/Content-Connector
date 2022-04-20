import { auth, firestore } from './clientApp';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).then((cred) => {});
};

const logoutUser = async () => {
  await signOut(auth)
    .then(() => {
      console.log('signed out');
    })
    .catch((error) => {
      console.log(error);
    });
};

export { loginUser, logoutUser };

import { auth, firestore } from './clientApp';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref } from 'firebase/storage';

const registerUserDb = async (userId, data) => {
  await setDoc(doc(firestore, 'users', userId), {
    ...data,
  });
};

const registerUserAuth = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password).then((cred) => {

  });
};

const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).then((cred) => {

  });
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

export { registerUserAuth, registerUserDb, loginUser, logoutUser };

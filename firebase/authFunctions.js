import { auth, firestore } from './clientApp';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref } from 'firebase/storage';

const registerUserDb = async (userId, data) => {
  console.log(params);
  await setDoc(doc(firestore, 'users', userId), {
    ...data,
  });
};

const registerUserAuth = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password).then((cred) => {
    console.log('created user', cred.user);
  });
};

const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).then((cred) => {
    console.log('signed in user', cred.user);
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

const getUserData = async (userId) => {
  getDoc(doc(firestore, 'users', userId)).then((docSnap) => {
    if (docSnap.exists) {
      // setUser(docSnap.data());
      console.log('auth functions data', docSnap.data());
    }
  });
};

export { registerUserAuth, registerUserDb, loginUser, logoutUser, getUserData };

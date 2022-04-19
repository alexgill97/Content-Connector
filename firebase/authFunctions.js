import { auth } from './clientApp';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const registerUser = (email, password) => {
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

export { registerUser, loginUser, logoutUser };

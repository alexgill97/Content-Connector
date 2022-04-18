import { auth } from './clientApp';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const registerUser = (event) => {
  event.preventDefault();
  const email = event.target[0].value;
  const password = event.target[1].value;

  console.log(email, password);

  createUserWithEmailAndPassword(auth, email, password).then((cred) => {
    console.log('created user', cred.user);
  });
};

const loginUser = (event) => {
  event.preventDefault();
  const email = event.target[0].value;
  const password = event.target[1].value;

  const user = signInWithEmailAndPassword(auth, email, password).then(
    (cred) => {
      console.log('signed in user', cred.user);
    }
  );
};

const logoutUser = (event) => {
  event.preventDefault();
  signOut(auth).then(() => {
    console.log('signed out');
  });
};

export { registerUser, loginUser, logoutUser };

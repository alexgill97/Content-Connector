import { auth } from './clientApp';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';

onAuthStateChanged(auth, (user) => {
  console.log('user status changed', user);
});

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

  signInWithEmailAndPassword(auth, email, password);
};

export { registerUser };

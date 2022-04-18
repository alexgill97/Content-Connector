import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyBlOCve0l46-lCxUxulL5pHUz7Q725KsEI',
  authDomain: 'content-connector-fb9f1.firebaseapp.com',
  projectId: 'content-connector-fb9f1',
  storageBucket: 'content-connector-fb9f1.appspot.com',
  messagingSenderId: '792967995352',
  appId: '1:792967995352:web:119f76191fb6b634d45cad',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export default firebaseApp;

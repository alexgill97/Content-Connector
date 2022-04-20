import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase API config
const firebaseConfig = {
  apiKey: 'AIzaSyBlOCve0l46-lCxUxulL5pHUz7Q725KsEI',
  authDomain: 'content-connector-fb9f1.firebaseapp.com',
  databaseURL: 'content-connector-fb9f1.firebaseio.com',
  projectId: 'content-connector-fb9f1',
  storageBucket: 'content-connector-fb9f1.appspot.com',
  messagingSenderId: '792967995352',
  appId: '1:792967995352:web:119f76191fb6b634d45cad',
};

// Firebase Initializers
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage};

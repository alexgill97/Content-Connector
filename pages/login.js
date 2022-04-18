import React from 'react';
import Navbar from '../components/Navbar';

import { useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { auth } from '../firebase/client';

function Login() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');


  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    console.log("Current User:" , currentUser);
    console.log("User:" , user);

    if ((currentUser && !user) || (currentUser && user && currentUser.email !== user.email)){ 
      setUser(currentUser);
      console.log("consolelog:" , user);
    }

    if (currentUser !== user){
      setUser(currentUser)
      console.log("consolelog:" , user);
    } 
    // setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user.user.email)
      console.log(user);
      // setUser(user.user)
    } catch (error) {
      console.log(error.message);
    }
    
  };

  const logout = async () => {
    await signOut(auth);
    // setUser("");
    console.log(user)
  };


  return (
    <div>
      <Navbar />

      <div className="App">
        <div>
          <h3> Register User </h3>
          <input
            placeholder="Email..."
            value={registerEmail}
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            value={registerPassword}
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />

          <button onClick={register}> Create User</button>
        </div>

        <div>
          <h3> Login </h3>
          <input
            placeholder="Email..."
            value={loginEmail}
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            value={loginPassword}
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          <button onClick={login}> Login</button>
        </div>

        <h4> User Logged In: </h4>
        
        {user?.email}

        <button onClick={logout}> Sign Out </button>
      </div>
    </div>
  );
}

export default Login;

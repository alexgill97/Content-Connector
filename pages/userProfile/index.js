import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../firebase/context';
import Link from 'next/link';
import { auth, firestore, db } from '../../firebase/clientApp';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext } from 'react';

// import { getUserData } from './authFunctions';
import {
  collection,
  doc,
  getDoc,
  setDoc,
  query,
  getDocs,
} from 'firebase/firestore';

const index = ({ users }) => {
  console.log('in user profile', users);
  
  const userList = users.map((x) => 
  <Link href={`/userProfile/${x.username}`}>
    <li key={x.username}>{x.username}</li>
  </Link>
  );

  console.log('user list', userList);
  return (
    <div>
      <h1>All users:</h1>
      <ul>
        {userList}
      </ul>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const querySnapshot = await getDocs(query(collection(firestore, 'users')));
  let allUsers = [];
  querySnapshot.forEach((doc) => {
    // console.log(' => ', doc.data());
    allUsers.push(doc.data());
  });
  console.log('allUsers', allUsers);
  return {
    props: {
      users: allUsers,
    },
  };
}

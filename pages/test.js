import React, { useContext, useState, useEffect } from 'react';
import styles from '../styles/FindingFreelancers.module.scss';
import UserList from '../components/UserList';
import { collection, query, getDocs } from 'firebase/firestore';

import { doc, getDoc, where, collectionGroup } from 'firebase/firestore';
import { useRouter } from 'next/router';

import { firestore } from '../firebase/clientApp';
import { AuthContext } from '../firebase/context';
import { FirebaseError } from 'firebase/app';
import Message from '../components/Message';

const test = ({}) => {
  return (
    <div>
      <Message requestedUser={'VMAo0VIGa2M8UezF4iLh7bBOTIX2'} />
    </div>
  );
};

export default test;



// export async function getServerSideProps() {
//   const querySnapshot = await getDocs(
//     query(collection(firestore, 'users'), where('uid', '==', "MVEU0UTkMEPcXMlOPUDunBGDsex1"))
//   );
//   let allUsers = [];
//   querySnapshot.forEach((doc) => {
//     allUsers.push(doc.data());
//   });
//   return {
//     props: {
//       requestedUser: querySnapshot,
//     },
//   };
// }
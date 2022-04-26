import React, { useContext, useState, useEffect } from 'react';
import styles from '../styles/FindingFreelancers.module.scss';
import UserList from '../components/UserList';
import { collection, query, getDocs } from 'firebase/firestore';

import { doc, getDoc, where, collectionGroup } from 'firebase/firestore';
import { useRouter } from 'next/router';

import { firestore } from '../firebase/clientApp';
import { AuthContext } from '../firebase/context';
import { FirebaseError } from 'firebase/app';

const findingFreelancers = ({ users }) => {
  const { currentUser, userData } = useContext(AuthContext);

  const [profile, setProfile] = useState({});
  const [portfolio, setPortfolio] = useState({});

  // const getUserData = async (id) => {
  //   getDoc(doc(firestore, 'users', id)).then((docSnap) => {
  //     if (docSnap.exists) {
  //       setProfile(docSnap.data());
  //     }
  //   });
  // };

  // const getUserPortfolio = async (id) => {
  //   getDoc(doc(firestore, 'portfolio', id)).then((docSnap) => {
  //     if (docSnap.exists) {
  //       setPortfolio(docSnap.data());
  //     }
  //   });
  // };

  // useEffect(() => {
  //   getUserPortfolio(currentUser);
  // }, [currentUser]);

  return (
    <div className={`${styles.container} `}>
      <div className={`${styles.aboutBody}`}>
        <div className={`col-sm-8`}>
          <div className={`${styles.aboutBody}`}>
            <UserList users={users} profile={profile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default findingFreelancers;

export async function getServerSideProps() {
  const querySnapshot = await getDocs(
    query(collection(firestore, 'users'), where('isBusiness', '==', false))
  );
  let allUsers = [];
  querySnapshot.forEach((doc) => {
    allUsers.push(doc.data());
  });
  return {
    props: {
      users: allUsers,
    },
  };
}

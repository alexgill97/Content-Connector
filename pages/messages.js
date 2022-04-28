import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../firebase/context';
import { firestore, auth, storage } from '../firebase/clientApp';
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';

import styles from '../styles/messages.module.scss';
import Carousel from '../components/Carousel';

import Message from '../components/Message';
import { UserInfoCard } from '../components/UserInfoCard';
import User from '../components/User';
import Link from 'next/link';
const Messages = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [hidden, setHidden] = useState(false);

  const clickFunction = (profile) => {
    setSelectedUser(profile);
    setHidden(!hidden);
  };

  // console.log(selectedUser);
  return (
    <main className={styles.main_user_messages}>
      <div className={styles.info_card_container}>
        <div className={styles.messagesTitle}>Messages</div>
        {users.map((profile) => (
          <div onClick={() => clickFunction(profile)}>
            <UserInfoCard profile={profile} />
          </div>
        ))}{' '}
      </div>
      {!hidden ? (
        <div className={styles.message_container}>
          {selectedUser && <Message profile={selectedUser} />}
          {/* {selectedUser && !selectedUser.isBusiness && (
            <div className={styles.carousel_container}>
              <Carousel uid={selectedUser.uid} />
            </div>
          )} */}
        </div>
      ) : (
        <div className={styles.message_container}>
          {/* {selectedUser && !selectedUser.isBusiness && (
            <div className={styles.carousel_container}>
              <Carousel uid={selectedUser.uid} />
            </div>
          )} */}
        </div>
      )}
    </main>
  );
};

export default Messages;

export async function getServerSideProps() {
  const querySnapshot = await getDocs(
    query(collection(firestore, 'users'), where('city', '==', 'Toronto'))
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

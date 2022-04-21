import React, { useEffect, useState } from 'react';
import { onSnapshot, doc } from 'firebase/firestore';
import { firestore } from '../firebase/clientApp';
// import IMG from "../default.png";

import styles from '../styles/Message.module.scss';

const User = ({ user1, user, selectUser, chat }) => {
  const user2 = user?.uid;
  const [data, setData] = useState('');

  useEffect(() => {
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(firestore, 'lastMsg', id), (doc) => {
      setData(doc.data());
    });
    return () => unsub();
  }, []);

  return (
    <>
      <div
        className={`${styles.user_wrapper} ${
          chat.name === user.name && `${styles.selected_user}`
        } `}
        onClick={() => selectUser(user)}
      >
        <div className={`${styles.user_info}`}>
          <div className={`${styles.user_detail}`}>
            <img
              src={user.avatar || null}
              alt="avatar"
              className={`${styles.avatar}`}
            />
            <h4 className={`${styles.nameDisplay}`}>{user.username} </h4>
            <h4 className={`${styles.nameDisplay}`}>
              {`${user.isOnline ? 'online' : 'offline'}`}{' '}
            </h4>

            {data?.from !== user1 && data?.unread && (
              <small className={`${styles.unread}`}>New</small>
            )}
          </div>
          <div
            className={
              user.isOnline
                ? `${styles.user_status} ${styles.online}`
                : `${styles.user_status} ${styles.offline}`
            }
          ></div>
        </div>
        {data && (
          <p className={`${styles.truncate}`}>
            <strong>{data.from === user1 ? 'Me:' : null} </strong>
            {data.text}
          </p>
        )}
      </div>
      <div
        onClick={() => selectUser(user)}
        className={`${styles.sm_container} ${
          chat.name === user.name && `${styles.selected_user}`
        } `}
      >
        {/* <img src={user.avatar || null} alt="avatar" className="avatar sm_screen" /> */}
      </div>
    </>
  );
};

export default User;

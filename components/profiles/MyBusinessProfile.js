import styles from '../../styles/Profile.module.scss';
import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/context';

export default function businessProfile({avatar, username, description, address}) {

  const { userData } = useContext(AuthContext);

  return (
    <div>
      <div className={`${styles.container} ${styles.bg} text-center`}>
        <img
          src={`${userData.avatar}`}
          className={`${styles.makeImageCircular}`}
        ></img>
        <h3>{userData.username}</h3>
        <h3>Business ddddddAddress : {userData.address} <button>Edit Address</button></h3>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>Description</h3>
        <p>{userData.description} <button>Edit Description</button></p>
      </div>
      <div>
        <div>
        </div>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>My Posts</h3>
        <p>Lorem ipsum..</p>
      </div>
    </div>
  );
}

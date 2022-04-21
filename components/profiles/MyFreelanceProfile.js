import styles from '../../styles/Profile.module.scss';
import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/context';

export default function Profile() {
  const { userData } = useContext(AuthContext);

  return (
    <div>
      <div className={`${styles.container} ${styles.bg} text-center`}>
        <img
          src={`${userData.avatar}`}
          className={`${styles.makeImageCircular}`}
        ></img>
        <h3>{userData.username}</h3>
        <h3>Photographer/Videographer</h3>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>Description/About Me</h3>
        <p>{userData.description}</p>
      </div>
      <div>
        <div>
        </div>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>My Reviews</h3>
        <p>Lorem ipsum..</p>
      </div>
    </div>
  );
}

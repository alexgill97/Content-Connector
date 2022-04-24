import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Profile.module.scss';
import ProfilePic from '../public/profile-hex.png';
import React, { useContext } from 'react';

import { AuthContext } from '../firebase/context';

export default function Profile() {
  const { userData, currentUser } = useContext(AuthContext);
  console.log('profile', userData);

  return (
    <main className={styles.main}>
      <div className={styles.top_profile}>
        <div className={styles.avatar_container}>
          <Image
            src={userData.avatar}
            className={`${styles.avatar}`}
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>

        <div className="">
          <h5>{userData.city}</h5>
        </div>
        <h3>{userData.username}</h3>
        <h3>Photographer/Videographer</h3>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>Bio/About Me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex
        </p>
      </div>
      <div></div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>My Reviews</h3>
        <p>Lorem ipsum..</p>
      </div>
    </main>
  );
}

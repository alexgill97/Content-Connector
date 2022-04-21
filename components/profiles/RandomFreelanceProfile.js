import styles from '../../styles/Profile.module.scss';
import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { firestore } from '../../firebase/clientApp';


export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState({});

  const getUserData = async (id) => {
    getDoc(doc(firestore, 'users', id)).then((docSnap) => {
      if (docSnap.exists) {
        setProfile(docSnap.data());
      }
    });
  };

  useEffect(() => {
    getUserData(id);
  }, []);

  return (
    <div>
      <div className={`${styles.container} ${styles.bg} text-center`}>
        <img
          src={profile.avatar}
          className={`${styles.makeImageCircular}`}
        ></img>
        <h3>{profile.username}</h3>
        <h3>Photographer/Videographer</h3>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>Description/About Me</h3>
        <p>{profile.description}</p>
      </div>
      <div>
        <div></div>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>My Reviews</h3>
        <p>Lorem ipsum..</p>
      </div>
    </div>
  );
}

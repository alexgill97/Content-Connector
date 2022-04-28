import styles from '../../styles/business_profile.module.scss';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  doc,
} from 'firebase/firestore';
import { firestore } from '../../firebase/clientApp';
import Message from '../Message';

export default function otherBusinessProfile({ profile, portfolio }) {
  const [posts, setPosts] = useState([]);
  console.log(profile)
  let allPosts = [];

  const asyncFunction = async () => {
    const querySnapshot = await getDocs(
      query(collection(firestore, 'posts'), where('uid', '==', profile.uid))
    );
    querySnapshot.forEach((doc) => {
      allPosts.push(doc.data());
    });
    console.log(allPosts);
    setPosts(allPosts);
  };

  useEffect(() => {
    asyncFunction().then(() => portfolioMap);
  }, []);

  const portfolioMap = posts.map((x) => (
    <div className={styles.portfoliodiv}>
      <div className={styles.portfoliodivunder}>
        <div className={styles.portfolioTitle}>
          <h3>{x.postTitle}</h3>
        </div>
      </div>
      <div className={styles.backgroundWhite}>
        <div className={styles.portfolioDescription}>
          <h5>{x.description}</h5>
        </div>
      </div>
    </div>
  ));
  console.log(posts)

  return (
    <main className={styles.profile_main}>
      <div className={styles.profile_left}>
        <div className={styles.avatar}>
          <img src={profile.avatar} />
          <h3>{profile.username}</h3>
        </div>
        <div className={styles.description}>
          <div>
          <h2>Address:</h2>
          </div>
          <p>{profile.address}</p>
          <h2>About:</h2>
          <p>{profile.description}</p>
        </div>
      </div>
      <div className={styles.profile_right}>
        <div className={styles.profile_right_top}>
          <div className={styles.satisfaction}>
            <h4>Satisfaction Score</h4>
          </div>
          <div>
          <div className={styles.profile_messages}></div>
            <Message profile={profile} />
          </div>
        </div>
        <div className={styles.profile_projects}>
          <strong className={styles.backgroundWhiteStrong}>Their Posts:</strong>
          <div className={styles.backgroundWhite}>{portfolioMap}</div>
        </div>
        <div></div>
      </div>
    </main>
  );
}

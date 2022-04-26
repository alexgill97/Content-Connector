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


export default function otherBusinessProfile({
  avatar,
  username,
  description,
  address,
  portfolio,
}) {
  const [posts, setPosts] = useState([])
  
  let allPosts = [];
  const asyncFunction = async () => {
    const querySnapshot = await getDocs(
      query(
        collection(firestore, 'posts'),
        where('address', '==', address)
      )
    );
    querySnapshot.forEach((doc) => {
      allPosts.push(doc.data());
    });
    console.log(allPosts);
    setPosts(allPosts)
  };
  
  useEffect(() => {
    asyncFunction().then(()=>(
      portfolioMap
    ));
  }, []);

  const portfolioMap = posts.map((x) => (
    <div>
      <div>
      <div>{x.postTitle}</div>
      </div>
      <div>
        <div>{x.description}</div>
      </div>
    </div>
  ));

  return (
    <main className={styles.profile_main}>
      <div className={styles.profile_left}>
        <div className={styles.avatar}>
          <img src={avatar} />
          <h3>{username}</h3>
        </div>
        <div className={styles.description}>
          <h2>About:</h2>
          <p>{description}</p>
        </div>
        <div></div>
      </div>
      <div className={styles.profile_right}>
        <div className={styles.profile_right_top}>
          <div className={styles.top_users}>Their information</div>
          <div className={styles.profile_projects}>Top Users In Their Area:</div>
        </div>
        <div className={styles.profile_messages}>Their Posts:</div>
        <div>
          {portfolioMap}
        </div>
      </div>
    </main>
  );
}

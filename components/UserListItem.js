import Link from 'next/link';
import styles from '../styles/UserList.module.scss';
import React, { useEffect, useState } from 'react';
import { where, collectionGroup } from 'firebase/firestore';
import { firestore } from '../firebase/clientApp';
import { query, getDocs } from 'firebase/firestore';

import Carousel from '../components/Carousel';
const UserListItem = ({ user, username, uid, avatar, description }) => {
  const [portfolio, setPortfolio] = useState([]);
  let allPortfolios = [];

  const getUserPortfolio = async (id) => {
    const querySnapshot = await getDocs(
      query(collectionGroup(firestore, `portfolio`), where('uid', '==', id))
    );
    querySnapshot.forEach((doc) => {
      allPortfolios.push(doc.data());
    });
    setPortfolio(allPortfolios);
  };

  useEffect(() => {
    getUserPortfolio(uid);
  }, []);

  return (
    <main className={styles.card}>
      <section className={styles.carousel_container}>
        <Carousel uid={uid} />
      </section>
      <section className={styles.card__overlay}>
        <div className={styles.card__header}>
          <Link href={`userProfile/${uid}`}>
            <img className={styles.card__thumb} src={avatar} alt="" />
          </Link>
          <div className={styles.card__title}>
            <h3>{username}</h3>
          </div>
        </div>
        <div className={styles.card__description}>
          <p>{description}</p>
        </div>
      </section>
    </main>
  );
};

export default UserListItem;

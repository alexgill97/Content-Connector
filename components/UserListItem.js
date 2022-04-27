import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/UserList.module.scss';
import React, { useEffect, useState } from 'react';
import { doc, getDoc, where, collectionGroup } from 'firebase/firestore';
import { firestore } from '../firebase/clientApp';
import { collection, query, getDocs } from 'firebase/firestore';

import Message from '../components/Message';
import Carousel from '../components/Carousel';
const UserListItem = ({ user, username, uid, avatar, description }) => {
  const [hidden, setHidden] = useState(true);
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

  const portfolioMap = portfolio.map((x) => (
    <div>
      <div>
        <img
          src={x.image}
          height={300}
          width={300}
          className={`${styles.portfoliopicture}`}
        ></img>
      </div>
      {/* <div className={`${styles.portfoliodesc}`}>
            <div>{x.description}</div>
          </div> */}
    </div>
  ));

  // const changeState = () => (
  //   hidden ? setHidden(!hidden) : setHidden(hidden)
  // )
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
          {!hidden ? (
            <div>
              <button
                onClick={() => setHidden(!hidden)}
                className={styles.buttonTwo}
              >
                <img
                  src={'close_FILL0_wght400_GRAD0_opsz40.png'}
                  className={styles.cancelButton}
                />{' '}
              </button>
              <Message profile={user} className={styles.messageContainer} />
            </div>
          ) : (
            <button onClick={() => setHidden(!hidden)}>Send Message</button>
          )}
        </div>
      </section>
    </main>
  );
};

export default UserListItem;

// return (
//   <div className={styles.body}>
//     <div className={styles.card}>
//       <Link href={`/userProfile/${uid}`}>
//         <div className={``}>
//           <img src={avatar} className={styles.card__image}></img>
//         </div>
//       </Link>
//       <div className={styles.card__overlay}>{username}</div>
//     </div>
//     <div className={styles.description}>
//       {description}
//       <button onClick={() => setHidden(!hidden)}> Send Message </button>
//       {!hidden ? (
//         <Message profile={user} className={styles.messageContainer} />
//       ) : null}
//     </div>
//     <div className={`${styles.portfoliodiv}`}>{portfolioMap}</div>
//   </div>
// );

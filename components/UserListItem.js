import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/UserList.module.scss';
import React, { useEffect, useState } from 'react';
import { doc, getDoc, where, collectionGroup } from 'firebase/firestore';
import { firestore } from '../firebase/clientApp';
import { collection, query, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';

const UserListItem = ({ user, username, uid, avatar, description }) => {
  console.log('this is the username:', user);
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

  if (portfolio) {
    const portfolioMap = portfolio.map((x) => (
        <div className={`${styles.portfoliodiv}`}>
          <div className={`${styles.portfoliopicturediv}`}>
            <Image src={x.image} height={300} width={300} className={`${styles.portfoliopicture}`}></Image>
          </div>
          {/* <div className={`${styles.portfoliodesc}`}>
            <div>{x.description}</div>
          </div> */}
        </div>
    ));
    return (
      <div className={`${styles.b}`}>
        <div className={`${styles.container} `}>
          <div className={`${styles.userListBorder}`}>
            <Link href={`/userProfile/${uid}`}>
              <div className={`${styles.a}`}>
                <img src={avatar}></img>
                {username}
              </div>
            </Link>
          </div>
          <div className={`${styles.description}`}> {description} </div>
          <div className={`${styles.portfolios}`}>{portfolioMap}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${styles.b}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.userListBorder}`}>
            <Link href={`/userProfile/${uid}`}>
              <div className={`${styles.username}`}>
                <img src={avatar}></img>
                {username}
              </div>
            </Link>
          </div>
          <div className={`${styles.description}`}> {description} </div>
        </div>
      </div>
    );
  }
};

export default UserListItem;

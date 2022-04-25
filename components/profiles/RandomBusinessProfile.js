import styles from '../../styles/business_profile.module.scss';
import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { firestore } from '../../firebase/clientApp';
import Image from 'next/image';

export default function otherBusinessProfile({
  avatar,
  username,
  description,
  address,
  portfolio,
}) {
  const portfolioMap = portfolio.map((x) => (
    <div>
      <div>
        <Image src={x.image} height={100} width={100}></Image>
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
          <h5>About:</h5>
          <p>{description}</p>
        </div>
        <div></div>
      </div>
      <div className={styles.profile_right}>
        <div className={styles.profile_right_top}>
          <div className={styles.top_users}>Top Users In Your Area:</div>
          <div className={styles.profile_projects}>Your Projects</div>
        </div>
        <div className={styles.profile_messages}>Messages</div>
      </div>
    </main>
  );
}

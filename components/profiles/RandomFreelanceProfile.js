import styles from '../../styles/Profile.module.scss';
import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { firestore } from '../../firebase/clientApp';
import Image from 'next/image';



export default function otherFreelanceProfile({
  avatar,
  username,
  description,
  portfolio
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
if (portfolio) {
  return (
    <div>
      <div className={`${styles.container} ${styles.bg} text-center`}>
        <img src={avatar} className={`${styles.makeImageCircular}`}></img>
        <h3>{username}</h3>
        <h3>Photographer</h3>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div>
        <div>
          <div>{portfolioMap}</div>
        </div>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>My Reviews</h3>
        <p>Lorem ipsum..</p>
      </div>
    </div>
  );
} else {
  return (
    <div>
      <div className={`${styles.container} ${styles.bg} text-center`}>
        <img src={avatar} className={`${styles.makeImageCircular}`}></img>
        <h3>{username}</h3>
        <h3>Photographer</h3>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>My Reviews</h3>
        <p>Lorem ipsum..</p>
      </div>
    </div>
  );
}
}

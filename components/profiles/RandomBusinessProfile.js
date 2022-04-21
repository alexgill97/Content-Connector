import styles from '../../styles/Profile.module.scss';
import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { firestore } from '../../firebase/clientApp';

export default function otherBusinessProfile({
  avatar,
  username,
  description,
  address,
  portfoliodescription,
  portfolioimage,
}) {
  return (
    <div>
      <div className={`${styles.container} ${styles.bg} text-center`}>
        <img src={avatar} className={`${styles.makeImageCircular}`}></img>
        <h3>{username}</h3>
        <h3>Business Address : {address} </h3>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>Description</h3>
        <p>{description} </p>
      </div>
      <div>
        <div>
          <img src={`${portfolioimage}`} />
          <h1>{portfoliodescription}</h1>
        </div>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>My Reviews</h3>
        <p>Lorem ipsum..</p>
      </div>
    </div>
  );
}

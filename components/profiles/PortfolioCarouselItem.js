import React, { useState, useContext } from 'react';
import styles from '../../styles/profile_carousel_item.module.scss';
import Link from 'next/link';
import { auth, firestore } from '../../firebase/clientApp';
import {
  doc,
  deleteDoc,
  where,
  getDocs, query, collection
} from 'firebase/firestore';
import { AuthContext } from '../../firebase/context';
const ProfileCarouselItem = ({ image, description, uid, title }) => {
  
  const { currentUser } = useContext(AuthContext);
  const asyncFunction = async () => {
    await deleteDoc(doc(firestore, "users", uid , 'portfolio', title)).then(()=>(
      window.location.reload())
    );
  };

  return (
    <div className={styles.portfolio_item_container}>
      <div className={styles.image_container}>
        <img src={image} alt="" />
      </div>
      <div className={styles.info_container}>
        <h1>{title}</h1>
        <p className={styles.info_description}>{description}</p>
      </div>
      {(currentUser === uid) ? <button onClick={asyncFunction}> Delete </button> : null}
    </div>
  );
};

export default ProfileCarouselItem;

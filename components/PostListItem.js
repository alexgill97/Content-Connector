import Link from 'next/link';
import Delete from './Delete';
import React, { useContext } from 'react';
import { auth, firestore } from '../firebase/clientApp';
import styles from '../styles/PostList.module.scss';

import {
  doc,
  deleteDoc,
  where,
  getDocs,
  query,
  collection,
} from 'firebase/firestore';
import { AuthContext } from '../firebase/context';

const PostListItem = ({ postTitle, description, uid, address }) => {
  const asyncFunction = async () => {
    const querySnapshot = await getDocs(
      query(
        collection(firestore, 'posts'),
        where('uid', '==', uid),
        where('postTitle', '==', postTitle),
        where('description','==', description)
      )
    );
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref).then(() => {
        window.location.reload();
      });
    });
  };
  return (
    <div className={styles.border}>
      <div className={styles.borderdiv}>
        <h1>{postTitle}</h1>
        <p>{description}</p>
        <p><em>{address}</em></p>
        <button onClick={asyncFunction}> Delete </button>
      </div>
    </div>
  );
};

export default PostListItem;

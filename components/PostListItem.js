import Link from 'next/link';
import styles from '../styles/UserList.module.scss';
import Delete from './Delete';
import React, { useContext } from 'react';
import { auth, firestore } from '../firebase/clientApp';
import {
  doc,
  deleteDoc,
  where,
  getDocs, query, collection
} from 'firebase/firestore';
import { AuthContext } from '../firebase/context';

const PostListItem = ({ postTitle, description, userid, address }) => {
  const asyncFunction = async () => {
    const querySnapshot = await getDocs(
      query(
        collection(firestore, 'posts'),
        where('userid', '==', userid),
        where('postTitle', '==', postTitle)
      )
    );
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref).then(()=>{
        window.location.reload()
      })
    })
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.userListBorder}`}>
        <div className={`${styles.username}`}>{postTitle}</div>
      </div>
      <div className={`${styles.description}`}> {description} </div>
      <div>{address}</div>
      <button onClick={asyncFunction}> Delete </button>
    </div>
  );
};

export default PostListItem;

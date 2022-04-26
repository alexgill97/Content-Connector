import Link from 'next/link';
// import styles from '../styles/UserList.module.scss';
import Delete from './Delete';
import React, { useContext } from 'react';
import { auth, firestore } from '../firebase/clientApp';
import styles from '../styles/PostList.module.scss';

import {
  doc,
  deleteDoc,
  where,
  getDocs, query, collection
} from 'firebase/firestore';
import { AuthContext } from '../firebase/context';

const PostListItem = ({ postTitle, description, uid, address }) => {
  
  const asyncFunction = async () => {
    const querySnapshot = await getDocs(
      query(
        collection(firestore, 'posts'),
        where('uid', '==', uid),
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
    <div className={``}>
      <div className={``}>
        <div className={``}>{postTitle}</div>
      </div>
      <div className={``}> {description} </div>
      <div>{address}</div>
      <button onClick={asyncFunction}> Delete </button>
    </div>
  );
};

export default PostListItem;

import Link from 'next/link';
import styles from '../styles/UserList.module.scss';
import React from 'react';
import Delete from './Delete';


const PostListItem = ({ postTitle, description, uid, address }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.userListBorder}`}>
        <div className={`${styles.username}`}>
          {postTitle}
        </div>
      </div>
      <div className={`${styles.description}`}> {description} </div>
      <div>{address}</div>
      <Delete postTitle={postTitle}/>
    </div>
  );
};

export default PostListItem;

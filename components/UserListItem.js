import Link from 'next/link';
import styles from '../styles/UserList.module.scss';
import React from 'react';

const UserListItem = ({ username, uid, avatar, description, portfolio }) => {
  return (
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
      <div>
      </div>
    </div>
  );
};

export default UserListItem;

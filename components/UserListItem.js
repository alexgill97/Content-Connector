import Link from 'next/link';
import styles from '../styles/UserList.module.scss';
import React, { useContext } from 'react';
import { AuthContext } from '../firebase/context';

const UserListItem = ({ username, uid, avatar }) => {

  return (
    <container className={`${styles.container}`}>
      <div className={`${styles.userListBorder}`}>
        <Link href={`/userProfile/${uid}`}>
          <div className={`${styles.username}`}>
            <img src={avatar}></img>
            {username}
          </div>
        </Link>
      </div>
      <div className={`${styles.description}`}> ===DESCRIPTION=== </div>
      <div>===ADD PHOTOS HERE===</div>
    </container>
  );
};

export default UserListItem;

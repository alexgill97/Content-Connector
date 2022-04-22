import Link from 'next/link';
import styles from '../styles/UserList.module.scss';
import React from 'react';

const UserListItem = ({user,  username, uid, avatar, description, portfolio }) => {
  console.log("this is the username:" , user);
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
        {/* <img src={portfolio.image} /> */}
      </div>
    </div>
  );
};

export default UserListItem;

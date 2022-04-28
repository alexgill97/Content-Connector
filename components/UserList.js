import React, { useContext } from 'react';
import { AuthContext } from '../firebase/context';
import UserListItem from './UserListItem';
import Message from '../components/Message';
import styles from '../styles/UserList1.module.scss';
const UserList = ({ users, portfolio }) => {
  const { userData, currentUser } = useContext(AuthContext);

  const userList = users.map((x) => (
    <UserListItem
      key={x.uid}
      username={x.username}
      uid={x.uid}
      avatar={x.avatar}
      portfolio={portfolio}
      user={x}
      {...x}
    ></UserListItem>
  ));

  return <div className={styles.cards}>{userList}</div>;
};
export default UserList;

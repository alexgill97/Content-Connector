import React, { useContext } from 'react';
import { AuthContext } from '../firebase/context';
import UserListItem from './UserListItem';

const UserList = ({ users, portfolio }) => {
  const { userData, currentUser } = useContext(AuthContext);
  
  const userList = users.map((x) => (
    <UserListItem
      key={x.uid}
      username={x.username}
      uid={x.uid}
      avatar={x.avatar}
      portfolio={portfolio}
      {...x}
    ></UserListItem>
  ));

  console.log(userList);
  return (
    <div>
      <h1>Freelancers :</h1>
      <ul> {userList}</ul>
    </div>
  );
};
export default UserList;

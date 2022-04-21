import React from 'react';
import UserListItem from './UserListItem';

const UserList = ({ users }) => {
  const userList = users.map((x) => (
    <UserListItem
      key={x.uid}
      username={x.username}
      uid={x.uid}
      avatar={x.avatar}
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

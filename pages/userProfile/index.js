import React from 'react';
import Link from 'next/link';
import { firestore} from '../../firebase/clientApp';
import MyFreelanceProfile from '../../components/profiles/MyFreelanceProfile';
import { collection, query, getDocs } from 'firebase/firestore';


const index = ({ users }) => {
  const userList = users.map((x) => (
    <Link href={`/userProfile/${x.uid}`}>
      <li key={x.uid}>{x.username}</li>
    </Link>
  ));

  return (
    <div>
      <MyFreelanceProfile />

      <h1>All users:</h1>
      <ul>{userList}</ul>
    </div>
  );
};
export default index;

export async function getServerSideProps() {
  const querySnapshot = await getDocs(query(collection(firestore, 'users')));
  let allUsers = [];
  querySnapshot.forEach((doc) => {
    // console.log(' => ', doc.data());
    allUsers.push(doc.data());
  });
  console.log('allUsers', allUsers);
  return {
    props: {
      users: allUsers,
    },
  };
}

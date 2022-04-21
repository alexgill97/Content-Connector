import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { firestore } from '../../firebase/clientApp';

import MyFreelanceProfile from '../../components/profiles/MyFreelanceProfile';
import MyBusinessProfile from '../../components/profiles/MyBusinessProfile';
import RandomFreelanceProfile from '../../components/profiles/RandomFreelanceProfile';
import RandomBusinessProfile from '../../components/profiles/RandomBusinessProfile';

import { collection, query, getDocs } from 'firebase/firestore';
import { AuthContext } from '../../firebase/context';
import { doc, getDoc, where } from 'firebase/firestore';
import { useRouter } from 'next/router';

const index = ({ users }) => {
  const { userData, currentUser } = useContext(AuthContext);

  const userList = users.map((x) => (
    <Link href={`/userProfile/${x.uid}`}>
      <li key={x.uid}>{x.username}</li>
    </Link>
  ));

  const router = useRouter();
  const { id } = router.query;
  console.log(users)
  const [profile, setProfile] = useState({});

  const getUserData = async (id) => {
    getDoc(doc(firestore, 'users', id)).then((docSnap) => {
      if (docSnap.exists) {
        setProfile(docSnap.data());
      }
    });
  };

  useEffect(() => {
    getUserData(id);
  }, [id]);

  let { address, avatar, description, isBusiness, isOnline, uid, username } = profile;
  console.log('profile', profile)

  return (
    <div>
      {isBusiness && uid === currentUser ? (
        <MyBusinessProfile
          address={address}
          avatar={avatar}
          description={description}
          username={username}
        />
      ) : isBusiness && uid !== currentUser ? (
        <RandomBusinessProfile
          address={address}
          avatar={avatar}
          description={description}
          username={username}
        />
      ) : !isBusiness && uid === currentUser ? (
        <MyFreelanceProfile
          avatar={avatar}
          description={description}
          username={username}
        />
      ) : !isBusiness && uid !== currentUser ? (
        <RandomFreelanceProfile
          avatar={avatar}
          description={description}
          username={username}
        />
      ) : null}

      <h1>All users:</h1>
      <ul>{userList}</ul>
    </div>
  );
};
export default index;

export async function getServerSideProps() {
  const querySnapshot = await getDocs(query(collection(firestore, 'users'), where("isBusiness", "==", true)));
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
// {(() => {
//   if (userData.isBusiness && userData.uid === currentUser) {
//     return <MyBusinessProfile />;
//   } else if (userData.isBusiness && userData.uid !== currentUser) {
//     return <RandomBusinessProfile />;
//   } else if (!userData.isBusiness && userData.uid === currentUser) {
//     return <MyFreelanceProfile />;
//   } else {
//     return <RandomFreelanceProfile />;
//   }
// })()}

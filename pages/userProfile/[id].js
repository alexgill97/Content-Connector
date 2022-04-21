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

import Modal from '../../components/Modal';
// import { render } from 'react-dom/cjs/react-dom.production.min';
const index = ({ users }) => {
  const { userData, currentUser } = useContext(AuthContext);

  const userList = users.map((x) => (
    <Link href={`/userProfile/${x.uid}`}>
      <li key={x.uid}>{x.username}</li>
    </Link>
  ));

  const router = useRouter();
  const { id } = router.query;
  console.log(users);
  const [profile, setProfile] = useState({});
  const [portfolio, setPortfolio] = useState({});

  const getUserData = async (id) => {
    getDoc(doc(firestore, 'users', id)).then((docSnap) => {
      if (docSnap.exists) {
        setProfile(docSnap.data());
      }
    });
  };

  const getUserPortfolio = async (id) => {
    getDoc(doc(firestore, 'portfolio', id)).then((docSnap) => {
      if (docSnap.exists) {
        setPortfolio(docSnap.data());
      }
    });
  };

  useEffect(() => {
    getUserData(id);
    getUserPortfolio(id);
  }, [id]);

  // let { address, avatar, description, isBusiness, isOnline, uid, username } =
  //   profile;

  // let {description, isBusiness, isOnline, uid, username} =
  //   portfolio;
  console.log('profile', { portfolio });
  if (portfolio) {
    return (
      <div>
        {profile.isBusiness && profile.uid === currentUser ? (
          <div>
            <MyBusinessProfile
              address={profile.address}
              avatar={profile.avatar}
              description={profile.description}
              username={profile.username}
              portfoliodescription={portfolio.description}
              portfolioimage={portfolio.image}
            />
            <Modal />
          </div>
        ) : profile.isBusiness && profile.uid !== currentUser ? (
          <div>
            <RandomBusinessProfile
              address={profile.address}
              avatar={profile.avatar}
              description={profile.description}
              username={profile.username}
              portfoliodescription={portfolio.description}
              portfolioimage={portfolio.image}
            />
            
          </div>
        ) : !profile.isBusiness && profile.uid === currentUser ? (
          <div>
            <MyFreelanceProfile
              avatar={profile.avatar}
              description={profile.description}
              username={profile.username}
              portfoliodescription={portfolio.description}
              portfolioimage={portfolio.image}
            />
            <Modal />
          </div>
        ) : !profile.isBusiness && profile.uid !== currentUser ? (
          <div>
            <RandomFreelanceProfile
              avatar={profile.avatar}
              description={profile.description}
              username={profile.username}
              portfoliodescription={portfolio.description}
              portfolioimage={portfolio.image}
            />
          </div>
        ) : null}
        )<h1>All users:</h1>
        <ul>{userList}</ul>
      </div>
    );
  } else {
    return (
      <div>
        {profile.isBusiness && profile.uid === currentUser ? (
          <div>
            <MyBusinessProfile
              address={profile.address}
              avatar={profile.avatar}
              description={profile.description}
              username={profile.username}
            />
            <Modal />
          </div>
        ) : profile.isBusiness && profile.uid !== currentUser ? (
          <div>
            <RandomBusinessProfile
              address={profile.address}
              avatar={profile.avatar}
              description={profile.description}
              username={profile.username}
            />
          </div>
        ) : !profile.isBusiness && profile.uid === currentUser ? (
          <div>
            <MyFreelanceProfile
              avatar={profile.avatar}
              description={profile.description}
              username={profile.username}

            />
            <Modal />
          </div>
        ) : !profile.isBusiness && profile.uid !== currentUser ? (
          <div>
            <RandomFreelanceProfile
              avatar={profile.avatar}
              description={profile.description}
              username={profile.username}

            />
          </div>
        ) : null}
        )<h1>All users:</h1>
        <ul>{userList}</ul>
      </div>
    );
  }
};
export default index;

export async function getServerSideProps() {
  const querySnapshot = await getDocs(
    query(collection(firestore, 'users'), where('isBusiness', '==', true))
  );
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

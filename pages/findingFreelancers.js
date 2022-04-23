import React, { useContext, useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import UserList from '../components/UserList';
import PortfolioListItem from '/'
import { collection, query, getDocs } from 'firebase/firestore';

import { doc, getDoc, where, collectionGroup } from 'firebase/firestore';
import { useRouter } from 'next/router';

import { firestore } from '../firebase/clientApp';
import { AuthContext } from '../firebase/context';
import { FirebaseError } from 'firebase/app';

const findingFreelancers = ({ users }) => {

  console.log('findingasdasdada', users);
  const { currentUser, userData } = useContext(AuthContext);

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
    getUserPortfolio(currentUser);
  }, [currentUser]);
  console.log('findingasdasdada', users);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.aboutBody}`}>
        <div className={`col-sm-8`}>
          <h2>
            <strong>Placeholder for Freelancers</strong>
          </h2>
          <h4>Querying users based on isBusiness:false</h4>
          <div className={`${styles.aboutBody}`}>
            <UserList users={users} profile={profile} />
          </div>
          <p>
            setting a Layout for what's gonna show here from BUSINESS
            PERSPECTIVE. Different users in their own containers, showing their
            portfolio
          </p>
        </div>
        {/* <img
              src="/mapsphoto.jpeg"
              className={`${styles.picture1}`}
            /> */}
      </div>
    </div>
  );
};

export default findingFreelancers;

export async function getServerSideProps() {
  const querySnapshot = await getDocs(
    query(collection(firestore, 'users'), where('isBusiness', '==', false))
  );

  // const querySnapshot1 = await getDocs(
  //   query(collectionGroup(firestore, `portfolio`),where("description", "==", "This is a test description"))
  // );
  

  // let allPortfolios = []
  let allUsers = [];
  querySnapshot.forEach((doc) => {
    allUsers.push(doc.data());
  });

  // querySnapshot1.forEach((doc) => {
  //   console.log(doc.data(), "portfolios test grab")
  //   allPortfolios.push(doc.data());
  // });
  // snapshot.docs.map((doc) => (
  //   allPortfolios.push(doc.data())
  // ))

  console.log('allUsers', allUsers);
  // console.log('allPortfolios', allPortfolios);
  return {
    props: {
      users: allUsers,
      // portfolios: allPortfolios
    },
  };
}
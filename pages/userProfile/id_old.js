import MyFreelanceProfile from '../../components/profiles/MyFreelanceProfile';
import MyBusinessProfile from '../../components/profiles/MyBusinessProfile';
import RandomFreelanceProfile from '../../components/profiles/RandomFreelanceProfile';
import RandomBusinessProfile from '../../components/profiles/RandomBusinessProfile';

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../firebase/context';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { firestore } from '../../firebase/clientApp';

const userProfile = () => {
  const { userData, currentUser } = useContext(AuthContext);

  console.log('userrrrrrrr adtat', currentUser);
  const router = useRouter();
  const { id } = router.query;
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
  }, []);

  return (
    <div>
      {userData.isBusiness ? (
        <RandomBusinessProfile />
      ) : (
        <RandomFreelanceProfile />
      )}
    </div>
  );
};

export default userProfile;

// clicking on random user profile flow

// user [id]

// get data from specific user

// is business?

// renders view component with business profile(basic info, hiring projects) : renders view freelancer profile component (basic info, portfolio)

// clicking on YOUR profile

// get basic user data from auth,

// is business?

// render CRUD component with business view : render freelancer view

// if auth.uid === URL[id] {
//   isBusiness ? <MyBusinessProfile /> : <MyFreelancerProfile />

// } else{
//   isBusiness ? <RandomBusinessProfile /> : <RandomFreelancerProfile />}

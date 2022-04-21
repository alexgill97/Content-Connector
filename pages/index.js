import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import UserList from '../components/UserList'

import React, { useContext } from 'react';

import { AuthContext } from '../firebase/context';

import { collection, query, getDocs } from 'firebase/firestore';

import { doc, getDoc, where } from 'firebase/firestore';
import { useRouter } from 'next/router';


import { firestore } from '../firebase/clientApp';

export default function Home({users}) {
  const { currentUser, userData } = useContext(AuthContext);
  console.log('userData', userData);
  console.log("Logging users!!!!!!: ", users)

  return (
    <div>
      <main>
        <div>
          <div className={`${styles.titleCenter}`}>
            <img src="/Photography1.png" className={`${styles.photo}`} />
            {currentUser ? (
              <div className={`${styles.title} ${styles.titleCenter}`}>
                <h1 className="login">Content Connector</h1>
                <h4>Where Business meets Creativity</h4>
                
                
              </div>
            ) : (
              <div className={`${styles.title}`}>
                <h1 className={`${styles.titleCenter}`}>Are you...</h1>
                <div className={`${styles.buttonCenter}`}>
                  <Link href="/login">
                    <button className={`${styles.button}`}>
                      An existing user
                    </button>
                  </Link>
                  <Link href="/register">
                    <button className={`${styles.button}`}>A new user</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={`${styles.container}`}>
          <div className={`${styles.aboutBody}`}>
            <div className={`col-sm-8`}>
              <h2>
                <strong>Placeholder for Freelancers</strong>
              </h2>
              <h4>
                Querying users based on isBusiness:false
              </h4>
              <div classname={`${styles.aboutBody}`}>
              <UserList users={users}/>
              </div>
              <p>
            setting a Layout for what's gonna show here from BUSINESS PERSPECTIVE.
            Different users in their own containers, showing their portfolio
              </p>
            </div>
            {/* <img
              src="/mapsphoto.jpeg"
              className={`${styles.picture1}`}
            /> */}
          </div>
        </div>


        <div className={`${styles.container}`}>
          <div className={`${styles.aboutBody}`}>
            <div className={`col-sm-8`}>
              <h2>
                <strong>About Company Page</strong>
              </h2>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </p>
            </div>
            <img
              src="/ConnectingPeopleAbout.png"
              className={`${styles.picture1}`}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const querySnapshot = await getDocs(query(collection(firestore, 'users'), where("isBusiness", "==", false)));
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
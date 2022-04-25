import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import UserList from '../components/UserList';

import React, { useContext } from 'react';

import { AuthContext } from '../firebase/context';

import { collection, query, getDocs } from 'firebase/firestore';

import { doc, getDoc, where } from 'firebase/firestore';
import { useRouter } from 'next/router';

import { firestore } from '../firebase/clientApp';

export default function Home() {
  const { currentUser, userData } = useContext(AuthContext);

  return (
    <div>
      <main>
        <div>
          <div className={`${styles.titleCenter}`}>
            {/* <img src="/Photography1.png" className={`${styles.photo}`} /> */}
          </div>
        </div>
        <div className={`${styles.container}`}>
          <div className={`${styles.aboutBody}`}/>
        </div>
      </main>
    </div>
  );
}

  // {currentUser ? (
    //   <div className={`${styles.title} ${styles.titleCenter}`}>
    //     <h1 className="login">Content Connector</h1>
    //     <h4>Where Business meets Creativity</h4>
    //   </div>
  // ) : (
    //   <div className={`${styles.title}`}>
    //     <h1 className={`${styles.titleCenter}`}>Are you...</h1>
    //     <div className={`${styles.buttonCenter}`}>
    //       <Link href="/login">
    //         <button className={`${styles.button}`}>
    //           An existing user
    //         </button>
    //       </Link>
    //       <Link href="/register">
    //         <button className={`${styles.button}`}>A new user</button>
    //       </Link>
    //     </div>
    //   </div>
    // )}
          //   <div className={`col-sm-8`}>
          //     <h2>
          //       <strong>About Company Page</strong>
          //     </h2>
          //     <h4>
          //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          //       eiusmod
          //     </h4>
          //     <p>
          //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          //       enim ad minim veniam, quis nostrud exercitation ullamco laboris
          //       nisi ut aliquip ex
          //     </p>
          //   </div>
          //   <img
          //     src="/ConnectingPeopleAbout.png"
          //     className={`${styles.picture1}`}
          //     />
          // </div>
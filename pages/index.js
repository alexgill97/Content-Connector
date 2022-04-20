import styles from '../styles/Home.module.scss';
import Link from 'next/link';

import React, { useContext } from 'react';

import { AuthContext } from '../firebase/context';

export default function Home() {
  const { currentUser, userData } = useContext(AuthContext);
  console.log('userData', userData);

  return (
    <div>
      <main>
        <div>
          <div className={`${styles.titleCenter}`}>
            <img src="/Photography1.png" className={`${styles.photo}`} />
            {currentUser ? (
              <div className={`${styles.title} ${styles.titleCenter}`}>
                <h1 className="login">Test</h1>
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

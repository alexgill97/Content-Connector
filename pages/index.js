import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import UserList from '../components/UserList';
// import HomeImage from '../LHL_final homepage.png'

import React, { useContext } from 'react';
import { AuthContext } from '../firebase/context';

export default function Home() {
  const { currentUser, userData } = useContext(AuthContext);

  return (
    <main className={styles.home_main}>
      <body className={styles.home_body}>
        <section className={styles.home_left}>
          <div className={styles.title}>
            <h3>
              Connecting Businesses <br />
              with
              <br /> Local Creators.
            </h3>
          </div>
          <div className={styles.body}>
            <p>
              In a World where <em>Content</em> is <strong>King</strong>, Find
              your <strong>Knights.</strong>
            </p>
          </div>
          {currentUser ? (
            <div>
              {/* <h4>Where Business meets Creativity</h4> */}
            </div>
          ) : (
            <div className={`${styles.bothButtons}`}>
              <Link href="/login">
                <button className={`${styles.button} ${styles.button_login}`}>
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button
                  className={`${styles.button} ${styles.button_register}`}
                >
                  Register
                </button>
              </Link>
            </div>
          )}
        </section>
        <section className={styles.home_right}>
          <div className={styles.homepage_float_bottom}><img src={'homepage_float_2.png'} ></img></div>
        
          <div className={styles.image_container}>
            {/* <div className={styles.float1}>test</div> */}
              {/* <div className={styles.float2}>
                <div className={styles.float2_container}>
                  
                </div>
              </div> */}
            <img src={'LHL_final_homepage.png'} className={`${styles.photo}`} />
          </div>
        </section>
      </body>
      {/* <div className={styles.bodyPhoto}>
          <img src={'final_bottom.png'} />
        </div> */}
    </main>
  );
}

import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import UserList from '../components/UserList';
// import HomeImage from '../LHL_final homepage.png'

import React, { useContext } from 'react';
import { AuthContext } from '../firebase/context';

export default function Home() {
  const { currentUser, userData } = useContext(AuthContext);

  return (
    <div>
      <main className={styles.home_main}>
        <section className={styles.home_left}>
          <div>
            <p>
              In a World where <em>Content</em> is <strong>King</strong>, Find
              your <strong>Knights.</strong>
            </p>
          </div>
          <div className={styles.title}>
            <h1>Connect Freelancers with Local Businesses.</h1>
          </div>
          <div className={styles.body}>
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s
          </div>
          {currentUser ? (
            <div>
              <h4>Where Business meets Creativity</h4>
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
          <div className={styles.image_container}>
            <div className={styles.float1}>test</div>
            <div className={styles.float2}>
              <div className={styles.float2_container}>
                <h5>Business Satisfacton</h5>
                <p>over last 30 days</p>
              </div>
            </div>
            <img src={'LHL_final_homepage.png'} className={`${styles.photo}`} />
          </div>
        </section>
      </main>
      <div className={styles.bodyPhoto}>
        <img src={'LHL_final_bottom.png'} />
      </div>
    </div>
  );
}

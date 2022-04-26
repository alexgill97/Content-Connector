import React, { useContext, useState } from 'react';
import { AuthContext } from '../firebase/context';
import Link from 'next/link';
import Logout from './Logout';
import { updateCurrentUser } from 'firebase/auth';
import styles from '../styles/navbar.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { userData, currentUser } = useContext(AuthContext);
  const router = useRouter();
  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
    },
    {
      name: 'Profile',
      path: `/userProfile/${currentUser}`,
    },
    {
      name: 'Messages',
      path: '/messages',
    },
    {
      name: 'FindingBusinesses',
      path: '/findingBusinesses',
    },
    {
      name: 'FindingFreelancers',
      path: '/findingFreelancers',
    },
    {
      name: 'AddPost',
      path: '/addPost',
    },
  ];

  const path = router.pathname;

  return (
    <nav
      className={
        path === '/freelancerview'
          ? styles.nav_main_freelancerview
          : styles.nav_main
      }
    >
      <div className={styles.nav_left}>
        <Link href="/">
          <p>Content</p>
        </Link>
        <Link href="/">
          <p>Connector</p>
        </Link>
      </div>
      <div className={styles.nav_middle}>
        <Link href="/freelancerview">
          <p className={`${styles.a}`}>Find Projects</p>
        </Link>
        <Link href="/findingFreelancers">
          <p className={`${styles.a}`}>Find Creators</p>
        </Link>
      </div>
      <div className={styles.nav_right}>
        {currentUser && userData ? (
          <div className={styles.nav_right_user_true}>
            <Link href="/messages">
              <span className="material-symbols-outlined">forum</span>
            </Link>
            <Link href={`/userProfile/${currentUser}`}>
              <img src={userData.avatar}></img>
            </Link>
            <Logout />
          </div>
        ) : (
          <div className={`${styles.nav_right_signin}`}>
            <Link href="/login">
              <p className={styles.a}>Login</p>
            </Link>
            <Link href="/register">
              <p className={styles.a}>Register</p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

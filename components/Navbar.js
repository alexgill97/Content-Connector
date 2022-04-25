import React, { useContext } from 'react';
import { AuthContext } from '../firebase/context';
import Link from 'next/link';
import Logout from './Logout';
import { updateCurrentUser } from 'firebase/auth';
import styles from '../styles/navbar.module.scss';
import Image from 'next/image';

const Navbar = () => {
  const { userData, currentUser } = useContext(AuthContext);

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

  return (
    <nav className={styles.nav_main}>
      <div className={styles.nav_left}>
        <p>Content</p>
        <p>Connector</p>
      </div>
      <div className={styles.nav_middle}>
        <p>Find Projects</p>
        <p>Find Creators</p>
      </div>
      <div className={styles.nav_right}>
        {userData.avatar ? (
          <div className={styles.nav_right_user_true}>
            <span>M</span>
            <img src={userData.avatar}></img>
            <Logout />
          </div>
        ) : (
          <div>
            <p>Login</p>
            <p>Register</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

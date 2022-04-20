import React, { useContext } from 'react';

import { AuthContext } from '../firebase/context';
import Link from 'next/link';
import Logout from './Logout';
import { updateCurrentUser } from 'firebase/auth';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
    },
    {
      name: 'Profile',
      path: '/profile',
    },
    {
      name: 'Messages',
      path: '/messages',
    },
  ];
  // {
  //   name: 'Login',
  //   path: '/login',
  // },
  // {
  //   name: 'Register',
  //   path: '/register',
  // },


  const { userData, currentUser } = useContext(AuthContext);
  console.log('userData', userData);
  return (
    <div className="fullNav">
      <div className="titleNav">
        <Link href="/">
          <h3 className="buttonNav">Content Connector</h3>
        </Link>
      </div>
      {navLinks.map((link, index) => {
        return (
          <h3 key={index} className="buttonNav">
            <Link href={link.path}>
              <div>{link.name}</div>
            </Link>
          </h3>
        );
      })}
      {currentUser ? (
        <h3 className="login">
          Logged in as {userData.userEmail}
          <Logout />
        </h3>
      ) : (
        <div className="loginReg">
          <div>
            <Link href="/login">
              <h3 className="buttonNav">Login</h3>
            </Link>
          </div>
          <div>
            <Link href="/register">
              <h3 className="buttonNav">Register</h3>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

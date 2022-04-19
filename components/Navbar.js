import React, { useContext } from 'react';

import { AuthContext } from '../firebase/context';
import Link from 'next/link';

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
    {
      name: 'Login',
      path: '/login',
    },
    {
      name: 'Register',
      path: '/register',
    },
  ];

  const { userData } = useContext(AuthContext);
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
          <h3 className="buttonNav">
            <Link href={link.path}>
              <div key={index}>{link.name}</div>
            </Link>
          </h3>
        );
      })}
    </div>
  );
};

export default Navbar;

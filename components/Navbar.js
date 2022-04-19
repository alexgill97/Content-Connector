import React, { useContext } from 'react';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from '../firebase/context';
import Link from 'next/link';

import Logout from './Logout';

const Navbar = () => {
  const { userData } = useContext(AuthContext);
  console.log('userData', userData);
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/messages">Messages</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </div>
  );
};

export default Navbar;

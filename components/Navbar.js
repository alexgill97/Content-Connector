import React, { useContext } from 'react';

import { AuthContext } from '../firebase/context';
import Link from 'next/link';

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

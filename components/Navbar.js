import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  MailIcon,
} from '@heroicons/react/solid';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Link href="/">Content Connector</Link>
      </div>
      <div className="grid grid-cols-2 items-center mr-5 cursor-pointer text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="flex justify-end items-center space-x-2 p-2 rounded-full">
        <Link href='/messages'>
          <MailIcon className="h-6 cursor-pointer"/>
        </Link>
        <UserCircleIcon className="h-6 cursor-pointer"/>
        <MenuIcon className="h-6 cursor-pointer" />
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;

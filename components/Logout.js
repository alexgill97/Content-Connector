import React from 'react';
import { auth } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  const onLogoutSubmit = async () => {
    console.log('before auth');
    await signOut(auth).then(() => {
      router.push('/login');
    });
  };
  return <button onClick={onLogoutSubmit}>logout</button>;
};

export default Logout;

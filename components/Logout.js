import React from 'react';
import { auth, firestore } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { updateDoc, doc } from 'firebase/firestore';
import styles from '../styles/navbar.module.scss';

const Logout = ({ currentUser }) => {
  const router = useRouter();

  const onLogoutSubmit = async () => {
    await updateDoc(doc(firestore, 'users', auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth).then(()=> (
      router.push('/')
    )).then(() => {
      window.location.reload()
    })
    
  };
  return (
    <button onClick={onLogoutSubmit} className={`${styles.logout} ${styles.a}`}>
      Logout
    </button>
  );
};

export default Logout;

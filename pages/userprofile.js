import React, { useContext, useState } from 'react';
import { AuthContext } from '../firebase/context';
import { firestore, storage } from '../firebase/clientApp';
import Project from '../components/Project';
import { addDoc, updateDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';
import Modal from '../components/Modal';

const userProfile = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div>
      {userData.userEmail}
      <Modal />
    </div>
  );
};

export default userProfile;

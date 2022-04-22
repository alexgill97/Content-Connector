import React, { useContext } from 'react';
import { auth, firestore } from '../firebase/clientApp';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { updateDoc, doc, deleteDoc, where, collection } from 'firebase/firestore';
import { AuthContext } from '../firebase/context';

const Delete = ({ postTitle }) => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  const onDeleteSubmit = async () => {
    await deleteDoc(collection(firestore, "posts", where("postTitle", "==" , postTitle)));
  };

  return (
    <button onClick={onDeleteSubmit} className="button">
      Delete
    </button>
  );
};

export default Delete;

import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../firebase/context';
import { firestore, storage } from '../firebase/clientApp';
import styles from '../styles/Modal.module.scss';

import { doc, setDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';
import { useRouter } from 'next/router';
// import { collection, query, getDocs } from 'firebase/firestore';

function Modal() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { userData, currentUser } = useContext(AuthContext);

  const [data, setData] = useState({});
  const router = useRouter();

  const addImageToPortfolio = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const uploadPortfolioItem = async () => {
    setData({ ...data, uid: currentUser });
    const imageRef = ref(storage, `portfolio/${currentUser}/${title}`);
    await uploadString(imageRef, selectedFile, 'data_url').then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await setDoc(doc(firestore, 'users', currentUser, 'portfolio', title), {
          title: title,
          image: downloadURL,
          description: description,
          uid: currentUser,
        });
      }
    ).then(()=> {
      return(window.location.reload())
    });
    setSelectedFile(null);
    
  };

  // ======================

  return (
    <div className={styles.main}>
      <h3>Add a Portfolio to Your Profile</h3>
      Photo: {data.avatar}
      <div className={styles.divOne}>
        {selectedFile ? (
          <img
            src={selectedFile}
            onDoubleClick={() => setSelectedFile(null)}
            alt=""
          />
        ) : <div> No Photo...yet!</div>}
      </div>
      <div>
        <input type="file" onChange={addImageToPortfolio} />
      </div>
      Title of Portfolio Project:
      <div>
        <input
          type="title"
          name="title"
          placeholder="Portfolio Project Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      Description for Portfolio Project:
      <div>
        <input
          type="description"
          name="description"
          placeholder="Portfolio Project Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <button onClick={uploadPortfolioItem}>Upload</button>
      </div>
    </div>
  );
}

export default Modal;

// ======================

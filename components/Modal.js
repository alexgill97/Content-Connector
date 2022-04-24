import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../firebase/context';
import { firestore, storage } from '../firebase/clientApp';

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
          image: downloadURL,
          description: description,
          uid: currentUser,
        });
      }
    );
    setSelectedFile(null);
  };

  // ======================

  return (
    <div>
      <h3>Upload Portfolio Item</h3>
      Post photo URL: {data.avatar}
      <div>
        {selectedFile ? (
          <img
            src={selectedFile}
            onDoubleClick={() => setSelectedFile(null)}
            alt=""
          />
        ) : null}
      </div>
      <div>
        <input type="file" onChange={addImageToPortfolio} />
      </div>
      Description for title:
      <div>
        <input
          type="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      Description for post:
      <div>
        <input
          type="description"
          name="description"
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

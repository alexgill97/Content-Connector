import React, { useContext, useState } from 'react';
import { AuthContext } from '../firebase/context';
import { firestore, storage } from '../firebase/clientApp';

import { addDoc, updateDoc, collection, doc, setDoc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';
import { useRouter } from 'next/router';


function Modal() {
  const [selectedFile, setSelectedFile] = useState(null);

  const { userData, currentUser } = useContext(AuthContext);

  const [data, setData] = useState({...userData});
  const router = useRouter()



  const addImageToPortfolio = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };
  // ======================

  const registerUserDb = async (userId, data) => {
    await setDoc(doc(firestore, 'users', userId), {
      ...data,
    });
  };

  const uploadPortfolioItem = async () => {
    // const docRef = await addDoc(collection(firestore, 'portfolio'), {
    //   username: userData.userId,
    // });
    setData({ ...data, uid: currentUser });
    registerUserDb(currentUser, data);
    
    const imageRef = ref(storage, `portfolio/${currentUser}/image`);

    await uploadString(imageRef, selectedFile, 'data_url').then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(firestore, 'portfolio', currentUser), {
          image: downloadURL,
        });
      }
    );
    setSelectedFile(null);
  };

  // ======================

  return (
    <div>
      <h3>Upload Portfolio Item</h3>
      Description for post: {data.description}
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
      <div>
        <input
          type="description"
          name="description"
          onChange={(e) => setData({ ...data, portfolioDescription: e.target.value })}
        />
      </div>
      <div>
        <button onClick={uploadPortfolioItem}>Upload</button>
      </div>
    </div>
  );
}

export default Modal;

import React, { useContext, useState } from 'react';
import { AuthContext } from '../firebase/context';
import { firestore, storage } from '../firebase/clientApp';
import Project from '../components/Project';
import { addDoc, updateDoc, collection, doc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';

function Modal() {
  const [selectedFile, setSelectedFile] = useState(null);

  const { userData } = useContext(AuthContext);

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
  const uploadPortfolioItem = async () => {
    const docRef = await addDoc(collection(firestore, 'portfolio'), {
      username: userData.userId,
    });

    const imageRef = ref(storage, `portfolio/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, 'data_url').then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(firestore, 'portfolio', docRef.id), {
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
        <input type="text" />
      </div>
      <div>
        <button onClick={uploadPortfolioItem}>Upload</button>
      </div>
    </div>
  );
}

export default Modal;

import React, {useState, useContext} from 'react'
import { AuthContext } from '../firebase/context';
import { firestore, storage } from '../firebase/clientApp';
import { addDoc, updateDoc, collection, doc } from 'firebase/firestore';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';

const UploadAvatar = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const { userData } = useContext(AuthContext);

  const selectUserAvatar = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };
  // ======================
  const uploadUserAvatar = async () => {
    const docRef = await addDoc(collection(firestore, 'avatar'), {
      username: userData.userId,
    });

    const imageRef = ref(storage, `avatar/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, 'data_url').then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(firestore, 'avatar', docRef.id), {
          image: downloadURL,
        });
      }
    );
    setSelectedFile(null);
  };
  return (
    <div>
      <h3>Upload An Avatar</h3>
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
        <input type="file" onChange={selectUserAvatar} />
      </div>
      <div>
        <button onClick={uploadUserAvatar}>Upload</button>
      </div>
    </div>
  )
}

export default UploadAvatar
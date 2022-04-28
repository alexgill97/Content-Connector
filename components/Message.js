import React, { useEffect, useState, useContext } from 'react';
import { firestore, auth, storage } from '../firebase/clientApp';
import {
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import styles from '../styles/Message.module.scss';

import MessageForm from './MessageForm';
import MessageItem from './MessageItem';
import User from './User';
import Link from 'next/link';

import { AuthContext } from '../firebase/context';

const Message = ({ profile }) => {
  // const [users, setUsers] = useState([]);
  const [chat, setChat] = useState('');
  const [text, setText] = useState('');
  const [img, setImg] = useState('');
  const [msgs, setMsgs] = useState([]);
  const [user3, setUser3] = useState();
  const [hidden, setHidden] = useState(false);



  const { currentUser } = useContext(AuthContext);
  const user1 = currentUser;

  useEffect(() => {
    selectUser(profile);
  }, [profile]);

  const selectUser = async (user) => {
    setChat(user);
    const user2 = user.uid;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    const msgsRef = collection(firestore, 'messages', id, 'chat');
    const q = query(msgsRef, orderBy('createdAt', 'asc'));

    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMsgs(msgs);
    });

    // get last message between logged in user and selected user
    const docSnap = await getDoc(doc(firestore, 'lastMsg', id));
    // if last message exists and message is from selected user
    if (docSnap.data() && docSnap.data().from !== user1) {
      // update last message doc, sets unread to false
      await updateDoc(doc(firestore, 'lastMsg', id), { unread: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(profile, "tesssts")
    const user2 = profile.uid;
    // messages => id => chat => add doc

    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    let url;
    if (img) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${img.name}`
      );
      const snap = await uploadBytes(imgRef, img);
      const downloadUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = downloadUrl;
    }

    await addDoc(collection(firestore, 'messages', id, 'chat'), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || '',
    });

    await setDoc(doc(firestore, 'lastMsg', id), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || '',
      unread: true,
    });
    setText('');
  };

  return (
    <>
      {chat && !hidden ? (
        <main className={styles.main_message}>
          <section className={styles.chat_header}>
            <div className={styles.userAvatar}>
              <Link href={`/userProfile/${chat.uid}`}>
                <img src={profile.avatar} alt="" />
              </Link>
              <p>{chat.username}</p>
            </div>
            <div>
              {!hidden ? (
                <button
                  onClick={() => setHidden(!hidden)}
                  className={styles.buttonTwo}
                >
                  <img
                    src={'../close_FILL0_wght400_GRAD0_opsz40.png'}
                    className={styles.cancelButton}
                  />{' '}
                </button>
              ) : (
                <div>
                  <button
                    onClick={() => setHidden(!hidden)}
                    className={styles.buttonTwo}
                  >
                    <div>Open</div>{' '}
                  </button>
                </div>
              )}
            </div>
          </section>
          <div className={styles.messages_container}>
            {msgs.length
              ? msgs.map((msg, i) => (
                  <MessageItem key={i} msg={msg} user1={user1} />
                ))
              : null}
          </div>
          <div className={styles.messages_form}>
            <MessageForm
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
              setImg={setImg}
            />
          </div>
        </main>
      ) : null}
    </>
  );
};

export default Message;

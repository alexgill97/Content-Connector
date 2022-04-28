import styles from '../../styles/Profile.module.scss';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../firebase/context';
import Image from 'next/image';
import PostList from '../PostList';
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  doc,
} from 'firebase/firestore';
import { firestore } from '../../firebase/clientApp';

export default function businessProfile({ profile }) {
  const { userData, currentUser } = useContext(AuthContext);

  const [data, setData] = useState({
    postTitle: '',
    description: '',
  });
  const [posts, setPosts] = useState([]);

  const createPost = async (uid, data) => {
    await addDoc(collection(firestore, 'posts'), {
      ...data,
    });
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    const formData = {
      ...data,
      uid: currentUser,
      username: userData.username,
      lat: userData.lat,
      lng: userData.lng,
      address: userData.address,
      avatar: userData.avatar,
    };
    createPost(currentUser, formData).then(() => window.location.reload());
  };

  const asyncFunction = async () => {
    const querySnapshot = await getDocs(
      query(collection(firestore, 'posts'), where('uid', '==', currentUser))
    );
    let allPosts = [];
    querySnapshot.forEach((doc) => {
      allPosts.push(doc.data());
    });
    console.log(allPosts);
    setPosts(allPosts);
  };

  useEffect(() => {
    asyncFunction();
  }, []);

  console.log(posts);
  return (
    <div className={styles.mainBusiness}>
      <div className={styles.divOne}>
        <img src={`${profile.avatar}`} className={''}></img>
        <h1>{profile.username}</h1>
        <h3>Address</h3>
        <p>{profile.address}</p>
        <h3>Description</h3>
        <p>{profile.description}</p>
      </div>
      <div className={''}></div>
      <div>
        <section className={styles.businessPost}>
          <h3>Add a Business Post</h3>
          <form className={styles.businessForm}>
            <div className={''}>
              <label>What is your project?</label>
              <input
                type="postTitle"
                name="postTitle"
                placeholder="Post Name"
                onChange={(e) =>
                  setData({
                    ...data,
                    postTitle: e.target.value,
                  })
                }
              />
            </div>
            <div className={''}>
              <label>A short description of the project requirements... </label>
              <input
                type="description"
                name="description"
                placeholder="Post Description"
                onChange={(e) =>
                  setData({
                    ...data,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <button onClick={onRegisterSubmit} className={`${styles.button}`}>
              {' '}
              Add Post!{' '}
            </button>
          </form>
        </section>
        <PostList posts={posts} />
      </div>
    </div>
  );
}

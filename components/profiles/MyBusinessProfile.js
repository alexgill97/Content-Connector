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

export default function businessProfile({
  profile
}) {
  const { userData, currentUser } = useContext(AuthContext);

  const [data, setData] = useState({
    postTitle: '',
    description: '',
  });
  const [posts, setPosts] = useState([])

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
      query(
        collection(firestore, 'posts'),
        where('uid', '==', currentUser)
      )
    );
    let allPosts = [];
    querySnapshot.forEach((doc) => {
      allPosts.push(doc.data());
    });
    console.log(allPosts);
    setPosts(allPosts)
  };

  useEffect(() => {
    asyncFunction();
  }, []);

  console.log(posts)
  return (
    <div>
      <div className={`${styles.container} ${styles.bg} text-center`}>
        <img src={`${profile.avatar}`} className={`${styles.makeImageCircular}`}></img>
        <h3>{profile.username}</h3>
        <h3>
          Business Address : {profile.address}
        </h3>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>Description</h3>
        <p>
          {profile.description}
        </p>
      </div>
      <div>
        {/* <div>{portfolioMap}</div> */}
      </div>
      <div>
        <section>
          <h1>{data.uid}</h1>
          <div>{data.postTitle}</div>
          <div>{data.description}</div>
          <h3>Add Request for Freelancer</h3>
          <form>
            <div className="input_container">
              <label>What is your project?</label>
              <input
                type="postTitle"
                name="postTitle"
                onChange={(e) =>
                  setData({
                    ...data,
                    postTitle: e.target.value,
                  })
                }
              />
            </div>
            <div className="input_container">
              <label>A short description of project requirements </label>
              <input
                type="description"
                name="description"
                onChange={(e) =>
                  setData({
                    ...data,
                    description: e.target.value,
                  })
                }
              />
            </div>

            <button onClick={onRegisterSubmit}> Add Post! </button>
          </form>
        </section>
        <PostList posts={posts} />
      </div>
    </div>
  );
}
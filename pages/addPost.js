import React, { useState, useContext } from 'react';
import { AuthContext } from '../firebase/context';
import {
  collection,
  query,
  getDocs,
  setDoc,
  doc,
  addDoc,
  onSnapshot,
  where,
} from 'firebase/firestore';
import { firestore, db } from '../firebase/clientApp';
import { useRouter } from 'next/router';

import PostList from '../components/PostList';

const addPost = ({ posts }) => {
  const { currentUser, userData } = useContext(AuthContext);
  console.log(userData, 'Add post page');
  const router = useRouter();

  const [data, setData] = useState({
    postTitle: '',
    description: '',
    address: '',
    uid: currentUser,
  });

  const registerUserDb = async (userId, data) => {
    await addDoc(collection(firestore, 'posts'), {
      ...data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onRegisterSubmit = () => {
    console.log('data is', data);
    setData({ ...data });
    registerUserDb(currentUser, data);
  };

  console.log(posts, 'testststtststs');

  if (userData.uid === currentUser && userData.isBusiness) {
    return (
      <div>
        <section>
          <h1>{data.uid}</h1>
          <div>{data.postTitle}</div>
          <div>{data.description}</div>
          <div>{data.address}</div>
          <h3>Add Request for Freelancer</h3>
          <form onSubmit={handleSubmit}>
            <div className="input_container">
              <label>Post Title: </label>
              <input
                type="postTitle"
                name="postTitle"
                onChange={(e) =>
                  setData({ ...data, postTitle: e.target.value })
                }
              />
            </div>
            <div className="input_container">
              <label>Description: </label>
              <input
                type="description"
                name="description"
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
            </div>
            <div className="input_container">
              <label>Address: </label>
              <input
                type="address"
                name="address"
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
            </div>
            <button onClick={onRegisterSubmit}>Add Post!</button>
          </form>
        </section>
        <PostList posts={posts} />
      </div>
    );
  } else {
    return null;
  }
};

export default addPost;

export async function getServerSideProps() {
  const querySnapshot = await getDocs(query(collection(firestore, 'posts')));
  let allPosts = [];
  querySnapshot.forEach((doc) => {
    allPosts.push(doc.data());

    // console.log(' => ', doc.data());
  });
  console.log('allPosts', allPosts);
  return {
    props: {
      posts: allPosts,
    },
  };
}

// // const msgsRef = collection(firestore, 'messages', id, 'chat');
//     const q = query(msgsRef, orderBy('createdAt', 'asc'));

//     onSnapshot(q, (querySnapshot) => {

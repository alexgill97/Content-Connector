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
  const router = useRouter();
  // const userDataArr = [userData]

  // console.log(userDataArr[0])

  const [data, setData] = useState({
    postTitle: '',
    description: '',
    postAddress: ``,
    uid: currentUser,
    postAvatar: ``,
  });

  const registerUserDb = async (userId, data) => {
    await addDoc(collection(firestore, 'posts'), {
      ...data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(userData.address, 'Add post page');

  console.log(posts, 'testststtststs');

  const onRegisterSubmit = () => {
    console.log('data is', { userData });
    setData({...data, postAddress: `${userData.address}`, postAvatar: `${userData.avatar}`,}, );
    registerUserDb(currentUser, data);
  };

  if (userData.uid === currentUser && userData.isBusiness) {
    return (
      <div>
        <section>
          <h1>{data.uid}</h1>
          <div>{data.postTitle}</div>
          <div>{data.description}</div>
          <h3>Add Request for Freelancer</h3>
          <form onSubmit={handleSubmit}>
            <div className="input_container">
              <label>Post Title: </label>
              <input
                type="postTitle"
                name="postTitle"
                onChange={(e) =>
                  setData({
                    ...data,
                    postTitle: e.target.value,
                    // postAddress: `${userData.address}`,
                    // postAvatar: `${userData.avatar}`,
                  })
                }
              />
            </div>
            <div className="input_container">
              <label>Description: </label>
              <input
                type="description"
                name="description"
                onChange={(e) =>
                  setData({
                    ...data,
                    description: e.target.value,
                    // postAddress: `${userData.address}`,
                    // postAvatar: `${userData.avatar}`,
                  })
                }
              />
            </div>
            <div className="input_container">
              <label>Description: </label>
              <input
                type="description"
                name="description"
                onChange={(e) =>
                  setData({
                    ...data,
                    description: e.target.value,
                    // postAddress: `${userData.address}`,
                    // postAvatar: `${userData.avatar}`,
                  })
                }
              />
            </div>
            {/* <div className="input_container">
              <label>Address: </label>
              <input
                type="address"
                name="address"
                
                }
              />
            </div> */}
            <button onClick={onRegisterSubmit}> Add Post! </button>
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

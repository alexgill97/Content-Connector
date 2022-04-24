import React, { useState, useContext } from 'react';
import { AuthContext } from '../firebase/context';
import { collection, query, getDocs, addDoc } from 'firebase/firestore';
import { firestore, db } from '../firebase/clientApp';
import { useRouter } from 'next/router';

import PostList from '../components/PostList';

const addPost = ({ posts }) => {
  const { currentUser, userData } = useContext(AuthContext);
  const router = useRouter();

  const [data, setData] = useState({
    // userid: currentUser,
    // username: userData.username,
    // lat: userData.lat,
    // lng: userData.lng,
    // address: userData.address,
    // avatar: userData.avatar,
    postTitle: '',
    description: '',
  });

  const createPost = async (userId, data) => {
    await addDoc(collection(firestore, 'posts'), {
      ...data,
    });
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    // console.log('data is', { userData });
    const formData = {
      ...data,
      userid: currentUser,
      username: userData.username,
      lat: userData.lat,
      lng: userData.lng,
      address: userData.address,
      avatar: userData.avatar,
    }
    console.log(formData, "AAESEDFASDFSA")
    createPost(currentUser, formData).then(()=>(
      window.location.reload()
    ))
    // router.push("/addPost")
  };
  
  // console.log(currentUser, userData, 'asfdafaf');

  if (userData.uid === currentUser && userData.isBusiness) {
    // console.log(data);
    return (
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
                    // postAddress: `${userData.address}`,
                    // postAvatar: `${userData.avatar}`,
                  })
                }
              />
            </div>

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

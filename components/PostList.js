import React from 'react';
import PostListItem from './PostListItem';
import Delete from './Delete';
import styles from '../styles/PostList.module.scss';

const PostList = ({ posts }) => {
  const postList = posts.map((x) => (
    <PostListItem
      key={x.postTitle}
      postTitle={x.postTitle}
      uid={x.uid}
      description={x.description}
      {...x}
    ></PostListItem>
  ));

  return (
    <div className={styles.card_container}>
      <h1>My Posts:</h1>
      <ul>{postList}</ul>
    </div>
  );
};
export default PostList;

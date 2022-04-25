import React from 'react';
import PostListItem from './PostListItem';
import Delete from './Delete';

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
    <div>
      <h1>All Posts :</h1>
      <ul>{postList}</ul>
    </div>
  );
};
export default PostList;

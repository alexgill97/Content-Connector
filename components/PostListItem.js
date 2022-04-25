// import Link from 'next/link';
// import styles from '../styles/UserList.module.scss';
// import React from 'react';
// import Delete from './Delete';
// import { deleteDoc } from 'firebase/firestore';

// const PostListItem = ({ postTitle, description, userid, address }) => {

//   console.log(userid)
//   const deleteForm = document.querySelector('.delete')
//   deleteForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const docRef = doc(db, 'posts', deleteForm.userid)
//     deleteDoc(docRef)
//     .then(()=>)
//   })

//   return (
//     <div className={`${styles.container}`}>
//       <div className={`${styles.userListBorder}`}>
//         <div className={`${styles.username}`}>
//           {postTitle}
//         </div>
//       </div>
//       <div className={`${styles.description}`}> {description} </div>
//       <div>{address}</div>
//       <Delete postTitle={postTitle}/>
//     </div>
//   );
// };

// export default PostListItem;

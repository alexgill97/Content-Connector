import styles from '../../styles/Profile.module.scss';
import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/context';
import Image from 'next/image';


export default function businessProfile({
  avatar,
  username,
  description,
  address,
  portfoliodescription,
  portfolioimage,
}) {
  const { userData } = useContext(AuthContext);

  console.log('photo', portfolio);

  const portfolioMap = portfolio.map((x) => (
    <div>
      <div>
        <Image src={x.image} height={100} width={100}></Image>
      </div>
      <div>
        <div>{x.description}</div>
      </div>
    </div>
  ));


  return (
    <div>
      <div className={`${styles.container} ${styles.bg} text-center`}>
        <img src={`${avatar}`} className={`${styles.makeImageCircular}`}></img>
        <h3>{username}</h3>
        <h3>
          Business ddddddAddress : {address} <button>Edit Address</button>
        </h3>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>Description</h3>
        <p>
          {description} <button>Edit Description</button>
        </p>
      </div>
      <div>
        <div>{portfolioMap}</div>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>My Posts</h3>
        <p>Lorem ipsum..</p>
      </div>
    </div>
  );
}

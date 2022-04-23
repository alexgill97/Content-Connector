import styles from '../../styles/Profile.module.scss';
import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/context';
import Image from 'next/image';

export default function freelanceProfile({
  avatar,
  username,
  description,
  portfolio
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
          Photographer/Videographer
          <button>Edit job role</button>
        </h3>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>
          Biography <button>Edit Biography</button>{' '}
        </h3>
        <p>{description}</p>
      </div>
      <div>
        <div>
          <div>{portfolioMap}</div>
        </div>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>My Portfolio</h3>
        <p>Lorem ipsum..</p>
      </div>
    </div>
  );
}

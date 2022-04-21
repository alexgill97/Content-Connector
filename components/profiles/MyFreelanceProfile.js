import styles from '../../styles/Profile.module.scss';
import React, { useContext } from 'react';
import { AuthContext } from '../../firebase/context';

export default function freelanceProfile({
  avatar,
  username,
  description,
  portfoliodescription,
  portfolioimage,
}) {
  const { userData } = useContext(AuthContext);

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
          <img src={`${portfolioimage}`} />
          <h1>{portfoliodescription}</h1>
        </div>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>My Portfolio</h3>
        <p>Lorem ipsum..</p>
      </div>
    </div>
  );
}

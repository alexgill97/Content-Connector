import styles from '../../styles/Profile.module.scss';
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../firebase/context';
import Image from 'next/image';
import Carousel from '../Carousel';
import Modal from '../Modal';
import Message from '../Message';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import { firestore } from '../../firebase/clientApp';
import {
  doc,
  deleteDoc,
  getDocs,
  where,
  query,
  collectionGroup,
} from 'firebase/firestore';

export default function freelanceProfile({ portfolio }) {

  const { userData } = useContext(AuthContext);
  const [hidden, setHidden] = useState(true);





  















  return (
    <main className={styles.main}>
      <div className={styles.profile_container}>
        <div className={styles.top_profile}>
          <p className={styles.media_type}>Photographer</p>
          <p className={styles.username}>{userData.username}</p>
          <p className={styles.city}>{`Based in ${userData.city}`}</p>
        </div>
        <body className={styles.body}>
          <div className={styles.body_profile}>
            <section className={styles.body_left}>
              <div>
                <h2>Biograpy</h2>
                <p>{userData.description}</p>
              </div>
              <div>
                <h2>Specializations</h2>
                <p>Front End Development</p>
                <p>UI/UX Design</p>
                <p>Copywriting</p>
              </div>
            </section>
            <div className={styles.avatar_outline}>
              <div className={styles.avatar_div}>
                <img className={styles.avatar} src={userData.avatar}></img>
              </div>
            </div>
            <section className={styles.body_right}>
              <div>
                <h2>Years of Experience</h2>
                <p>3</p>
              </div>
              <div>
                <h2>Satisfaction Score</h2>
                <p>96%</p>
              </div>
              <div>
                <h2>Projects Completed</h2>
                <p>32</p>
              </div>
            </section>
          </div>
        </body>
      </div>
      <Modal />
      <div className={styles.section}>
        <h3>Your Portfolios</h3>
      </div>
      <Carousel portfolio={portfolio} />
    </main>
  );
}

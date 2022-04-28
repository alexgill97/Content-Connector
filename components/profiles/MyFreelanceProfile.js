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

export default function freelanceProfile({ portfolio, profile }) {
  // console.log(profile);
  const [hidden, setHidden] = useState(true);
  const [current, setCurrent] = useState(0);
  const { currentUser, userData } = useContext(AuthContext);
  // console.log(profile, 'test');

  if (portfolio.length >= 1) {
    const length = portfolio.length;

    const asyncFunction = async (e) => {
      await deleteDoc(
        doc(firestore, 'users', e.uid, 'portfolio', e.title)
      ).then(() => window.location.reload());
    };

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(portfolio) || portfolio.length <= 0) {
      return null;
    }
    return (
      <main className={styles.main}>
        <div className={styles.profile_container}>
          <div className={styles.top_profile}>
            <p className={styles.media_type}>Photographer</p>
            <p className={styles.username}>{profile.username}</p>
            <p className={styles.city}>{`Based in ${profile.city}`}</p>
          </div>
          <body className={styles.body}>
            <div className={styles.body_profile}>
              <section className={styles.body_left}>
                <div>
                  <h2>Biograpy</h2>
                  <p>{profile.description}</p>
                </div>
                <div></div>
                <div>
                  <h2>Specializations</h2>
                  <p>Front End Development</p>
                  <p>UI/UX Design</p>
                  <p>Copywriting</p>
                </div>
              </section>
              <div className={styles.avatar_outline}>
                <div className={styles.avatar_div}>
                  <img className={styles.avatar} src={profile.avatar}></img>
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
        <div className={styles.messages}>
          {/* <h2>Message</h2> */}
          {/* {!hidden ? (
            <div>
              <button
                onClick={() => setHidden(!hidden)}
                className={styles.buttonTwo}
              >
                {' '}
                <p className={styles.buttonOne}> Close </p>{' '}
              </button>
              <Message profile={profile} className={styles.messageContainer} />
            </div>
          ) : (
            <button onClick={() => setHidden(!hidden)}> Send Message </button>
          )} */}
        </div>
        <Modal />
        <div className={styles.section}>
          <h3>Your Portfolios</h3>
        </div>
        {/* <Carousel portfolio={portfolio} /> */}
        {portfolio.length >= 1 && (
          <section className={styles.slider}>
            <FaArrowAltCircleLeft
              className={styles.left_arrowOne}
              onClick={prevSlide}
            />
            <FaArrowAltCircleRight
              className={styles.right_arrowOne}
              onClick={nextSlide}
            />
            {portfolio.map((slide, index) => {
              return (
                <div
                  className={
                    index === current
                      ? `${styles.slide_active}`
                      : `${styles.slide}`
                  }
                  key={index}
                >
                  {index === current && (
                    <div className={styles.image}>
                      <img src={slide.image} alt="image" />
                      <div>{slide.description}</div>
                      {currentUser === slide.uid ? (
                        <button
                          onClick={() => asyncFunction(slide)}
                          className={styles.button}
                        >
                          Delete
                        </button>
                      ) : null}
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.profile_container}>
        <div className={styles.top_profile}>
          <p className={styles.media_type}>Photographer</p>
          <p className={styles.username}>{profile.username}</p>
          <p className={styles.city}>{`Based in ${profile.city}`}</p>
        </div>
        <body className={styles.body}>
          <div className={styles.body_profile}>
            <section className={styles.body_left}>
              <div>
                <h2>Biograpy</h2>
                <p>{profile.description}</p>
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
                <img className={styles.avatar} src={profile.avatar}></img>
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
      {/* <Carousel portfolio={portfolio} /> */}
      {portfolio.length >= 1 && (
        <section className={styles.slider}>
          <FaArrowAltCircleLeft
            className={styles.left_arrowOne}
            onClick={prevSlide}
          />
          <FaArrowAltCircleRight
            className={styles.right_arrowOne}
            onClick={nextSlide}
          />
          {portfolio?.map((slide, index) => {
            return (
              <div
                className={
                  index === current
                    ? `${styles.slide_active}`
                    : `${styles.slide}`
                }
                key={index}
              >
                {index === current && (
                  <div className={styles.image}>
                    <img src={slide.image} alt="image" />
                    <div className={styles.description}>
                      {slide.description}
                    </div>
                    {currentUser === slide.uid ? (
                      <button
                        onClick={() => asyncFunction(slide)}
                        className={styles.button}
                      >
                        Delete
                      </button>
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      )}
    </main>
  );
}

// } else {
//   return (
//     <main className={styles.main}>
//       <div className={styles.profile_container}>
//         <div className={styles.top_profile}>
//           <p className={styles.media_type}>Photographer</p>
//           <p className={styles.username}>{userData.username}</p>
//           <p className={styles.city}>{`Based in ${userData.city}`}</p>
//         </div>
//         <body className={styles.body}>
//           <div className={styles.body_profile}>
//             <section className={styles.body_left}>
//               <div>
//                 <h2>Biograpy</h2>
//                 <p>{userData.description}</p>
//               </div>
//               <div>
//                 <h2>Specializations</h2>
//                 <p>Front End Development</p>
//                 <p>UI/UX Design</p>
//                 <p>Copywriting</p>
//               </div>
//             </section>
//             <div className={styles.avatar_outline}>
//               <div className={styles.avatar_div}>
//                 <img className={styles.avatar} src={userData.avatar}></img>
//               </div>
//             </div>
//             <section className={styles.body_right}>
//               <div>
//                 <h2>Years of Experience</h2>
//                 <p>3</p>
//               </div>
//               <div>
//                 <h2>Satisfaction Score</h2>
//                 <p>96%</p>
//               </div>
//               <div>
//                 <h2>Projects Completed</h2>
//                 <p>32</p>
//               </div>
//             </section>
//           </div>
//         </body>
//       </div>
//       <Modal />
//       <div className={styles.section}>
//         <h3>Your Portfolios</h3>
//       </div>
//     </main>
//   )
// };

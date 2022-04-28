import styles from '../../styles/Profile.module.scss';
import React, { useState, useContext, useEffect } from 'react';
import {
  doc,
  deleteDoc,
  getDocs,
  where,
  query,
  collectionGroup,
} from 'firebase/firestore';
import { useRouter } from 'next/router';
import { firestore } from '../../firebase/clientApp';
import Image from 'next/image';
import PortfolioCarousel from './PortfolioCarousel';
import Carousel from '../Carousel';
import Message from '../Message';
import { AuthContext } from '../../firebase/context';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function otherFreelanceProfile({ profile, portfolio }) {
  const [hidden, setHidden] = useState(true);
  const [current, setCurrent] = useState(0);
  if (portfolio.length >= 1) {
    const length = portfolio.length;
    const { currentUser } = useContext(AuthContext);

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
                  <h2>About Me</h2>
                  <p>{profile.description}</p>
                </div>
                <div>
                  <h2>Availability</h2>
                  <p>More than 30 hrs/week</p>
                </div>
                <div>
                  <h2>Specializations</h2>
                  <p>Front End Development</p>
                  <p>UI/UX Design</p>
                  <p>Copywriting</p>
                </div>
              </section>

              <div className={styles.avatar_div}>
                <img className={styles.avatar} src={profile.avatar}></img>
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
          <h2>Message</h2>
          {!hidden ? (
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
          )}
        </div>
        <div className={styles.section}>
          <h3>Their Portfolios</h3>
        </div>
        {/* <Carousel portfolio={portfolio} /> */}
        {portfolio.length >= 1 && (
          <section className={styles.slider}>
            <FaArrowAltCircleLeft
              className={styles.left_arrow}
              onClick={prevSlide}
            />
            <FaArrowAltCircleRight
              className={styles.right_arrow}
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
        <h2>Message</h2>
        {!hidden ? (
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
        )}
      </div>
      <div className={styles.section}>
        <h3>Their Portfolios</h3>
      </div>
      {/* <Carousel portfolio={portfolio} /> */}
      {portfolio.length >= 1 && (
        <section className={styles.slider}>
          <FaArrowAltCircleLeft
            className={styles.left_arrow}
            onClick={prevSlide}
          />
          <FaArrowAltCircleRight
            className={styles.right_arrow}
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

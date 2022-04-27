import styles from '../../styles/Profile.module.scss';
import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { firestore } from '../../firebase/clientApp';
import Image from 'next/image';
import PortfolioCarousel from './PortfolioCarousel';
import Carousel from '../Carousel';

export default function otherFreelanceProfile({ profile, portfolio }) {
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
  if (portfolio) {
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
                  <h2>Message</h2>
                  <p>Chat Now</p>
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
        <div className={styles.section}>
          <h3>Their Portfolios</h3>
        </div>
        {/* <PortfolioCarousel portfolio={portfolio} /> */}
        <Carousel portfolio={portfolio} />
      </main>
    );
  } else {
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
                  <h2>Message</h2>
                  <p>Chat Now</p>
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
      </main>
    );
  }
}

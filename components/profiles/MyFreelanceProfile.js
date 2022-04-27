import styles from '../../styles/Profile.module.scss';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../firebase/context';
import Image from 'next/image';
import Carousel from '../Carousel';
import Modal from '../Modal';
import Message from '../Message';

export default function freelanceProfile({
  avatar,
  username,
  description,
  portfolio,
}) {
  const { userData } = useContext(AuthContext);
  const [hidden, setHidden] = useState(true);
  // const portfolioMap = portfolio.map((x) => (
  //   <div>
  //     <div>
  //       <Image src={x.image} height={100} width={100}></Image>
  //     </div>
  //     <div>
  //       <div>{x.description}</div>
  //     </div>
  //   </div>
  // ));
  // console.log(portfolio)
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
              {/* <div>
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
                    <Message
                      profile={userData}
                      className={styles.messageContainer}
                    />
                  </div>
                ) : (
                  <button onClick={() => setHidden(!hidden)}>
                    {' '}
                    Send Message{' '}
                  </button>
                )}
              </div> */}
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

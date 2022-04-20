import Image from 'next/image';
import styles from '../../styles/Profile.module.scss';
import ProfilePic from '../../public/profile-hex.png';
// import Carousel from 'react-bootstrap/Carousel';
import Photo1 from '../../public/Photography1.png';
import Photo2 from '../../public/Photography2.jpeg';
import React, { useContext } from 'react';

import { AuthContext } from '../../firebase/context';
import { auth } from '../../firebase/clientApp';

export default function Profile() {

  const { userData } = useContext(AuthContext);
  
  return (
    <div>
      <div className={`${styles.container} ${styles.bg} text-center`}>
        <Image
          src={ProfilePic}
          className={`${styles.makeImageCircular}`}
        ></Image>
        <h3>{userData.username}</h3>
        <h3>Photographer/Videographer</h3>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>Description/About Me</h3>
        <p>
        {userData.description}
        </p>
      </div>
      <div>
        <div>
          {/* <Carousel>
            <Carousel.Item>
              <Image src={Photo1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image src={Photo2} alt="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
        </div>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>My Reviews</h3>
        <p>Lorem ipsum..</p>
      </div>
    </div>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Profile.module.css';
import ProfilePic from '../public/profile-hex.png';
import Carousel from 'react-bootstrap/Carousel';
import Photo1 from '../public/Photography1.png';
import Photo2 from '../public/Photography2.jpeg';

export default function Profile() {
  return (
    <div>
      <div className={`${styles.container} ${styles.bg} text-center`}>
        <Image
          src={ProfilePic}
          className={`${styles.makeImageCircular}`}
        ></Image>
        <h3>Name</h3>
        <h3>Photographer/Videographer</h3>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>Bio/About Me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex
        </p>
      </div>
      <div>
        <div>
          <Carousel>
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
          </Carousel>
        </div>
      </div>
      <div className={`${styles.container} ${styles.bg2} text-center`}>
        <h3>My Reviews</h3>
        <p>Lorem ipsum..</p>
      </div>
    </div>
  );
}

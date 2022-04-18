import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.css';
import Photo from '../public/ConnectingPeopleAbout.png';

export default function About() {
  return (
    <div>
      <main>
        <div className={`${styles.jumbotron} text-center`}>
          <h1>Content Connector</h1>
          <p>Helping Local Freelancers Connect with Local Businesses</p>
        </div>
        <div className={`${styles.container}`}>
          <div className={`${styles.aboutBody}`}>
            <div className={`col-sm-8`}>
              <h2>
                <strong>About Company Page</strong>
              </h2>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex
              </p>
            </div>
          </div>
          <div className={`col-sm-6`}>
            <Image src={Photo} />
          </div>
        </div>
        <div className={`${styles.container1} bg`}>
          <h2>Our Values</h2>
          <h4>
            <strong>MISSION:</strong> Our mission lorem ipsum..
          </h4>
          <div>
            <strong>VISION:</strong> Our vision Lorem ipsum..
          </div>
        </div>
      </main>
    </div>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div>
      <body>
        <div class="jumbotron text-center">
          <h1>Company</h1>
          <p>We specialize in ...</p>
        </div>
        <div class="container-fluid">
          <h2>About Company Page</h2>
          <h4>Lorem ipsum..</h4>
          <p>Lorem ipsum..</p>
        </div>
        <div class="container-fluid bg-grey">
          <h2>Our Values</h2>
          <h4>
            <strong>MISSION:</strong> Our mission lorem ipsum..
          </h4>
          <p>
            <strong>VISION:</strong> Our vision Lorem ipsum..
          </p>
        </div>
      </body>
    </div>
  );
}

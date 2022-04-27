import styles from '../styles/About.module.scss';
import { teampic } from '../public/Photography2.jpeg';
import Link from 'next/link';

export default function About() {
  return (
    <div className={`${styles.row}`}>
      <div className={`${styles.column}`}>
        <div className={`${styles.card}`}>
          <img className={`${styles.image}`} src={'ProfilePicJames.jpg'} alt="team picture" />
          <div className={`${styles.container}`}>
            <h2>James Murphy</h2>
            <p className={`${styles.title}`}>Developer</p>
            <p>Write Description here</p>
            <p>example@example.com</p>
            <p>
              <Link href="https://github.com/JamesMurphyy" target="_blank">
                <button className={`${styles.button}`}>Contact</button>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.column}`}>
        <div className={`${styles.card}`}>
          <img  className={`${styles.image}`} src={'IMG_1207.JPG'} alt="team picture" />
          <div className={`${styles.container}`}>
            <h2>Alex Gillespie</h2>
            <p className={`${styles.title}`}>Developer</p>
            <p>Write Description here</p>
            <p>example@example.com</p>
            <p>
              <Link href="https://github.com/alexgill97" target="_blank">
                <button className={`${styles.button}`}>Contact</button>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.column}`}>
        <div className={`${styles.card}`}>
          <img className={`${styles.image}`} src={'prince_8x8.jpeg'} alt="team picture" />
          <div className={`${styles.container}`}>
            <h2>Prince Requino</h2>
            <p className={`${styles.title}`}>Developer</p>
            <p>Write Description here</p>
            <p>example@example.com</p>
            <p>
              <Link href="https://github.com/princerequino" target="_blank">
                <button className={`${styles.button}`}>Contact</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

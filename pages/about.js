import styles from '../styles/About.module.scss';
import { teampic } from '../public/Photography2.jpeg';
import Link from 'next/link';

export default function About() {
  return (
    <div className={`${styles.row}`}>
      <div className={`${styles.column}`}>
        <div className={`${styles.card}`}>
          <img src={teampic} alt="team picture" />
          <div className={`${styles.container}`}>
            <h2>James Murphy</h2>
            <p className={`${styles.title}`}>Developer</p>
            <p>Angel Daddy~</p>
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
          <img src={teampic} alt="team picture" />
          <div className={`${styles.container}`}>
            <h2>Alex Gillespie</h2>
            <p className={`${styles.title}`}>Developer</p>
            <p>Ocean Eye Daddy~</p>
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
          <img src={teampic} alt="team picture" />
          <div className={`${styles.container}`}>
            <h2>Prince Requino</h2>
            <p className={`${styles.title}`}>Developer</p>
            <p>Legit Daddy~</p>
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

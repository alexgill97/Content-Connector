import styles from '../styles/slider.module.scss';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import React, { useState, useContext } from 'react';
import { firestore } from '../firebase/clientApp';
import { doc, deleteDoc } from 'firebase/firestore';
import { AuthContext } from '../firebase/context';

export default function Slider({ portfolio }) {
  const [current, setCurrent] = useState(0);
  const length = portfolio.length;
  const { currentUser } = useContext(AuthContext);

  const asyncFunction = async (e) => {
    await deleteDoc(doc(firestore, 'users', e.uid, 'portfolio', e.title)).then(() =>
      window.location.reload()
    );
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
    <section className={styles.slider}>
      <FaArrowAltCircleLeft className={styles.left_arrow} onClick={prevSlide} />
      <FaArrowAltCircleRight
        className={styles.right_arrow}
        onClick={nextSlide}
      />
      {portfolio.map((slide, index) => {
        return (
          <div
            className={
              index === current ? `${styles.slide_active}` : `${styles.slide}`
            }
            key={index}
          >
            {index === current && (
              <div>
                <img src={slide.image} alt="image" className={styles.image} />
                <div className={styles.description}>{slide.description}</div>
                {(currentUser === slide.uid) ? <button onClick={() => asyncFunction(slide)} className={styles.button}> Delete </button> : null}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

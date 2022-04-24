import React, { useEffect } from 'react';
import styles from '../../styles/profile_carousel.module.scss';
import PortfolioCarouselItem from './PortfolioCarouselItem';

const project = [
  'https://firebasestorage.googleapis.com/v0/b/content-connector-fb9f1.appspot.com/o/portfolio%2FNsVpH5INZdWfnxcBvu94JoU06LU2%2FScreen%20Shot%202022-04-22%20at%205.18.07%20PM.png?alt=media&token=ff453b5f-ae97-4a6d-85d9-86bfafabadfa',
  'https://firebasestorage.googleapis.com/v0/b/content-connector-fb9f1.appspot.com/o/portfolio%2FNsVpH5INZdWfnxcBvu94JoU06LU2%2FScreen%20Shot%202022-04-22%20at%205.18.34%20PM.png?alt=media&token=36d1c992-bab0-4fbf-8769-056a00a97e1b',
  'https://firebasestorage.googleapis.com/v0/b/content-connector-fb9f1.appspot.com/o/portfolio%2FNsVpH5INZdWfnxcBvu94JoU06LU2%2FScreen%20Shot%202022-04-22%20at%205.19.44%20PM.png?alt=media&token=b4471458-8fe5-4e8a-814a-0bbe76b839f8',
];

const PortfolioCarousel = ({ portfolio }) => {
  console.log(portfolio);

  return (
    <section className={styles.section}>
      <h3>PortfolioCarousel</h3>

      <div className={styles.card_container}>
        {portfolio.map(({ image, description }) => (
          <PortfolioCarouselItem image={image} description={description} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioCarousel;

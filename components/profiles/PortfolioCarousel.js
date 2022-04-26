import React, { useEffect } from 'react';
import styles from '../../styles/profile_carousel.module.scss';
import PortfolioCarouselItem from './PortfolioCarouselItem';

const PortfolioCarousel = ({ portfolio }) => {
  return (
    <section className={styles.section}>
      <div className={styles.card_container}>
        {portfolio.map(({ image, description, uid, title }) => (
          <PortfolioCarouselItem image={image} description={description} uid={uid} title={title} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioCarousel;

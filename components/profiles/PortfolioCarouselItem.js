import React, { useState } from 'react';
import styles from '../../styles/profile_carousel_item.module.scss';

const ProfileCarouselItem = ({ image, description }) => {
  return (
    <div className={styles.portfolio_item_container}>
      <div className={styles.image_container}>
        <img src={image} alt="" />
      </div>
      <div className={styles.info_container}>
        <h4>Starbucks</h4>
        <p className={styles.info_description}>{description}</p>
      </div>
    </div>
  );
};

export default ProfileCarouselItem;

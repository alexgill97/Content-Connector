import React, { useState } from 'react';
import styles from '../../styles/profile_carousel_item.module.scss';

const ProfileCarouselItem = ({ image }) => {
  return (
    <div className={styles}>
      <img src={image} alt="" />
    </div>
  );
};

export default ProfileCarouselItem;

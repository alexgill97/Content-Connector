import React from 'react';
import Image from 'next/image';

const tempData = {
  username: 'chik-fil-a',
};

export const InfoCard = ({
  avatar,
  postTitle,
  description,
  address,
  star,
  price,
  total,
  styles,
}) => {
  return (
    <div className={styles.info_card}>
      <div className={styles.info_card_image}>
        <Image src={avatar} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.info_card_info}>
        <h3>{postTitle}</h3>
        <div className={styles.info_card_right_title_empty}></div>
        <p>{description}</p>
        <p>{address}</p>
      </div>
    </div>
  );
};

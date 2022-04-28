import React from 'react';
import Image from 'next/image';
import Link from 'next/link' 

const tempData = {
  username: 'chik-fil-a',
};

export const InfoCard = ({
  uid,
  avatar,
  postTitle,
  description,
  address,
  styles,
}) => {
  return (
    <div className={styles.info_card}>
      <div className={styles.info_card_image}>
        <Link href={`/userProfile/${uid}`}>
          <Image src={avatar} layout="fill" objectFit="cover" />
        </Link>
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

import React from 'react';
import Image from 'next/image';

const PortfolioListItem = ({ image, description }) => {
  console.log('this is the image URL:', image);
  return (
    <div className={`${styles.container}`}>
      <div><Image src={image} /></div>
    </div>
  );
};

export default PortfolioListItem;

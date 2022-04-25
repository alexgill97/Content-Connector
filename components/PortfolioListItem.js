import React from 'react';
import Image from 'next/image';

const PortfolioListItem = ({ image, description }) => {
  return (
    <div className={`${styles.container}`}>
      <div><Image src={image} /></div>
    </div>
  );
};

export default PortfolioListItem;

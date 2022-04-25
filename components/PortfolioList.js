import React from 'react';

const PortfolioList = ({ portfolios }) => {
  const portfolioList = portfolios.map((portfolio) => (
    <PortfolioListItem
      key={portfolio.uid}
      image={portfolio.image}
      description={portfolio.description}
    ></PortfolioListItem>
  ));

  return (
    <div>
      <ul> {portfolioList}</ul>
    </div>
  );
};

export default PortfolioList;

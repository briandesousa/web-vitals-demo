import React from 'react';
import PortfolioImage from './common/PortfolioImage';

function OurWorkPage() {
  return (
    <React.Fragment>
      <h2>Our Work</h2>
      <p>Check out our latest creations.</p>
      <PortfolioImage src="images/backyard1.jpg" />
      <PortfolioImage src="images/backyard2.jpg" />
      <PortfolioImage src="images/backyard3.jpg" />
    </React.Fragment>
  );
}

export default OurWorkPage;

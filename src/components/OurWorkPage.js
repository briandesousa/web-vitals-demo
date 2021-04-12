import React from 'react';
import PortfolioImage from './common/PortfolioImage';

function OurWorkPage() {
  return (
    <section>
      <h2>Our Work</h2>
      <p>Check out our latest creations.</p>
      <PortfolioImage src="images/backyard1.jpg" alt="stairs leading down to pool" width="30%" renderDelay="3000" />
      <PortfolioImage src="images/backyard2.jpg" alt="garden with bushes" width="30%" renderDelay="2500" />
      <PortfolioImage src="images/backyard3.jpg" alt="pool chairs and garden" width="30%" renderDelay="2000"/>
      <PortfolioImage src="images/backyard4.jpg" alt="picnic area lit up at night" width="30%" renderDelay="1500"/>
      <PortfolioImage src="images/backyard5.jpg" alt="path leading to lake" width="30%" renderDelay="1000"/>
      <PortfolioImage src="images/backyard6.jpg" alt="planters in side yard" width="30%" renderDelay="500"/>
    </section>
  );
}

export default OurWorkPage;

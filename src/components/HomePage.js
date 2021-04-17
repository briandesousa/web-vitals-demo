import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

function HomePage() {

  const [contentLoaded, setContentLoaded] = useState(false);
  
  useEffect(() => {
    // simulate 4 second delay loading content asynchronously
    const timer = setTimeout(
      () => setContentLoaded(true), 
      4000
    );
    return () => clearTimeout(timer);
  }, [contentLoaded]);

  return (
    <section>
      <div className="welcome-content">
        <div className="welcome-text">
          <div className={`loading-indicator ${contentLoaded ? 'hidden' : ''}`}>
            Loading...
          </div>
          <div className={`${contentLoaded ? '' : 'hidden'}`}>
            <h2>Welcome backyard dweller!</h2>
            <p>Is your backyard in disarray?</p>
            <p>Do you peek over your neighbor's fence and think 'I wish I had that'?</p>
            <p>Are you tired of looking out your back window at the same old turf paradise?</p>
            <p>You have arrived at the right place. We here at Northern Getaway Backyward Solutions want to turn your vomit-inducing embarrassment of a backyard into the ultimate pandemic-era getaway.</p>
            <p>We will work with you to develop a masterful architectural plan to turn your dreams into reality. Then we will start to clear out the cob<strong>web</strong>s and re<strong>vital</strong>ize your backyard space.</p>
            <p>The best part is that we will only take a modest cut of all that cash you have managed to save up throughout the pandemic.</p>
            <p>Check out <Link to="/ourwork">our work</Link> to see it and believe it!</p>
          </div>
        </div>
        
      </div>
      
      
    </section>
  );
}

export default HomePage;

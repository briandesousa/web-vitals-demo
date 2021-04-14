import React, { useEffect, useState } from 'react';

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
      <div className={`loading-indicator ${contentLoaded ? 'hidden' : ''}`}>
        Loading...
      </div>
      <div className="welcome-content">
        <img src="images/backyard1.jpg" />
        <img src="images/backyard2.jpg" />
        <h2>Welcome backyard dweller!</h2>
        <div className={`${contentLoaded ? '' : 'hidden'}`}>
          <p>Is your backyard in disarray?</p>
          <p>Do you peek over your neighbor's fence and think 'I wish I had that'?</p>
          <p>Are you tired of looking out your back window at the same old turf paradise?</p>
          <p>You have arrived at the right place. We here at Northern Getaway Backyward Solutions want to turn your vomit-inducing embarrassment of a backyard into the ultimate pandemic-era getaway.</p>

        </div>
      </div>
      
      
    </section>
  );
}

export default HomePage;

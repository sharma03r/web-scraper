
import React from 'react';
import './LoadingScreen.css'; // Import your CSS file

const LoadingScreen = () => {
  return (
    <div className="loading-screen-container">
      <div className="orbit-container">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="orbit">
            <div className="orbit-planet"></div>
          </div>
        ))}
        <div className="central"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;

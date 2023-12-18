// LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="image-container">
        <img
          src="/path/to/your/stock-market-img.jpg"
          alt="Stock Market"
          className="stock-market-img"
        />
      </div>
      <div className="content-container">
        <h1>Welcome to Your Stock Market</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="buttons-container">
          <button className="sign-up-button">Sign Up</button>
          <button className="connect-button">Connect Us</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

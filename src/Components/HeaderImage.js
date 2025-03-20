import React from 'react';
import './HeaderImage.css';

const HeaderImage = () => {
  return (
    <div className="header-image">
      <img src="https://picsum.photos/1200/400" alt="DEV@Deakin Header" />
      <div className="header-text">
        <h1>Welcome to DEV@Deakin</h1>
        <p>Your hub for development resources and community</p>
      </div>
    </div>
  );
};

export default HeaderImage;
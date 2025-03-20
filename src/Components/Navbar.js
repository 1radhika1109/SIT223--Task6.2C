import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">DEV@Deakin</div>
      <input type="text" className="navbar-search" placeholder="Search..." />
      <div className="navbar-links">
        <button className="navbar-button">Post</button>
        <button className="navbar-button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;

// Navbar.js
import React from "react";
import './Navbar.css';

const Navbar = ({ onSelect }) => {
  return (
    <div className="navbar">
      <button onClick={() => onSelect('Popular')}>Popular</button>
      <button onClick={() => onSelect('Top Rated')}>Top Rated</button>
      <button onClick={() => onSelect('Upcoming')}>Upcoming</button>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://cdn.vectorstock.com/i/preview-1x/19/68/food-love-logo-template-design-emblem-vector-37131968.webp" alt="thsis logo" />
      </div>
      <div className="nav_item">
        <ul>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About us </Link>
            <Link to={'/contact'}>Contact us</Link>
            <Link to={'/cart'}>Cart</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

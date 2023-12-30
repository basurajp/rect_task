import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://imgs.search.brave.com/JwDJAowFqADU2GuBzH41q9TQxqalyCnj58jMW_KTx_s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzkxLzgyLzE0/LzM2MF9GXzkxODIx/NDg2XzhNZkxkVGVS/S3ZMZGFEdDdZVnIx/Z0pNbmp2VTFXaUFV/LmpwZw"
          alt=""
        />
      </div>
      <div className="nav_item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

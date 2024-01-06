import React from "react";

const NavBar = () => {
  return (
    <div className="max-w-screen-xl py-6 px-4  bg-red-200 mx-auto flex items-center justify-between ">
      <img
        className="w-[150px] "
        src="https://logolook.net/wp-content/uploads/2023/04/Swiggy-Logo.png"
        alt="logo"
      />

      <ul className="flex gap-4 text-xl font-medium">
        <li>Search</li>
        <li>Offers</li>
        <li>Help</li>
        <li>Sign In </li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default NavBar;

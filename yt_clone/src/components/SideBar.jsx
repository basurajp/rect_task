import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  

  if (!isMenuOpen) return null;

  return (
    <div className="w-56 h-screen pl-16 pt-4 shadow-lg">
      <ul className="mb-2 ">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr />
      <h2 className="my-2 font-semibold text-md">You</h2>
      <ul className="text-sm">
        <li>Your channel</li>
        <li>History</li>
        <li>Your Video</li>
        <li>Watch Later</li>
        <li>Show More</li>
      </ul>
      <hr />
      <h2 className="my-2 font-semibold text-md">Subscriptions</h2>
      <ul className="text-sm">
        <li>sherian</li>
        <li>chai and code</li>
      </ul>
    </div>
  );
};

export default SideBar;

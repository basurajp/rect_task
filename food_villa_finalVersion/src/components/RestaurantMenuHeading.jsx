import React, { useState } from "react";
import MenuItem from "./MenuItem";

const RestaurantMenuHeading = ({ menuitem ,toggle , setshowindex }) => {

  const HandleToggle = () => {
  
    setshowindex()
  };

  return (
    <div className="border-b-1 shadow-lg p-2">
      <div
        className="flex justify-between mt-2 pt-3 cursor-pointer "
        onClick={HandleToggle}
      >
        <h1 className="font-bold text-[18px]">
          {menuitem.card.card.title} ({menuitem.card.card.itemCards.length})
        </h1>
        <h2>⬇️</h2>
      </div>

      {toggle && <MenuItem menuitem={menuitem} />}
    </div>
  );
};

export default RestaurantMenuHeading;

import React from "react";
import SingleMenu from "./SingleMenu";

const MenuItem = ({ menuitem }) => {
  const { itemCards } = menuitem.card.card;

  return (
    <>
      {itemCards.map((singlemenuName,index) => (
        <SingleMenu singlemenuName ={singlemenuName} key={index} />
      ))}
    </>
  );
};

export default MenuItem;

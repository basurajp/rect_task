import { name } from "ejs";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utlis/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenuDetails = useRestrauntMenu(resId);



  if (resMenuDetails == null) return <Shimmer />;

  const { name } = resMenuDetails?.cards[0]?.card?.card?.info;
  const { cuisines } = resMenuDetails?.cards[0]?.card?.card?.info;
  const { locality } = resMenuDetails?.cards[0]?.card?.card?.info;

  const { cards } = resMenuDetails.cards[2].groupedCard.cardGroupMap.REGULAR;
  const { title } = cards[1].card.card;
  const { itemCards } = cards[1].card.card;

  return (
    <div className="w-full h-screen  mt-5">
      <div className="header">
        <h1 className="text-3xl font-semibold">{name} </h1>
        <h2 className="mt-1 text-zinc-500">{cuisines.join(" , ")}</h2>
        <h3 className="text-sm mt-1 text-zinc-500 ">{locality} </h3>
      </div>

      <div className="recommended mt-5">
        <h1 className="text-2xl font-bold">
          {title} ({itemCards.length})
        </h1>
        <ul className="mt-1">
          {itemCards.map((menu, index) => {
            console.log();
            return (
              <li className="w-[80%] bg-zinc-50 mb-2" key={menu.card.info.id}>
                {" "}
                {menu.card.info.name}{" "}
                <span className="font-semibold ml-4">
                  {" "}
                  $
                  {menu.card.info.price / 100 ||
                    menu.card.info.defaultPrice / 100}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

import { name } from "ejs";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utlis/useRestrauntMenu";
import RestaurantMenuHeading from "./RestaurantMenuHeading";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showindex, setshowindex] = useState(0);

  const resMenuDetails = useRestrauntMenu(resId);

  if (resMenuDetails == null) return <Shimmer />;

  const { name } = resMenuDetails?.cards[0]?.card?.card?.info;
  const { cuisines } = resMenuDetails?.cards[0]?.card?.card?.info;
  const { locality } = resMenuDetails?.cards[0]?.card?.card?.info;

  const { cards } = resMenuDetails.cards[2].groupedCard.cardGroupMap.REGULAR;
  // const { title } = cards[1].card.card;
  // const { itemCards } = cards[1].card.card;

  // console.log(cards);

  const menuDeatils = cards.filter((element) => {
    return (
      element.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  return (
    <div className="w-[70%] h-screen  m-auto pt-10 pl-10">
      <h1 className="text-3xl font-semibold">{name}</h1>
      <h2>{cuisines.join(",")}</h2>
      <h3>{locality}</h3>

      <div className="mt-8">
        {menuDeatils.map((item, index) => (
          <RestaurantMenuHeading
            key={index}
            toggle={index == showindex && true}
            menuitem={item}
            setshowindex={() => setshowindex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

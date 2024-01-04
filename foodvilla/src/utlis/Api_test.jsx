import React from "react";

const Api_test = () => {
  const fetch_data_for_cards = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8871281&lng=77.6554021&restaurantId=374909&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    // console.log(json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards)
    const JsonCardData =
      json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards;
    const filterCardData = JsonCardData.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(filterCardData);
  };
  return (
    <div>
      <button onClick={fetch_data_for_cards}>Click to fetch Data </button>
    </div>
  );
};

export default Api_test;

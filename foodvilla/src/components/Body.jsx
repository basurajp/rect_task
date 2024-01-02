import React, { useState } from "react";
import ResCard from "./ResCard";
import { res_Data } from "../utlis/contanst";
import { useEffect } from "react";

const Body = () => {
  const [res_state_data, set_res_state_data] = useState(res_Data);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8871281&lng=77.6554021&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   set_res_state_data(json.data.cards[2].data.data.data.cards);
  // };

  let filterRating = () => {
    set_res_state_data((prev_res_data) => {
      return prev_res_data.filter((item) => {
        return item.info.avgRating > 4;
      });
    });
  };

  return (
    <div className="body">
      <div className="search">search</div>
      <button onClick={filterRating}>Top Rated Restaurant </button>
      <div className="res_container">
        {res_state_data.map((item, index) => (
          <ResCard item={item} key={item.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import React, { useState } from "react";
import ResCard, { withPromotedLabel } from "./ResCard";
import { res_Data } from "../utlis/contanst";

const Body = () => {
  const [res_state_data, set_res_state_data] = useState(res_Data);

  const RestaurantCardPromoted = withPromotedLabel(ResCard);

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
        {res_state_data.map((item, index) =>
          // if the restaurant is promoted then add a promoted label to it
          item.info.promoted ? (
            <RestaurantCardPromoted item={item} key={item.info.id} />
          ) : (
            <ResCard item={item} key={item.info.id} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;

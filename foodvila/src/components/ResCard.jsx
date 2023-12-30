import React from "react";

const ResCard = ({item}) => {
  return (
    <div className="res_card">
      <img
        src={item.info.image.url}
        alt=""
      />
      <h4>{item.info.name}</h4>

      <h5>
        Rating {item.info.rating.aggregate_rating}
      </h5>

      <h6>adress btm layout </h6>
    </div>
  );
};

export default ResCard;

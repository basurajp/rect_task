import React from "react";
import { img_link } from "../utlis/contanst";

export const ResCard = ({ item }) => {
  return (
    <div className="res_card">
      <img src={img_link + item.info.cloudinaryImageId} alt="" />

      <h3>{item.info.name} </h3>
      <h4 className="cusine">{item.info.cuisines}</h4>
      <h4>
        {`Rating ${item.info.avgRating}`}{" "}
        <span>{item.info.sla.deliveryTime + " " + "mins"}</span>{" "}
      </h4>
      <h5>{item.info.locality}</h5>
    </div>
  );
};

export default ResCard;

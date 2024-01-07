import React from "react";
import { imageUrl } from "../utlis/constant";

const Card = ({ res }) => {
  const imageId = res?.info?.cloudinaryImageId;
  


  return (
    <div className="h-80 w-[18%] bg-gray-300 p-2 mb-5 rounded-md overflow-hidden">
      <img
        className="w-full h-[60%] object-cover rounded-md "
        src={`${imageUrl}${imageId}`}
        alt=""
      />
      <h2 className="overflow-hidden font-semibold">{res?.info?.name}</h2>
      <h4>
        Star {res.info.avgRating} <span>{res.info.sla.deliveryTime}min </span>
      </h4>
      <h5 className="overflow-hidden">{res.info.cuisines.join()}</h5>
      <h6 className="overflow-hidden">{res.info.locality}</h6>
    </div>
  );
};

export default Card;

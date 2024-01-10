import React from "react";
import { imageUrl } from "../utlis/constant";
import { Link } from "react-router-dom";

const Card = ({ res, id }) => {
  const imageId = res?.info?.cloudinaryImageId;

  return (
    <Link
      to={`/restaurant/${id}`}
      className="h-80 w-[18%] bg-gray-300 p-2 mb-5 rounded-md overflow-hidden"
    >
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
    </Link>
  );
};

// higher order components

// input - Card  => cardwithOpenRes

export const withOpenLabel = (Card) => {
  return (res) => {
    return (
      <>
        <label className="px-3 py-1 bg-black text-white font-semibold absolute top-2 rounded-lg ml-2 mt-16 ">
          Open
        </label>
        <Card {...res} />
      </>
    );
  };
};

export default Card;

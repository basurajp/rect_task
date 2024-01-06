import React from "react";
import { image_link } from "../utlis/constant";

const Single_Card = ({ each_card }) => {
//   console.log(each_card.imageId);
  return (
    <div className="h-[180px] w-[144px] bg-zinc-100 m-2 flex-shrink-0">
      <img
        className="w-full h-full"
        src={`${image_link}${each_card.imageId}`}
        alt="image"
      />
    </div>
  );
};

export default Single_Card;

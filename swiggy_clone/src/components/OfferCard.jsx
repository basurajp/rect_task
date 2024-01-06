import React from "react";
import SingleOfferCard from "./SingleOfferCard";

const OfferCard = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Best offers for you</h2>
      <div className="w-full h-64 bg-slate-400 p-4 overflow-y-auto ">
        <div className="bg-red-300 flex flex-wrap">
          <SingleOfferCard />
          <SingleOfferCard />
          <SingleOfferCard />
          <SingleOfferCard />
        </div>
      </div>
    </>
  );
};

export default OfferCard;

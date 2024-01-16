import React from "react";

const Stripe = ({elem}) => {

  return (
    <div className="w-[16.66%]  px-4 py-3 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] flex justify-between font-semibold border-zinc-600 mt-32">
      
      <img src={elem.url} alt="" />
      <span>{elem.number}</span>
    </div>
  );
};

export default Stripe;

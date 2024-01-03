import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-[70%] h-full  m-auto p-[10%] flex    ">
      <img
        className="h-[80%] w-[50%] object-contain mr-5"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg "
        alt=""
      />
      <div className="content flex flex-col justify-center  ">
        <h1 className="text-3xl">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        </h1>
        <h3 className="text-gray-400 mt-2">mens clothing </h3>
        <h2 className="text-red-400 mt-2"> $109</h2>
        <p className="font-semibold">
          "Your perfect pack for everyday use and walks in the forest. Stash
          your laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <div className="flex gap-4 mt-3">
        <Link className=" py-3 px-5 rounded border-blue-500 bg-red-400 text-white font-semibold" >Edit</Link>
        <Link  className=" py-3 px-5 rounded border-blue-500 bg-red-400 text-white font-semibold">Delete</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;

import React from "react";
import ResCard from "./ResCard";
import { restaurantData } from "../utlis/mockData";

const Body = () => {
  


  return (
    <>
      <div className="res-conatiner ">
        {
            restaurantData.map((item , index)=> <ResCard item = {item} key={item.info.resId}/>)
        }
        
      </div>
    </>
  );
};

export default Body;

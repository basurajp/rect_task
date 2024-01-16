import React from "react";

const Videocard = ({elem}) => {
    
  return (
    <div className="shadow-xl mt-3 ml-2 p-1">
      <img
        className="h-[180px] w-[290px]  rounded-xl p-1"
        src={elem.snippet.thumbnails.high.url}
        alt="thumnail"
      />
      <h1 className="font-medium w-[290px]"> {elem.snippet.title } </h1>
      <h2>{elem.snippet.channelTitle}</h2>
      <span>{elem.statistics.viewCount} views </span> 
    </div>
  );
};

export default Videocard;

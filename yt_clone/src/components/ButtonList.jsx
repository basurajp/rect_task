import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const btnData = [
    "All",
    "Live",
    "JavaScript",
    "Music",
    "TamilCinema",
    "NEET",
    "IndianMusic",
    "RecentlyUploaded ",
    "Watched",
    "new to you ",
  ];
  return (
    <div className="w-full h-12 flex items-center gap-2 pl-2">
      {btnData.map((item, index) => (
        <Button key={index} btnData={item} />
      ))}
    </div>
  );
};

export default ButtonList;

import React from "react";
import Single_Card from "./Single_Card";
import { useEffect } from "react";
import { data } from "../utlis/mock_data";

const Mind_item = () => {
  const { title } = data.data.cards[0].card.card.header;
  const { info } = data.data.cards[0].card.card.imageGridCards;

  return (
    <>
      <h1 className="text-2xl font-semibold px-7">{title}</h1>

      <div className="  h-64 bg-zinc-400 p-4  overflow-x-auto">
        <div className="flex flex-no-wrap  ">
          {info.map((each_card, index) => (
            <Single_Card each_card={each_card} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Mind_item;

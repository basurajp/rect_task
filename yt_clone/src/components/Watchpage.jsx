import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const Watchpage = () => {
  const dispatch = useDispatch();

  const [search] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-full">
      <div className="px-10 py-2 flex w-full bg-red-100">
        <div className="w-full">
          <iframe
            width="850"
            height="450"
            src={`https://www.youtube.com/embed/${search.get("v")}`}
            title="The Legend of Hanuman (Hanuman Chalisa) | Kaala Bhairava"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full h-[450px] bg-zinc-100 border border-black ml-2 p-2">
          <LiveChat />
        </div>
      </div>

      <CommentContainer />
    </div>
  );
};

export default Watchpage;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";

const Watchpage = () => {
  const dispatch = useDispatch();

  const [search] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-10 py-2">
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
  );
};

export default Watchpage;

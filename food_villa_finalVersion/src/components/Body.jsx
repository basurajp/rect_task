import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resData, setresData] = useState([]);
  const [searchText, setsearchText] = useState("");
  // const [filterRes, setfilterRes] = useState([]);

  // console.log("Body Render", Math.random());

  const filterData = () => {
    setresData((prev) => {
      return prev.filter((res) => {
        return res.info.avgRating > 4.1;
      });
    });
  };

  const fetchData = async () => {
    try {
      const apiData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8870305&lng=77.66077109999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await apiData.json();
      // console.log(
      //   json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      // );

      const { restaurants } =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle;

      setresData(restaurants);
      // setfilterRes(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);

  if (resData.length === 0) return <Shimmer />;

  return (
    <>
      <div className="btn-boxes flex gap-3">
        <div className="search">
          <input
            className="ml-2 mb-2 px-3 py-1 "
            // type="text"
            // placeholder="Enter Restaurant  Name "
            // value={searchText}
            // onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-3 py-2 bg-green-400 text-white  font-semibold rounded-lg ml-2"
            // onClick={() => {
            // const filterResData =  resData.filter(res => res.info.name.tolowerCase().includes(searchText.toLowerCase())
            
            // setfilterRes(filterResData)
            // }}
          >
            Search
          </button>
        </div>
        <button
          onClick={filterData}
          className="px-3 py-2 bg-green-400 text-white  font-semibold rounded-lg ml-2"
        >
          Filter best-rated restaurant
        </button>
      </div>

      <div className="w-full  h-[90%] flex gap-6 flex-wrap p-2">
        {resData.map((res, index) => (
          <Card res={res} key={index} />
        ))}
      </div>
    </>
  );
};

export default Body;

import React, { useContext, useEffect, useState } from "react";
import Card, { withOpenLabel } from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UseResData from "../utlis/UseResData";
import useOnlineStatus from "../utlis/useOnlineStatus";
import { userNameContext } from "../utlis/Context";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  const CardWithOpen = withOpenLabel(Card);

  const filterData = () => {
    // Filter restaurants with avgRating greater than 4.1
    const filteredData = resData.filter((res) => res.info.avgRating > 4.1);
    setFilteredRes(filteredData);
  };

  const resData = UseResData();

  const [userName, setUserName] =useContext(userNameContext)

  // console.log(resData[0].)
  // const fetchData = async () => {
  //   try {
  //     const apiData = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8870305&lng=77.66077109999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );

  //     const jsonData = await apiData.json();
  //     const { restaurants } =
  //       jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle;

  //     setResData(restaurants);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleSearch = () => {
    // Filter restaurants based on search text
    const filteredData = resData.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRes(filteredData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Looks like your are Offline check Your internet </h1>;

  if (resData.length === 0) return <Shimmer />;

  return (
    <>
      <div className="btn-boxes flex gap-3">
        <div className="search">
          <input
            className="ml-2 mb-2 px-3 py-1"
            type="text"
            placeholder="Enter Restaurant Name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-3 py-2 bg-green-400 text-white font-semibold rounded-lg ml-2"
            onClick={handleSearch}
          >
            Search
          </button>
          <input
            className="ml-2 mb-2 px-3 py-1"
            type="text"
            placeholder="Enter Restaurant Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <button
          onClick={filterData}
          className="px-3 py-2 bg-green-400 text-white font-semibold rounded-lg ml-2"
        >
          Filter best-rated restaurants
        </button>
      </div>

      <div className="w-full h-[90%] flex gap-6 flex-wrap p-2 relative">
        {/* Use filteredRes if available, otherwise use resData */}
        {(filteredRes.length > 0 ? filteredRes : resData).map((res, index) =>
          res.info.isOpen ? (
            <CardWithOpen res={res} id={res.info.id} key={res.info.id} />
          ) : (
            <Card res={res} id={res.info.id} key={res.info.id} />
          )
        )}
      </div>
    </>
  );
};

export default Body;

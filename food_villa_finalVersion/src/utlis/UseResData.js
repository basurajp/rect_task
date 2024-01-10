import React, { useEffect, useState } from 'react'

const UseResData = () => {
    const [resData, setResData] = useState([]);

    const fetchData = async () => {
        try {
          const apiData = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8870305&lng=77.66077109999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
    
          const jsonData = await apiData.json();
          
          
          const { restaurants } =
            jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
          // console.log(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle)
    
          setResData(restaurants);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);

   return resData 
}

export default UseResData

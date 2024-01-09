import React, { useState } from 'react'
import { useEffect } from 'react'

const useRestrauntMenu = (resId) => {
  const [resMenuDetails, setresMenuDetails] = useState(null);


useEffect(()=>{
    fetchData()
},[])

const fetchData = async () => {
    const menu_data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8870305&lng=77.66077109999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const { data } = await menu_data.json();
    setresMenuDetails(data);
  };



    return resMenuDetails 
}

export default useRestrauntMenu

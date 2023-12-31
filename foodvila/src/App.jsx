import React, { useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { fetchData } from "./utlis/mockData";

const App = () => {
  useEffect(fetchData);
  return (
    <div className="main_conatiner">
      <Header />
      <Body />
    </div>
  );
};

export default App;

import React from "react";
import NavBar from "./components/NavBar";
import Mind_item from "./components/Mind_item";
import OfferCard from "./components/OfferCard";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 p-6">
      <NavBar />
      <OfferCard />
      {/* <Mind_item /> */}
    </div>
  );
};

export default App;

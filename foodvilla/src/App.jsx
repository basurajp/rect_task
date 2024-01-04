import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Api_test from "./utlis/Api_test";

const App = () => {
  return (
    <div className="app">
      <Api_test />
      <Header />
     <Outlet />
    </div>
  );
};



export default App;

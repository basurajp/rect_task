import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="app">
      <Header />
     <Outlet />
    </div>
  );
};



export default App;

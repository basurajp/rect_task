import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import Restaurantmenu from "./components/Restaurantmenu.jsx";

 


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {path: "/",
      element: <Body />,},
      {
        path: "/home",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Contact />,
      },
      {
        path:'/restaurant/:resId',
        element: <Restaurantmenu/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { lazy } from "react";
import Context from "./utlis/Context.jsx";
import { Provider } from "react-redux";
import appStore from "./utlis/appStore.js";
import Cart from "./components/Cart.jsx";

const GroceryHome = lazy(() => import("./components/grocery/GroceryHome.jsx"));
const About = lazy(() => import("./components/About.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading........</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading........</h1>}>
            <GroceryHome />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      {path:'/cart' ,element: <Cart/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <Context>
      <RouterProvider router={appRouter} />
    </Context>
  </Provider>
);

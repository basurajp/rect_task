import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainConatiner from "./components/MainContainer";
import Watchpage from "./components/Watchpage";
import Demo from "./components/Demo";

const App = () => {
  const appRouter = createBrowserRouter([{ path: "/", element: <Body />,
children:[
  {
    path:'/',
    element: <MainConatiner/>
  },
  {
    path:'/watch',
    element: <Watchpage/>
  },
  {
    path:'/demo',
    element: <Demo/>
  }
]

}]);

  return (
    <div className="w-full h-screen ">
      <Head />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;

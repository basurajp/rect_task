import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Link
        to={"/details/1"}
        className="w-[85%] h-[full]  p-10 pt-[5%] flex flex-wrap overflow-y-auto overflow-x-hidden"
      >
        <div className="card p-3 border shadow rounded w-[18%] h-[30vh] flex justify-center items-center flex-col mr-3 mb-3 ">
          <div
            className="image_div w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
          ></div>
          <h1 className="hover:text-blue-400">Lorem ipsum dolor sit amet.</h1>
        </div>
      </Link>
    </>
  );
};

export default Home;

import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { productsContext } from "../utlis/Context";
import Loading from "./Loading";

const Home = () => {
  const [products, setproducts] = useContext(productsContext);
  

  return products ? (
    <>
      <Navbar />

      <div className="w-[85%] h-[full]  p-10 pt-[5%] flex flex-wrap overflow-y-auto overflow-x-hidden">
        {products.map((p, i) => {
          return (
            <Link key={p.id}
              to={`/details/${p.id}`}
              className="card p-3 border shadow rounded w-[18%]  flex justify-center items-center flex-col mr-3 mb-3 "
            >
              <div
                className="image_div w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110"
                style={{
                  backgroundImage:
                    `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-400 text-[10px] leading-none">
               {p.title}
              </h1>
            </Link>
          );
        })}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;

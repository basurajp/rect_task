import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utlis/Context";
import Loading from "./Loading";
import instance from "../utlis/axios";

const Home = () => {
  const [product] = useContext(ProductContext);
  const { search } = useLocation();

  const category = decodeURIComponent(search.split("=")[1]);

  const [filterProducts, setfilterProducts] = useState(null);

  const getProducCategory = async () => {
    try {
      const { data } = await instance(`/products/category/${category}`);
      setfilterProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filterProducts || category =='undefined') setfilterProducts(product);
    if (category != "undefined") getProducCategory();
  }, [category,product]);

  console.log(filterProducts);

  return product ? (
    <>
      <Nav />
      <div className="h-full w-[85%]  p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filterProducts &&
          filterProducts.map((p, i) => (
            <Link
              key={i}
              to={`/details/${p.id}`}
              className="card p-5 rounded border shadow w-[18%] h-[45vh] flex justify-center items-center  flex-col mr-3 mb-3"
            >
              <div
                className="image_conatner w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-500">{p.title} </h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;

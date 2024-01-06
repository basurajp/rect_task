import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../utlis/Context";
import instance from "../utlis/axios";
import Loading from "./Loading";

const Details = () => {
  // const [product] = useContext(ProductContext);
  const { id } = useParams();
  const [singleProduct, setsingleProduct] = useState(null);

  const getSingleproduct = async () => {
    try {
      const { data } = await instance(`/products/${id}`);
      setsingleProduct(data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getSingleproduct();
  }, []);

  return singleProduct ? (
    <div className="w-[85%] h-full  m-auto p-[10%] flex ">
      <img
        className="object-contain h-[80%] w-[50%]"
        src={`${singleProduct.image}`}
        alt=""
      />
      <div className="content  h-[80%] flex flex-col justify-end ml-6 gap-1 ">
        <h1 className="text-4xl">{singleProduct.title}</h1>
        <h3 className="text-zinc-400 my-1">{singleProduct.category}</h3>
        <h2>$ 109.3</h2>
        <p>{singleProduct.description}</p>
        <div className="btn flex gap-2">
          <Link className="px-5 py-2 border border--200 text-blue-300 rounded text-sm">
            Edit
          </Link>
          <Link className="px-5 py-2 border border-blue-200 text-red-300 rounded text-sm">
            Delete
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;

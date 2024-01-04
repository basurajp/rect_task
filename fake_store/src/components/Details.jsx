import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "../utlis/axios";
import Loading from "./Loading";

const Details = () => {
const [product, setproduct] = useState(null)

  const { id } = useParams();
  console.log(id);

  const getsingleProduct = async () => {
    try {
      const {data} = await instance(`/products/${id}`);
      setproduct(data)
  
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingleProduct();
  }, []);



  return product ?  (
    <div className="w-[70%] h-full  m-auto p-[10%] flex    ">
      <img
        className="h-[80%] w-[50%] object-contain mr-5"
        src={`${product.image}`}
        alt=""
      />
      <div className="content flex flex-col justify-center  ">
        <h1 className="text-3xl">
         {product.title}
        </h1>
        <h3 className="text-gray-400 mt-2">{product.category} </h3>
        <h2 className="text-red-400 mt-2"> { '$'+product.price}</h2>
        <p className="font-semibold">
         {product.description}
        </p>
        <div className="flex gap-4 mt-3">
          <Link className=" py-3 px-5 rounded border-blue-500 bg-red-400 text-white font-semibold">
            Edit
          </Link>
          <Link className=" py-3 px-5 rounded border-blue-500 bg-red-400 text-white font-semibold">
            Delete
          </Link>
        </div>
      </div>
    </div>
  ) : <Loading />
};

export default Details;

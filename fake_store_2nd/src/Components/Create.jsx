import React from "react";
import { useState } from "react";
import { ProductContext } from "../utlis/Context";
import { useContext } from "react";
import { nanoid } from "nanoid";

const Create = () => {
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const [product, setProduct] = useContext(ProductContext);

  const addProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 2 ||
      description.trim().length < 5
    ) {
      alert("Each feild mustbe added and least 4 charcter  ");
      return
    }

    const products = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setProduct([...product, products]);
  };

  console.log(product);
  return (
    <form
      onSubmit={addProductHandler}
      className="p-[5%] w-screen h-screen flex flex-col items-center "
    >
      <h1 className="text-3xl w-1/2 mb-3">Add New Product</h1>
      <input
        type="text"
        placeholder="title"
        className="text-3xl bg-zinc-100 rounded p-3 w-1/2 mb-3  "
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        type="url"
        placeholder="url"
        className="text-3xl bg-zinc-100 rounded p-3 w-1/2 mb-3  "
        value={image}
        onChange={(e) => setimage(e.target.value)}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="categeory"
          className="text-3xl bg-zinc-100 rounded p-3 w-[48%] mb-3  "
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          className="text-3xl bg-zinc-100 rounded p-3 w-[48%] mb-3  "
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
      </div>
      <textarea
        className="text-3xl bg-zinc-100 rounded p-3 w-1/2 mb-3  "
        placeholder="Enter the product descripton "
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        rows="10 "
      ></textarea>
      <div className="w-1/2">
        <button className="px-5 py-3 border border-blue-200 text-blue-500 rounded text-sm">
          Add new Product
        </button>
      </div>
    </form>
  );
};

export default Create;

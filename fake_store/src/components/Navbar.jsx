import React, { useContext } from "react";
import { productsContext } from "../utlis/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [products] = useContext(productsContext);

  let distintCategory =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  distintCategory = [...new Set(distintCategory)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };



  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center  pt-5">
      <a
        href="/create"
        className=" py-3 px-5 rounded border-blue-500 bg-red-400 text-white font-semibold"
      >
        Add New Product{" "}
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl font-bold mb-3 w-[80%] ">Categeory Filter </h1>
      <div className=" w-[80%] flex justify-center flex-col">
        {distintCategory.map((c, i) => (
          <Link to={`/?category=${c}`} className="mb-3 flex items-center ">
            <span
              style={{ backgroundColor: color() }}
              className="span w-4 h-4  mr-2 rounded-full inline-block"
            ></span>
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

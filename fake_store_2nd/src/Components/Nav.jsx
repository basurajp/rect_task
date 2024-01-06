import React from "react";
import { useContext } from "react";
import { ProductContext } from "../utlis/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [product] = useContext(ProductContext);

  let distinct_category =
    product && product.reduce((acc, cv) => [...acc, cv.category], []);

  distinct_category = [...new Set(distinct_category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };

  return (
    <>
      <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
        <a
          href="/create"
          className="px-5 py-3 border border-blue-200 text-blue-300 rounded text-sm"
        >
          Add new Product
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="font-medium text-[20px] w-[80%] mb-3">
          Categeory Filter
        </h1>
        <div className=" w-[80%]">
          {distinct_category.map((c, i) => (
            <Link
              to={`/?category=${c}`}
              className="mb-3 flex items-center "
              key={i}
            >
              <span
                style={{
                  backgroundColor: `${color()}`,
                }}
                className={`w-[15px] h-[15px]  rounded-full mr-1 `}
              ></span>
              {c}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;

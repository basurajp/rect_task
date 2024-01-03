import React from "react";

const Navbar = () => {
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
      <ul className=" w-[80%] flex justify-center flex-col">
        <li className="mb-3 flex items-center ">
          <span className="span w-4 h-4 bg-red-300 mr-2 rounded-full inline-block"></span>
          Cat 1
        </li>
        <li className="mb-3 flex items-center ">
          <span className="span w-4 h-4 bg-green-300 mr-2 rounded-full inline-block"></span>
          Cat 1
        </li>
        <li className="mb-3 flex items-center ">
          <span className="span w-4 h-4 bg-blue-300 mr-2 rounded-full inline-block"></span>
          Cat 1
        </li>
        <li className="mb-3 flex items-center ">
          <span className="span w-4 h-4 bg-zinc-300 mr-2 rounded-full inline-block"></span>
          Cat 1
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

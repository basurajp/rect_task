import React, { useState } from "react";

function Header() {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="nav_item w-full h-[20%]  flex items-center justify-between  ">
      <img
        className="w-[20% h-[90%]"
        src="https://imgs.search.brave.com/bW6WuMMz8C5ZEtBWeMxJuTKHmDIM4yZJS_E5xdbdjnU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzkxLzgyLzE0/LzM2MF9GXzkxODIx/NDg2XzhNZkxkVGVS/S3ZMZGFEdDdZVnIx/Z0pNbmp2VTFXaUFV/LmpwZw"
        alt="this is logo"
      />
      <div>
        <ul className="flex font-semibold mr-5 gap-7 ">
          <li className="hover:text-red-500">Home</li>
          <li className="hover:text-red-500">About </li>
          <li
            className="hover:text-red-500 
          "
          >
            Cart
          </li>
          <button
            className={`0 ${
              btnName === "Login" ? "bg-green-500" : "bg-red-500"
            }  text-white p-2  rounded-lg`}
            onClick={() =>
              setbtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;

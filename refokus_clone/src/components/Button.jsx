import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className="min-w-60 px-5 py-2 bg-zinc-100  text-black rounded-full text-sm flex items-center justify-between">
      <span className="font-medium">Get Started</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;

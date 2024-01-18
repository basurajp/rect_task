import React, { useState } from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);

  const { register, handleSubmit, reset } = useForm();

  const handleData = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="">
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg image"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-zinc-900 w-96 px-10 py-20  rounded-md">
            <form onSubmit={handleSubmit(handleData)}>
              <h1 className="text-2xl font-semibold mb-5 text-white">
                {isSignIn ? "Sign In" : "Sign Up"}
              </h1>

              {!isSignIn && (
                <input
                  {...register("fullName", { required: true })}
                  type="text"
                  placeholder="Enter Full name "
                  className="w-full h-12 rounded-md pl-2 outline-none bg-zinc-300 mb-4  "
                />
              )}
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="Email "
                className="w-full h-12 rounded-md pl-2 outline-none bg-zinc-300  "
              />
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
                className="w-full mt-4 h-12 rounded-md pl-2 outline-none bg-zinc-300   "
              />
              <button
                type="submit"
                className="w-full bg-red-800 text-white font-bold py-3 mt-4 rounded-md  "
              >
                {isSignIn ? "Sign In " : "Sign up"}
              </button>
              <p className="text-white mt-4 ">
                {isSignIn ? "New to Netflix" : "Already a user ?"}
                <span
                  onClick={() => setisSignIn(!isSignIn)}
                  className="font-semibold ml-2 cursor-pointer"
                >
                  {isSignIn ? "Sign up now" : "Sign In "}{" "}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

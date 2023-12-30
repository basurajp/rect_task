import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <>
      <nav className="flex justify-center gap-4 mt-5 ">
        <Link
          className="bg-red-400 py-1 px-3 rounded-lg text-white font-semibold"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="bg-red-400 py-1 px-3 rounded-lg text-white font-semibold"
          to={"/about"}
        >
          About
        </Link>
        <Link
          className="bg-red-400 py-1 px-3 rounded-lg text-white font-semibold"
          to={"/user"}
        >
          User
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
};

export default App;

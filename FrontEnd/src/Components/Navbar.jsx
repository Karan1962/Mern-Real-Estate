import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-around items-center h-[10vh] bg-slate-200 shadow-sm shadow-slate-400">
      <div className="font-bold text-lg sm:text-2xl">
        <Link to="/">
          <span className="text-neutral-400 ">Only</span>Estate
        </Link>
      </div>

      <form className="flex h-[6vh] items-center justify-center w-32 sm:w-72 bg-white rounded-md">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 bg-transparent focus:outline-none w-[70%] sm:w-[85%]"
        />
        <div className="flex justify-center items-center w-[30%] sm:w-[15%]">
          <FaSearch />
        </div>
      </form>

      <div className="flex justify-evenly sm:w-[30%] text-xs sm:text-base sm:font-normal">
        <Link to="/About" className="hidden sm:inline hover:text-neutral-400 hover:scale-105">
          About
        </Link>
        <Link to="/signup" className="hidden sm:inline hover:text-neutral-400 hover:scale-105">
          Sign Up
        </Link>

        <Link to="/Login" className="hover:text-neutral-400 hover:scale-105">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

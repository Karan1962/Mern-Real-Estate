import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-slate-200 shadow-sm shadow-slate-400">
      <nav className="flex px-3 justify-between items-center max-w-6xl m-auto h-[10vh]">
        <div className="font-bold text-lg text-slate-700 sm:text-2xl">
          <Link to="/">
            <span className="text-neutral-400 ">Only</span>Estate
          </Link>
        </div>

        <form className="flex h-[6vh] items-center justify-center w-28 sm:w-72 bg-white rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 bg-transparent focus:outline-none w-[70%] sm:w-[85%]"
          />
          <div className="flex justify-center items-center w-[30%] sm:w-[15%] cursor-pointer">
            <FaSearch />
          </div>
        </form>

        <div className="flex justify-evenly sm:w-[30%] text-xs sm:text-base sm:font-normal">
          <Link
            to="/About"
            className="hidden sm:inline hover:text-neutral-400 hover:scale-105"
          >
            About
          </Link>
          <Link
            to="/signup"
            className="hidden sm:inline hover:text-neutral-400 hover:scale-105"
          >
            Sign Up
          </Link>

          <Link to="/Login" className="hover:text-neutral-400 hover:scale-105">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
